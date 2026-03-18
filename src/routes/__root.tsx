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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // ── Primary SEO ──
      { title: "Drift247 — Secure Ride Marketplace for Riders & Drivers" },
      {
        name: "description",
        content:
          "Drift247 is a secure ride marketplace connecting riders and drivers through wallet-protected payments, verified identities, and transparent trip management. Launching in Nigeria.",
      },
      {
        name: "keywords",
        content:
          "ride hailing Nigeria, secure rides Lagos, Drift247, ride marketplace, driver earnings Nigeria, safe rides Abuja, Port Harcourt rides",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Driving Africa Digital Services Ltd" },

      // ── Open Graph ──
      {
        property: "og:title",
        content: "Drift247 — Secure Ride Marketplace for Riders & Drivers",
      },
      {
        property: "og:description",
        content:
          "Wallet-protected payments. Verified identities. Transparent trips. Drift247 is built for trust from the ground up.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://drift247.africa" },
      { property: "og:image", content: "https://drift247.africa/og-image.png" },
      { property: "og:site_name", content: "Drift247" },
      { property: "og:locale", content: "en_NG" },

      // ── Twitter Card ──
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Drift247 — Secure Ride Marketplace",
      },
      {
        name: "twitter:description",
        content:
          "Secure payments. Verified identities. Transparent trips — built for trust from the ground up.",
      },
      { name: "twitter:image", content: "https://drift247.africa/og-image.png" },
      { name: "twitter:creator", content: "@drift247" },
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
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <img src="/logo-icon.svg" alt="Drift247" className="h-12 w-auto mb-4" />
      <h1 className="text-5xl font-bold text-[#0f1c2e]">404</h1>
      <p className="text-[#4a5568] text-base">Page not found</p>
      <Link
        to="/"
        className="mt-2 px-6 py-3 bg-[#22437d] text-white text-sm font-semibold rounded-xl hover:bg-[#1a3464] transition-colors"
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
        {children}
        <Scripts />
      </body>
    </html>
  );
}