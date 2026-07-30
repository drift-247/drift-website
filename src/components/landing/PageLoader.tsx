import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const GLIDE = [0.16, 1, 0.3, 1] as const;

export function PageLoader({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = prefersReducedMotion ? 850 : 1800;

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 1.03,
              filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)",
            }}
            transition={{ duration: 0.65, ease: GLIDE }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
          >
            {/* Soft premium background */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(55% 45% at 50% 42%, rgba(34,67,125,0.12), rgba(255,255,255,0) 72%), radial-gradient(45% 35% at 85% 80%, rgba(214,228,247,0.75), rgba(255,255,255,0) 68%)",
              }}
            />

            {/* Subtle brand fill wash */}
            {!prefersReducedMotion && (
              <motion.div
                aria-hidden
                initial={{ x: "-100%", opacity: 0.12 }}
                animate={{ x: "100%", opacity: [0.1, 0.18, 0.08] }}
                transition={{ duration: 1.7, ease: GLIDE }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#22437d]/10 to-transparent"
              />
            )}

            {/* Main loader card */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: GLIDE }}
              className="relative flex w-[88%] max-w-sm flex-col items-center rounded-[2rem] border border-[#b1c1cc]/35 bg-white/80 px-8 py-10 text-center shadow-2xl shadow-[#22437d]/10 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d6e4f7]/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#22437d]/[0.08] blur-3xl" />

              {/* Logo badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 1, scale: 1 }
                    : {
                        opacity: 1,
                        scale: [1, 1.04, 1],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0.4, ease: GLIDE }
                    : {
                        duration: 1.3,
                        repeat: 1,
                        ease: "easeInOut",
                      }
                }
                className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-[#22437d]/10 bg-[#f6f9fc] shadow-sm shadow-[#22437d]/10"
              >
                <img
                  src="/logo-icon.svg"
                  alt="Drift247"
                  className="h-14 w-auto"
                />
              </motion.div>

              {/* Brand wordmark */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.55, ease: GLIDE }}
                className="relative mt-6"
              >
                <p className="text-3xl font-bold tracking-tight text-[#22437d]">
                  Drift247
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-[#22437d]/55">
                  Drift in Comfort
                </p>
              </motion.div>

              {/* Premium progress fill */}
              <div className="relative mt-8 h-2 w-full overflow-hidden rounded-full bg-[#d6e4f7]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.65 : 1.45,
                    ease: GLIDE,
                  }}
                  className="h-full origin-left rounded-full bg-[#22437d]"
                />
              </div>

              {/* Small moving dot */}
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.45, ease: GLIDE }}
                  className="absolute bottom-[2.47rem] h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-md ring-4 ring-[#22437d]/20"
                />
              )}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.45, ease: GLIDE }}
                className="mt-4 text-xs font-medium text-[#4a5568]"
              >
                Preparing your ride experience
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
        animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
        transition={{
          duration: 0.65,
          ease: GLIDE,
          delay: isLoading ? 0 : 0.1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}