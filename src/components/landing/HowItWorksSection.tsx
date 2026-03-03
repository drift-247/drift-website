import { User, Car } from "lucide-react";

export default function HowItWorksSection() {
  const riderSteps = [
    {
      title: "Create Your Account",
      desc: "Sign up and verify your identity for a safer community.",
    },
    {
      title: "Request a Ride",
      desc: "Enter your destination and see upfront, transparent pricing.",
    },
    {
      title: "Get Matched Securely",
      desc: "Connect with a verified driver and track their arrival in real-time.",
    },
    {
      title: "Ride & Pay",
      desc: "Enjoy your trip and pay seamlessly via your secure wallet.",
    },
  ];

  const driverSteps = [
    {
      title: "Apply & Verify",
      desc: "Submit your documents for our comprehensive vetting process.",
    },
    {
      title: "Go Online",
      desc: "Set your availability and start receiving ride requests nearby.",
    },
    {
      title: "Complete Trips",
      desc: "Drive verified passengers to their destinations safely.",
    },
    {
      title: "Get Paid Fast",
      desc: "Receive your earnings directly to your wallet with transparent fees.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-[#002244] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
              <User className="w-8 h-8 text-[#003366]" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  For Riders
                </h3>
                <p className="text-slate-500">
                  Secure, reliable rides at your fingertips.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {riderSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-[#003366] flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
              <Car className="w-8 h-8 text-[#003366]" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  For Drivers
                </h3>
                <p className="text-slate-500">
                  Earn more with dignity and safety.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {driverSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-[#003366] flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
