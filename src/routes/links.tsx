import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Drift247 — /links page
// A single "route" of stops: waitlist, driver application, company, socials.
// ---------------------------------------------------------------------------

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

type LinkStop = {
  label: string;
  href?: string;
  variant: "primary" | "secondary" | "disabled";
  sublabel?: string;
};

const stops: LinkStop[] = [
  {
    label: "Join the Waitlist",
    href: "https://forms.gle/qVygJd3AeYzLrJwo7",
    variant: "primary",
  },
  {
    label: "Apply to Drive",
    href: "https://forms.gle/jMu67t4VppeFoBWS7",
    variant: "secondary",
  },
  {
    label: "Get the App",
    variant: "disabled",
    sublabel: "Coming soon",
  },
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/2348121443947",
    variant: "secondary",
  },
  {
    label: "hello@drift247.africa",
    href: "mailto:hello@drift247.africa",
    variant: "secondary",
  },
  {
    label: "Company Website",
    href: "https://www.drivingafricadigitalserviceslimited.com/",
    variant: "secondary",
  },
];

const socials: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/drift247_ng?igsh=a2RjdmVydjQ2aW80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/Drift247_ng",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2H21.5l-7.51 8.59L23 22h-6.828l-5.35-6.42L4.68 22H1.42l8.03-9.19L1 2h6.99l4.84 5.86L18.244 2Zm-1.197 18h1.833L7.06 3.94H5.1L17.047 20Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@drift247_ng?_r=1&_t=ZS-98SSRPr5BT7",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M16.5 3c.4 2.1 1.9 3.7 4 4v3a7.1 7.1 0 0 1-4-1.2v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.07v3.1a2.6 2.6 0 1 0 1.8 2.5V3h3Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/drift247",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.65c0-1.35-.02-3.08-1.87-3.08-1.88 0-2.17 1.47-2.17 2.98V21h-4V9Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586916038748",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9v-1.9c0-.84.23-1.4 1.44-1.4h1.54V4.8c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.84v2.15H8v2.9h2.5V21h3Z" />
      </svg>
    ),
  },
];

function StopButton({ stop }: { stop: LinkStop }) {
  const base =
    "relative flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-[15px] font-semibold transition-transform active:scale-[0.98]";

  if (stop.variant === "disabled") {
    return (
      <div className={`${base} cursor-default border border-dashed border-[#0f1c2e]/20 text-[#0f1c2e]/40`}>
        {stop.label}
        {stop.sublabel && (
          <span className="ml-2 rounded-full bg-[#0f1c2e]/5 px-2 py-0.5 text-[11px] font-medium text-[#0f1c2e]/40">
            {stop.sublabel}
          </span>
        )}
      </div>
    );
  }

  const styles =
    stop.variant === "primary"
      ? "bg-[#22437d] text-white shadow-sm hover:bg-[#1b3564]"
      : "border border-[#22437d]/30 text-[#22437d] hover:bg-[#22437d]/5";

  return (
    <a href={stop.href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {stop.label}
    </a>
  );
}

function LinksPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-6 py-16 text-[#0f1c2e]">
      <div className="flex w-full max-w-sm flex-col items-center">
        {/* Brand mark */}
        <div className="mb-1 text-xl font-bold tracking-tight text-[#22437d]">Drift247</div>
        <p className="mb-10 text-sm text-[#0f1c2e]/60">Safety-first rides, built for Lagos</p>

        {/* Route stack: each link is a stop along a dashed route line */}
        <div className="relative w-full">
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 -z-10 ml-[calc(50%-0.5px)] border-l border-dashed border-[#22437d]/15"
          />
          <div className="flex w-full flex-col gap-3">
            {stops.map((stop) => (
              <StopButton key={stop.label} stop={stop} />
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="mt-10 flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0f1c2e]/10 text-[#22437d] transition-colors hover:bg-[#22437d]/5"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-[#0f1c2e]/40">Driving Africa Digital Services Limited</p>
      </div>
    </div>
  );
}