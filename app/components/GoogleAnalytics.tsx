"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const STORAGE_KEY = "centex-cookie-consent";

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    setConsent(savedConsent);

    function handleConsentChange(event: Event) {
      const customEvent = event as CustomEvent<{
        consent: string;
      }>;

      setConsent(customEvent.detail.consent);
    }

    window.addEventListener("cookie-consent-changed", handleConsentChange);

    return () => {
      window.removeEventListener("cookie-consent-changed", handleConsentChange);
    };
  }, []);

  if (consent !== "all") {
    return null;
  }

  return <NextGoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />;
}
