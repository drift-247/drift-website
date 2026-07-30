import { useEffect, useRef } from "react";
import {
  Activity,
  CheckCircle2,
  CreditCard,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustFeatures = [
  "Protect user information",
  "Support clear ride payment handling",
  "Flag unusual activity",
  "Maintain clear trip and earnings records",
];

const trustLayers = [
  {
    icon: ShieldCheck,
    title: "Verified onboarding",
    desc: "Structured checks that support a more trusted ride experience.",
  },
  {
    icon: CreditCard,
    title: "Clear payment handling",
    desc: "Ride payment processes designed for clarity and confidence.",
  },
  {
    icon: FileText,
    title: "Clear records",
    desc: "Trip and payment information users can better understand.",
  },
];

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-left",
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
        ".trust-right",
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
        ".trust-point",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        }
      );

      gsap.fromTo(
        ".trust-layer-card",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        }
      );

      gsap.to(".trust-orb", {
        scale: 1.08,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="security"
      className="relative w-full overflow-hidden border-t border-[#1a3464] bg-[#22437d] py-24 md:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/[0.08] blur-3xl" />
      <div className="trust-orb pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#d6e4f7]/[0.16] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.10)_0%,_transparent_45%)]" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="trust-left flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#d6e4f7]" strokeWidth={2} />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6e4f7]">
                Built on Trust
              </span>
            </div>

            <div>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Trust is built into every Drift247 experience.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#d6e4f7] md:text-lg">
                Behind every ride, Drift247 is designed with practical systems
                that support secure payments, clear records, responsible access,
                and better accountability.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {trustFeatures.map((feature) => (
                <div
                  key={feature}
                  className="trust-point flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-sm text-white backdrop-blur-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d6e4f7]"
                    strokeWidth={2}
                  />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm italic leading-relaxed text-white/65 md:text-base">
                “A better ride experience starts with trust.”
              </p>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="trust-right flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-[#0f1c2e]/25 backdrop-blur-md md:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#d6e4f7]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/[0.08] blur-3xl" />

              {/* Top status card */}
              <div className="relative rounded-[1.5rem] border border-white/10 bg-[#1a3464]/80 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#22437d]">
                      <LockKeyhole className="h-5 w-5" strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Drift247 Trust Layer
                      </p>
                      <p className="text-xs text-white/55">
                        Designed for clearer, more dependable rides
                      </p>
                    </div>
                  </div>

                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#d6e4f7]" />
                </div>

                <div className="grid gap-3">
                  {trustLayers.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="trust-layer-card rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                    >
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.12]">
                          <Icon
                            className="h-4 w-4 text-[#d6e4f7]"
                            strokeWidth={2}
                          />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white">{title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-white/60">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom mini panel */}
              <div className="relative mt-4 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 sm:grid-cols-[auto_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6e4f7] text-[#22437d]">
                  <Activity className="h-5 w-5" strokeWidth={2} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Built for accountability
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Practical systems for ride visibility, earnings clarity, and
                    better issue handling as the platform grows.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}