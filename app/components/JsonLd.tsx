export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Centex Auto Serwis",
    image: "https://centex-serwis.pl/og-image.jpg",
    "@id": "https://centex-serwis.pl",
    url: "https://centex-serwis.pl",
    telephone: "+48780041548",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Biesiadna 9",
      addressLocality: "Rzeszów",
      postalCode: "35-304",
      addressCountry: "PL",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
