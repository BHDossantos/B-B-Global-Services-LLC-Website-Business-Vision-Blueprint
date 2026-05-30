import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-navy-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/services" variant="ghost">
            Explore Services
          </Button>
        </div>
      </div>
    </Container>
  );
}
