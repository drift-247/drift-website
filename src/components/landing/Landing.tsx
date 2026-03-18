import { lazy, Suspense } from "react";
import { PageLoader } from "./PageLoader";
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
    <PageLoader>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#0f1c2e]">
        <SiteHeader />

        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#22437d] border-t-transparent" />
                <span className="text-sm font-medium text-[#4a5568]">Loading...</span>
              </div>
            </div>
          }
        >
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
    </PageLoader>
  );
}