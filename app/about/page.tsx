import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, Button, Card } from "@/components/ui";
import { LifecycleStrip } from "@/components/LifecycleFramework";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/siteConfig";
import { differentiators } from "@/lib/content/site-content";

export const metadata: Metadata = {
  title: "About — Built by Operators, Not Just Consultants",
  description:
    "B&B Global Services closes the gap between technology ideas and real operational execution — combining strategy, engineering, security, operations, and support.",
};

const expertise = [
  "Cloud engineering",
  "DevOps & SRE",
  "Application delivery",
  "AI & data platforms",
  "Cybersecurity & DevSecOps",
  "Business continuity",
  "Enterprise operations",
  "Managed services",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built by Operators, Not Just Consultants"
        description="B&B Global Services was created to help businesses close the gap between technology ideas and real operational execution — delivered remotely to clients worldwide from our New Hampshire home base."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Approach" title="We Bring the Disciplines Together" />
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              Many companies can advise. Some can build. Others can support. We
              bring these disciplines together so organizations can move faster,
              reduce risk, improve reliability, and get more value from
              technology.
            </p>
            <div className="mt-8 space-y-3">
              {differentiators.slice(0, 4).map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 flex-none text-accent-500" />
                  <p className="text-navy-700">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-navy-50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Vision
            </h3>
            <p className="mt-2 text-navy-800">
              To become the trusted technology delivery partner for growing
              businesses by helping them design, build, secure, operate, and
              continuously improve the systems that power their future.
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent-600">
              Mission
            </h3>
            <p className="mt-2 text-navy-800">
              To help organizations turn technology ideas into secure, scalable,
              reliable, and supported business solutions through strategy,
              engineering, cloud, cybersecurity, operations, and managed
              services.
            </p>
          </Card>
        </div>
      </Section>

      {/* Founder */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex flex-col items-start">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-electric-500 text-3xl font-bold text-white shadow-md">
              BD
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy-900">
              Bruno Dossantos
            </h2>
            <p className="text-navy-600">Founder &amp; Principal</p>
          </div>
          <div>
            <SectionHeading eyebrow="Founder" title="Deep, Hands-On Experience" />
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              Bruno Dossantos brings deep experience across cloud engineering,
              DevOps, SRE, application delivery, AI, data platforms,
              cybersecurity, business continuity, and enterprise operations. His
              background includes leading technology teams, building platforms,
              modernizing systems, supporting mission-critical environments, and
              helping organizations improve delivery from strategy through
              support.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-700"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="How We Deliver"
          title="The Idea to Operations Framework"
        />
        <div className="mt-10">
          <LifecycleStrip />
        </div>
        <div className="mt-10 text-center">
          <Button href={siteConfig.bookingUrl} external>
            Book a Consultation <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
