import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const riderSteps = [
  {
    number: "1",
    title: "Request a ride instantly",
  },
  {
    number: "2",
    title: "Payment is securely protected until your trip is completed",
  },
  {
    number: "3",
    title: "Track your ride clearly in real time",
  },
  {
    number: "4",
    title: "Funds are released transparently after completion",
  },
];

const driverSteps = [
  {
    number: "1",
    title: "Accept ride requests confidently",
  },
  {
    number: "2",
    title: "Earn through a protected wallet system",
  },
  {
    number: "3",
    title: "Track your earnings with full clarity",
  },
  {
    number: "4",
    title: "Benefit from a fair, structured commission model",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".how-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".how-column",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".how-step",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
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
      <div className="container px-4 md:px-8 mx-auto">
        {/* Header */}
        <div className="how-header text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            How Drift247 Works
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Simple, transparent, and secure for everyone.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* RIDERS COLUMN */}
          <div className="how-column">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:border-[#003366]/30 transition-colors">
              {/* Header */}
              <div className="mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#003366]/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                  For Riders
                </h3>
                <p className="text-slate-600 font-medium">
                  Clear pricing. Protected payments. Peace of mind.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {riderSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="how-step flex gap-5 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center font-extrabold text-lg group-hover:shadow-lg group-hover:shadow-[#003366]/30 transition-all">
                        {step.number}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <p className="text-slate-700 font-semibold leading-relaxed">
                        {step.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* DRIVERS COLUMN */}
          <div className="how-column">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:border-[#003366]/30 transition-colors">
              {/* Header */}
              <div className="mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#003366]/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                  For Drivers
                </h3>
                <p className="text-slate-600 font-medium">
                  Your work. Your earnings. Fully transparent.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {driverSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="how-step flex gap-5 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center font-extrabold text-lg group-hover:shadow-lg group-hover:shadow-[#003366]/30 transition-all">
                        {step.number}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <p className="text-slate-700 font-semibold leading-relaxed">
                        {step.title}
                      </p>
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
