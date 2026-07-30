import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ChevronDown,
  Compass,
  MapPin,
  Navigation,
  Route,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WaitlistModal } from "./WaitlistModal";

gsap.registerPlugin(ScrollTrigger);

const ALL_CITIES = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Benin City",
  "Enugu",
  "Kaduna",
  "Owerri",
  "Uyo",
  "Warri",
  "Abeokuta",
  "Ilorin",
  "Jos",
  "Calabar",
  "Asaba",
  "Akure",
  "Sokoto",
  "Maiduguri",
  "Other",
];

const launchCityPins = [
  { name: "Lagos", x: "22%", y: "68%" },
  { name: "Abuja", x: "52%", y: "44%" },
  { name: "Port Harcourt", x: "48%", y: "74%" },
];

const cityHighlights = [
  {
    icon: Compass,
    title: "Starting thoughtfully",
    desc: "Launching in select cities first so the rider and driver experience can grow with care.",
  },
  {
    icon: Route,
    title: "Built for daily movement",
    desc: "Designed around the real ways people move for work, errands, meetings, and everyday plans.",
  },
  {
    icon: Bell,
    title: "Stay updated",
    desc: "Join the waitlist to receive launch updates and city availability announcements.",
  },
];

export default function ExpansionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [citySelected, setCitySelected] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setCitySelected(true);

    setTimeout(() => {
      setCitySelected(false);
    }, 3500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expansion-header",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".expansion-map",
        { scale: 0.96, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );

      gsap.fromTo(
        ".city-highlight",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        }
      );

      gsap.fromTo(
        ".expansion-dropdown",
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

      gsap.to(".city-pulse", {
        scale: 1.8,
        opacity: 0,
        duration: 1.7,
        repeat: -1,
        stagger: 0.25,
        ease: "power2.out",
        transformOrigin: "center center",
      });

      gsap.to(".map-orb", {
        scale: 1.08,
        opacity: 0.85,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cities"
      className="relative w-full overflow-hidden border-t border-[#b1c1cc]/30 bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#d6e4f7]/70 blur-3xl" />
      <div className="map-orb pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#22437d]/[0.07] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="expansion-header mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-[#f6f9fc] px-4 py-2">
            <MapPin className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
              Launch Cities
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
            Launching across key
            <span className="text-[#22437d]"> Nigerian cities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] md:text-lg">
            Starting with select cities and expanding thoughtfully as our rider
            and driver communities grow.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Nigeria Map */}
          <div className="expansion-map">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#b1c1cc]/40 bg-[#f6f9fc] p-4 shadow-xl shadow-[#22437d]/10 md:p-6">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d6e4f7]/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#22437d]/[0.06] blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#e8f0f4]">
                <svg
                  viewBox="0 0 500 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <rect width="500" height="520" fill="#e8f0f4" />

                  <path
                    d="M 95 120
                       L 130 95 L 175 85 L 220 80 L 260 78 L 300 82
                       L 335 88 L 365 100 L 390 118 L 405 140
                       L 415 165 L 418 195 L 412 225
                       L 420 250 L 415 275 L 400 295
                       L 385 318 L 370 338 L 355 355
                       L 338 368 L 318 378 L 300 385
                       L 285 395 L 272 410 L 262 430
                       L 252 448 L 240 440 L 228 428
                       L 215 415 L 200 405 L 182 398
                       L 162 390 L 145 378 L 130 362
                       L 115 342 L 102 320 L 92 295
                       L 85 268 L 82 240 L 84 212
                       L 88 185 L 90 158 Z"
                    fill="#d0e2ea"
                    stroke="#b1c1cc"
                    strokeWidth="2"
                  />

                  <path
                    d="M 180 180 Q 250 160 320 175"
                    stroke="#b1c1cc"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M 150 260 Q 250 240 370 255"
                    stroke="#b1c1cc"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M 130 320 Q 230 305 340 315"
                    stroke="#b1c1cc"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M 250 160 L 255 400"
                    stroke="#b1c1cc"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M 180 130 L 175 380"
                    stroke="#b1c1cc"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    fill="none"
                    opacity="0.4"
                  />
                  <path
                    d="M 320 130 L 325 370"
                    stroke="#b1c1cc"
                    strokeWidth="0.8"
                    strokeDasharray="4 3"
                    fill="none"
                    opacity="0.4"
                  />

                  {launchCityPins.map((pin) => (
                    <g key={pin.name}>
                      <circle
                        className="city-pulse"
                        cx={pin.x}
                        cy={pin.y}
                        r="10"
                        fill="#22437d"
                        fillOpacity="0.18"
                      />

                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="6.5"
                        fill="#22437d"
                        stroke="white"
                        strokeWidth="2.5"
                      />

                      <text
                        x={pin.x}
                        y={pin.y}
                        dy="-18"
                        textAnchor="middle"
                        fill="#22437d"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        {pin.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <div className="relative mt-4 flex flex-wrap items-center justify-center gap-2">
                {launchCityPins.map((city) => (
                  <span
                    key={city.name}
                    className="rounded-full border border-[#22437d]/15 bg-white px-3 py-1.5 text-xs font-semibold text-[#22437d] shadow-sm shadow-[#22437d]/5"
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-5">
            {cityHighlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="city-highlight rounded-3xl border border-[#b1c1cc]/40 bg-white/85 p-5 shadow-sm shadow-[#22437d]/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#22437d]/25 hover:shadow-xl hover:shadow-[#22437d]/10"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#22437d]/[0.08]">
                    <Icon className="h-5 w-5 text-[#22437d]" strokeWidth={1.9} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0f1c2e]">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#4a5568]">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* City Dropdown */}
            <div className="expansion-dropdown rounded-[2rem] border border-[#22437d]/10 bg-[#f6f9fc] p-6">
              <p className="text-sm font-semibold leading-relaxed text-[#0f1c2e]">
                We’re preparing to launch across key Nigerian cities. Select
                your city, then join the waitlist to receive updates when
                Drift247 becomes available near you.
              </p>

              <div className="relative mt-5 w-full">
                <select
                  value={selectedCity}
                  onChange={(e) => handleCitySelect(e.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-[#b1c1cc]/60 bg-white px-5 py-3.5 pr-10 text-sm text-[#0f1c2e] transition-all focus:border-[#22437d] focus:outline-none focus:ring-2 focus:ring-[#22437d]/10"
                >
                  <option value="" disabled>
                    Select Your City
                  </option>

                  {ALL_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a5568]" />
              </div>

              {citySelected && selectedCity && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-[#22437d]/20 bg-[#22437d]/[0.08] px-4 py-3 text-sm font-medium text-[#22437d]"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    Great — select the waitlist option so we can send updates
                    for {selectedCity}.
                  </span>
                </motion.div>
              )}

              <div className="mt-5">
                <WaitlistModal>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22437d] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#22437d]/20 transition-all duration-300 hover:bg-[#1a3464]"
                  >
                    <Navigation className="h-4 w-4" strokeWidth={2} />
                    Join the Waitlist
                  </motion.button>
                </WaitlistModal>
              </div>

              <p className="mt-4 text-center text-xs leading-relaxed text-[#4a5568]">
                Can’t see your city? Join the waitlist for launch announcements
                and future city updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}