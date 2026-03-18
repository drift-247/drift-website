import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";

export const Route = createFileRoute("/legal/terms-of-service")({
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-[#0f1c2e] flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-3xl">
        <div className="mb-10">
          <span className="text-xs font-semibold text-[#22437d] uppercase tracking-widest">Legal</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mt-2 mb-2">Terms of Service</h1>
          <p className="text-[#4a5568] text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-8 text-[#4a5568] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the Drift247 platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our platform.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">2. Use of the Platform</h2>
            <p>Drift247 provides a ride marketplace connecting riders and drivers. You agree to use the platform only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the service.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">3. Wallet & Payments</h2>
            <p>All trip payments are processed through the Drift247 secure wallet system. Funds are held in escrow during active trips and released immediately upon trip completion. Drift247 does not hold funds beyond the duration of a trip without user consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">4. User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. You must notify us immediately of any unauthorized use of your account.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">5. Dispute Resolution</h2>
            <p>Any disputes arising from the use of our platform will be handled through our structured dispute resolution process. We are committed to fair and transparent resolution for both riders and drivers.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">6. Limitation of Liability</h2>
            <p>Driving Africa Digital Services Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Drift247 platform beyond what is required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">7. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:hello@drift247.africa" className="text-[#22437d] font-medium hover:underline">hello@drift247@africa</a></p>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}