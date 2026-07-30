import { useEffect, useRef } from "react";
import { HelpCircle } from "lucide-react";
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
    q: "What is Drift247?",
    a: "Drift247 is a customer-first mobility platform built for Nigeria, designed around comfort, reliability, trust, and everyday movement.",
  },
  {
    q: "How is Drift247 different from other ride apps?",
    a: "Drift247 is being built around a more balanced experience for riders and drivers, with clearer trip flows, verified driver onboarding, simple ride payment handling, and a focus on dependable everyday mobility.",
  },
  {
    q: "Is Drift247 available now?",
    a: "Drift247 is currently preparing for launch. Join the waitlist to receive launch updates, early access information, and city availability announcements.",
  },
  {
    q: "Which cities will Drift247 launch in?",
    a: "Drift247 will launch in select Nigerian cities first, with expansion planned over time. Join the waitlist and select your preferred city to receive updates.",
  },
  {
    q: "Can drivers join Drift247 now?",
    a: "Interested drivers can submit their details through the driver application form. The Drift247 team will share onboarding steps and requirements as launch plans progress.",
  },
  {
    q: "How does Drift247 support trust between riders and drivers?",
    a: "Drift247 is designed with structured driver onboarding, clearer trip information, ride payment clarity, and support processes that help create a more dependable ride experience.",
  },
  {
    q: "Will Drift247 hold my money long-term?",
    a:  "No. Drift247 is not designed to hold driver earnings long-term. Drivers can withdraw their earnings, and where earnings are not withdrawn by the end of the day, they are automatically sent to the driver’s registered withdrawal bank account.",
  },
  {
    q: "How will my waitlist information be used?",
    a: "Your information will only be used to send Drift247 launch updates, early access information, and relevant onboarding communications.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-header",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".faq-item",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full overflow-hidden border-t border-[#b1c1cc]/30 bg-white py-24 md:py-32"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#d6e4f7]/65 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#22437d]/[0.06] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="faq-header mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22437d]/15 bg-[#f6f9fc] px-4 py-2">
              <HelpCircle className="h-4 w-4 text-[#22437d]" strokeWidth={2} />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#22437d]">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0f1c2e] md:text-4xl lg:text-5xl">
              Frequently Asked
              <span className="text-[#22437d]"> Questions</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#4a5568] md:text-lg">
              Everything you need to know about Drift247 before launch.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.q}
                value={`item-${idx}`}
                className="faq-item overflow-hidden rounded-2xl border border-[#b1c1cc]/45 bg-white/90 px-6 shadow-sm shadow-[#22437d]/5 backdrop-blur-sm transition-all duration-300 hover:border-[#22437d]/25 hover:shadow-md hover:shadow-[#22437d]/10 data-[state=open]:border-[#22437d]/35 data-[state=open]:bg-[#f8fbfd]"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-bold leading-relaxed text-[#0f1c2e] transition-colors hover:text-[#22437d] hover:no-underline md:text-base">
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="pb-5 text-sm leading-relaxed text-[#4a5568]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom Note */}
          <div className="mt-10 rounded-[1.75rem] border border-[#22437d]/10 bg-[#f6f9fc] px-6 py-5 text-center">
            <p className="text-sm font-semibold leading-relaxed text-[#0f1c2e]">
              Still have questions? Join the waitlist and the Drift247 team will
              share more details as launch plans progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}