import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aptor Studies - Education Portal & University Guidance",
  description: "Experience education services with Aptor Studies. Get expert guidance, explore colleges, universities, and courses worldwide.",
  keywords: ["education portal", "universities", "colleges", "courses", "student counseling", "education"],
  openGraph: {
    title: "Aptor Studies - Education Portal",
    description: "Experience education services with Aptor Studies. Get expert guidance, explore colleges, universities, and courses worldwide.",
    type: "website",
    siteName: "Aptor Studies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aptor Studies - Education Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptor Studies - Education Portal",
    description: "Experience education services with Aptor Studies. Get expert guidance, explore colleges, universities, and courses worldwide.",
    images: ["/logo.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aptor Studies"
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#d4af37"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
