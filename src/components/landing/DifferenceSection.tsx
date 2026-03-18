import { useEffect, useRef } from "react";
import { Shield, Banknote, Users, HeadphonesIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "Security-Driven Infrastructure",
    desc: "Wallet protection, identity verification, and layered backend safeguards are integrated at the core of our platform.",
  },
  {
    icon: Banknote,
    title: "Transparent Financial Flows",
    desc: "Crystal clear pricing with automated settlements. No more disputes over fares.",
  },
  {
    icon: Users,
    title: "Verified Community Model",
    desc: "Structured onboarding and verification improve trust between riders and drivers.",
  },
  {
    icon: HeadphonesIcon,
    title: "Performance Analytics",
    desc: "Continuous monitoring of trip quality and safety metrics to maintain high standards.",
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".difference-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full py-16 md:py-20 bg-white"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="difference-card bg-white p-7 rounded-2xl border border-[#b1c1cc]/50 hover:border-[#22437d]/30 hover:shadow-sm transition-all duration-300 group flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-[#22437d]/8 rounded-xl flex items-center justify-center group-hover:bg-[#22437d]/15 transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#22437d]" strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-[#0f1c2e] text-sm leading-snug group-hover:text-[#22437d] transition-colors">
                  {title}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed flex-1">
                  {desc}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="pt-3 border-t border-[#b1c1cc]/30">
                <div className="w-8 h-0.5 bg-[#22437d]/40 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}