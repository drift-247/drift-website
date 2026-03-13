import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cities = [
  { name: "Lagos", note: "Commercial Capital" },
  { name: "Abuja", note: "Federal Capital" },
  { name: "Port Harcourt", note: "Garden City" },
];

export default function ExpansionSection() {
  const sectionRef = useRef<any | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expansion-header",
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
        ".city-card",
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
      className="w-full py-24 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="expansion-header space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Launching Soon in Select Cities
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We're preparing for a structured soft launch in Nigeria's most
              vibrant cities. Join the waitlist to receive early access updates.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          {cities.map(({ name, note }) => (
            <div
              key={name}
              className="city-card group flex flex-col items-center gap-4 bg-gradient-to-br from-white to-blue-50/30 border border-slate-200 rounded-3xl px-8 py-10 hover:border-[#003366]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#003366]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#003366] group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-[#003366] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-2xl font-extrabold text-slate-900 group-hover:text-[#003366] transition-colors">
                {name}
              </span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                {note}
              </span>
              <div className="w-8 h-1 bg-gradient-to-r from-[#003366] to-[#003366]/30 rounded-full group-hover:w-12 transition-all duration-300 mt-2" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 font-medium">
            Can't see your city?{" "}
            <span className="text-[#003366] font-bold">Join the waitlist</span>{" "}
            for launch announcements.
          </p>
        </div>
      </div>
    </section>
  );
}
