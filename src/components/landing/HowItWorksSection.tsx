import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { UserRound, Car } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const riderSteps = [
  { number: "01", title: "Secure Your Wallet", desc: "Pre-fund your rides with our integrated wallet for seamless, cash-free transactions." },
  { number: "02", title: "Request & Match", desc: "Get matched with verified drivers who have passed extensive security screenings." },
  { number: "03", title: "Ride with Peace", desc: "Real-time trip monitoring and one-tap emergency response for every trip." },
];

const driverSteps = [
  { number: "01", title: "Get Verified", desc: "Join our network of elite drivers by completing a comprehensive background check." },
  { number: "02", title: "Accept Trips", desc: "Receive trip requests from verified riders. No more guessing who is entering your car." },
  { number: "03", title: "Instant Payments", desc: "Earn with confidence. Your funds are secured in escrow and released immediately after the trip." },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".how-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".how-column",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="w-full py-24 md:py-32 bg-white"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto">
        {/* Header */}
        <div className="how-header text-center mb-14 md:mb-18">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mb-3 leading-tight">
            How Drift247 Works
          </h2>
          <div className="w-10 h-1 bg-[#22437d] rounded-full mx-auto mb-4" />
          <p className="text-[#4a5568] text-base md:text-lg max-w-xl mx-auto">
            Simple, transparent, and secure for everyone.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* RIDERS COLUMN */}
          <div className="how-column">
            <div className="bg-white border border-[#b1c1cc]/50 rounded-2xl p-8 md:p-10 hover:border-[#22437d]/30 hover:shadow-sm transition-all duration-300 h-full">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#22437d]/10 flex items-center justify-center mb-4">
                  <UserRound className="w-5 h-5 text-[#22437d]" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f1c2e] mb-1.5">
                  For Riders
                </h3>
                <p className="text-[#4a5568] text-sm font-medium">
                  Clear pricing. Protected payments. Peace of mind.
                </p>
              </div>

              <div className="space-y-6">
                {riderSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-[#22437d] text-white flex items-center justify-center font-bold text-xs group-hover:shadow-md group-hover:shadow-[#22437d]/30 transition-all">
                        {step.number}
                      </div>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[#0f1c2e] font-semibold text-sm mb-0.5">{step.title}</p>
                      <p className="text-[#4a5568] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* DRIVERS COLUMN */}
          <div className="how-column">
            <div className="bg-white border border-[#b1c1cc]/50 rounded-2xl p-8 md:p-10 hover:border-[#22437d]/30 hover:shadow-sm transition-all duration-300 h-full">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#22437d]/10 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5 text-[#22437d]" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f1c2e] mb-1.5">
                  For Drivers
                </h3>
                <p className="text-[#4a5568] text-sm font-medium">
                  Your work. Your earnings. Fully transparent.
                </p>
              </div>

              <div className="space-y-6">
                {driverSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-[#22437d] text-white flex items-center justify-center font-bold text-xs group-hover:shadow-md group-hover:shadow-[#22437d]/30 transition-all">
                        {step.number}
                      </div>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[#0f1c2e] font-semibold text-sm mb-0.5">{step.title}</p>
                      <p className="text-[#4a5568] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}