import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CarFront, CheckCircle2, UserRound } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const riderSteps = [
  {
    number: "01",
    title: "Join the Waitlist",
    desc: "Sign up to receive launch updates, early access information, and city availability announcements.",
  },
  {
    number: "02",
    title: "Request Your Ride",
    desc: "When Drift247 launches in your city, you’ll be able to request rides and connect with onboarded drivers.",
  },
  {
    number: "03",
    title: "Ride with Confidence",
    desc: "Enjoy clearer trip details, simple ride payments, and a more dependable way to move.",
  },
];

const driverSteps = [
  {
    number: "01",
    title: "Apply & Get Onboarded",
    desc: "Submit your details and begin Drift247’s structured driver onboarding and verification process.",
  },
  {
    number: "02",
    title: "Accept Ride Requests",
    desc: "Receive trip requests with clearer ride details and a more organized driver experience.",
  },
  {
    number: "03",
    title: "Track Your Earnings",
    desc: "Get better visibility into your trips, earnings, and payout updates as you drive with Drift247.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".how-header",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".how-card",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );

      gsap.fromTo(
        ".how-step",
        { x: -18, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 62%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d6e4f7]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-[#22437d]/[0.06] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="how-header mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-[#f6f9fc] px-4 py-2">
            <CheckCircle2 className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
            Simple for riders.
            <br className="hidden md:block" />
            <span className="text-[#22437d]">Clear for drivers.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] md:text-lg">
            Simple, clear, and built around everyday movement.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Riders Card */}
          <motion.div
            className="how-card group relative overflow-hidden rounded-[2rem] border border-[#b1c1cc]/45 bg-white p-7 shadow-sm shadow-[#22437d]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#22437d]/25 hover:shadow-xl hover:shadow-[#22437d]/10 md:p-10"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#d6e4f7]/70 blur-3xl" />

            <div className="relative mb-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22437d]/[0.08] transition-colors duration-300 group-hover:bg-[#22437d]">
                <UserRound
                  className="h-6 w-6 text-[#22437d] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.9}
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0f1c2e] md:text-3xl">
                For Riders
              </h3>

              <p className="mt-2 text-sm font-medium leading-relaxed text-[#4a5568] md:text-base">
                Clear trips. Comfortable rides. Reliable movement.
              </p>
            </div>

            <div className="relative space-y-7">
              {riderSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="how-step relative flex gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {index !== riderSteps.length - 1 && (
                    <div className="absolute left-5 top-11 h-[calc(100%+0.75rem)] w-px bg-[#b1c1cc]/45" />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22437d] text-xs font-bold text-white shadow-md shadow-[#22437d]/20">
                    {step.number}
                  </div>

                  <div className="pt-0.5">
                    <p className="text-sm font-bold text-[#0f1c2e] md:text-base">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Drivers Card */}
          <motion.div
            className="how-card group relative overflow-hidden rounded-[2rem] border border-[#b1c1cc]/45 bg-[#f8fbfd] p-7 shadow-sm shadow-[#22437d]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#22437d]/25 hover:shadow-xl hover:shadow-[#22437d]/10 md:p-10"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#22437d]/[0.07] blur-3xl" />

            <div className="relative mb-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22437d]/[0.08] transition-colors duration-300 group-hover:bg-[#22437d]">
                <CarFront
                  className="h-6 w-6 text-[#22437d] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.9}
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0f1c2e] md:text-3xl">
                For Drivers
              </h3>

              <p className="mt-2 text-sm font-medium leading-relaxed text-[#4a5568] md:text-base">
                Clear expectations. Better support. A platform built with drivers in mind.
              </p>
            </div>

            <div className="relative space-y-7">
              {driverSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="how-step relative flex gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {index !== driverSteps.length - 1 && (
                    <div className="absolute left-5 top-11 h-[calc(100%+0.75rem)] w-px bg-[#b1c1cc]/45" />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22437d] text-xs font-bold text-white shadow-md shadow-[#22437d]/20">
                    {step.number}
                  </div>

                  <div className="pt-0.5">
                    <p className="text-sm font-bold text-[#0f1c2e] md:text-base">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#22437d]/10 bg-[#f6f9fc] px-6 py-5 text-center">
          <p className="text-sm font-semibold leading-relaxed text-[#0f1c2e] md:text-base">
            Built to support both sides of the ride — the people moving and the people making movement possible.
          </p>
        </div>
      </div>
    </section>
  );
}