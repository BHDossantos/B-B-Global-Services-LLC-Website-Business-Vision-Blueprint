"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { cn } from "./ui";

type FAQ = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-base font-semibold text-navy-900">
                {item.question}
              </span>
              <Icon
                name="arrow"
                className={cn(
                  "h-5 w-5 flex-none text-accent-600 transition-transform",
                  isOpen ? "rotate-90" : "rotate-0"
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden px-5 transition-all",
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-navy-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
