import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://trupower.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TruPower | Energy Storage. Powering Growth.",
    template: "%s | TruPower",
  },
  description:
    "TruPower delivers advanced Battery Energy Storage Systems (BESS) that ensure reliable power, optimize costs, and drive a sustainable future.",
  keywords: [
    "TruPower",
    "Battery Energy Storage System",
    "BESS",
    "energy storage",
    "on-grid solution",
    "off-grid solution",
    "microgrid",
    "renewable energy",
  ],
  openGraph: {
    title: "TruPower | Energy Storage. Powering Growth.",
    description:
      "TruPower delivers advanced Battery Energy Storage Systems (BESS) that ensure reliable power, optimize costs, and drive a sustainable future.",
    url: siteUrl,
    siteName: "TruPower",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruPower | Energy Storage. Powering Growth.",
    description:
      "TruPower delivers advanced Battery Energy Storage Systems (BESS) that ensure reliable power, optimize costs, and drive a sustainable future.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
