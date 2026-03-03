import { Car } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Car className="w-6 h-6 text-[#003366]" />
              <span className="text-xl font-bold text-slate-900">Drift247</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              The safe, professional ride marketplace connecting vetted drivers
              with riders who value trust.
            </p>
            <p className="text-slate-400 text-xs">
              Drift247 is operated by Driving Africa Digital Services Ltd.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Riders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Drivers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Cities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Info@drift247.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#003366] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Drift247 Technologies Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
