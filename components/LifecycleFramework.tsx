import { Icon } from "./Icon";
import { lifecycleFramework } from "@/lib/content/site-content";

export function LifecycleFramework() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-2">
      {lifecycleFramework.phases.map((phase, i) => (
        <li
          key={phase.name}
          className="relative flex gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm"
        >
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-900 font-mono text-sm font-bold text-accent-300">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-navy-900">
              {phase.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-navy-600">
              {phase.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function LifecycleStrip() {
  const labels = lifecycleFramework.phases.map((p) => p.name);
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
      {labels.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <span className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-800">
            {label}
          </span>
          {i < labels.length - 1 && (
            <Icon name="arrow" className="h-3.5 w-3.5 text-accent-500" />
          )}
        </div>
      ))}
    </div>
  );
}
