import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Currently in development
          </span>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            The future of <span className="text-primary">always-on</span>{" "}
            trading
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Drift247 is a next-generation platform built for speed, reliability,
            and round-the-clock performance. Trade smarter, not harder.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/auth/register"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/40 py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for performance
            </h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need to stay ahead of the market.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Real-Time Data"
              description="Lightning-fast feeds with sub-second latency so you never miss a beat."
            />
            <FeatureCard
              title="24/7 Uptime"
              description="Markets don't sleep and neither do we. Always on, always ready."
            />
            <FeatureCard
              title="Smart Analytics"
              description="Actionable insights powered by intelligent analysis of market trends."
            />
            <FeatureCard
              title="Secure by Default"
              description="Enterprise-grade security with end-to-end encryption on every transaction."
            />
            <FeatureCard
              title="Blazing Fast"
              description="Optimised infrastructure ensures your actions execute instantly."
            />
            <FeatureCard
              title="Open Ecosystem"
              description="Extensible APIs and integrations to build your own workflows."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of traders already using Drift247 to stay ahead.
          </p>
          <div className="mt-8">
            <a
              href="/auth/register"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Create your account
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Drift247. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
