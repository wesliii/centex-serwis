"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "centex-cookie-consent-v1";

type Consent = "all" | "necessary";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setIsVisible(true);
    }

    const openSettings = () => setIsVisible(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function saveConsent(value: Consent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setIsVisible(false);

    if (typeof window !== "undefined" && (window as any).gtag) {
      const isGranted = value === "all" ? "granted" : "denied";
      (window as any).gtag("consent", "update", {
        analytics_storage: isGranted,
        ad_storage: isGranted,
        ad_user_data: isGranted,
        ad_personalization: isGranted,
      });
    }

    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", {
        detail: { consent: value },
      }),
    );
  }

  if (!isVisible) return null;

  return (
    <section
      aria-label="Ustawienia plików cookie"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-900/95 p-5 text-white shadow-2xl backdrop-blur-md sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-2 flex items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-600">
              <CookieIcon />
            </div>
            <h2 className="text-xl font-bold">Dbamy o Twoją prywatność</h2>
          </div>

          <p className="text-sm leading-6 text-slate-300 sm:text-base">
            Używamy niezbędnych plików cookie, aby strona działała prawidłowo.
            Za Twoją zgodą możemy również korzystać z plików analitycznych
            (Google Analytics) oraz marketingowych (Meta Ads), które pomagają
            nam ulepszać serwis.
          </p>

          <Link
            href="/polityka-prywatnosci"
            className="mt-2 inline-block text-sm font-semibold text-blue-400 underline decoration-blue-400/50 underline-offset-4 transition hover:text-blue-300"
          >
            Polityka prywatności
          </Link>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => saveConsent("necessary")}
            className="min-h-12 rounded-full border border-white/25 px-6 text-sm font-bold transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Tylko niezbędne
          </button>

          <button
            type="button"
            onClick={() => saveConsent("all")}
            className="min-h-12 rounded-full bg-red-500 px-6 text-sm font-bold transition hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
          >
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </section>
  );
}

function CookieIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.7 13.1A8.8 8.8 0 0 1 11.9 21 8.9 8.9 0 0 1 3 12.1a8.8 8.8 0 0 1 7.9-8.8 4.2 4.2 0 0 0 4.8 5.1 4.2 4.2 0 0 0 5 4.7Z"
      />
      <circle cx="8.3" cy="13.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.2" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
