import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Loader2,
  MapPin,
  WalletCards,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FORM_ID = "1FAIpQLScjBJD6djTvr45Xz4sWll99kNXGi_NfKEuwQgn2i9UESjAkFQ";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

const VEHICLE_TYPES = [
  "Car",
  "Minivan",
  "Courier Bike",
  "Tricycle (Keke)",
  "Motorcycle (Okada)",
  "Other",
];

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
  "Abia",
  "Other",
];

const driverBenefits = [
  {
    icon: Handshake,
    title: "Fairer platform experience",
    desc: "Built around respect, clarity, and a better working relationship with drivers.",
  },
  {
    icon: WalletCards,
    title: "Clear earnings visibility",
    desc: "Get better visibility into your trips, earnings, and payout updates as you drive.",
  },
  {
    icon: MapPin,
    title: "Growth opportunities",
    desc: "Join early as Drift247 prepares to launch across key Nigerian cities.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured support",
    desc: "Clearer processes for onboarding, communication, and issue handling.",
  },
];

export default function DriverSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    vehicleType: "",
    city: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (status === "error") setStatus("idle");

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const params = new URLSearchParams({
        "entry.119295584": form.fullName,
        "entry.370873925": form.phone,
        "entry.757177585": form.vehicleType,
        "entry.1332243654": form.city,
      });

      const iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe_driver";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const formEl = document.createElement("form");
      formEl.method = "POST";
      formEl.action = FORM_URL;
      formEl.target = "hidden_iframe_driver";

      params.forEach((value, key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        formEl.appendChild(input);
      });

      document.body.appendChild(formEl);
      formEl.submit();

      setTimeout(() => {
        document.body.removeChild(iframe);
        document.body.removeChild(formEl);
      }, 2000);

      setStatus("success");
      setForm({ fullName: "", phone: "", vehicleType: "", city: "" });
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".driver-left",
        { x: -42, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".driver-right",
        { x: 42, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".driver-benefit",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        }
      );

      gsap.fromTo(
        ".driver-form-field",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="drivers"
      className="relative w-full overflow-hidden border-t border-[#b1c1cc]/30 bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#d6e4f7]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#22437d]/[0.07] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="driver-left flex flex-col gap-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-[#f6f9fc] px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
                  Driver Community
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
                Drive with
                <span className="text-[#22437d]"> Drift247</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4a5568] md:text-lg">
                Join a professional driver community built around fairness,
                clearer expectations, and better support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {driverBenefits.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="driver-benefit rounded-3xl border border-[#b1c1cc]/40 bg-white/85 p-5 shadow-sm shadow-[#22437d]/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#22437d]/25 hover:shadow-xl hover:shadow-[#22437d]/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#22437d]/[0.08]">
                    <Icon className="h-5 w-5 text-[#22437d]" strokeWidth={1.9} />
                  </div>

                  <p className="text-sm font-bold text-[#0f1c2e]">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Founder Quote */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#22437d] p-6 shadow-xl shadow-[#22437d]/15">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/[0.08] blur-3xl" />

              <p className="relative text-sm italic leading-relaxed text-white md:text-base">
                “We’re building Drift247 so riders can move comfortably and
                drivers can work with more clarity, trust, and respect.”
              </p>

              <p className="relative mt-3 text-xs font-semibold text-[#d6e4f7]">
                — Founder &amp; CEO, Drift247
              </p>
            </div>
          </div>

          {/* Right Application Form */}
          <div className="driver-right">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#b1c1cc]/45 bg-white/90 p-7 shadow-2xl shadow-[#22437d]/10 backdrop-blur-sm md:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d6e4f7]/70 blur-3xl" />

              <div className="relative mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
                  Driver Application
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#0f1c2e]">
                  Start your driver interest form
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                  Share your details and the Drift247 team will follow up with
                  onboarding steps as launch plans progress.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex flex-col items-center gap-3 rounded-3xl border border-green-100 bg-green-50/70 px-6 py-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                  </div>

                  <p className="font-bold text-[#0f1c2e]">
                    Application received!
                  </p>

                  <p className="max-w-sm text-sm leading-relaxed text-[#4a5568]">
                    Thank you for your interest in driving with Drift247. We&apos;ll
                    be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                  {/* Full Name */}
                  <div className="driver-form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-xl border border-[#b1c1cc]/60 px-4 py-3 text-sm text-[#0f1c2e] transition-all placeholder:text-[#4a5568]/45 focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="driver-form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234"
                      required
                      className="w-full rounded-xl border border-[#b1c1cc]/60 px-4 py-3 text-sm text-[#0f1c2e] transition-all placeholder:text-[#4a5568]/45 focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div className="driver-form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={form.vehicleType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#b1c1cc]/60 bg-white px-4 py-3 text-sm text-[#0f1c2e] transition-all focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                    >
                      <option value="" disabled>
                        Select vehicle type
                      </option>
                      {VEHICLE_TYPES.map((vehicle) => (
                        <option key={vehicle} value={vehicle}>
                          {vehicle}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div className="driver-form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                      City
                    </label>
                    <select
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#b1c1cc]/60 bg-white px-4 py-3 text-sm text-[#0f1c2e] transition-all focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                    >
                      <option value="" disabled>
                        Select your city
                      </option>
                      {CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {status === "error" && (
                    <p className="text-center text-sm text-red-500">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#22437d] py-3.5 text-sm font-semibold text-white shadow-md shadow-[#22437d]/20 transition-all duration-300 hover:bg-[#1a3464] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Start Application"
                    )}
                  </motion.button>

                  <p className="text-center text-xs leading-relaxed text-[#4a5568]">
                    Your information will only be used for Drift247 driver
                    onboarding communications.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}