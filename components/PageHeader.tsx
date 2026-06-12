import { Container } from "./ui";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(50% 60% at 85% 0%, rgba(30,200,200,0.16) 0%, transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(47,107,255,0.16) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="max-w-3xl py-16 sm:py-20">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-300">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-navy-200">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
