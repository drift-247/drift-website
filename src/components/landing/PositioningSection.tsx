import { useEffect, useRef } from "react";
import { CarFront, Handshake, Route, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const positioningPoints = [
  {
    icon: Users,
    title: "For Riders",
    desc: "A smoother way to move with clearer trips and a more dependable ride experience.",
  },
  {
    icon: CarFront,
    title: "For Drivers",
    desc: "A platform experience built around clarity, respect, and better structure.",
  },
  {
    icon: Route,
    title: "For Everyday Movement",
    desc: "Designed for the daily realities of moving across Nigerian cities.",
  },
];

export default function PositioningSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".positioning-intro",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".positioning-card",
        { y: 32, opacity: 0 },
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

      gsap.fromTo(
        ".positioning-quote",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 62%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-y border-[#b1c1cc]/30 bg-[#f6f9fc] py-20 md:py-24"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#22437d]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#d6e4f7]/80 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {/* Intro */}
          <div className="positioning-intro mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-white/80 px-4 py-2 shadow-sm shadow-[#22437d]/5">
              <Handshake className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
                Built Around People
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
              Mobility should feel clear, comfortable, and dependable —
              <span className="text-[#22437d]"> for everyone involved.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#4a5568] md:text-lg">
              Drift247 is designed around the everyday realities of riders and
              drivers. From trip clarity to driver onboarding and rider-driver trust, 
              we are building a mobility experience that feels more
              balanced, more reliable, and easier to trust.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {positioningPoints.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="positioning-card group rounded-3xl border border-[#b1c1cc]/40 bg-white/85 p-6 shadow-sm shadow-[#22437d]/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#22437d]/25 hover:shadow-xl hover:shadow-[#22437d]/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22437d]/[0.08] transition-colors duration-300 group-hover:bg-[#22437d]">
                  <Icon
                    className="h-5 w-5 text-[#22437d] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.9}
                  />
                </div>

                <h3 className="text-base font-bold text-[#0f1c2e]">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="positioning-quote mx-auto mt-12 max-w-2xl rounded-3xl border border-[#22437d]/10 bg-white/70 px-6 py-5 text-center shadow-sm shadow-[#22437d]/5 backdrop-blur-sm">
            <p className="text-base font-semibold text-[#0f1c2e] md:text-lg">
              A better ride experience starts with people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}