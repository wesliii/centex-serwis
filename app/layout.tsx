import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
