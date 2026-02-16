import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Drift247
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We're building the next generation of always-on trading
            infrastructure — fast, reliable, and available around the clock.
          </p>
        </div>

        {/* Mission */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Markets never sleep, and neither should your tools. Drift247 was
            founded on the belief that every trader — from individual to
            institutional — deserves access to performant, reliable, and
            transparent trading infrastructure. We're here to level the playing
            field.
          </p>
        </section>

        {/* Values */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            What We Stand For
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <ValueCard
              title="Transparency"
              description="Open systems, clear fees, and honest communication. No hidden agendas."
            />
            <ValueCard
              title="Performance"
              description="Sub-second execution and real-time data. Speed is a feature, not a luxury."
            />
            <ValueCard
              title="Reliability"
              description="24/7 uptime with redundant infrastructure built to handle anything."
            />
            <ValueCard
              title="Security"
              description="Enterprise-grade encryption and best-in-class security practices from day one."
            />
          </div>
        </section>

        {/* Team */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Team</h2>
          <p className="text-muted-foreground leading-relaxed">
            We're a small, focused team of engineers and traders who've spent
            years working in fintech and decentralised systems. We build what we
            use, and we use what we build.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl border bg-muted/40 p-8 text-center">
          <h3 className="text-xl font-semibold">Interested in working with us?</h3>
          <p className="mt-2 text-muted-foreground">
            We're always looking for talented people who share our vision.
          </p>
          <a
            href="/auth/register"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get in touch
          </a>
        </section>
      </div>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
