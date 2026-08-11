import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LuxHair Napoli | Extension Capelli e Corsi",
    template: "%s | LuxHair Napoli",
  },
  description:
    "Extension capelli invisibili effetto naturale a Napoli. Corsi di extension da zero a PRO. +100 clienti soddisfatti.",
  keywords: [
    "extension capelli",
    "extension capelli Napoli",
    "corso extension capelli",
    "capelli naturali slavi",
    "LuxHair Napoli",
  ],
  openGraph: {
    title: "LuxHair Napoli | Extension Capelli e Corsi",
    description:
      "Extension capelli invisibili effetto naturale a Napoli. Corsi di extension da zero a PRO.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${jost.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
