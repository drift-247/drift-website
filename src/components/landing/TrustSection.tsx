export default function TrustSection() {
  const stats = [
    { value: "100%", label: "Verified Drivers" },
    { value: "0%", label: "Hidden Fees" },
    { value: "24/7", label: "Safety Monitoring" },
    { value: "3x", label: "Faster Payouts" },
  ];

  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Built for Riders. Built for Drivers.{" "}
            <span className="text-[#003366]">Built on Trust.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Drift247 isn't just another ride-hailing app. We're a secure
            marketplace designed to solve the safety and reliability challenges
            of modern transportation — with transparent financial flows and full
            accountability.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-black text-[#003366] mb-2">
                {value}
              </span>
              <span className="text-sm font-medium text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
