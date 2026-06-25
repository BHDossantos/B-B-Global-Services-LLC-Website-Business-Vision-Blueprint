import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { UnsubscribeForm } from "@/components/UnsubscribeForm";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Unsubscribe from B&B Global Services emails.",
  robots: { index: false, follow: false },
};

export default function UnsubscribePage({
  searchParams,
}: {
  searchParams: { e?: string };
}) {
  return (
    <Container>
      <div className="mx-auto max-w-lg py-20 text-center">
        <h1 className="text-3xl font-bold text-navy-900">Unsubscribe</h1>
        <p className="mt-3 text-navy-600">
          We respect your inbox. Confirm below and we&apos;ll remove you from our
          outreach right away — no hard feelings.
        </p>
        <div className="mt-8">
          <UnsubscribeForm initialEmail={searchParams.e ?? ""} />
        </div>
      </div>
    </Container>
  );
}
