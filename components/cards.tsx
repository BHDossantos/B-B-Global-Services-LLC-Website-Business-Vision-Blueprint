import Link from "next/link";
import { Icon } from "./Icon";
import { Card, cn } from "./ui";
import type { Service } from "@/lib/content/services";
import type { Solution } from "@/lib/content/solutions";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group flex h-full flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">
        {service.summary}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
        {service.capabilities.slice(0, 5).map((c) => (
          <li key={c} className="flex items-start gap-2">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
            {c}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition group-hover:gap-2.5"
      >
        Explore {service.title}
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </Card>
  );
}

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Card className="group flex h-full flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
        <Icon name={solution.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">
        {solution.title}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-400">
        For: {solution.audience}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
        {solution.summary}
      </p>
      <Link
        href={`/solutions/${solution.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition group-hover:gap-2.5"
      >
        Learn more
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </Card>
  );
}

export function IndustryCard({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-navy-900">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
    </Card>
  );
}

export function CaseStudyCard({
  study,
}: {
  study: {
    slug: string;
    title: string;
    industry: string;
    challenge: string;
    outcome: string;
  };
}) {
  return (
    <Card className="flex h-full flex-col">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
        {study.industry}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-navy-900">{study.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-600">
        <span className="font-semibold text-navy-800">Challenge: </span>
        {study.challenge}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">
        <span className="font-semibold text-navy-800">Outcome: </span>
        {study.outcome}
      </p>
    </Card>
  );
}

export function BlogCard({
  post,
}: {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readMinutes: number;
  };
}) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Card className="group flex h-full flex-col">
      <div className="flex items-center gap-2 text-xs text-navy-500">
        <span className="rounded-full bg-accent-50 px-2.5 py-0.5 font-semibold text-accent-700">
          {post.category}
        </span>
        <span>{date}</span>
        <span aria-hidden>·</span>
        <span>{post.readMinutes} min read</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-navy-900 group-hover:text-accent-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
        {post.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
        Read article <Icon name="arrow" className="h-4 w-4" />
      </span>
    </Card>
  );
}

export function PillItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <li
      className={cn(
        "flex items-start gap-2.5 rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm text-navy-700",
        className
      )}
    >
      <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
      <span>{children}</span>
    </li>
  );
}
