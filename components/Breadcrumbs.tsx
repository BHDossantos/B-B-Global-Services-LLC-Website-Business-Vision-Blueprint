import Link from "next/link";

/**
 * Visible breadcrumb trail for detail pages. Pairs with the BreadcrumbList
 * JSON-LD already emitted on these pages for navigation + SEO rich results.
 * Rendered on the dark PageHeader, so it uses light text.
 */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy-300">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="transition hover:text-accent-300">
                  {item.name}
                </Link>
              ) : (
                <span className={last ? "text-white" : undefined} aria-current={last ? "page" : undefined}>
                  {item.name}
                </span>
              )}
              {!last && <span className="text-navy-500" aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
