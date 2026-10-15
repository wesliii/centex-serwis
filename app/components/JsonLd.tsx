const SITE = "https://www.centex-serwis.pl";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE}/#business`,
    name: "Centex Auto Serwis",
    description:
      "Warsztat samochodowy w Rzeszowie: diagnostyka komputerowa, naprawy mechaniczne, klimatyzacja, wymiana opon, oleju i płynów.",
    url: SITE,
    image: `${SITE}/transparent-logo.png`,
    logo: `${SITE}/mechanikLogo.png`,
    telephone: "+48518032252",
    email: "warsztat@centex.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Biesiadna 9",
      addressLocality: "Rzeszów",
      postalCode: "35-304",
      addressCountry: "PL",
    },

    hasMap:
      "https://www.google.com/maps/place/?q=place_id:ChIJN7e84I0bVy8Rsb0PzrVOMp0",
    areaServed: { "@type": "City", name: "Rzeszów" },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61592659271034",
      "https://www.instagram.com/centex_autoserwis",
      "https://www.tiktok.com/@centex_autoserwis",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
