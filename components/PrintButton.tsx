"use client";

import { Icon } from "./Icon";

export function PrintButton({ label = "Download PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-accent-600 print:hidden"
    >
      <Icon name="arrow" className="h-4 w-4 rotate-90" />
      {label}
    </button>
  );
}
