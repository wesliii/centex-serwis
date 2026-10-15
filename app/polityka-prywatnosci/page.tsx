import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieSettingsButton from "../components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności i informacje o plikach cookies serwisu Centex Auto Serwis: zasady przetwarzania danych, podstawy prawne, odbiorcy i prawa użytkownika.",
  alternates: {
    canonical: "https://www.centex-serwis.pl/polityka-prywatnosci",
  },
};

const COMPANY = {
  name: "Centex Auto Serwis",
  owner: "Kamil Cetnarowski",
  address: "ul. Biesiadna 9, 35-304 Rzeszów",
  nip: "8133957103",
  phone: "518 032 252",
  phoneHref: "tel:+48518032252",
  email: "warsztat@centex.pl",
};
const LAST_UPDATED = "2 października 2026";

const linkClass = "text-blue-600 hover:underline";

const purposes = [
  [
    "Odpowiedź na wiadomość z formularza lub kontakt telefoniczny i mailowy",
    "Adres e-mail, treść wiadomości oraz dane podane w jej treści",
    "Art. 6 ust. 1 lit. f RODO (obsługa zapytań); przy zapytaniach dotyczących zawarcia umowy także lit. b",
    "Do zakończenia korespondencji, nie dłużej niż 12 miesięcy. Jeśli dojdzie do zawarcia umowy: do przedawnienia roszczeń",
  ],
  [
    "Zapewnienie działania i bezpieczeństwa serwisu, w tym ochrona formularza przed spamem (Cloudflare Turnstile)",
    "Adres IP i dane techniczne przeglądarki zapisywane w logach serwera oraz przetwarzane przez Cloudflare przy weryfikacji formularza",
    "Art. 6 ust. 1 lit. f RODO (bezpieczeństwo i prawidłowe działanie strony)",
    "Zgodnie z okresem przechowywania logów u dostawcy hostingu",
  ],
  [
    "Statystyki odwiedzin (Google Analytics 4 przez Google Tag Manager)",
    "Identyfikatory online, skrócony adres IP, odwiedzane podstrony, czas wizyty, źródło wejścia, dane o urządzeniu",
    "Zgoda: art. 6 ust. 1 lit. a RODO oraz art. 399 Prawa komunikacji elektronicznej",
    "Do wycofania zgody. Dane w Google Analytics przechowywane 14 miesięcy",
  ],
  [
    "Marketing i pomiar skuteczności reklam (Meta Pixel)",
    "Identyfikatory online, adres IP, dane o urządzeniu, działania podjęte na stronie",
    "Zgoda: art. 6 ust. 1 lit. a RODO oraz art. 399 Prawa komunikacji elektronicznej",
    "Do wycofania zgody. Pliki cookies do 90 dni",
  ],
  [
    "Zapamiętanie Twojego wyboru w sprawie cookies",
    "Zapis wyboru w pamięci przeglądarki (localStorage)",
    "Art. 6 ust. 1 lit. c w zw. z art. 7 ust. 1 RODO (obowiązek wykazania zgody)",
    "Do usunięcia przez użytkownika z pamięci przeglądarki",
  ],
  [
    "Ustalenie, dochodzenie lub obrona roszczeń",
    "Dane niezbędne do wykazania przebiegu korespondencji lub usługi",
    "Art. 6 ust. 1 lit. f RODO",
    "Do upływu terminu przedawnienia roszczeń",
  ],
];

const cookies = [
  ["_ga", "Google", "Rozróżnianie użytkowników w statystykach", "2 lata"],
  ["_ga_*", "Google", "Utrzymanie sesji w Google Analytics 4", "2 lata"],
  [
    "_fbp",
    "Meta",
    "Identyfikacja przeglądarki na potrzeby reklam i pomiaru",
    "90 dni",
  ],
  [
    "_fbc",
    "Meta",
    "Powiązanie wejścia z kliknięciem w reklamę Meta (tylko po wejściu z reklamy)",
    "90 dni",
  ],
  [
    "cookie_consent",
    "Centex Auto Serwis",
    "Zapamiętanie wyboru dotyczącego cookies (localStorage, niebędące plikiem cookie)",
    "Do usunięcia przez użytkownika",
  ],
];

const rights = [
  "dostępu do danych oraz otrzymania ich kopii",
  "sprostowania danych",
  "usunięcia danych („prawo do bycia zapomnianym”)",
  "ograniczenia przetwarzania",
  "sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie",
  "przenoszenia danych, gdy przetwarzanie odbywa się na podstawie zgody lub umowy i w sposób zautomatyzowany",
  "cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem",
  "wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa)",
];

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`sekcja-${number}`}>
      <h2
        id={`sekcja-${number}`}
        className="text-xl font-bold text-gray-900 mb-3"
      >
        {number}. {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-gray-50 text-gray-900">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row[0]} className="align-top">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="px-6 md:px-16 lg:px-30 py-16 md:py-20 bg-white text-black font-sora">
        <article className="max-w-4xl mx-auto">
          <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3 block">
            Dokument prawny
          </span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Polityka prywatności
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Ostatnia aktualizacja: {LAST_UPDATED}
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <Section number={1} title="Administrator danych">
              <p>
                Administratorem danych osobowych przetwarzanych w związku z
                korzystaniem ze strony centex-serwis.pl jest{" "}
                <strong className="text-gray-900">{COMPANY.owner}</strong>,
                osoba prowadząca działalność gospodarczą pod firmą{" "}
                <strong className="text-gray-900">{COMPANY.name}</strong>,{" "}
                {COMPANY.address}, NIP: {COMPANY.nip}.
              </p>
              <p>
                Kontakt w sprawach danych osobowych:{" "}
                <a href={`mailto:${COMPANY.email}`} className={linkClass}>
                  {COMPANY.email}
                </a>
                , telefon{" "}
                <a href={COMPANY.phoneHref} className={linkClass}>
                  {COMPANY.phone}
                </a>
                . Nie powołaliśmy inspektora ochrony danych.
              </p>
            </Section>

            <Section
              number={2}
              title="Cele, podstawy prawne i okres przetwarzania"
            >
              <p>
                Poniżej wskazujemy, jakie dane przetwarzamy, w jakim celu, na
                jakiej podstawie i jak długo.
              </p>
              <DataTable
                head={["Cel", "Zakres danych", "Podstawa prawna", "Okres"]}
                rows={purposes}
              />
            </Section>

            <Section number={3} title="Pliki cookies i podobne technologie">
              <p>
                Pliki niezbędne (zapamiętanie Twojego wyboru) działają zawsze.
                Pliki analityczne i marketingowe uruchamiamy dopiero po
                wyrażeniu zgody w banerze. Odmowa nie ogranicza korzystania ze
                strony.
              </p>
              <DataTable
                head={["Nazwa", "Dostawca", "Cel", "Ważność"]}
                rows={cookies}
              />
              <p>
                Zgodę możesz zmienić lub cofnąć w każdej chwili przez{" "}
                <CookieSettingsButton /> (dostępne także w stopce strony).
                Cofnięcie jest równie łatwe jak wyrażenie zgody. Cookies możesz
                też usunąć lub zablokować w ustawieniach przeglądarki.
              </p>
            </Section>

            <Section number={4} title="Odbiorcy danych i narzędzia zewnętrzne">
              <p>Dane mogą być powierzane lub udostępniane:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-gray-900">Google</strong> (Google
                  Ireland Limited, Google LLC): Google Analytics 4, Google Tag
                  Manager, mapa Google Maps osadzona na stronie. Wyświetlenie
                  mapy wiąże się z przesłaniem do Google adresu IP i może
                  skutkować zapisaniem plików cookies Google. Informacje:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    polityka prywatności Google
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-gray-900">Meta</strong> (Meta
                  Platforms Ireland Limited, Meta Platforms, Inc.): Meta Pixel.
                  Informacje:{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    polityka prywatności Meta
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-gray-900">Cloudflare, Inc.</strong>:
                  hosting strony, sieć dostarczania treści (CDN) i ochrona przed
                  atakami oraz usługa Cloudflare Turnstile, która sprawdza, czy
                  formularz kontaktowy wypełnia człowiek. Skrypt Turnstile
                  ładuje się dopiero po kliknięciu w pole formularza, a
                  Cloudflare przetwarza wtedy m.in. adres IP i dane techniczne
                  przeglądarki. Informacje:{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    polityka prywatności Cloudflare
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-gray-900">Resend</strong>:
                  dostarczanie wiadomości e-mail wysyłanych z formularza
                  kontaktowego. Wiadomości nie są zapisywane w bazie danych
                  strony, trafiają do naszej skrzynki e-mail.
                </li>
                <li>
                  Dostawca usługi poczty e-mail, na którą trafiają wiadomości.
                </li>
              </ul>
              <p>
                Na stronie wyświetlamy opinie z Map Google. Nick i zdjęcie
                profilowe autora są danymi opublikowanymi przez niego publicznie
                w Google, a my jedynie je prezentujemy.
              </p>
            </Section>

            <Section number={5} title="Współadministrowanie z Meta">
              <p>
                W zakresie zbierania danych za pomocą Meta Pixel i przekazywania
                ich do Meta jesteśmy współadministratorem danych wraz z Meta
                Platforms Ireland Limited (art. 26 RODO). Za dalsze
                przetwarzanie tych danych przez Meta odpowiada Meta. Warunki
                współadministrowania:{" "}
                <a
                  href="https://www.facebook.com/legal/controller_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  aneks dotyczący administratora danych
                </a>
                .
              </p>
            </Section>

            <Section number={6} title="Przekazywanie danych poza EOG">
              <p>
                Część dostawców (Google, Meta, Cloudflare, Resend) ma siedzibę w
                Stanach Zjednoczonych lub przetwarza dane w USA. Przekazanie
                odbywa się na podstawie decyzji Komisji Europejskiej
                stwierdzającej odpowiedni stopień ochrony (EU-US Data Privacy
                Framework) albo standardowych klauzul umownych, zależnie od
                dostawcy. Kopię zabezpieczeń możesz uzyskać, kontaktując się z
                nami.
              </p>
            </Section>

            <Section number={7} title="Profilowanie i decyzje zautomatyzowane">
              <p>
                Nie podejmujemy decyzji wywołujących skutki prawne wyłącznie w
                sposób zautomatyzowany. Jeśli wyrazisz zgodę na cookies
                marketingowe, Meta może na podstawie danych z Pixela dopasowywać
                reklamy, co stanowi profilowanie do celów reklamowych.
              </p>
            </Section>

            <Section number={8} title="Twoje prawa">
              <p>Przysługuje Ci prawo do:</p>
              <ul className="list-disc pl-5 space-y-1">
                {rights.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p>
                Aby skorzystać z tych praw, napisz na{" "}
                <a href={`mailto:${COMPANY.email}`} className={linkClass}>
                  {COMPANY.email}
                </a>
                .
              </p>
            </Section>

            <Section number={9} title="Dobrowolność podania danych">
              <p>
                Podanie danych w formularzu kontaktowym jest dobrowolne, ale
                niezbędne do udzielenia odpowiedzi. Zgoda na pliki analityczne i
                marketingowe jest dobrowolna i nie wpływa na dostęp do strony.
              </p>
            </Section>

            <Section number={10} title="Zmiany polityki prywatności">
              <p>
                Możemy zmieniać niniejszą politykę, np. przy dodaniu nowych
                narzędzi. Aktualna wersja jest zawsze dostępna na tej stronie, a
                przy istotnych zmianach ponownie poprosimy o zgodę na cookies.
              </p>
            </Section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
