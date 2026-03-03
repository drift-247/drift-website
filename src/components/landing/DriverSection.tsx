import { Button } from "../ui/button";
import { Check } from "lucide-react";

export default function DriverSection() {
  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-4xl overflow-hidden bg-slate-900 py-24 px-6 md:px-12 text-center">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200"
              className="w-full h-full object-cover opacity-20"
              alt="Car Background"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-white/10 text-white border border-white/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              For Drivers
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Drive With Confidence
            </h2>

            <p className="text-slate-300 text-lg mb-10 text-center">
              Join a platform that respects your profession and values your
              safety. Drift247 offers a better driving experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 w-full text-left max-w-lg mx-auto">
              <div className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-[#003366]" />
                <span>Higher Earnings Retention</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-[#003366]" />
                <span>Verified, Safer Riders</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-[#003366]" />
                <span>Instant Payouts</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-[#003366]" />
                <span>24/7 Driver Support</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 rounded-md px-10 h-14 font-semibold text-lg"
            >
              Apply as a Driver
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
