import { Hero } from "@/components/Hero";
import { Section, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { LifecycleFramework } from "@/components/LifecycleFramework";
import {
  ServiceCard,
  IndustryCard,
  CaseStudyCard,
  PillItem,
} from "@/components/cards";
import { CTABanner } from "@/components/CTABanner";
import { Testimonials } from "@/components/Testimonials";
import { TechStack, StatsBand, Comparison } from "@/components/MarketingSections";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content/services";
import {
  painPoints,
  differentiators,
  featuredSolutions,
  industries,
  caseStudies,
  faqs,
} from "@/lib/content/site-content";
import { regions, globalStats } from "@/lib/content/global";

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <Hero />

      {/* Credibility stats */}
      <StatsBand />

      {/* Section 2: Problem Statement */}
      <Section muted>
        <SectionHeading
          eyebrow="The Real Problem"
          title="Most Companies Do Not Have a Technology Problem. They Have a Delivery Problem."
          description="Businesses are under pressure to move faster, reduce outages, improve security, modernize systems, adopt AI, control cloud costs, and support users without increasing operational chaos. B&B Global Services brings the strategy, engineering, operations, and support model needed to move technology from concept to reliable execution."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p) => (
            <PillItem key={p}>{p}</PillItem>
          ))}
        </ul>
      </Section>

      {/* Section 3: What We Do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="One Partner Across the Full Technology Lifecycle"
          description="From strategy through long-term operations, we cover the disciplines most businesses have to stitch together across multiple vendors."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/services" variant="ghost">
            View all services <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Technologies we master */}
      <TechStack />

      {/* Where we fit — comparison */}
      <Comparison />

      {/* Free assessment promo band */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-accent-100 bg-gradient-to-br from-accent-50 to-white p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <Eyebrow>Free, 2-Minute Tool</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900">
                How healthy is your technology?
              </h2>
              <p className="mt-3 max-w-xl text-lg text-navy-600">
                Take the free Technology Health Check to score your maturity
                across strategy, delivery, cloud, security, reliability,
                recovery, and support — and get a recommended next step
                instantly.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button href="/assessment">
                Start the Free Check <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Signature Offer — The B&B Delivery Framework */}
      <Section muted>
        <SectionHeading
          eyebrow="The B&B Delivery Framework"
          title="Idea to Operations Framework"
          description="A repeatable model that takes technology from concept to reliable, supported operations — and keeps improving it."
        />
        <div className="mt-10">
          <LifecycleFramework />
        </div>
      </Section>

      {/* Section 5: Industries */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Built for Organizations Between Basic IT and Big Consulting"
          description="We serve organizations that are too complex for a basic IT provider but need a more flexible, practical, and affordable partner than a large global consulting firm."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/industries" variant="ghost">
            Explore industries <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Global reach */}
      <Section dark>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Global Delivery"
              title="A Global Partner, Delivered Remotely"
              description="From our home bases in Boston and Rome, we deliver worldwide — with follow-the-sun operations, multi-region cloud, and delivery that respects regional data and compliance needs."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/global" variant="white">
                Explore Global Delivery <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {globalStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-navy-200">{s.label}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                Regions served
              </p>
              <p className="mt-2 text-sm text-navy-100">
                {regions.map((r) => r.name).join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7: Why B&B */}
      <Section dark>
        <SectionHeading
          light
          eyebrow="Why B&B Global Services"
          title="Enterprise Expertise. Practical Execution. Long-Term Support."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {differentiators.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-accent-300" />
              <p className="text-navy-100">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 8: Featured Solutions */}
      <Section>
        <SectionHeading
          eyebrow="Featured Solutions"
          title="Outcome-Focused Engagements"
          description="Clear, packaged ways to start — each mapped to a real business outcome."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {featuredSolutions.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
              <span className="font-medium text-navy-800">{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/solutions" variant="ghost">
            Browse solutions <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Case studies preview */}
      <Section muted>
        <SectionHeading
          eyebrow="Case Studies"
          title="Outcomes From the Field"
          description="Anonymized examples drawn from enterprise and mid-market delivery experience."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/case-studies" variant="ghost">
            View all case studies <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Testimonials — renders only when real quotes are added */}
      <Testimonials />

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* Section 9: CTA */}
      <CTABanner />
    </>
  );
}
