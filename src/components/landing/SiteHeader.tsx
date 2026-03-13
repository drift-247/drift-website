import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { WaitlistModal } from "./WaitlistModal";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Services", hash: "services" },
    { label: "Earn With Us", hash: "drivers" },
    { label: "Security", hash: "security" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="h-9 w-auto" alt="Drift247" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-wide text-slate-600">
          {navLinks.map(({ label, hash }) => (
            <Link
              key={hash}
              to="/"
              hash={hash}
              className="relative py-1 hover:text-[#003366] transition-colors group"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <WaitlistModal>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-11 items-center justify-center rounded-full bg-[#003366] px-8 text-sm font-bold text-white shadow-md shadow-[#003366]/20 hover:bg-[#002244] transition-colors inline-flex"
            >
              Join Waitlist
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
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map(({ label, hash }) => (
              <Link
                key={hash}
                to="/"
                hash={hash}
                className="block py-3 px-4 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-200">
              <WaitlistModal>
                <button className="w-full py-3 px-4 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#002244] transition-colors">
                  Join Waitlist
                </button>
              </WaitlistModal>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
