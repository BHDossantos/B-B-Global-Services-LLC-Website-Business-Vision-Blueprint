import { Button, Container } from "./ui";
import { Icon } from "./Icon";
import { siteConfig, lifecyclePhases } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 80% 0%, rgba(30,200,200,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 10% 100%, rgba(47,107,255,0.18) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-accent-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {siteConfig.tagline}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Technology Delivery From{" "}
              <span className="bg-gradient-to-r from-accent-300 to-electric-400 bg-clip-text text-transparent">
                Idea to Operations
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              {siteConfig.shortName} helps businesses design, build, secure,
              deploy, support, and recover mission-critical technology solutions
              across software, cloud, DevOps, cybersecurity, AI, managed
              services, and business continuity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.bookingUrl} external>
                Book a Consultation <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
                Explore Services
              </Button>
            </div>

            <p className="mt-8 max-w-lg text-sm leading-relaxed text-navy-400">
              A global, remote-first partner with enterprise experience across
              cloud, DevOps, SRE, AI, application delivery, cybersecurity, data
              platforms, and operational resilience — delivered worldwide.
            </p>
          </div>

          {/* Lifecycle diagram */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">
                The Technology Lifecycle
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {lifecyclePhases.map((phase, i) => (
                  <div
                    key={phase}
                    className="group relative rounded-xl border border-white/10 bg-navy-900/60 p-3 text-center"
                  >
                    <span className="block text-[11px] font-mono text-accent-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">
                      {phase}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-lg bg-gradient-to-r from-accent-500/20 to-electric-500/20 px-4 py-3 text-sm">
                <span className="font-medium text-white">Idea</span>
                <Icon name="arrow" className="h-4 w-4 text-accent-300" />
                <span className="font-medium text-white">Reliable Operations</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
