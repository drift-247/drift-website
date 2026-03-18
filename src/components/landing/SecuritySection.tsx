import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const securityFeatures = [
  "Protect user data",
  "Prevent transaction abuse",
  "Monitor abnormal activity",
  "Maintain transparent financial records",
];

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".security-left",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".security-right",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".security-point",
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
      id="security"
      className="w-full py-24 md:py-32 bg-[#22437d] border-t border-[#1a3464]"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="security-left flex flex-col gap-8">
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#b1c1cc]" strokeWidth={2} />
              <span className="text-[#b1c1cc] font-semibold uppercase tracking-widest text-xs">
                Our DNA
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Security isn&apos;t a feature—it&apos;s the foundation.
              </h2>
              <p className="text-[#b1c1cc] text-base leading-relaxed">
                Drift247 is built with layered security and wallet risk controls designed to:
              </p>
            </div>

            {/* Security feature pills */}
            <div className="grid grid-cols-2 gap-3">
              {securityFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-white text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#b1c1cc] shrink-0" strokeWidth={2} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm italic">
                &quot;Security isn&apos;t a feature. It&apos;s our foundation.&quot;
              </p>
            </div>
          </div>

          {/* ── Right: Shield Panel ── */}
          <div className="security-right flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-sm aspect-square rounded-2xl bg-[#1a3464] border border-white/10 flex items-center justify-center overflow-hidden"
            >
              {/* Background rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-white/5" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full border border-white/8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border border-white/10" />
              </div>

              {/* Shield SVG */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 8 L80 20 L80 48 C80 64 64 78 48 88 C32 78 16 64 16 48 L16 20 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M48 16 L72 26 L72 48 C72 60 60 72 48 80 C36 72 24 60 24 48 L24 26 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M48 24 L66 32 L66 48 C66 57 57 66 48 72 C39 66 30 57 30 48 L30 32 Z"
                    fill="white"
                    fillOpacity="0.08"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                  />
                  {/* Lock icon inside shield */}
                  <rect x="41" y="45" width="14" height="11" rx="2" fill="white" fillOpacity="0.8" />
                  <path d="M43 45 L43 41 C43 38.2 45.2 36 48 36 C50.8 36 53 38.2 53 41 L53 45" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="none" />
                  <circle cx="48" cy="51" r="1.5" fill="#22437d" />
                </svg>

                <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
                  Protected
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}