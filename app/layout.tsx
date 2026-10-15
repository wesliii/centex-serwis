import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import Cookies from "./components/Cookies";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TLRQFHPQ";

// Domyslna zgoda Consent Mode  musi wykonac sie PRZED zaladowaniem GTM.
const consentDefault = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
`;

const gtmSnippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.centex-serwis.pl"),
  title: {
    default: "Centex Auto Serwis - Warsztat samochodowy Rzeszów",
    template: "%s | Centex Auto Serwis",
  },
  description:
    "Profesjonalny serwis samochodowy w Rzeszowie. Diagnostyka, naprawy mechaniczne i szybka pomoc - bez zbędnego czekania.",
  keywords: [
    "warsztat samochodowy Rzeszów",
    "serwis samochodowy Rzeszów",
    "mechanik Rzeszów",
    "mechanik samochodowy Rzeszów",
    "naprawa samochodów Rzeszów",
    "auto serwis Rzeszów",
    "diagnostyka komputerowa Rzeszów",
    "serwis klimatyzacji samochodowej Rzeszów",
    "wymiana opon Rzeszów",
    "wyważanie kół Rzeszów",
    "naprawy mechaniczne Rzeszów",
    "Centex Auto Serwis",
  ],
  openGraph: {
    title: "Centex Auto Serwis - Warsztat samochodowy Rzeszów",
    description: "Profesjonalny serwis samochodowy w Rzeszowie.",
    siteName: "Centex Auto Serwis",
    locale: "pl_PL",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefault }} />
        <script dangerouslySetInnerHTML={{ __html: gtmSnippet }} />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
        <Cookies />
      </body>
    </html>
  );
}
