import Link from "next/link";
import { cn } from "./ui";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="B&B Global Services — home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-400 to-electric-500 font-bold text-white shadow-sm">
        B&amp;B
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-base font-bold tracking-tight",
            light ? "text-white" : "text-navy-900"
          )}
        >
          B&amp;B Global Services
        </span>
        <span
          className={cn(
            "text-[11px] font-medium tracking-wide",
            light ? "text-navy-200" : "text-navy-500"
          )}
        >
          From Idea to Operations
        </span>
      </span>
    </Link>
  );
}
