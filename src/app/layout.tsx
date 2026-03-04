import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Global Maritime | Buques Pesqueros y Transporte Marítimo",
    template: "%s | Global Maritime",
  },
  description:
    "Gestión integral de flota pesquera y transporte marítimo. 10 buques navegando por océanos del mundo. Tecnología de última generación para pesca industrial y logística marina.",
  keywords: [
    "buques pesqueros",
    "transporte marítimo",
    "flota global",
    "pesca industrial",
    "logística marina",
    "gestión de flota",
    "shipping",
    "maritime",
  ],
  openGraph: {
    title: "Global Maritime | Flota de Buques Pesqueros",
    description:
      "Coordinamos 10 buques navegando por Atlántico, Pacífico, Índico y más. Pesca industrial y transporte marítimo con tecnología avanzada.",
    url: "/",
    siteName: "Global Maritime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Maritime | Gestión de Flota Marítima",
    description:
      "10 buques pesqueros y de transporte navegando por los océanos del mundo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
