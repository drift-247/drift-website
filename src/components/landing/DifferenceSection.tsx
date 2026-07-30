import { useEffect, useRef } from "react";
import {
  Banknote,
  HeadphonesIcon,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: HeartHandshake,
    title: "Customer-First Ride Experience",
    desc: "Designed around real rider and driver needs, with comfort, clarity, and reliability at the center of every trip.",
  },
  {
    icon: Banknote,
    title: "Clear Pricing",
    desc: "Clearer trip pricing helps riders and drivers understand each ride better.",
  },
  {
    icon: Users,
    title: "Verified Driver Standards",
    desc: "Structured driver onboarding supports trust, professionalism, and a better ride experience.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Accountability",
    desc: "Built with clearer processes for trip quality, communication, and issue handling as the platform grows.",
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".difference-header",
        { y: 32, opacity: 0 },
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
        ".difference-card",
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative w-full overflow-hidden bg-[#f8fbfd] py-24 md:py-32"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#22437d]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#d6e4f7]/80 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="difference-header mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-white/80 px-4 py-2 shadow-sm shadow-[#22437d]/5">
            <ShieldCheck className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
              Features
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
            Why Drift247
            <span className="text-[#22437d]"> Feels Different</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] md:text-lg">
            Built for comfort, clarity, trust, and everyday reliability.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="difference-card group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-[#b1c1cc]/45 bg-white/90 p-7 shadow-sm shadow-[#22437d]/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#22437d]/25 hover:shadow-xl hover:shadow-[#22437d]/10"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6e4f7]/70 blur-2xl transition-all duration-300 group-hover:bg-[#22437d]/[0.12]" />

              {/* Icon */}
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22437d]/[0.08] transition-colors duration-300 group-hover:bg-[#22437d]">
                <Icon
                  className="h-5 w-5 text-[#22437d] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.8}
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col">
                <h3 className="text-base font-bold leading-snug text-[#0f1c2e] transition-colors duration-300 group-hover:text-[#22437d]">
                  {title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a5568]">
                  {desc}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="relative mt-7 border-t border-[#b1c1cc]/30 pt-4">
                <div className="h-0.5 w-9 rounded-full bg-[#22437d]/40 transition-all duration-300 group-hover:w-16 group-hover:bg-[#22437d]" />
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#22437d]/10 bg-white/75 px-6 py-5 text-center shadow-sm shadow-[#22437d]/5 backdrop-blur-sm">
          <p className="text-sm font-semibold leading-relaxed text-[#0f1c2e] md:text-base">
            Drift247 is not just built to move people. It is built to make movement feel better, clearer, and more dependable.
          </p>
        </div>
      </div>
    </section>
  );
}