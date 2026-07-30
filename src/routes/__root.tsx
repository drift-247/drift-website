/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import "~/app.css";
import { Analytics } from "~/components/landing/Analytics";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // ── Primary SEO ──
      {
        title:
          "Drift247 - Drift in Comfort | Customer-First Mobility in Nigeria",
      },
      {
        name: "description",
        content:
          "Drift247 is a customer-first mobility platform built for Nigeria, designed for comfortable rides, clearer trips, verified drivers, and dependable everyday movement. Launching soon in select Nigerian cities.",
      },
      {
        name: "keywords",
        content:
          "Drift247, ride hailing Nigeria, mobility platform Nigeria, customer-first mobility, comfortable rides, reliable rides, verified drivers, clear pricing, driver onboarding Nigeria, Lagos rides, Abuja rides, Port Harcourt rides, Nigeria ride app, everyday movement Nigeria",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Driving Africa Digital Services Ltd" },
      { name: "theme-color", content: "#22437d" },

      // ── Open Graph ──
      {
        property: "og:title",
        content:
          "Drift247 — Drift in Comfort | Customer-First Mobility in Nigeria",
      },
      {
        property: "og:description",
        content:
          "Comfortable rides, clearer trips, verified drivers, and dependable everyday movement. Drift247 is preparing to launch across select Nigerian cities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://drift247.africa" },
      { property: "og:image", content: "https://drift247.africa/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Drift247 — Drift in Comfort",
      },
      { property: "og:site_name", content: "Drift247" },
      { property: "og:locale", content: "en_NG" },

      // ── Twitter Card ──
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Drift247 — Drift in Comfort",
      },
      {
        name: "twitter:description",
        content:
          "A customer-first mobility platform built for Nigeria, designed for comfortable rides, clearer trips, and dependable everyday movement.",
      },
      { name: "twitter:image", content: "https://drift247.africa/og-image.png" },
      { name: "twitter:image:alt", content: "Drift247 — Drift in Comfort" },
      { name: "twitter:creator", content: "@drift247" },
      { name: "twitter:site", content: "@drift247" },
    ],
    links: [
      { rel: "icon", href: "/logo-icon.svg", type: "image/svg+xml" },
      { rel: "canonical", href: "https://drift247.africa" },

      // ── Plus Jakarta Sans ──
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous" as any,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
    ],
  }),

  component: RootComponent,

  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
      <img src="/logo-icon.svg" alt="Drift247" className="mb-4 h-12 w-auto" />

      <h1 className="text-5xl font-bold text-[#0f1c2e]">404</h1>

      <p className="max-w-sm text-base leading-relaxed text-[#4a5568]">
        This page could not be found.
      </p>

      <Link
        to="/"
        className="mt-2 rounded-xl bg-[#22437d] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#22437d]/20 transition-colors hover:bg-[#1a3464]"
      >
        Go home
      </Link>
    </div>
  ),
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>

      <body
        className="min-h-screen bg-white antialiased"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <Analytics />
        {children}
        <Scripts />
      </body>
    </html>
  );
}