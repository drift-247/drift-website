import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PositioningSection() {
  const sectionRef = useRef<any | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".positioning-heading",
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
        ".positioning-body",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
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
      className="w-full py-20 md:py-24 bg-white border-b border-slate-100"
    >
      <div className="container px-4 md:px-8 mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="positioning-heading text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Built for Riders. Built for Drivers.{" "}
            <span className="text-[#003366]">Built on Trust.</span>
          </h2>

          <div className="positioning-body space-y-6">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Ride-hailing should be simple, secure, and fair — for everyone
              involved.
            </p>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Drift247 combines modern mobility technology with financial
              transparency and structured safety systems to create a more
              balanced ride marketplace experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
