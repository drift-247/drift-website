import { useEffect, useState } from "react";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleLoad = () => setMounted(true);

    // If it's already complete, set true right away
    if (document.readyState === "complete") {
      setMounted(true);
    } else {
      window.addEventListener("DOMContentLoaded", handleLoad);
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("DOMContentLoaded", handleLoad);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <h1 className="text-4xl font-bold text-primary animate-pulse">
          Drift247
        </h1>
      </div>
    );
  }

  return <>{children}</>;
}
