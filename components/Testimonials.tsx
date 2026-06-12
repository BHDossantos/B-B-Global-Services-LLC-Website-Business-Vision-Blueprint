import { Section, SectionHeading, Card } from "./ui";
import { testimonials } from "@/lib/content/site-content";

/**
 * Renders the testimonials section only when real, approved quotes exist
 * in `testimonials`. Returns null while the list is empty so no placeholder
 * or fabricated social proof ever ships.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section muted>
      <SectionHeading
        align="center"
        eyebrow="In Their Words"
        title="What Clients Say"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={`${t.name}-${t.company}`} className="flex h-full flex-col">
            <svg
              className="h-8 w-8 text-accent-300"
              viewBox="0 0 32 32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.5 8C6 8 4 11 4 14.5c0 3.3 2.3 5.5 5 5.5.3 0 .6 0 .9-.1-.6 2-2.3 3.6-4.4 4.3L7 27c4.4-1.3 7.5-5.2 7.5-10.4V14C14.5 10.4 12.7 8 9.5 8zm13 0c-3.5 0-5.5 3-5.5 6.5 0 3.3 2.3 5.5 5 5.5.3 0 .6 0 .9-.1-.6 2-2.3 3.6-4.4 4.3L20 27c4.4-1.3 7.5-5.2 7.5-10.4V14C27.5 10.4 25.7 8 22.5 8z" />
            </svg>
            <blockquote className="mt-4 flex-1 text-navy-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-5 border-t border-navy-100 pt-4">
              <p className="text-sm font-semibold text-navy-900">{t.name}</p>
              <p className="text-sm text-navy-600">
                {t.title}, {t.company}
              </p>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}
