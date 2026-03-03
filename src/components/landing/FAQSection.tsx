import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      q: "How does the secure wallet work?",
      a: "Payments are pre-authorized and held in a secure escrow wallet. Funds are only transferred to the driver once the trip is marked as successfully completed.",
    },
    {
      q: "How are drivers and riders verified?",
      a: "All participants undergo a multi-layered verification process including government ID checks and biometrics to ensure a community of trusted users.",
    },
    {
      q: "What makes Drift247 safer than other apps?",
      a: "Our security-first approach integrates fintech-grade wallet protection with real-time GPS monitoring and an emergency response framework.",
    },
    {
      q: "Are there any hidden transaction fees?",
      a: "No. We believe in total transparency. All service fees and wallet transaction costs are clearly displayed before you confirm your ride.",
    },
    {
      q: "When will the service be available?",
      a: "We are launching phased pilots in Lagos, Abuja, and Port Harcourt soon. Join the waitlist to receive your invitation for early access.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#003366]">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-b border-slate-200 py-2"
            >
              <AccordionTrigger className="text-left font-bold text-[#003366] py-6 text-lg hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 pb-6 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
