import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldCheck, Lock, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const securityPoints = [
  {
    title: "Protect user data",
    description: "Bank-grade encryption and secure authentication protocols",
  },
  {
    title: "Prevent transaction abuse",
    description: "Advanced fraud detection and real-time monitoring systems",
  },
  {
    title: "Monitor abnormal activity",
    description: "AI-powered anomaly detection to identify suspicious behavior",
  },
  {
    title: "Maintain transparent financial records",
    description: "Immutable ledgers for all transactions and wallet movements",
  },
];

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".security-header",
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
        ".security-point",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".security-image",
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
      id="security"
      className="w-full py-24 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Images */}
          <div className="md:w-5/12 flex-shrink-0">
            <div className="security-image relative flex gap-4">
              {/* Left Image Stack */}
              <div className="w-1/2 space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square border-4 border-white">
                  <img
                    src="https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Security lock and protection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Image Stack */}
              <div className="w-1/2 space-y-4 mt-12">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square border-4 border-white">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Verified and secure transactions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Security Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#003366] text-white text-xs font-bold px-6 py-3 rounded-full shadow-xl whitespace-nowrap flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Bank-Grade Security
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-7/12">
            {/* Header */}
            <div className="security-header mb-10">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-6 h-6 text-[#003366]" />
                <span className="text-[#003366] font-bold uppercase tracking-widest text-xs">
                  Safety First
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Engineered With Security in Mind
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Drift247 is built with layered security and wallet risk controls
                designed to protect every member of our community.
              </p>
            </div>

            {/* Security Pillars */}
            <div className="space-y-5 mb-10">
              {securityPoints.map((point, idx) => (
                <div key={idx} className="security-point flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#003366]/10 flex items-center justify-center group-hover:bg-[#003366] transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-[#003366] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#003366] transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Statement */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-lg font-bold text-slate-900 italic">
                "Security isn't a feature. It's our foundation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
