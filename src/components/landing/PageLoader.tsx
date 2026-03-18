import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8"
          >
            {/* Logo: icon + wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center"
            >
              <img
                src="/logo-icon.svg"
                alt="Drift247 icon"
                className="h-24 w-auto block"
              />
              <span
                className="text-[#22437d] font-bold text-4xl tracking-tight"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginLeft: "-26px", // Pulls "rift" into the icon
                  lineHeight: "1" 
                }}
              >
                rift247
              </span>
            </motion.div>

            {/* Thin progress bar */}
            <div className="w-40 h-0.5 bg-[#b1c1cc]/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#22437d] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}