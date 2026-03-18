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
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".faq-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full py-24 md:py-32 bg-white border-t border-[#b1c1cc]/30"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-3xl">
        <div className="faq-header text-center mb-12">
          <span className="inline-block bg-[#22437d]/8 text-[#22437d] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#22437d]/20 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4a5568] text-base">
            Everything you need to know about Drift247.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="faq-item border border-[#b1c1cc]/50 rounded-xl px-6 hover:border-[#22437d]/30 transition-all data-[state=open]:border-[#22437d]/40"
            >
              <AccordionTrigger className="text-left font-semibold text-[#0f1c2e] py-5 text-sm hover:no-underline hover:text-[#22437d] transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#4a5568] pb-5 text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}