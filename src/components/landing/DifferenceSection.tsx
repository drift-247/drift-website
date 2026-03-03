import { Shield, University, Users, HeadphonesIcon } from "lucide-react";

export default function DifferenceSection() {
  const items = [
    {
      icon: <Shield className="w-6 h-6 text-[#003366]" />,
      title: "Security-Driven Infrastructure",
      desc: "Built from the ground up with safety protocols embedded in every line of code.",
    },
    {
      icon: <University className="w-6 h-6 text-[#003366]" />,
      title: "Transparent Financial Flows",
      desc: "No hidden fees. See exactly where your money goes with clear breakdowns.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#003366]" />,
      title: "Verified Community Model",
      desc: "A trusted network where every rider and driver is authenticated.",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-[#003366]" />,
      title: "Clear Support",
      desc: "Real humans, real help. We're here for you whenever you need assistance.",
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Drift247 Difference
          </h2>
          <p className="text-slate-600">
            Why thousands are switching to a better standard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 p-3 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
