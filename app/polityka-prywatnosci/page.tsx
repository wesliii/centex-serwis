// app/polityka-prywatnosci/page.tsx
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności Centex Auto Serwis — informacje o przetwarzaniu danych osobowych i plikach cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <section className="px-6 md:px-16 lg:px-30 py-16 md:py-20 bg-white text-black font-sora">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3 block">
            Dokument prawny
          </span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Polityka prywatności
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Ostatnia aktualizacja: 20 września 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Administrator danych
              </h2>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem
                strony internetowej centex-serwis.pl jest:
              </p>
              <p className="mt-3">
                <strong className="text-gray-900">Centex Auto Serwis</strong>
                <br />
                ul. Biesiadna 9, 35-304 Rzeszów
                <br />
                Telefon:{" "}
                <a
                  href="tel:+48780041548"
                  className="text-blue-600 hover:underline"
                >
                  +48 780 041 548
                </a>
                <br />
                E-mail:{" "}
                <a
                  href="mailto:warsztat@centex.pl
"
                  className="text-blue-600 hover:underline"
                >
                  warsztat@centex.pl
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. Jakie dane zbieramy
              </h2>
              <p className="mb-3">
                W ramach korzystania ze strony możemy zbierać następujące dane:
              </p>
              <p className="font-semibold text-gray-900 mb-1">
                Dane podane dobrowolnie przez formularz kontaktowy:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Adres e-mail</li>
                <li>Treść wiadomości</li>
              </ul>
              <p className="font-semibold text-gray-900 mb-1">
                Dane zbierane automatycznie:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Dane o ruchu na stronie (odwiedzane podstrony, czas spędzony
                  na stronie, źródło wejścia) za pośrednictwem Google Analytics
                </li>
                <li>Adres IP oraz dane techniczne przeglądarki i urządzenia</li>
                <li>Pliki cookies (patrz punkt 5)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. Cel przetwarzania danych
              </h2>
              <p className="mb-2">Dane przetwarzamy w celu:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Udzielenia odpowiedzi na zapytanie przesłane przez formularz
                  kontaktowy
                </li>
                <li>
                  Analizy ruchu na stronie i poprawy jej funkcjonalności (Google
                  Analytics)
                </li>
                <li>
                  Ewentualnego prowadzenia działań marketingowych (jeśli
                  korzystamy z Meta Pixel — patrz punkt 6)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Podstawa prawna
              </h2>
              <p className="mb-2">Dane przetwarzamy na podstawie:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Art. 6 ust. 1 lit. a RODO — zgoda użytkownika (formularz
                  kontaktowy, cookies marketingowe/analityczne)
                </li>
                <li>
                  Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes
                  administratora (analiza ruchu, poprawa działania strony)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Pliki cookies
              </h2>
              <p className="mb-2">Strona wykorzystuje pliki cookies w celu:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Zapewnienia prawidłowego działania strony</li>
                <li>Analizy statystyk odwiedzin (Google Analytics)</li>
                <li>Personalizacji reklam (Meta Pixel, jeśli dotyczy)</li>
              </ul>
              <p>
                Użytkownik może w każdej chwili zmienić ustawienia dotyczące
                plików cookies w swojej przeglądarce, w tym zablokować ich
                zapisywanie. Może to jednak wpłynąć na funkcjonalność strony.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Narzędzia zewnętrzne
              </h2>
              <p className="mb-3">
                <strong className="text-gray-900">Google Analytics</strong> —
                usługa analizy statystyk internetowych udostępniana przez Google
                LLC. Zbiera anonimowe dane o sposobie korzystania ze strony.
                Więcej informacji:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  polityka prywatności Google
                </a>
                .
              </p>
              <p>
                <strong className="text-gray-900">Meta Pixel</strong> -
                narzędzie firmy Meta Platforms, Inc. służące do analizy
                skuteczności reklam i personalizacji treści reklamowych na
                Facebooku i Instagramie. Więcej informacji:{" "}
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  polityka prywatności Meta
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Odbiorcy danych
              </h2>
              <p>
                Dane mogą być przekazywane podmiotom obsługującym infrastrukturę
                techniczną strony (hosting) oraz dostawcom wykorzystywanych
                narzędzi analitycznych i marketingowych (Google, Meta), w
                zakresie niezbędnym do świadczenia tych usług.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Okres przechowywania danych
              </h2>
              <p className="mb-2">
                Dane z formularza kontaktowego przechowujemy przez okres
                niezbędny do udzielenia odpowiedzi oraz obsługi ewentualnej
                dalszej korespondencji, nie dłużej niż przez 12 miesięcy od
                ostatniego kontaktu.
              </p>
              <p>
                Dane zbierane przez Google Analytics i Meta Pixel przechowywane
                są zgodnie z politykami tych dostawców.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                9. Prawa użytkownika
              </h2>
              <p className="mb-2">
                Każdej osobie, której dane dotyczą, przysługuje prawo do:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Dostępu do swoich danych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych `prawo do bycia zapomnianym`</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>
                  Cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z
                  prawem przetwarzania dokonanego przed jej cofnięciem)
                </li>
                <li>
                  Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                  (UODO)
                </li>
              </ul>
              <p>
                W celu realizacji powyższych praw prosimy o kontakt:{" "}
                <a
                  href="mailto:warsztat@centex.pl"
                  className="text-blue-600 hover:underline"
                >
                  warsztat@centex.pl
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                10. Zmiany polityki prywatności
              </h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej
                polityce prywatności. Aktualna wersja zawsze dostępna jest na
                tej stronie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
