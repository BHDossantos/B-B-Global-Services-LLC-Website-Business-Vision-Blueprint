import Link from "next/link";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/content/services";
import { solutions } from "@/lib/content/solutions";

const company = [
  { label: "About", href: "/about" },
  { label: "Global Delivery", href: "/global" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Health Check", href: "/assessment" },
  { label: "Downtime Calculator", href: "/roi-calculator" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
  { label: "Capability Statement", href: "/capability-statement" },
  { label: "Client Portal", href: "/client-portal" },
  { label: "Contact", href: "/contact" },
];

const serviceAreas = [
  { label: "Global Delivery", href: "/global" },
  { label: "New Hampshire", href: "/locations/new-hampshire" },
  { label: "Boston", href: "/locations/boston" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {siteConfig.positioning}
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-accent-400">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="block hover:text-accent-400">
                {siteConfig.phone}
              </a>
              <p className="text-navy-400">HQ: {siteConfig.headquarters}</p>
              <p className="text-navy-400">{siteConfig.coverage}</p>
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-accent-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Solutions">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link href={`/solutions/${s.slug}`} className="hover:text-accent-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-accent-400">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-navy-800 py-5 text-xs text-navy-400">
          <span className="font-semibold uppercase tracking-wide text-navy-300">
            Service areas:
          </span>
          {serviceAreas.map((area, i) => (
            <span key={area.href} className="flex items-center gap-2">
              <Link href={area.href} className="hover:text-accent-400">
                {area.label}
              </Link>
              {i < serviceAreas.length - 1 && <span aria-hidden>·</span>}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-navy-800 py-6 text-xs text-navy-400 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Technology delivery from idea to operations.</p>
        </div>
      </Container>
    </footer>
  );
}
