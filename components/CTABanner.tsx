import { Button, Container } from "./ui";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/siteConfig";

export function CTABanner({
  headline = "Ready to Move From Technology Ideas to Reliable Execution?",
  copy = "Whether you need to build an application, modernize your cloud, improve cybersecurity, support your workforce, or create a disaster recovery plan, B&B Global Services can help you move from vision to execution.",
  buttonLabel = "Schedule a Consultation",
}: {
  headline?: string;
  copy?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-navy-900">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(50% 80% at 50% 0%, rgba(30,200,200,0.25) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-200">{copy}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={siteConfig.bookingUrl} external>
                {buttonLabel} <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
                Request an Assessment
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
