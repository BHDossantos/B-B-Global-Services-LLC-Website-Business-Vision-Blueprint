import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Tailwind-styled Markdown renderer (no @tailwindcss/typography dependency).
// `node` is destructured out of every override so react-markdown's internal
// AST prop never leaks onto the DOM element.
const components: Components = {
  h2: ({ node, ...props }) => (
    <h2 className="mt-10 text-2xl font-bold tracking-tight text-navy-900" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="mt-8 text-xl font-semibold text-navy-900" {...props} />
  ),
  p: ({ node, ...props }) => <p className="leading-relaxed" {...props} />,
  ul: ({ node, ...props }) => (
    <ul className="ml-1 space-y-2 [&>li]:flex [&>li]:gap-2.5" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="ml-5 list-decimal space-y-2 marker:text-accent-600" {...props} />
  ),
  li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
  a: ({ node, ...props }) => (
    <a className="font-medium text-accent-600 underline underline-offset-2 hover:text-accent-700" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-navy-900" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-accent-300 bg-navy-50 py-2 pl-4 italic text-navy-700"
      {...props}
    />
  ),
  code: ({ node, ...props }) => (
    <code className="rounded bg-navy-100 px-1.5 py-0.5 text-sm text-navy-800" {...props} />
  ),
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: ({ node, ...props }) => (
    <th className="border-b border-navy-200 px-3 py-2 text-left font-semibold text-navy-900" {...props} />
  ),
  td: ({ node, ...props }) => (
    <td className="border-b border-navy-100 px-3 py-2 align-top" {...props} />
  ),
  hr: () => <hr className="border-navy-100" />,
};

export function Markdown({ content }: { content: string }) {
  return (
    <div className="space-y-5 text-navy-700">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
