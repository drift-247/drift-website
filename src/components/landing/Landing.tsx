import { lazy, Suspense } from "react";
import { SiteHeader } from "./SiteHeader";

const HeroSection = lazy(() => import("./HeroSection"));
const PositioningSection = lazy(() => import("./PositioningSection"));
const HowItWorksSection = lazy(() => import("./HowItWorksSection"));
const AppDownloadSection = lazy(() => import("./AppDownloadSection"));
const DifferenceSection = lazy(() => import("./DifferenceSection"));
const SecuritySection = lazy(() => import("./SecuritySection"));
const DriverSection = lazy(() => import("./DriverSection"));
const ExpansionSection = lazy(() => import("./ExpansionSection"));
const WaitlistSection = lazy(() => import("./WaitlistSection"));
const FAQSection = lazy(() => import("./FAQSection"));
const FooterSection = lazy(() => import("./FooterSection"));

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#0f1c2e]">
      <SiteHeader />

      <Suspense fallback={null}>
        <main className="pt-20">
          <HeroSection />
          <PositioningSection />
          <HowItWorksSection />
          <AppDownloadSection />
          <DifferenceSection />
          <SecuritySection />
          <DriverSection />
          <ExpansionSection />
          <WaitlistSection />
          <FAQSection />
          <FooterSection />
        </main>
      </Suspense>
    </div>
  );
}
