import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import Cookies from "./components/Cookies";

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
    "naprawa samochodów Rzeszów",
  ],
  openGraph: {
    title: "Centex Auto Serwis - Warsztat samochodowy Rzeszów",
    description: "Profesjonalny serwis samochodowy w Rzeszowie.",
    url: "https://centex-serwis.pl",
    siteName: "Centex Auto Serwis",
    locale: "pl_PL",
    type: "website",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://centex-serwis.pl",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="consent-default" strategy="beforeInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(['consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
}]);
  `}
        </Script>
        <JsonLd />
        <GoogleTagManager gtmId="GTM-TLRQFHPQ" />
        {children}
        <Cookies />
      </body>
    </html>
  );
}
