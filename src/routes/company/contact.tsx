import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/landing/SiteHeader";
import FooterSection from "../../components/landing/FooterSection";
import { useState } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/company/contact")({
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-6 md:px-10 lg:px-16 py-32 max-w-5xl">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f1c2e] mb-3">Contact Us</h1>
          <p className="text-[#4a5568] text-base">We&apos;d love to hear from you. Send us a message and we&apos;ll respond shortly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white border border-[#b1c1cc]/50 rounded-2xl p-8 shadow-sm">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                </div>
                <p className="font-bold text-[#0f1c2e] text-lg">Message sent!</p>
                <p className="text-[#4a5568] text-sm">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full border border-[#b1c1cc]/60 rounded-xl px-4 py-3 text-sm text-[#0f1c2e] focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full border border-[#b1c1cc]/60 rounded-xl px-4 py-3 text-sm text-[#0f1c2e] focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full border border-[#b1c1cc]/60 rounded-xl px-4 py-3 text-sm text-[#0f1c2e] focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-[#22437d] text-white font-semibold rounded-xl text-sm hover:bg-[#1a3464] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#22437d]/20"
                >
                  {status === "submitting" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : "Send Message →"}
                </motion.button>
              </form>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#f7f9fb] border border-[#b1c1cc]/40 rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#22437d] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#4a5568] uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:hello@drift247.africa" className="text-[#0f1c2e] text-sm font-medium hover:text-[#22437d] transition-colors">hello@drift247.africa</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#22437d] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#4a5568] uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/2348121443947" target="_blank" rel="noreferrer" className="text-[#0f1c2e] text-sm font-medium hover:text-[#22437d] transition-colors">+234 812 144 3947</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#22437d] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[#4a5568] uppercase tracking-wide mb-0.5">Address</p>
                  <p className="text-[#0f1c2e] text-sm font-medium">Regus - The Zone, Plot 9,<br />Gbagada Industrial Scheme, Gbagada, Lagos, Nigeria.</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-[#b1c1cc]/40 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7621263735828!2d3.3742745735044646!3d6.551687822838194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbf2138a777%3A0xa325393dceb4c180!2sRegus%20-%20Lagos%2C%20The%20Zone!5e0!3m2!1sen!2sus!4v1791535531904!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Drift247 Location"
              />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}