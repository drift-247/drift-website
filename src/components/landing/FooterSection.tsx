import { Twitter, Instagram, Linkedin, Mail, Phone, Facebook } from "lucide-react";
 
const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
      { label: "Newsroom", href: "/company/newsroom" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Driver Policy", href: "/legal/driver-policy" },
      { label: "Rider Agreement", href: "/legal/rider-agreement" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/support/help" },
      { label: "Safety Center", href: "/support/safety" },
      { label: "Report Incident", href: "/support/report" },
      { label: "Driver Support", href: "/support/driver" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "https://x.com/Drift247_ng", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/drift247_ng?igsh=a2RjdmVydjQ2aW80", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/drift247", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586916038748", label: "Facebook" },
  { icon: Mail, href: "mailto:hello@drift247.africa", label: "Email" },
  { icon: Phone, href: "https://wa.me/2348121443947", label: "WhatsApp" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="w-full bg-white border-t border-[#b1c1cc]/40">
      <div className="container px-6 md:px-10 lg:px-16 mx-auto py-16 md:py-20">
 
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-14">
 
          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-6">
 
            {/* Logo: icon + wordmark */}
            <div className="flex items-center">
              <img
                src="/logo-icon.svg"
                alt="Drift247"
                className="h-22 w-auto"
              />
              <span
                className="text-[#22437d] font-bold text-3xl tracking-tight" /* Increased text to text-2xl and tighter tracking */
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: "0.8", // Ensures no extra vertical padding affects alignment
                  marginLeft: "-23.5px",
                  display: "inline-block"
                }}
              >
                rift247
              </span>
            </div>
 
            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-[#22437d]/8 hover:bg-[#22437d] flex items-center justify-center transition-all duration-300 group border border-[#b1c1cc]/30"
                >
                  <Icon className="w-3.5 h-3.5 text-[#22437d] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
 
          {/* Nav columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-bold text-[#0f1c2e] text-sm mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#4a5568] hover:text-[#22437d] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
 
        {/* Bottom bar */}
        <div className="border-t border-[#b1c1cc]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#4a5568]">
          <p>
            © {currentYear} Drift247. All rights reserved. · Operated by{" "}
            <span className="text-[#0f1c2e] font-semibold">
              Driving Africa Digital Services Ltd
            </span>
          </p>
          <div className="flex gap-5">
            <a href="/legal/privacy-policy" className="hover:text-[#22437d] transition-colors">
              Privacy Policy
            </a>
            <a href="/legal/terms-of-service" className="hover:text-[#22437d] transition-colors">
              Terms
            </a>
            <a href="mailto:hello@drift247.africa" className="hover:text-[#22437d] transition-colors">
              hello@drift247.africa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}