import { FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white font-sora">
      <div className=" mx-auto px-8 md:px-16 lg:px-30 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-12 md:gap-8">
        <div>
          <span className="text-xl font-bold block mb-6">
            Centex <span className="text-blue-500">Serwis</span>
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
            href="mailto:kontakt@centex-serwis.pl"
            className="text-sm text-gray-300 hover:text-white transition-colors block"
          >
            kontakt@centex-serwis.pl
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-5">
            Strony
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Strona główna
              </a>
            </li>
            <li>
              <a href="/o-nas" className="hover:text-white transition-colors">
                O nas
              </a>
            </li>
            <li>
              <a href="/galeria" className="hover:text-white transition-colors">
                Galeria
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="/kontakt" className="hover:text-white transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-5">
            Usługi
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="/uslugi" className="hover:text-white transition-colors">
                Diagnostyka komputerowa
              </a>
            </li>
            <li>
              <a href="/uslugi" className="hover:text-white transition-colors">
                Naprawy mechaniczne
              </a>
            </li>
            <li>
              <a href="/uslugi" className="hover:text-white transition-colors">
                Klimatyzacja
              </a>
            </li>
            <li>
              <a href="/uslugi" className="hover:text-white transition-colors">
                Opony i wyważanie
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-5">
            Więcej
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="/blog" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/polityka-prywatnosci"
                className="hover:text-white transition-colors"
              >
                Polityka prywatności
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto px-8 md:px-16 lg:px-30 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} Centex Serwis. Wszelkie prawa
            zastrzeżone.
          </span>
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

      <div className="border-t border-white/10">
        <div className=" mx-auto px-8 md:px-16 lg:px-30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
            Centex Serwis to profesjonalny warsztat samochodowy w Rzeszowie.
            Naprawiamy rzetelnie, szybko i uczciwie — bez zbędnych kosztów i bez
            ukrytych opłat.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              <FiFacebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              <FiInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
