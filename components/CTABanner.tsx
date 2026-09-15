import { Button, Container } from "./ui";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/siteConfig";
import { getMessages } from "@/lib/i18n";

export function CTABanner({
  headline,
  copy,
  buttonLabel,
}: {
  headline?: string;
  copy?: string;
  buttonLabel?: string;
}) {
  const m = getMessages();
  const finalHeadline = headline ?? m.home.finalTitle;
  const finalCopy = copy ?? m.home.finalBody;
  const finalButton = buttonLabel ?? m.cta.scheduleConsultation;

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
              {finalHeadline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-200">{finalCopy}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={siteConfig.bookingUrl} external>
                {finalButton} <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
                {m.cta.requestAssessment}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
