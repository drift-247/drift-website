import { MapPin } from "lucide-react";

export default function ExpansionSection() {
  return (
    <section className="w-full py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[#003366] font-bold uppercase tracking-wider text-xs block mb-4">
          Expansion
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
          Launching Soon In
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-xl font-medium text-slate-700">
            <MapPin className="w-6 h-6 text-[#003366]" />
            Lagos
          </div>
          <div className="flex items-center gap-2 text-xl font-medium text-slate-700">
            <MapPin className="w-6 h-6 text-[#003366]" />
            Abuja
          </div>
          <div className="flex items-center gap-2 text-xl font-medium text-slate-700">
            <MapPin className="w-6 h-6 text-[#003366]" />
            Port Harcourt
          </div>
        </div>
      </div>
    </section>
  );
}
