import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui";
import { AssessmentTool } from "@/components/AssessmentTool";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Free Technology Health Check — Score Your Maturity in 2 Minutes",
  description:
    "Take the free B&B Global Services Technology Health Check. Score your strategy, software delivery, cloud, security, reliability, recovery, and support maturity — and get a recommended next step.",
};

const benefits = [
  { icon: "activity", text: "A maturity score across 8 key technology areas" },
  { icon: "chart", text: "A per-area breakdown showing your biggest gaps" },
  { icon: "compass", text: "A recommended next step tailored to your results" },
];

export default function AssessmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Technology Health Check"
        title="How Healthy Is Your Technology?"
        description="Answer 8 quick questions to score your technology maturity across strategy, delivery, cloud, security, reliability, recovery, and support. Takes about two minutes — get your results instantly."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading eyebrow="What You'll Get" title="Instant, Actionable Results" />
            <ul className="mt-8 space-y-5">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </span>
                  <p className="pt-2 text-navy-700">{b.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-navy-100 bg-navy-50 p-5 text-sm leading-relaxed text-navy-600">
              This self-assessment mirrors the first step of our paid{" "}
              <span className="font-semibold text-navy-800">Technology Health Check</span>{" "}
              ($5,000–$15,000), which goes deeper with a full review, risk
              analysis, and a 90-day roadmap.
            </p>
          </div>

          <div>
            <AssessmentTool />
          </div>
        </div>
      </Section>
    </>
  );
}
