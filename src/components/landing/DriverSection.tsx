import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaitlistModal } from "./WaitlistModal";

gsap.registerPlugin(ScrollTrigger);

const driverBenefits = [
  "Secure earnings management with transparent wallet tracking",
  "Clear per-trip payout breakdown with no hidden deductions",
  "Transparent commission structure that respects your work",
  "Structured dispute handling and support processes",
  "Growth opportunities in launch cities with early partner incentives",
];

export default function DriverSection() {
  const sectionRef = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".driver-heading",
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
        ".driver-benefit",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".driver-image",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="drivers"
      className="w-full py-24 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Content */}
          <div className="flex-1 w-full lg:max-w-xl order-2 lg:order-1">
            <div className="driver-heading space-y-6 mb-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Drive With Confidence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join a platform that respects your profession and protects your
                earnings. Drift247 is built for drivers who value transparency,
                fairness, and security.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {driverBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="driver-benefit flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/20 flex items-center justify-center group-hover:bg-[#003366] transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-[#003366] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <WaitlistModal>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 h-14 text-base transition-all bg-[#003366] text-white shadow-lg shadow-[#003366]/20 hover:bg-[#002244]"
              >
                Apply as a Driver <ArrowRight className="w-4 h-4" />
              </motion.button>
            </WaitlistModal>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full relative order-1 lg:order-2">
            <div className="driver-image relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[600px]">
              <img
                src="https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Confident driver with Drift247"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8 text-white">
                <p className="font-bold text-xl mb-2">
                  "Finally, a platform that listens."
                </p>
                <p className="text-white/80 text-sm font-medium">
                  — Early Driver Partner
                </p>
              </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -z-10 -right-8 -bottom-8 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
