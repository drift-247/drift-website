import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaitlistModal } from "./WaitlistModal";
import { CarFront, CreditCard, HeadphonesIcon, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustIndicators = [
  { icon: CarFront, label: "Comfortable Rides" },
  { icon: Users, label: "Verified Drivers" },
  { icon: CreditCard, label: "Clear Pricing" },
  { icon: HeadphonesIcon, label: "Reliable Support" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );

      gsap.fromTo(
        ".hero-headline",
        { y: 42, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".hero-sub",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.35 }
      );

      gsap.fromTo(
        ".hero-body",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.48 }
      );

      gsap.fromTo(
        ".hero-buttons",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.6 }
      );

      gsap.fromTo(
        ".trust-indicators",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.72 }
      );

      gsap.fromTo(
        ".hero-visual",
        { scale: 0.96, opacity: 0, x: 45 },
        { scale: 1, opacity: 1, x: 0, duration: 1.15, ease: "expo.out", delay: 0.25 }
      );

      gsap.fromTo(
        ".main-phone",
        { y: 24, rotate: -2, opacity: 0 },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.55,
        }
      );

      gsap.fromTo(
        ".floating-card",
        { y: 24, scale: 0.94, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.85,
        }
      );

      gsap.to(".main-phone", {
        y: -14,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb", {
        scale: 1.08,
        opacity: 0.85,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-visual", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
        y: 55,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,67,125,0.10)_0%,_transparent_42%),radial-gradient(ellipse_at_bottom_right,_rgba(214,228,247,0.75)_0%,_transparent_46%)]" />

      <div className="container relative z-10 mx-auto px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="hero-badge inline-flex w-fit items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#22437d]/20 bg-[#22437d]/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#22437d]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22437d]" />
                Launching Soon in Nigeria
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="hero-headline text-5xl font-bold leading-[0.98] tracking-tight text-[#0f1c2e] md:text-6xl lg:text-[5.25rem]">
                Drift in
                <br />
                <span className="text-[#22437d]">Comfort.</span>
              </h1>

              <p className="hero-sub max-w-xl text-lg font-semibold leading-snug text-[#0f1c2e] md:text-xl">
                Reliable rides. Clear trips. A customer-first mobility experience
                built for everyday movement.
              </p>

              <p className="hero-body max-w-xl text-base leading-relaxed text-[#4a5568] md:text-lg">
                Drift247 connects riders and drivers through verified onboarding,
                clearer trip details, and a more dependable ride experience
              </p>
            </div>

            <div className="hero-buttons flex flex-col gap-3 pt-2 sm:flex-row">
              <WaitlistModal>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-[#22437d] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#22437d]/25 transition-all duration-300 hover:bg-[#1a3464]"
                >
                  Join the Waitlist
                </motion.button>
              </WaitlistModal>

              <motion.a
                href="#drivers"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border-2 border-[#22437d] bg-white px-8 py-3.5 text-center text-sm font-semibold text-[#22437d] transition-all duration-300 hover:bg-[#22437d] hover:text-white"
              >
                Drive with Drift247
              </motion.a>
            </div>

            <div className="trust-indicators grid grid-cols-2 gap-3 border-t border-[#b1c1cc]/40 pt-4 sm:grid-cols-4">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22437d]/[0.08]">
                    <Icon
                      className="h-4 w-4 text-[#22437d]"
                      strokeWidth={1.8}
                    />
                  </div>
                  <span className="text-xs font-semibold leading-tight text-[#0f1c2e]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium Animated Product Visual */}
          <div className="hero-visual relative mx-auto h-[520px] w-full max-w-xl lg:h-[660px]">
            {/* Soft background frame */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#eef5fb] via-white to-[#d6e4f7] shadow-2xl shadow-[#22437d]/10">
              <div className="hero-orb absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#22437d]/[0.18] blur-3xl" />
              <div className="hero-orb absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#b1c1cc]/55 blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#22437d]/[0.12] to-transparent" />
            </div>

            {/* Decorative premium grid/glass layer */}
            <div className="absolute inset-6 rounded-[1.6rem] border border-white/70 bg-white/20 backdrop-blur-[2px]" />

            {/* Main phone mockup */}
            <div className="main-phone absolute left-1/2 top-1/2 w-[72%] max-w-[340px] -translate-x-1/2 -translate-y-1/2 md:w-[68%] lg:max-w-[380px]">
              <div className="relative">
                <div className="absolute inset-8 rounded-full bg-[#22437d]/25 blur-3xl" />
                <img
                  src="/mockup-1.png"
                  alt="Drift247 mobile app preview"
                  className="relative z-10 h-auto w-full rounded-[2rem] drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Floating feature card */}
            <div className="floating-card absolute bottom-20 left-3 w-[210px] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-[#22437d]/10 backdrop-blur-md md:left-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#22437d] text-white">
                <CarFront className="h-4 w-4" strokeWidth={2} />
              </div>
              <p className="text-sm font-bold text-[#0f1c2e]">
                Built for everyday movement
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#4a5568]">
                Comfort, reliability, and clearer ride experiences.
              </p>
            </div>

            {/* Small top pill */}
            <div className="floating-card absolute right-5 top-8 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-[#22437d] shadow-lg shadow-[#22437d]/10 backdrop-blur-md">
              Drift247 App Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}