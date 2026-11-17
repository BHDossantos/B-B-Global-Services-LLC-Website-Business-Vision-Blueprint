const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const path = require('node:path');

// Run the real component handlers with isolated hooks/transports. No contact
// data leaves the test; the actual scoring/catalog modules are loaded below.
function assessment(accept = true) {
  const states = [], requests = [], cache = new Map();
  let cursor = 0;
  const react = { ...require('react'),
    useState(initial) {
      const slot = cursor++;
      if (!(slot in states)) states[slot] = initial;
      return [states[slot], value => { states[slot] = typeof value === 'function' ? value(states[slot]) : value; }];
    },
    useMemo: fn => fn(),
  };
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const exports = {};
    const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
    }).outputText;
    vm.runInNewContext(source, { exports, URLSearchParams,
      FormData: class { entries() { return Object.entries({ name: 'Test', email: 'visitor@example.test' }); } },
      fetch: async (url, options) => { requests.push({ url, options }); return { ok: accept, json: async () => ({ error: 'Intake unavailable' }) }; },
      require(name) {
        if (name === 'react') return react;
        if (name === 'next/link') return { default: 'a' };
        if (name.endsWith('/Icon') || name === './Icon') return { Icon: () => null };
        if (name.startsWith('@/') || name.startsWith('.')) {
          let dest = name.startsWith('@/') ? path.resolve(name.slice(2)) : path.resolve(path.dirname(file), name);
          dest += fs.existsSync(dest + '.ts') ? '.ts' : '.tsx';
          return load(dest);
        }
        return require(name);
      },
    });
    cache.set(file, exports);
    return exports;
  }
  const { AssessmentTool } = load(path.resolve('components/AssessmentTool.tsx'));
  function render() { cursor = 0; return AssessmentTool(); }
  function nodes(tree) {
    if (!tree || typeof tree !== 'object') return [];
    return [tree, ...[].concat(tree.props?.children ?? []).flat(Infinity).flatMap(nodes)];
  }
  function text(tree) {
    if (typeof tree === 'string' || typeof tree === 'number') return String(tree);
    return [].concat(tree?.props?.children ?? []).flat(Infinity).map(text).join('');
  }
  return { requests, render, text, nodes,
    button(label) { return nodes(render()).find(n => n.type === 'button' && text(n).includes(label)); },
    finish() {
      const { assessmentQuestions } = load(path.resolve('lib/content/assessment.ts'));
      for (const q of assessmentQuestions) this.button(q.options[0].label).props.onClick();
    },
  };
}

test('all answers reveal results without contact data or an intake request', () => {
  const a = assessment(); a.finish();
  assert.match(a.text(a.render()), /Your maturity by area/);
  assert.equal(a.requests.length, 0);
  a.button('Review my answers').props.onClick();
  assert.match(a.text(a.render()), /Question 1 of/);
});

test('optional follow-up sends the score only on explicit submission and acknowledges acceptance', async () => {
  const a = assessment(); a.finish();
  a.button('Discuss these results').props.onClick();
  assert.equal(a.requests.length, 0);
  const form = a.nodes(a.render()).find(n => n.type === 'form');
  await form.props.onSubmit({ preventDefault() {}, currentTarget: {} });
  assert.equal(a.requests.length, 1);
  assert.match(JSON.parse(a.requests[0].options.body).message, /Self-assessment result: 0\/24/);
  assert.match(a.text(a.render()), /follow-up request was received/);
});

test('failed intake is not acknowledged and results remain accessible', async () => {
  const a = assessment(false); a.finish();
  a.button('Discuss these results').props.onClick();
  await a.nodes(a.render()).find(n => n.type === 'form').props.onSubmit({ preventDefault() {}, currentTarget: {} });
  assert.match(a.text(a.render()), /Intake unavailable/);
  assert.doesNotMatch(a.text(a.render()), /request was received/);
  a.button('Back to my results').props.onClick();
  assert.match(a.text(a.render()), /Your maturity by area/);
});
