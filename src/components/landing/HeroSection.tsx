import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaitlistModal } from "./WaitlistModal";
import {
  Shield,
  Users,
  CreditCard,
  ShieldCheck,
  Apple,
  PlayCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustIndicators = [
  { icon: Shield, label: "Secure Wallet" },
  { icon: Users, label: "Verified Users" },
  { icon: CreditCard, label: "Transparent Pricing" },
  { icon: ShieldCheck, label: "Built-In Safety" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text entrance
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2 },
      )
        .fromTo(
          ".hero-headline",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.8",
        )
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.7",
        )
        .fromTo(
          ".hero-buttons",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.6",
        )
        .fromTo(
          ".trust-indicators",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.5",
        );

      // The "Tela" Style Image Entrance
      gsap.fromTo(
        ".hero-visual",
        { scale: 0.8, opacity: 0, y: 100, rotate: 5 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.5,
          ease: "expo.out",
          delay: 0.5,
        },
      );

      // Parallax effect on scroll
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -50,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#fcfdfe] overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Glows (Tela aesthetic) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#22437d]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Content ── */}
          <div className="flex flex-col gap-8 z-10">
            <div className="hero-badge">
              <span className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-full text-[#22437d] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live in Nigeria
              </span>
            </div>

            <h1 className="hero-headline text-5xl lg:text-[4rem] font-extrabold text-[#0f1c2e] leading-[1.05] tracking-tight">
              A Smarter, Safer <br />
              <span className="text-[#22437d]">Way to Ride.</span>
            </h1>

            <p className="hero-sub text-lg text-gray-600 max-w-lg leading-relaxed">
              Drift247 connects riders and drivers through{" "}
              <span className="text-[#0f1c2e] font-semibold">
                wallet-protected payments
              </span>{" "}
              and identity-verified safety.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <WaitlistModal>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#22437d] text-white font-bold rounded-full shadow-xl shadow-blue-900/20 flex items-center gap-2"
                >
                  Join the Waitlist
                </motion.button>
              </WaitlistModal>

              {/* App Store Style Buttons */}
              <div className="flex gap-2">
                <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  <Apple className="w-6 h-6 text-[#0f1c2e]" />
                </button>
                <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                  <PlayCircle className="w-6 h-6 text-[#0f1c2e]" />
                </button>
              </div>
            </div>

            <div className="trust-indicators pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <Icon className="w-5 h-5 text-[#22437d]" />
                  <span className="text-xs font-bold text-[#0f1c2e]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Layered Visual (The "Tela" Look) ── */}
          <div className="hero-visual relative flex items-center justify-center">
            {/* Decorative Background Card */}
            <div className="parallax-bg absolute w-[80%] h-[70%] bg-gradient-to-br from-[#22437d] to-[#1a3464] rounded-[40px] rotate-6 opacity-10" />

            {/* The Main Phone Image */}
            <div className="relative z-20 w-full max-w-[500px]">
              <img
                src="/your-hand-holding-phone.png" // Use a transparent PNG here
                alt="Drift247 App Interface"
                className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.12)]"
              />

              {/* Floating UI Elements (Optional for extra "pop") */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/4 -right-4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold">
                      SAFETY
                    </p>
                    <p className="text-sm font-bold text-[#0f1c2e]">
                      Driver Verified
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
