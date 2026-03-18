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
    <header className="fixed top-0 z-50 w-full border-b border-slate-100/80 bg-white/90 backdrop-blur-lg">
      <div className="container mx-auto flex h-18 items-center justify-between px-6 lg:px-16">

        {/* Logo: icon + wordmark */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo-icon.svg" 
            alt="Drift247" 
            className="h-12 w-auto block transition-transform duration-300 group-hover:scale-105"
         />
          <span
            className="text-[#22437d] font-bold text-xl tracking-tight"
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginLeft: "-13px", // Tighter fit for the smaller header scale
              lineHeight: "1",
              display: "inline-block"
            }}
          >
            rift247
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a5568]">
          {navLinks.map(({ label, hash }) => (
            <Link
              key={hash}
              to="/"
              hash={hash}
              className="relative py-1 hover:text-[#22437d] transition-colors duration-200 group"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#22437d] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center">
          <WaitlistModal>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-10 items-center justify-center rounded-xl bg-[#22437d] px-7 text-sm font-semibold text-white shadow-md shadow-[#22437d]/20 hover:bg-[#1a3464] transition-colors inline-flex"
            >
              Join the Waitlist
            </motion.button>
          </WaitlistModal>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#0f1c2e]" />
          ) : (
            <Menu className="w-5 h-5 text-[#0f1c2e]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 space-y-1">
              {navLinks.map(({ label, hash }) => (
                <Link
                  key={hash}
                  to="/"
                  hash={hash}
                  className="block py-3 px-4 text-[#4a5568] font-medium hover:bg-[#22437d]/5 hover:text-[#22437d] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <WaitlistModal>
                  <button className="w-full py-3 px-4 bg-[#22437d] text-white font-semibold rounded-xl hover:bg-[#1a3464] transition-colors text-sm">
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