import { lazy, Suspense } from "react";
import { PageLoader } from "./PageLoader";

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
import { Analytics } from "./Analytics";

export default function Landing() {
  return (
    <PageLoader>
      <div className="flex flex-col min-h-screen bg-white text-[#0f1c2e] overflow-x-hidden">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#22437d] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-[#4a5568] font-medium">Loading...</span>
              </div>
            </div>
          }
        >
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
          <Analytics />
        </Suspense>
      </div>
    </PageLoader>
  );
}