"use client";

import { useState } from "react";

const faqs = [
  {
    kategoria: "Ogólne pytania",
    opis: "Wszystko co powinieneś wiedzieć o naszym warsztacie.",
    pytania: [
      {
        pytanie: "Czy muszę umawiać się na wizytę?",
        odpowiedz:
          "Zalecamy wcześniejsze umówienie wizyty telefonicznie lub przez formularz na stronie. Dzięki temu możemy zarezerwować dla Ciebie czas i odpowiednie stanowisko.",
      },
      {
        pytanie: "Jakie marki samochodów naprawiacie?",
        odpowiedz:
          "Naprawiamy wszystkie popularne marki samochodów osobowych i dostawczych. Specjalizujemy się w markach europejskich, azjatyckich i amerykańskich.",
      },
      {
        pytanie: "Czy mogę zostać w warsztacie podczas naprawy?",
        odpowiedz:
          "Tak, posiadamy poczekalnię z kawą i dostępem do Wi-Fi. Przy krótkich naprawach możesz zostać na miejscu.",
      },
      {
        pytanie: "Jak długo trwa standardowa naprawa?",
        odpowiedz:
          "Czas naprawy zależy od jej zakresu. Proste naprawy realizujemy tego samego dnia, bardziej złożone usterki mogą wymagać 2-3 dni roboczych.",
      },
    ],
  },
  {
    kategoria: "Płatności i ceny",
    opis: "Pytania dotyczące kosztów i metod płatności.",
    pytania: [
      {
        pytanie: "Jakie metody płatności akceptujecie?",
        odpowiedz:
          "Akceptujemy gotówkę, karty płatnicze oraz przelewy bankowe. Wystawiamy faktury VAT.",
      },
      {
        pytanie: "Czy wycena jest bezpłatna?",
        odpowiedz:
          "Tak, wstępna diagnoza i wycena są bezpłatne. Przed przystąpieniem do naprawy zawsze informujemy o kosztach.",
      },
      {
        pytanie: "Czy oferujecie gwarancję na naprawy?",
        odpowiedz:
          "Tak, udzielamy 12 miesięcy gwarancji na wykonane usługi i zamontowane części.",
      },
    ],
  },
];

function FaqItem({
  pytanie,
  odpowiedz,
}: {
  pytanie: string;
  odpowiedz: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-sm font-medium text-gray-900">{pytanie}</span>
        <div className="shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-md leading-none">
            {open ? "−" : "+"}
          </span>
        </div>
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-4 pr-8">
          {odpowiedz}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white px-6 lg:px-30 py-16 lg:py-24 font-sora">
      {faqs.map((sekcja, i) => (
        <div
          key={i}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16 last:mb-0"
        >
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {sekcja.kategoria}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {sekcja.opis}
            </p>
          </div>

          <div className="border-t border-gray-200">
            {sekcja.pytania.map((item, j) => (
              <FaqItem
                key={j}
                pytanie={item.pytanie}
                odpowiedz={item.odpowiedz}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
