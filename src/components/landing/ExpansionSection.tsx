import { useEffect, useRef, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ALL_CITIES = [
  "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano",
  "Benin City", "Enugu", "Kaduna", "Owerri", "Uyo",
  "Warri", "Abeokuta", "Ilorin", "Jos", "Calabar",
  "Asaba", "Akure", "Sokoto", "Maiduguri", "Other",
];

// Launch city pin positions on the SVG map (approximate Nigeria geography)
const launchCityPins = [
  { name: "Lagos", x: "22%", y: "68%" },
  { name: "Abuja", x: "52%", y: "44%" },
  { name: "Port Harcourt", x: "48%", y: "74%" },
];

export default function ExpansionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    // Could trigger a notification signup here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expansion-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".expansion-map",
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      gsap.fromTo(
        ".expansion-dropdown",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cities"
      className="w-full py-24 md:py-32 bg-white border-t border-[#b1c1cc]/30"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="expansion-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22437d] mb-3 leading-tight">
            Now Launching in Nigeria
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg max-w-xl mx-auto">
            Expanding rapidly to secure your commutes across the nation.
          </p>
        </div>

        {/* Nigeria Map */}
        <div className="expansion-map relative max-w-2xl mx-auto mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#b1c1cc]/40 bg-[#e8f0f4]">
            {/* Nigeria SVG Map Outline */}
            <svg
              viewBox="0 0 500 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              {/* Map background */}
              <rect width="500" height="520" fill="#e8f0f4" />

              {/* Nigeria rough outline shape */}
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

              {/* Internal state boundary hints */}
              <path d="M 180 180 Q 250 160 320 175" stroke="#b1c1cc" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.6" />
              <path d="M 150 260 Q 250 240 370 255" stroke="#b1c1cc" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.6" />
              <path d="M 130 320 Q 230 305 340 315" stroke="#b1c1cc" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.6" />
              <path d="M 250 160 L 255 400" stroke="#b1c1cc" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.5" />
              <path d="M 180 130 L 175 380" stroke="#b1c1cc" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.4" />
              <path d="M 320 130 L 325 370" stroke="#b1c1cc" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.4" />

              {/* Launch City Pins */}
              {launchCityPins.map((pin) => (
                <g key={pin.name}>
                  {/* Pulse ring */}
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="14"
                    fill="#22437d"
                    fillOpacity="0.12"
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                  />
                  {/* Pin dot */}
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="6"
                    fill="#22437d"
                    stroke="white"
                    strokeWidth="2"
                  />
                  {/* City label */}
                  <text
                    x={pin.x}
                    y={pin.y}
                    dy="-16"
                    textAnchor="middle"
                    fill="#22437d"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                  >
                    {pin.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Dynamic City Dropdown */}
        <div className="expansion-dropdown max-w-md mx-auto flex flex-col items-center gap-4">
          <p className="text-[#4a5568] text-sm text-center">
            We're expanding across Nigeria — select your city to get notified
            when Drift247 arrives near you.
          </p>

          <div className="relative w-full">
            <select
              value={selectedCity}
              onChange={(e) => handleCitySelect(e.target.value)}
              className="w-full appearance-none border border-[#b1c1cc]/60 rounded-xl px-5 py-3.5 text-sm text-[#0f1c2e] bg-white focus:outline-none focus:border-[#22437d] focus:ring-2 focus:ring-[#22437d]/10 transition-all cursor-pointer pr-10"
            >
              <option value="" disabled>Select Your City</option>
              {ALL_CITIES.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4a5568] pointer-events-none" />
          </div>

          {/* Confirmation feedback */}
          {submitted && selectedCity && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-[#22437d] text-sm font-medium bg-[#22437d]/8 px-4 py-2.5 rounded-lg border border-[#22437d]/20 w-full justify-center"
            >
              <MapPin className="w-3.5 h-3.5" />
              Got it! We'll notify you when we launch in {selectedCity}.
            </motion.div>
          )}

          <p className="text-[#4a5568] text-xs text-center">
            Can't see your city?{" "}
            <a href="#early-access" className="text-[#22437d] font-semibold hover:underline">
              Join the waitlist
            </a>{" "}
            for launch announcements.
          </p>
        </div>

      </div>
    </section>
  );
}