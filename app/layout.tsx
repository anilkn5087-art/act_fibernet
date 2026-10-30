import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_URL } from "@/lib/areas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "ACT Fibernet Bangalore offers high-speed fiber broadband internet connections for homes and offices. Explore 50 Mbps, 100 Mbps, 200 Mbps, 400 Mbps and 1 Gbps plans. Contact us for new connections, installation and broadband support in Bangalore.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ACT Fibernet Bangalore | High Speed Broadband & WiFi Connection",
    template: "%s | ACT Fibernet Bangalore",
  },
  description: siteDescription,
  keywords: [
    "ACT Fibernet Bangalore",
    "ACT Broadband Bangalore",
    "ACT Fiber Internet Connection Bangalore",
    "ACT Fibernet New Connection",
    "Best Broadband in Bangalore",
    "High Speed Fiber Internet Bangalore",
    "WiFi Connection Bangalore",
    "Home Broadband Bangalore",
    "Office Internet Connection Bangalore",
    "Unlimited WiFi Plans Bangalore",
    "ACT Broadband Plans Bangalore",
    "New Broadband Connection",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "ACT Fibernet Bangalore",
    title: "ACT Fibernet Bangalore | High Speed Broadband & WiFi Connection",
    description: siteDescription,
    images: [{ url: "/images/hero2.jpeg", alt: "ACT Fibernet Bangalore broadband" }],
  },
  robots: { index: true, follow: true },
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
