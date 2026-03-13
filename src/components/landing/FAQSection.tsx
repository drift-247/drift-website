import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How is Drift247 different from other ride apps?",
    a: "Drift247 integrates wallet-protected payments, identity verification, and structured financial transparency directly into the ride experience — creating a more balanced marketplace for both riders and drivers.",
  },
  {
    q: "Is Drift247 safe?",
    a: "Yes. Security systems, wallet controls, and structured identity verification are core components of our platform. We employ bank-grade encryption, real-time monitoring, and rigorous verification protocols.",
  },
  {
    q: "Will Drift247 hold my money long-term?",
    a: "No. Trip payments are protected during active rides and released immediately once trips are completed. Your funds remain in your control.",
  },
  {
    q: "When are you launching?",
    a: "We are preparing for a soft launch in select cities (Lagos, Abuja, Port Harcourt). Join the waitlist to receive updates on launch dates and early access opportunities.",
  },
  {
    q: "How do drivers get paid?",
    a: "Driver earnings are tracked within the Drift wallet for complete transparency and are withdrawable through secure payout processes. You can see your exact earnings per trip with full breakdown.",
  },
  {
    q: "Are there hidden fees?",
    a: "No. We believe in complete transparency. All service fees and commission charges are clearly displayed before you confirm your ride or accept a trip request.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".faq-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="container px-4 md:px-8 mx-auto max-w-3xl">
        {/* Header */}
        <div className="faq-header text-center mb-16 md:mb-20">
          <div className="mb-4 flex justify-center">
            <span className="inline-block bg-blue-50 text-[#003366] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#003366]/20">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about Drift247.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="faq-item border border-slate-200 rounded-2xl px-6 shadow-sm hover:border-[#003366]/30 transition-all data-[state=open]:border-[#003366]/40 data-[state=open]:shadow-md data-[state=open]:bg-blue-50/30"
            >
              <AccordionTrigger className="text-left font-bold text-slate-900 py-5 text-base hover:no-underline hover:text-[#003366] transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-5 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-transparent rounded-3xl border border-slate-200">
          <p className="text-slate-700 font-medium mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:drivingafricadigital.ng@gmail.com"
            className="inline-flex items-center gap-2 text-[#003366] font-bold hover:underline underline-offset-4 transition-all"
          >
            Contact us at drivingafricadigital.ng@gmail.com
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
