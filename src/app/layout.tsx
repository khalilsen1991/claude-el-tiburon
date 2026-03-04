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
    default: "El Tiburon | Conversion & Growth Platform",
    template: "%s | El Tiburon",
  },
  description:
    "El Tiburon is a B2B platform built to boost conversion rates and accelerate sustainable growth.",
  keywords: [
    "El Tiburon",
    "B2B conversion platform",
    "growth marketing",
    "sales acceleration",
    "customer journey optimization",
  ],
  openGraph: {
    title: "El Tiburon | Conversion & Growth Platform",
    description:
      "El Tiburon helps revenue teams improve conversions and scale growth with actionable insights.",
    url: "/",
    siteName: "El Tiburon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tiburon | Conversion & Growth Platform",
    description:
      "Conversion and growth platform for B2B teams that need measurable results.",
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
