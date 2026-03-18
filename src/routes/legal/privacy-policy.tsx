import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";

export const Route = createFileRoute("/legal/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#0f1c2e] flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-3xl">
        <div className="mb-10">
          <span className="text-xs font-semibold text-[#22437d] uppercase tracking-widest">Legal</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mt-2 mb-2">Privacy Policy</h1>
          <p className="text-[#4a5568] text-sm">Last updated: March 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-[#4a5568] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">1. Information We Collect</h2>
            <p>Drift247, operated by Driving Africa Digital Services Ltd, collects information you provide directly to us when you register for an account, use our services, or communicate with us. This includes your name, email address, phone number, location data, and payment information.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and ensure the safety and security of our platform. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">3. Data Security</h2>
            <p>We implement standard-grade encryption, secure authentication protocols, and continuous monitoring systems to protect your personal information. All payment data is processed through secure, PCI-compliant channels.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. You may also opt out of marketing communications. To exercise these rights, contact us at hello@drift247.africa</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">5. Cookies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">6. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@drift247.africa" className="text-[#22437d] font-medium hover:underline">hello@drift247.africa</a></p>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}