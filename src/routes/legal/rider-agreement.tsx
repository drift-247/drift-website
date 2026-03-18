import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";

export const Route = createFileRoute("/legal/rider-agreement")({
  component: RiderAgreement,
});

function RiderAgreement() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-3xl">
        <div className="mb-10">
          <span className="text-xs font-semibold text-[#22437d] uppercase tracking-widest">Legal</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mt-2 mb-2">Rider Agreement</h1>
          <p className="text-[#4a5568] text-sm">Last updated: March 2026</p>
        </div>
        <div className="space-y-8 text-[#4a5568] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">1. Rider Responsibilities</h2>
            <p>As a rider on the Drift247 platform, you agree to treat drivers with respect, provide accurate pickup and drop-off information, and pay for all trips through the in-app wallet system.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">2. Payment & Wallet</h2>
            <p>All ride payments are processed through your Drift247 wallet. Funds are held in escrow during your trip and released to the driver upon completion. You agree not to dispute legitimate charges.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">3. Cancellation Policy</h2>
            <p>Riders may cancel a trip before the driver arrives. Repeated cancellations may result in account suspension. Cancellation fees may apply depending on timing.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">4. Safety & Conduct</h2>
            <p>Riders must comply with all platform safety guidelines. Any abusive, threatening, or illegal behavior will result in immediate account termination and may be reported to authorities.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">5. Contact</h2>
            <p>Questions? Reach us at <a href="mailto:hello@drift247.africa" className="text-[#22437d] font-medium hover:underline">hello@drift247.africa</a></p>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}