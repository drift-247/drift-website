import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const CITIES = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Benin City",
  "Enugu",
  "Kaduna",
  "Owerri",
  "Uyo",
  "Other",
];

type UserType = "Rider" | "Driver";

export default function WaitlistSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [userType, setUserType] = useState<UserType>("Rider");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    agree: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) return;
    setStatus("submitting");

    try {
      const res = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfuc1OjtfnVk0Xu5xrPHzwmGI398Ty562d4aybB_o1VxMKkCg/viewform?embedded=true", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userType }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", phone: "", city: "", agree: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="early-access"
      ref={ref}
      className="w-full py-20 md:py-28 bg-[#f7f9fb]"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mb-3">
              Be Among the First to Experience Drift247
            </h2>
            <p className="text-[#4a5568] text-base">
              Join our waitlist for early access updates, launch announcements, and exclusive onboarding opportunities.
            </p>
          </div>

          {/* Form Card */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-[#b1c1cc]/40 p-10 flex flex-col items-center gap-4 text-center shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0f1c2e]">You&apos;re on the list!</h3>
              <p className="text-[#4a5568] text-sm max-w-sm">
                We&apos;ll reach out with early access updates and launch announcements. Welcome to Drift247.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[#b1c1cc]/40 p-8 md:p-10 shadow-sm flex flex-col gap-5"
            >
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] placeholder:text-[#4a5568]/50 focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@address.com"
                    required
                    className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] placeholder:text-[#4a5568]/50 focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone + I am a */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234"
                    required
                    className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] placeholder:text-[#4a5568]/50 focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                    I am a...
                  </label>
                  <div className="flex gap-2 h-11.5">
                    {(["Rider", "Driver"] as UserType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setUserType(type)}
                        className={`flex-1 rounded-lg border text-sm font-semibold transition-all duration-200 ${
                          userType === type
                            ? "bg-[#22437d] text-white border-[#22437d] shadow-sm"
                            : "bg-white text-[#4a5568] border-[#b1c1cc]/60 hover:border-[#22437d]/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 3: City */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#0f1c2e] uppercase tracking-wide">
                  Preferred City
                </label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#b1c1cc]/60 rounded-lg px-4 py-3 text-sm text-[#0f1c2e] focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all bg-white appearance-none"
                >
                  <option value="" disabled>Select your city</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded border-[#b1c1cc] accent-[#22437d] cursor-pointer"
                />
                <span className="text-sm text-[#4a5568] leading-relaxed group-hover:text-[#0f1c2e] transition-colors">
                  I agree to receive updates from Drift247
                </span>
              </label>

              {/* Error state */}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={!form.agree || status === "submitting"}
                whileHover={{ scale: form.agree ? 1.02 : 1 }}
                whileTap={{ scale: form.agree ? 0.98 : 1 }}
                className="w-full py-4 bg-[#22437d] text-white font-semibold rounded-xl text-sm hover:bg-[#1a3464] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#22437d]/20"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Early Access"
                )}
              </motion.button>

              {/* Note */}
              <p className="text-center text-[#4a5568] text-xs">
                Your information will only be used for launch communications.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}