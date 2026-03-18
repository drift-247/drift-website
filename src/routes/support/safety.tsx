import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";

export const Route = createFileRoute("/support/safety")({
  component: SafetyCenter,
});

function SafetyCenter() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 bg-[#22437d]/8 text-[#22437d] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#22437d]/20 mb-6 uppercase tracking-widest">
          Safety
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mb-4">Safety Center</h1>
        <p className="text-[#4a5568] text-base leading-relaxed max-w-xl mx-auto mb-8">
          Your safety is our top priority. This page will contain safety guidelines, emergency procedures, and resources for both riders and drivers. Full content coming soon.
        </p>
        <a
          href="mailto:hello@drift247.africa"
          className="inline-flex items-center gap-2 bg-[#22437d] text-white font-semibold rounded-xl px-8 py-3.5 text-sm hover:bg-[#1a3464] transition-all"
        >
          Contact Support
        </a>
      </main>
      <FooterSection />
    </div>
  );
}