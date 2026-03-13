import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent ANY scroll while loader is active
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let pageLoaded = false;
    let timerDone = false;
    let animationStarted = false;

    const exitAnimation = () => {
      if (animationStarted) return;
      animationStarted = true;

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          setIsLoading(false);
        },
      });

      // 1. Fade logo out
      tl.to(".loader-logo", {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power2.in",
      })
        // 2. Collapse the arch (shrink height → 0)
        .to(
          archRef.current,
          { height: 0, duration: 1.0, ease: "power4.inOut" },
          "-=0.2",
        )
        // 3. Slide entire loader panel up off screen
        .to(
          containerRef.current,
          { y: "-100%", duration: 1.2, ease: "power4.inOut" },
          "<",
        )
        // 4. Reveal page content with subtle parallax lift
        .fromTo(
          contentRef.current,
          { y: 60, opacity: 0.7 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.inOut" },
          "<",
        );
    };

    const tryExit = () => {
      if (pageLoaded && timerDone) exitAnimation();
    };

    const handleLoad = () => {
      pageLoaded = true;
      tryExit();
    };

    const timer = setTimeout(() => {
      timerDone = true;
      tryExit();
    }, 4000);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col"
            // overflow hidden ensures the loader truly covers
            // the full viewport — no peeking content underneath
            style={{ overflow: "hidden" }}
          >
            {/* ── Main blue body ── */}
            <div className="flex-1 bg-[#003366] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="loader-logo flex flex-col items-center gap-6"
              >
                <img
                  src="/logo-white.png"
                  alt="Drift247"
                  className="w-56 h-auto drop-shadow-2xl"
                />
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/*
             * ── Arch ──
             * A solid blue rectangle with large rounded corners
             * on the BOTTOM only — making it look like the bottom
             * of a card, exactly like the reference image:
             *
             *   ─────────────────────────────────────────
             *   │  (blue, connects flush to body above)  │
             *   │                                        │
             *   ╰────────────────────────────────────────╯
             *       rounded bottom-left                rounded bottom-right
             *
             * GSAP shrinks this height from 160px → 0 during exit,
             * "pulling" the rounded edge up before the whole panel slides off.
             */}
            <div
              ref={archRef}
              className="w-full bg-[#003366] shrink-0"
              style={{
                height: "160px",
                borderBottomLeftRadius: "80px",
                borderBottomRightRadius: "80px",
              }}
            />
          </div>
        )}
      </AnimatePresence>

      <div ref={contentRef} className="relative">
        {children}
      </div>
    </>
  );
}
