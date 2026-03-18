import { useEffect } from "react";
import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

let posthogInitialized = false;

export function Analytics() {
  useEffect(() => {
    if (!POSTHOG_KEY || POSTHOG_KEY === "YOUR_POSTHOG_KEY" || posthogInitialized) {
      return;
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
    });

    posthogInitialized = true;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("button, a") as HTMLElement | null;
      const text =
        clickable?.innerText?.trim() ||
        clickable?.textContent?.trim() ||
        "";

      if (!text) return;

      if (
        text.includes("Join the Waitlist") ||
        text.includes("Get Early Access")
      ) {
        posthog.capture("waitlist_cta_clicked", { button_text: text });
      }

      if (
        text.includes("Apply as a Driver") ||
        text.includes("Start Application") ||
        text.includes("Drive with Drift247")
      ) {
        posthog.capture("driver_cta_clicked", { button_text: text });
      }

      if (
        text.includes("App Store") ||
        text.includes("Google Play")
      ) {
        posthog.capture("app_download_clicked", { store: text });
      }

      if (text.includes("Notify Me")) {
        posthog.capture("app_notify_clicked");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}