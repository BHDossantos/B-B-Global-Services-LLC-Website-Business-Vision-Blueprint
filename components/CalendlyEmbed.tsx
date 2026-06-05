"use client";

import { useEffect } from "react";

/**
 * Inline Calendly scheduling widget. Loads Calendly's embed script once and
 * renders the booking iframe directly on the page. Pass the scheduling URL
 * from siteConfig.bookingUrl.
 */
export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget min-h-[680px] w-full overflow-hidden rounded-2xl border border-navy-100 bg-white"
      data-url={`${url}?hide_gdpr_banner=1&primary_color=1ec8c8`}
      // Fallback link shown until the widget hydrates / if JS is unavailable.
    >
      <noscript>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Schedule a consultation on Calendly
        </a>
      </noscript>
    </div>
  );
}
