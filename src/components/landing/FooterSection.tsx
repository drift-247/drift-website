import { Twitter, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "For Riders", href: "#" },
      { label: "For Drivers", href: "#" },
      { label: "Security", href: "#security" },
      { label: "Cities", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter", handle: "@Drift247" },
  { icon: Instagram, href: "#", label: "Instagram", handle: "@drift247" },
  { icon: Linkedin, href: "#", label: "LinkedIn", handle: "Drift247" },
  {
    icon: Mail,
    href: "mailto:drivingafricadigital.ng@gmail.com",
    label: "Email",
    handle: "Contact",
  },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="border-b border-slate-800">
        <div className="container px-4 md:px-8 mx-auto py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Ready to ride smarter?
              </h3>
              <p className="text-slate-400 text-lg">
                Join thousands already on the Drift247 waitlist.
              </p>
            </div>
            <Link
              to="/"
              hash="early-access"
              className="inline-flex items-center justify-center gap-2 bg-[#003366] text-white font-bold rounded-full px-10 h-14 text-base shadow-xl hover:bg-[#002244] transition-colors shrink-0 group"
            >
              Get Early Access
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 md:px-8 mx-auto py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-8">
              <img
                src="/logo-white.png"
                className="h-8 w-auto mb-6"
                alt="Drift247"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 48'%3E%3Ctext x='20' y='32' font-size='32' font-weight='bold' fill='white'%3EDrift247%3C/text%3E%3C/svg%3E";
                }}
              />
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                A secure, transparent ride marketplace connecting riders and
                drivers with trust at the core.
              </p>
              <p className="text-slate-500 text-xs font-medium">
                Operated by
                <br />
                <span className="text-slate-300 font-semibold">
                  Driving Africa Digital Services Ltd
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#003366] flex items-center justify-center transition-colors group"
                  title={label}
                >
                  <Icon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
                {heading}
              </h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>
            © {currentYear} Drift247. All rights reserved. | Driving Africa
            Digital Services Ltd
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
