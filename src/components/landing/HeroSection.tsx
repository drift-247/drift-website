import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaitlistModal } from "./WaitlistModal";
import { Car, ShoppingBag, Users, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "rides",
    name: "Rides",
    icon: Car,
    description: "Get from A to B safely and affordably",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "delivery",
    name: "Delivery",
    icon: ShoppingBag,
    description: "Fresh groceries and packages delivered",
    color: "from-green-500 to-green-600",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "carshare",
    name: "Car-Sharing",
    icon: Users,
    description: "Share rides and save on costs",
    color: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "parcel",
    name: "Fast Parcel",
    icon: Zap,
    description: "Quick and reliable delivery service",
    color: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero Text Entrance Animations ──────────────────────────────
      gsap.fromTo(
        ".hero-headline",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.2,
        },
      );

      gsap.fromTo(
        ".hero-subheading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.35,
        },
      );

      gsap.fromTo(
        ".hero-buttons",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.5,
        },
      );

      // ── Hero Image Entrance & Parallax ────────────────────────────────
      gsap.fromTo(
        ".hero-image",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.1,
        },
      );

      // Parallax effect on scroll
      gsap.to(".hero-image", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: 1.5,
        },
        y: 80,
        ease: "none",
      });

      // ── Services Section Cards Entrance ───────────────────────────────
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        },
      );

      // Services section header reveal
      gsap.fromTo(
        ".services-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          },
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ──────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ──────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full bg-white overflow-hidden"
      >
        {/* Centered Text Content */}
        <div className="relative z-10 w-full pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center">
            {/* Headline */}
            <h1 className="hero-headline text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight max-w-5xl mx-auto">
              A Smarter, Safer Way to Ride.
            </h1>

            {/* Subheading */}
            <p className="hero-subheading text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-8 font-medium">
              Secure payments. Verified identities. Transparent trips — built
              for trust from the ground up. Drift247 connects riders and drivers
              through wallet-protected payments and identity-driven safety to
              create a more reliable ride marketplace experience.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 mt-12 justify-center">
              <WaitlistModal>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#003366] text-white font-bold rounded-xl text-base shadow-lg shadow-[#003366]/30 hover:bg-[#002244] transition-all duration-300"
                >
                  Get Drift247
                </motion.button>
              </WaitlistModal>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl text-base border border-slate-300 hover:bg-slate-200 transition-all duration-300"
              >
                Drift247 Delivery
              </motion.button>
            </div>
          </div>
        </div>

        {/* Full-Width Hero Image */}
        <div ref={imageRef} className="hero-image relative w-full">
          <div className="relative w-full h-96 md:h-[500px] lg:h-[900px] overflow-hidden">
            <img
              src="/generated_.png"
              alt="Couple by a car"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/generated_.png";
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────── */}
      {/* OUR SERVICES SECTION */}
      {/* ──────────────────────────────────────────────────────────────── */}
      <section
        ref={servicesRef}
        className="relative w-full py-20 md:py-28 bg-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="services-header text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Our services
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Everything you need, all in one place. From rides to delivery,
              Drift247 has you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="service-card group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 cursor-pointer overflow-hidden">
                    {/* Background Gradient Accent */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-all duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full gap-6">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${service.iconBg}`}
                      >
                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>

                      {/* Service Name */}
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-slate-600 font-medium text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      <div className="mt-auto pt-6 border-t border-slate-200 group-hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-2 text-slate-700 font-semibold group-hover:text-[#003366] transition-colors">
                          <span>Learn more</span>
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7m0 0l-7 7m7-7H5"
                            />
                          </motion.svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-[#003366] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
