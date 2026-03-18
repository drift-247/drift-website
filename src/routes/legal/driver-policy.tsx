import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";

export const Route = createFileRoute("/legal/driver-policy")({
  component: DriverPolicy,
});

function DriverPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-3xl">
        <div className="mb-10">
          <span className="text-xs font-semibold text-[#22437d] uppercase tracking-widest">Legal</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mt-2 mb-2">Driver Policy</h1>
          <p className="text-[#4a5568] text-sm">Last updated: March 2026</p>
        </div>
        <div className="space-y-8 text-[#4a5568] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">1. Driver Eligibility</h2>
            <p>To drive on the Drift247 platform, you must hold a valid driver&apos;s license, have a vehicle that meets our standards, pass our background verification process, and be of legal working age in your jurisdiction.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">2. Earnings & Payouts</h2>
            <p>Driver earnings are calculated per trip with full transparency. Your commission breakdown is visible before accepting any trip. Payouts are processed through the Drift wallet and withdrawable at any time with no minimum threshold.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">3. Code of Conduct</h2>
            <p>Drivers are expected to maintain professional conduct, keep vehicles clean and roadworthy, follow all traffic laws, and treat riders with respect. Violations may result in suspension or permanent removal from the platform.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">4. Dispute Handling</h2>
            <p>Any trip disputes are handled through our structured resolution process. We review all claims fairly and ensure timely communication with all parties involved.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">5. Contact</h2>
            <p>Driver support: <a href="mailto:hello@drift247.africa" className="text-[#22437d] font-medium hover:underline">hello@drift247.africa</a></p>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
