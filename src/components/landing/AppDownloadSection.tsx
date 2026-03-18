import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

export default function AppDownloadSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-24 bg-[#22437d]"
    >
      <div className="container px-6 md:px-10 lg:px-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-8 max-w-xl mx-auto"
        >
          {/* Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Experience the Future of Transport
            </h2>
            <p className="text-[#b1c1cc] text-sm md:text-base leading-relaxed">
              Be the first to know when we launch.
            </p>
          </div>

          {/* Store Badges — Coming Soon */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            {/* App Store */}
            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 min-w-[160px] cursor-not-allowed opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[#b1c1cc] text-[9px] uppercase tracking-widest font-medium">Coming Soon On</p>
                <p className="text-white text-sm font-semibold">App Store</p>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 min-w-[160px] cursor-not-allowed opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
              </svg>
              <div className="text-left">
                <p className="text-[#b1c1cc] text-[9px] uppercase tracking-widest font-medium">Coming Soon On</p>
                <p className="text-white text-sm font-semibold">Google Play</p>
              </div>
            </div>
          </div>

          {/* Email notify form */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-white text-sm font-medium bg-white/10 px-5 py-3 rounded-xl border border-white/20"
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              We'll notify you when the app launches!
            </motion.div>
          ) : (
            <form
              onSubmit={handleNotify}
              className="flex flex-col sm:flex-row gap-2 w-full max-w-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white border-0 rounded-xl px-4 py-3 text-sm text-[#0f1c2e] placeholder:text-[#4a5568]/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-white text-[#22437d] font-semibold rounded-xl text-sm hover:bg-[#b1c1cc] transition-all duration-300 flex items-center justify-center gap-2 shrink-0"
              >
                {status === "submitting" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Notify Me"
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}