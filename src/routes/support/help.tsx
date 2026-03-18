import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/support/help")({
  component: HelpCenter,
});

function HelpCenter() {
  const topics = [
    { title: "Getting Started", desc: "Account setup, app download, and first ride." },
    { title: "Payments & Wallet", desc: "Funding your wallet, trip payments, and refunds." },
    { title: "Trips & Bookings", desc: "Requesting rides, tracking, and cancellations." },
    { title: "Safety", desc: "Emergency contacts, incident reporting, and safe travel tips." },
    { title: "Driver Earnings", desc: "Payout schedules, commission structure, and withdrawals." },
    { title: "Account & Profile", desc: "Updating your details, verification, and privacy." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-4xl">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mb-3">Help Center</h1>
          <p className="text-[#4a5568] text-base">Find answers to common questions about Drift247.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          {topics.map(({ title, desc }) => (
            <div key={title} className="bg-[#f7f9fb] border border-[#b1c1cc]/40 rounded-2xl p-6 hover:border-[#22437d]/30 hover:shadow-sm transition-all cursor-pointer group">
              <h3 className="font-bold text-[#0f1c2e] text-sm mb-2 group-hover:text-[#22437d] transition-colors">{title}</h3>
              <p className="text-[#4a5568] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#22437d] rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-lg mb-2">Still need help?</h3>
          <p className="text-[#b1c1cc] text-sm mb-6">Our support team is available to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@drift247.africa" className="flex items-center gap-2 bg-white text-[#22437d] font-semibold rounded-xl px-6 py-3 text-sm hover:bg-[#b1c1cc] transition-all">
              <Mail className="w-4 h-4" /> Email Support
            </a>
            <a href="https://wa.me/2348121443947" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-xl px-6 py-3 text-sm hover:bg-white/20 transition-all">
              <Phone className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}