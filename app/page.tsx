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
import { getMessages } from "@/lib/i18n";

export default function HomePage() {
  const m = getMessages();
  return (
    <>
      <FaqJsonLd items={faqs} />
      <Hero m={m} />

      {/* Credibility stats */}
      <StatsBand />

      {/* Section 2: Problem Statement */}
      <Section muted>
        <SectionHeading
          eyebrow={m.home.problemEyebrow}
          title={m.home.problemTitle}
          description={m.home.problemBody}
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
          eyebrow={m.home.whatEyebrow}
          title={m.home.whatTitle}
          description={m.home.whatBody}
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
            {m.cta.viewAllServices} <Icon name="arrow" className="h-4 w-4" />
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
              <Eyebrow>{m.home.assessEyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900">
                {m.home.assessTitle}
              </h2>
              <p className="mt-3 max-w-xl text-lg text-navy-600">
                {m.home.assessBody}
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button href="/assessment">
                {m.cta.startFreeCheck} <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Signature Offer — The B&B Delivery Framework */}
      <Section muted>
        <SectionHeading
          eyebrow={m.home.frameworkEyebrow}
          title={m.home.frameworkTitle}
          description={m.home.frameworkBody}
        />
        <div className="mt-10">
          <LifecycleFramework />
        </div>
      </Section>

      {/* Section 5: Industries */}
      <Section>
        <SectionHeading
          eyebrow={m.home.industriesEyebrow}
          title={m.home.industriesTitle}
          description={m.home.industriesBody}
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
              eyebrow={m.home.globalEyebrow}
              title={m.home.globalTitle}
              description={m.home.globalBody}
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
          eyebrow={m.home.whyEyebrow}
          title={m.home.whyTitle}
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
          eyebrow={m.home.featuredEyebrow}
          title={m.home.featuredTitle}
          description={m.home.featuredBody}
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
          eyebrow={m.home.caseEyebrow}
          title={m.home.caseTitle}
          description={m.home.caseBody}
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
          eyebrow={m.home.faqEyebrow}
          title={m.home.faqTitle}
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* Section 9: CTA */}
      <CTABanner
        headline={m.home.finalTitle}
        copy={m.home.finalBody}
        buttonLabel={m.cta.scheduleConsultation}
      />
    </>
  );
}
