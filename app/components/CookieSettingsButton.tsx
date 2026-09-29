"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="font-semibold text-blue-600 hover:underline"
    >
      Ustawienia cookies
    </button>
  );
}
