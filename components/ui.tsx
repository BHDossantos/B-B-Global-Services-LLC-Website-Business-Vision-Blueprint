import Link from "next/link";
import type { ReactNode } from "react";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  muted,
  dark,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24",
        muted && "bg-navy-50",
        dark && "bg-navy-900 text-white",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent-600">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-navy-100" : "text-navy-600"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-400";
  const variants = {
    primary:
      "bg-accent-500 text-white hover:bg-accent-600 shadow-sm shadow-accent-500/30",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-800",
    ghost:
      "border border-navy-200 text-navy-800 hover:border-navy-400 hover:bg-navy-50",
    white:
      "bg-white text-navy-900 hover:bg-navy-50",
  } as const;

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-navy-200",
        className
      )}
    >
      {children}
    </div>
  );
}
