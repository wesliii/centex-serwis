"use client";

import { useState } from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-blue-500 focus:outline-none";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [wiadomosc, setWiadomosc] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: wiadomosc, website }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(
          typeof data.error === "string" ? data.error : "Coś poszło nie tak.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
      setWiadomosc("");
    } catch {
      setErrorMsg("Brak połączenia. Sprawdź internet i spróbuj ponownie.");
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[#1F2937] text-white font-sora">
      <div className="mx-auto px-8 md:px-16 lg:px-30 pt-16 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 lg:gap-10">
        <div>
          <span className="text-xl font-bold block mb-6">
            Centex Auto <span className="text-blue-500">Serwis</span>
          </span>
          <p className="text-sm text-gray-400 leading-relaxed mb-1">
            ul. Biesiadna 9
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            35-304 Rzeszów
          </p>
          <a
            href="tel:+48780041548"
            className="text-sm text-gray-300 hover:text-white transition-colors block mb-1"
          >
            +48 780 041 548
          </a>
          <a
            href="mailto:warsztat@centex.pl"
            className="text-sm text-gray-300 hover:text-white transition-colors block"
          >
            warsztat@centex.pl
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-5">
            Strony
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Strona główna
              </Link>
            </li>
            <li>
              <Link
                href="/o-nas"
                className="hover:text-white transition-colors"
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                href="/galeria"
                className="hover:text-white transition-colors"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-5">
            Usługi
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link
                href="/uslugi"
                className="hover:text-white transition-colors"
              >
                Diagnostyka komputerowa
              </Link>
            </li>
            <li>
              <Link
                href="/uslugi"
                className="hover:text-white transition-colors"
              >
                Naprawy mechaniczne
              </Link>
            </li>
            <li>
              <Link
                href="/uslugi"
                className="hover:text-white transition-colors"
              >
                Klimatyzacja
              </Link>
            </li>
            <li>
              <Link
                href="/uslugi"
                className="hover:text-white transition-colors"
              >
                Opony i wyważanie
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-5">
            Napisz do nas
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            aria-label="Formularz kontaktowy"
          >
            <div>
              <label htmlFor="footer-email" className="sr-only">
                Adres e-mail
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={200}
                autoComplete="email"
                placeholder="Twój adres e-mail"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="footer-message" className="sr-only">
                Treść wiadomości
              </label>
              <textarea
                id="footer-message"
                name="message"
                value={wiadomosc}
                onChange={(e) => setWiadomosc(e.target.value)}
                required
                minLength={10}
                maxLength={3000}
                rows={2}
                placeholder="W czym możemy pomóc?"
                className={`${inputClass} resize-none pb-10`}
              />
            </div>

            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="footer-website">Nie wypełniaj tego pola</label>
              <input
                id="footer-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-between rounded-full bg-blue-600 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{status === "loading" ? "Wysyłanie..." : "Wyślij"}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                <MdArrowForwardIos size={12} color="#2563EB" />
              </span>
            </button>

            <p className="text-[11px] leading-snug text-gray-500">
              Wysyłając wiadomość, akceptujesz{" "}
              <Link
                href="/polityka-prywatnosci"
                className="underline underline-offset-2 hover:text-gray-300"
              >
                politykę prywatności
              </Link>
              .
            </p>

            <div aria-live="polite" className="min-h-[1rem]">
              {status === "success" && (
                <p className="text-xs text-green-400">
                  Dziękujemy, odpowiemy najszybciej jak to możliwe.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400">{errorMsg}</p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto px-8 md:px-16 lg:px-30 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} Centex Auto Serwis. Wszelkie prawa
            zastrzeżone.
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="https://www.magnific.com"
              className="hover:text-white transition-colors"
            >
              Wykorzystane zdjęcia
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className="hover:text-white transition-colors"
            >
              Polityka prywatności
            </Link>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("open-cookie-settings"))
              }
              className="hover:text-white transition-colors"
            >
              Ustawienia cookies
            </button>
            <a
              href="https://kubaportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Wykonanie: Kuba Wesołowski
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto px-8 md:px-16 lg:px-30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
            Centex Auto Serwis to profesjonalny warsztat samochodowy w
            Rzeszowie. Naprawiamy rzetelnie, szybko i uczciwie — bez zbędnych
            kosztów i bez ukrytych opłat.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/profile.php?id=61592659271034"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              <FiFacebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/centex_autoserwis"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              <FiInstagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@centex_autoserwis"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              <AiFillTikTok className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
