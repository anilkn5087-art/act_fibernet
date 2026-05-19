import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACT Fibernet Bangalore | Internet Service Provider",
  description: "Get the best internet plans, high-speed fiber broadband, and smart WiFi installation with ACT Fibernet Bangalore.",
  keywords: [
    "2.4 ghz vs 5ghz wifi",
    "ACT Broadband Plans Bangalore",
    "ACT Customer Care",
    "ACT bill payment online",
    "ACT speed test",
    "Broadband Plans",
    "Home Wifi Plans",
    "How Change ACT Broadband Plan",
    "How To Find Wifi Password",
    "How To Increase Wifi Speed",
    "New Broadband Connection",
    "Unlimited Wifi Plans for Home",
    "Wifi Speed Test",
    "act broadband plans",
    "uses of internet"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white overflow-x-hidden">
        <Header />
        <main className="flex-1 max-w-[100vw] overflow-hidden">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
