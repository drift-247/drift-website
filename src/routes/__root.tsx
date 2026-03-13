/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { SiteHeader } from "~/components/landing/SiteHeader";
import { getMetadata } from "~/lib/meta";

// import { Car } from "lucide-react";

import "~/app.css";

export const Route = createRootRoute({
  head: () => {
    const metadata = getMetadata({
      title: "Explore the World of Drifting with Drift247",
      description: "Welcome to Drift247, your ultimate car enthusiast hub!",
      keywords: ["drift247", "car enthusiasts", "drifting", "automotive news"],
    });
    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: metadata.title,
        },
        {
          name: "description",
          content: metadata.description,
        },
        {
          name: "keywords",
          content: metadata.keywords,
        },
        {
          property: "og:title",
          content: metadata.openGraph?.title,
        },
        {
          property: "og:description",
          content: metadata.openGraph?.description,
        },
        {
          property: "og:type",
          content: metadata.openGraph?.type,
        },
        {
          property: "og:url",
          content: metadata.openGraph?.url,
        },
        {
          property: "og:image",
          content: metadata.openGraph?.images?.[0]?.url,
        },
        {
          name: "twitter:card",
          content: metadata.twitter?.card,
        },
        {
          name: "twitter:title",
          content: metadata.twitter?.title,
        },
        {
          name: "twitter:description",
          content: metadata.twitter?.description,
        },
        {
          name: "twitter:creator",
          content: metadata.twitter?.creator,
        },
        {
          name: "twitter:image",
          content: metadata.twitter?.images?.[0],
        },
        {
          name: "robots",
          content: `${metadata.robots?.index ? "index" : "noindex"}, ${metadata.robots?.follow ? "follow" : "nofollow"}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: metadata.alternates?.canonical,
        },
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous" as any,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    };
  },
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <Link to="/" className="text-primary underline underline-offset-4">
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
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "80px" }}
    >
      <head>
        <HeadContent />
      </head>
      <body
        className="min-h-screen bg-background antialiased"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
