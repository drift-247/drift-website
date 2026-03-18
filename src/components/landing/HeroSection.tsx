import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaitlistModal } from "./WaitlistModal";
import { Shield, Users, CreditCard, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustIndicators = [
  { icon: Shield, label: "Secure Wallet" },
  { icon: Users, label: "Verified Users" },
  { icon: CreditCard, label: "Transparent Pricing" },
  { icon: ShieldCheck, label: "Built-In Safety" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const carRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-badge", { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 });
      gsap.fromTo(".hero-headline", { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 0.25 });
      gsap.fromTo(".hero-sub", { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 });
      gsap.fromTo(".hero-body", { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.5 });
      gsap.fromTo(".hero-buttons", { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.6 });
      gsap.fromTo(".trust-indicators", { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.75 });
      gsap.fromTo(".hero-image-panel", { scale: 0.96, opacity: 0, x: 30 },
        { scale: 1, opacity: 1, x: 0, duration: 1.1, ease: "expo.out", delay: 0.2 });

      // Car drives in from bottom
      gsap.fromTo(".road-car",
        { attr: { transform: "translate(258, 620)" }, opacity: 0 },
        { attr: { transform: "translate(258, 460)" }, opacity: 1, duration: 1.6, ease: "power2.out", delay: 1.0 }
      );

      // Subtle parallax on scroll
      gsap.to(".hero-image-panel", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 60,
        ease: "none",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-white overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#b1c1cc15_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="hero-badge inline-flex items-center gap-2 w-fit">
              <span className="inline-flex items-center gap-1.5 bg-[#22437d]/8 text-[#22437d] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#22437d]/20 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22437d] animate-pulse" />
                Now Launching in Nigeria
              </span>
            </div>

            <h1 className="hero-headline text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[#0f1c2e] leading-[1.1] tracking-tight">
              A Smarter, Safer
              <br />
              <span className="text-[#22437d]">Way to Ride.</span>
            </h1>

            <p className="hero-sub text-base md:text-lg font-semibold text-[#0f1c2e] leading-snug">
              Secure payments. Verified identities. Transparent trips -{" "}
              <span className="text-[#22437d]">built for trust from the ground up.</span>
            </p>

            <p className="hero-body text-[#4a5568] text-base leading-relaxed">
              Drift247 connects riders and drivers through wallet-protected
              payments and identity-driven safety to create a more reliable
              ride marketplace experience.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-3 pt-2">
              <WaitlistModal>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-[#22437d] text-white font-semibold rounded-xl text-sm shadow-lg shadow-[#22437d]/25 hover:bg-[#1a3464] transition-all duration-300"
                >
                  Join the Waitlist
                </motion.button>
              </WaitlistModal>

              <motion.a
                href="#drivers"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-white text-[#22437d] font-semibold rounded-xl text-sm border-2 border-[#22437d] hover:bg-[#22437d] hover:text-white transition-all duration-300 text-center"
              >
                Drive with Drift247
              </motion.a>
            </div>

            <div className="trust-indicators grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#b1c1cc]/40">
              {trustIndicators.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-9 h-9 rounded-lg bg-[#22437d]/8 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#22437d]" strokeWidth={1.8} />
                  </div>
                  <span className="text-[#0f1c2e] text-xs font-semibold leading-tight">{label}</span>
                  <span className="text-[#4a5568] text-[10px] leading-tight">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Road + Car Illustration ── */}
          <div className="hero-image-panel relative w-full h-[420px] md:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden bg-[#dde8ee]">
            <svg
              viewBox="0 0 600 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="600" height="700" fill="#dde8ee" />
              <line x1="0" y1="280" x2="600" y2="280" stroke="#c5d5dd" strokeWidth="1" />

              {/* Road */}
              <path d="M 230 700 L 275 280 L 325 280 L 370 700 Z" fill="#3d3d3d" />
              <path d="M 230 700 L 275 280" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.6" />
              <path d="M 370 700 L 325 280" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.6" />
              <line x1="300" y1="700" x2="300" y2="280" stroke="#ffffff" strokeWidth="3" strokeDasharray="30 20" strokeOpacity="0.9" />

              {/* Road markings */}
              <path d="M 283 600 L 317 600 L 316 568 L 284 568 Z" fill="#ffffff" fillOpacity="0.7" />
              <path d="M 287 520 L 313 520 L 312 494 L 288 494 Z" fill="#ffffff" fillOpacity="0.65" />
              <path d="M 291 440 L 309 440 L 308 419 L 292 419 Z" fill="#ffffff" fillOpacity="0.55" />
              <path d="M 294 386 L 306 386 L 305 369 L 295 369 Z" fill="#ffffff" fillOpacity="0.45" />
              <path d="M 296 356 L 304 356 L 304 343 L 296 343 Z" fill="#ffffff" fillOpacity="0.35" />

              {/* ── Car on the road ── */}
              <g className="road-car" transform="translate(258, 460)">
                {/* Shadow */}
                <ellipse cx="42" cy="62" rx="38" ry="6" fill="#000000" fillOpacity="0.15" />
                {/* Car body */}
                <rect x="4" y="22" width="76" height="30" rx="5" fill="#22437d" />
                {/* Cabin/roof */}
                <path d="M 16 22 L 24 6 L 60 6 L 68 22 Z" fill="#1a3464" />
                {/* Windshield front */}
                <path d="M 22 22 L 28 9 L 56 9 L 62 22 Z" fill="#b1c1cc" fillOpacity="0.55" />
                {/* Windows */}
                <rect x="26" y="10" width="13" height="8" rx="1.5" fill="#dde8ee" fillOpacity="0.75" />
                <rect x="45" y="10" width="13" height="8" rx="1.5" fill="#dde8ee" fillOpacity="0.75" />
                {/* Wheels */}
                <circle cx="20" cy="52" r="10" fill="#111111" />
                <circle cx="20" cy="52" r="6" fill="#444444" />
                <circle cx="20" cy="52" r="2.5" fill="#777777" />
                <circle cx="64" cy="52" r="10" fill="#111111" />
                <circle cx="64" cy="52" r="6" fill="#444444" />
                <circle cx="64" cy="52" r="2.5" fill="#777777" />
                {/* Headlights */}
                <rect x="78" y="28" width="5" height="5" rx="1" fill="#fff9c4" fillOpacity="0.95" />
                <rect x="78" y="36" width="5" height="4" rx="1" fill="#ffecb3" fillOpacity="0.8" />
                {/* Taillights */}
                <rect x="1" y="28" width="5" height="5" rx="1" fill="#ff5252" fillOpacity="0.95" />
                <rect x="1" y="36" width="5" height="4" rx="1" fill="#ff1744" fillOpacity="0.8" />
                {/* Door divider */}
                <line x1="42" y1="23" x2="42" y2="50" stroke="#1a3464" strokeWidth="1.5" strokeOpacity="0.6" />
                {/* Door handles */}
                <rect x="30" y="34" width="9" height="2.5" rx="1" fill="#b1c1cc" fillOpacity="0.7" />
                <rect x="46" y="34" width="9" height="2.5" rx="1" fill="#b1c1cc" fillOpacity="0.7" />
                {/* Drift247 branding stripe */}
                <rect x="4" y="35" width="76" height="3" rx="1" fill="#b1c1cc" fillOpacity="0.25" />
              </g>
            </svg>

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#b1c1cc]/15 via-transparent to-transparent pointer-events-none rounded-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}