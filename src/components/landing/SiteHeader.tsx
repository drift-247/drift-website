import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { WaitlistModal } from "./WaitlistModal";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", hash: "how-it-works" },
    { label: "Features", hash: "features" },
    { label: "Cities", hash: "cities" },
    { label: "Drive with Us", hash: "drivers" },
    { label: "FAQ", hash: "faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="Drift247"
            className="block h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4a5568] md:flex">
          {navLinks.map(({ label, hash }) => (
            <a
              key={hash}
              href={`#${hash}`}
              className="group relative py-1 transition-colors duration-200 hover:text-[#22437d]"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#22437d] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center sm:flex">
          <WaitlistModal>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[#22437d] px-7 text-sm font-semibold text-white shadow-md shadow-[#22437d]/20 transition-colors hover:bg-[#1a3464]"
            >
              Join the Waitlist
            </motion.button>
          </WaitlistModal>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-[#0f1c2e]" />
          ) : (
            <Menu className="h-5 w-5 text-[#0f1c2e]" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4">
              {navLinks.map(({ label, hash }) => (
                <a
                  key={hash}
                  href={`#${hash}`}
                  className="block rounded-lg px-4 py-3 font-medium text-[#4a5568] transition-colors hover:bg-[#22437d]/5 hover:text-[#22437d]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <div className="border-t border-slate-100 pt-3">
                <WaitlistModal>
                  <button className="w-full rounded-xl bg-[#22437d] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a3464]">
                    Join the Waitlist
                  </button>
                </WaitlistModal>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
