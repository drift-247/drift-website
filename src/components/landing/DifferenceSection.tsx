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
    bg: "bg-blue-50",
    color: "text-[#003366]",
  },
  {
    icon: Banknote,
    title: "Transparent Financial Flows",
    desc: "Every trip payment is clearly tracked within your in-app wallet — no hidden deductions.",
    bg: "bg-emerald-50",
    color: "text-emerald-700",
  },
  {
    icon: Users,
    title: "Verified Community Model",
    desc: "Structured onboarding and verification improve trust between riders and drivers.",
    bg: "bg-violet-50",
    color: "text-violet-700",
  },
  {
    icon: HeadphonesIcon,
    title: "Clear Support & Dispute Resolution",
    desc: "Defined processes for trip issues, interruptions, and payment clarity — handled transparently.",
    bg: "bg-amber-50",
    color: "text-amber-700",
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".difference-header",
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
        ".difference-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
      className="w-full py-24 md:py-32 bg-slate-50 border-y border-slate-200/60"
    >
      <div className="container px-4 md:px-8 mx-auto">
        {/* Header */}
        <div className="difference-header text-center mb-16 md:mb-20">
          <div className="mb-4 flex justify-center">
            <span className="inline-block bg-white border border-slate-200 text-slate-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              Our Difference
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Designed for Security, Transparency, and Fairness
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Built on trust. Built to last.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map(({ icon: Icon, title, desc, bg, color }) => (
            <div
              key={title}
              className="difference-card bg-white p-8 md:p-9 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#003366]/30 transition-all duration-300 group flex flex-col gap-5"
            >
              {/* Icon Container */}
              <div
                className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-7 h-7 ${color}`} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-slate-900 text-base md:text-lg leading-tight group-hover:text-[#003366] transition-colors">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="pt-4 border-t border-slate-100 group-hover:border-[#003366]/20 transition-colors">
                <div className="w-8 h-1 bg-gradient-to-r from-[#003366] to-[#003366]/30 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
