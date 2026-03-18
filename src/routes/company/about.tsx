
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";

export const Route = createFileRoute("/company/about")({
  component: AboutUs,
});

function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-3xl">
        <div className="mb-10">
          <span className="text-xs font-semibold text-[#22437d] uppercase tracking-widest">Company</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mt-2 mb-4">About Drift247</h1>
        </div>
        <div className="space-y-6 text-[#4a5568] leading-relaxed">
          <p className="text-lg text-[#0f1c2e] font-medium">
            Drift247 is a safety-first ride-hailing marketplace built to solve the trust and transparency challenges that plague ride-hailing in Africa.
          </p>
          <p>We believe ride-hailing should be simple, secure, and fair - for both riders and drivers. Traditional platforms have left too many gaps: payment delays, identity gaps, and poor dispute resolution. Drift247 was built to fix that.</p>
          <p>By combining wallet-protected payments, biometric identity verification, and real-time financial transparency, we&apos;re creating a marketplace where trust isn&apos;t an afterthought - it&apos;s the foundation.</p>
          <div className="bg-[#f7f9fb] border border-[#b1c1cc]/40 rounded-2xl p-6 mt-8">
            <h3 className="font-bold text-[#0f1c2e] mb-2">Operated by</h3>
            <p className="font-semibold text-[#22437d]">Driving Africa Digital Services Ltd</p>
            <p className="text-sm mt-1">Abibattu Amoke Bello Close, Lekki-Ajah, Lagos, Nigeria</p>
            <a href="mailto:drivingafricadigital.ng@gmail.com" className="text-[#22437d] text-sm font-medium hover:underline mt-1 block">hello@drift247.africa</a>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}