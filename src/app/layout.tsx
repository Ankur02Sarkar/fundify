import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import { I18nProvider } from "@/components/providers/i18n-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundify - Smart Financial Management",
  description: "Take control of your finances with our intelligent platform. Track expenses, manage investments, and get AI-powered insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <HeroHeader />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
