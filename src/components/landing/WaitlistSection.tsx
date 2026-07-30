import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  CarFront,
  CheckCircle,
  ChevronDown,
  Loader2,
  MapPin,
  Sparkles,
  UserRound,
} from "lucide-react";

const FORM_ID = "1FAIpQLSfuc1OjtfnVk0Xu5xrPHzwmGI398Ty562d4aybB_o1VxMKkCg";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

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

const userTypes: {
  type: UserType;
  icon: typeof UserRound;
  label: string;
  desc: string;
}[] = [
  {
    type: "Rider",
    icon: UserRound,
    label: "Rider",
    desc: "I want ride updates",
  },
  {
    type: "Driver",
    icon: CarFront,
    label: "Driver",
    desc: "I want onboarding info",
  },
];

const waitlistHighlights = [
  "Launch updates",
  "Early access announcements",
  "City availability alerts",
];

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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (status === "error") setStatus("idle");

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.agree) return;

    setStatus("submitting");

    try {
      const params = new URLSearchParams({
        "entry.1951330327": form.fullName,
        "entry.1683944753": form.email,
        "entry.896594511": form.phone,
        "entry.1900182679": userType,
        "entry.762012381": form.city,
        "entry.1762554219": "Yes",
      });

      const iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const formEl = document.createElement("form");
      formEl.method = "POST";
      formEl.action = FORM_URL;
      formEl.target = "hidden_iframe";

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
      setUserType("Rider");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        agree: false,
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="early-access"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#f6f9fc] py-24 md:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#d6e4f7]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#22437d]/[0.08] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
        >
          {/* Left: CTA Copy */}
          <div className="flex flex-col gap-7">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-white/80 px-4 py-2 shadow-sm shadow-[#22437d]/5">
                <Sparkles className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
                  Early Access
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
                Be among the first to
                <span className="text-[#22437d]"> Drift in Comfort.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4a5568] md:text-lg">
                Join our waitlist for launch updates, early access announcements,
                and rider or driver onboarding opportunities.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {waitlistHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#b1c1cc]/40 bg-white/80 px-4 py-3 shadow-sm shadow-[#22437d]/5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#22437d]" />
                    <span className="text-sm font-semibold text-[#0f1c2e]">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-[#22437d]/10 bg-white/70 p-5 shadow-sm shadow-[#22437d]/5">
              <p className="text-sm font-semibold leading-relaxed text-[#0f1c2e]">
                Whether you plan to ride with Drift247 or drive with us, this is
                the best place to stay connected before launch.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2rem] border border-green-100 bg-white p-8 text-center shadow-2xl shadow-[#22437d]/10 md:p-10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#0f1c2e]">
                  You&apos;re on the list!
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#4a5568]">
                  We&apos;ll reach out with Drift247 launch updates, early access
                  information, and relevant onboarding announcements.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 rounded-xl border border-[#22437d]/20 bg-white px-6 py-3 text-sm font-semibold text-[#22437d] transition-all hover:bg-[#22437d] hover:text-white"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-[2rem] border border-[#b1c1cc]/45 bg-white/90 p-7 shadow-2xl shadow-[#22437d]/10 backdrop-blur-sm md:p-8 lg:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d6e4f7]/80 blur-3xl" />

                <div className="relative mb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
                    Join the Waitlist
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#0f1c2e]">
                    Get early access updates
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                    Tell us how you want to use Drift247 and we&apos;ll keep you
                    updated as launch plans progress.
                  </p>
                </div>

                <div className="relative flex flex-col gap-5">
                  {/* User Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                      I am a...
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {userTypes.map(({ type, icon: Icon, label, desc }) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setUserType(type)}
                          className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
                            userType === type
                              ? "border-[#22437d] bg-[#22437d] text-white shadow-md shadow-[#22437d]/20"
                              : "border-[#b1c1cc]/50 bg-white text-[#0f1c2e] hover:border-[#22437d]/35"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                                userType === type
                                  ? "bg-white/15"
                                  : "bg-[#22437d]/[0.08]"
                              }`}
                            >
                              <Icon
                                className={`h-5 w-5 ${
                                  userType === type
                                    ? "text-white"
                                    : "text-[#22437d]"
                                }`}
                                strokeWidth={1.9}
                              />
                            </div>

                            <div>
                              <p className="text-sm font-bold">{label}</p>
                              <p
                                className={`mt-1 text-xs leading-relaxed ${
                                  userType === type
                                    ? "text-white/70"
                                    : "text-[#4a5568]"
                                }`}
                              >
                                {desc}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full rounded-xl border border-[#b1c1cc]/60 px-4 py-3 text-sm text-[#0f1c2e] transition-all placeholder:text-[#4a5568]/45 focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@address.com"
                        required
                        className="w-full rounded-xl border border-[#b1c1cc]/60 px-4 py-3 text-sm text-[#0f1c2e] transition-all placeholder:text-[#4a5568]/45 focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                      />
                    </div>
                  </div>

                  {/* Phone + City */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
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

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wide text-[#0f1c2e]">
                        Preferred City
                      </label>

                      <div className="relative">
                        <select
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-[#b1c1cc]/60 bg-white px-4 py-3 pr-10 text-sm text-[#0f1c2e] transition-all focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
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

                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a5568]" />
                      </div>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#b1c1cc]/40 bg-[#f6f9fc] p-4">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#b1c1cc] accent-[#22437d]"
                    />

                    <span className="text-sm leading-relaxed text-[#4a5568]">
                      I agree to receive updates from Drift247.
                    </span>
                  </label>

                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-500">
                      Something went wrong. Please try again or email us at
                      hello@drift247.africa
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={!form.agree || status === "submitting"}
                    whileHover={{ scale: form.agree ? 1.02 : 1 }}
                    whileTap={{ scale: form.agree ? 0.98 : 1 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22437d] py-4 text-sm font-semibold text-white shadow-lg shadow-[#22437d]/20 transition-all duration-300 hover:bg-[#1a3464] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get Early Access"
                    )}
                  </motion.button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-xs leading-relaxed text-[#4a5568]">
                    <MapPin className="h-3.5 w-3.5 text-[#22437d]" />
                    Your information will only be used for Drift247 launch communications.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}