import { ShieldCheck, UserCheck, Wallet, Car } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            A Smarter, <span className="text-[#003366]">Safer Way</span> to Ride
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Experience a ride marketplace built on transparency and security. We
            prioritize your safety and your peace of mind with every journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#003366] hover:bg-[#002244] text-white rounded-md px-8 h-12"
            >
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md px-8 h-12"
            >
              Drive with Drift247
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-6 font-medium">
            <div className="flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-[#003366]" /> Secure Wallet
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[#003366]" /> Verified Users
            </div>
            <div className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#003366]" /> Transparent Pricing
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#003366]" /> Built-In Safety
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/12555019/pexels-photo-12555019.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Professional black male driver in a car"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
