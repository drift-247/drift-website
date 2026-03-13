import { lazy, Suspense } from "react";
import { PageLoader } from "./PageLoader";

const HeroSection = lazy(() => import("./HeroSection"));
const PositioningSection = lazy(() => import("./PositioningSection"));
const HowItWorksSection = lazy(() => import("./HowItWorksSection"));
const DifferenceSection = lazy(() => import("./DifferenceSection"));
const SecuritySection = lazy(() => import("./SecuritySection"));
const DriverSection = lazy(() => import("./DriverSection"));
const ExpansionSection = lazy(() => import("./ExpansionSection"));
const FAQSection = lazy(() => import("./FAQSection"));
const FooterSection = lazy(() => import("./FooterSection"));

export default function Landing() {
  return (
    <PageLoader>
      <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-2xl font-bold animate-pulse text-[#003366]">
                Loading Section...
              </h1>
            </div>
          }
        >
          <HeroSection />
          <PositioningSection />
          <HowItWorksSection />
          <DifferenceSection />
          <SecuritySection />
          <DriverSection />
          <ExpansionSection />
          <FAQSection />
          <FooterSection />
        </Suspense>
      </div>
    </PageLoader>
  );
}
