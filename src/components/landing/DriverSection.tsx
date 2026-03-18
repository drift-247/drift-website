import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VEHICLE_TYPES = ["Car", "Minivan", "Tricycle (Keke)", "Motorcycle (Okada)", "Other"];
const CITIES = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Benin City", "Enugu", "Kaduna", "Owerri", "Uyo", "Other"];

const driverBenefits = [
  "Lower platform commissions",
  "Immediate earnings withdrawal",
  "Growth opportunities in launch cities",
  "Structured dispute handling",
];

export default function DriverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ fullName: "", vehicleType: "", city: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Replace with your actual endpoint or Google Form URL
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".driver-left",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".driver-right",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".driver-benefit",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="drivers"
      className="w-full py-24 md:py-32 bg-white border-t border-[#b1c1cc]/30"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Content ── */}
          <div className="driver-left flex flex-col gap-7">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#22437d] mb-3 leading-tight">
                Drive with Drift247
              </h2>
              <p className="text-[#4a5568] text-base leading-relaxed">
                Join the community of elite professional drivers. We offer better
                rates, superior safety, and instant payouts.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3.5">
              {driverBenefits.map((benefit, idx) => (
                <div key={idx} className="driver-benefit flex items-center gap-3 group">
                  <CheckCircle2 className="w-4 h-4 text-[#22437d] shrink-0" strokeWidth={2} />
                  <p className="text-[#0f1c2e] text-sm font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CEO Quote */}
            <div className="bg-[#f7f9fb] border border-[#b1c1cc]/40 rounded-xl p-5">
              <p className="text-[#0f1c2e] text-sm italic leading-relaxed">
                &quot;We built Drift247 because drivers deserve to be paid fairly and
                on time - and riders deserve to feel safe every single trip.
                Trust isn&apos;t a feature, it&apos;s the foundation.&quot;
              </p>
              <p className="text-[#22437d] text-xs font-semibold mt-2">— Founder & CEO, Drift247</p>
            </div>
          </div>

          {/* ── Right: Application Form ── */}
          <div className="driver-right">
            <div className="bg-white border border-[#b1c1cc]/50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#0f1c2e] mb-6">
                Driver Application
              </h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <p className="font-bold text-[#0f1c2e]">Application received!</p>
                  <p className="text-[#4a5568] text-sm">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] placeholder:text-[#4a5568]/50 focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={form.vehicleType}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all bg-white"
                    >
                      <option value="" disabled>Sedan</option>
                      {VEHICLE_TYPES.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                      City
                    </label>
                    <select
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all bg-white"
                    >
                      <option value="" disabled>Lagos</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-[#22437d] text-white font-semibold rounded-xl text-sm hover:bg-[#1a3464] transition-all duration-300 mt-2 flex items-center justify-center gap-2 shadow-md shadow-[#22437d]/20"
                  >
                    {status === "submitting" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      "Start Application"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}