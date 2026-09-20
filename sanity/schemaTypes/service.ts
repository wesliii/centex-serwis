import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Usługa",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Nazwa usługi",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Krótki opis (na kafelku)",
      rows: 3,
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: "fullDescription",
      type: "text",
      title: "Pełny opis (na podstronie usługi)",
      rows: 6,
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Zdjęcie",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Tekst alternatywny (alt)",
        }),
      ],
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Ikona",
      description: "Nazwa ikony z react-icons/fi, np. FiTool, FiSettings",
      options: {
        list: [
          { title: "Narzędzie (FiTool)", value: "FiTool" },
          { title: "Kropla / Płyny (FiDroplet)", value: "FiDroplet" },
          { title: "Wiatr / Klimatyzacja (FiWind)", value: "FiWind" },
          { title: "Błyskawica / Elektryka (FiZap)", value: "FiZap" },
          { title: "Koło / Opony (FiDisc)", value: "FiDisc" },
          {
            title: "Ustawienia / Diagnostyka (FiSettings)",
            value: "FiSettings",
          },
          { title: "Tarcza / Bezpieczeństwo (FiShield)", value: "FiShield" },
          { title: "Klucz / Naprawa (FiKey)", value: "FiKey" },
          { title: "Zegar / Szybki serwis (FiClock)", value: "FiClock" },
          { title: "Aktywność / Silnik (FiActivity)", value: "FiActivity" },
          {
            title: "Termometr / Chłodzenie (FiThermometer)",
            value: "FiThermometer",
          },
          { title: "Bateria / Akumulator (FiBattery)", value: "FiBattery" },
          {
            title: "Ostrzeżenie / Diagnostyka (FiAlertTriangle)",
            value: "FiAlertTriangle",
          },
          {
            title: "Sprawdzone / Gwarancja (FiCheckCircle)",
            value: "FiCheckCircle",
          },
          { title: "Lupa / Przegląd (FiSearch)", value: "FiSearch" },
          { title: "Filtr / Filtry (FiFilter)", value: "FiFilter" },
          { title: "Kompas / Nawigacja (FiCompass)", value: "FiCompass" },
          { title: "Lampka / Oświetlenie (FiSun)", value: "FiSun" },
          { title: "Mapa / Lokalizacja (FiMapPin)", value: "FiMapPin" },
          { title: "Truck / Pomoc drogowa (FiTruck)", value: "FiTruck" },
        ],
      },
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Kolejność wyświetlania",
      description: "Mniejsza liczba = wyżej na liście",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
