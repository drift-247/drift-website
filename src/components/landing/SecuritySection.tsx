import { CheckCircle2, ShieldClose } from "lucide-react";

export default function SecuritySection() {
  const points = [
    {
      title: "Identity Verification",
      desc: "Mandatory ID checks for all users to ensure accountability.",
    },
    {
      title: "Trip Monitoring",
      desc: "Active monitoring of rides to detect unusual stops or route deviations.",
    },
    {
      title: "Emergency Assistance",
      desc: "In-app SOS features connecting directly to emergency services and our team.",
    },
    {
      title: "Data Protection",
      desc: "Bank-grade encryption to keep your personal and financial data secure.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="md:w-1/2 flex gap-4">
          <div className="w-1/2 rounded-2xl bg-slate-200 aspect-square overflow-hidden mt-8 shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Security team monitoring"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 rounded-2xl bg-slate-200 aspect-square overflow-hidden mb-8 shadow-lg">
            <img
              src="https://images.pexels.com/photos/10186561/pexels-photo-10186561.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional black male driver"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <ShieldClose className="w-5 h-5 text-[#003366]" />
            <span className="text-[#003366] font-bold uppercase tracking-wider text-xs">
              Safety First
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-headings">
            Engineered With Security in Mind
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Safety isn't an afterthought; it's the foundation of Drift247. We
            employ advanced technology and strict protocols to protect our
            community.
          </p>

          <div className="space-y-6">
            {points.map((pt, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#003366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">{pt.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-medium text-slate-700 italic">
            "Your safety is our absolute priority, every mile of the way."
          </p>
        </div>
      </div>
    </section>
  );
}
