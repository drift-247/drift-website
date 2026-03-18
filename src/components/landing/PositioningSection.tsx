import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PositioningSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".positioning-content",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-14 md:py-16 bg-[#f0f4f7] border-b border-[#b1c1cc]/40"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-3xl">
        <div className="positioning-content text-center space-y-3">
          <p className="text-[#22437d] text-xs font-bold uppercase tracking-widest">
            Built on Trust
          </p>
          <p className="text-[#0f1c2e] text-base md:text-lg leading-relaxed">
            Ride-hailing should be simple, secure, and fair - for everyone involved.
            Drift247 combines modern mobility technology with financial transparency and 
            Structured safety systems to create a more balanced ride marketplace experience.

          </p>
        </div>
      </div>
    </section>
  );
}