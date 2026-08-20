import type { Metadata } from "next";
import { Inter, Agbalumo } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

const inter = Inter({ subsets: ["latin"] });
const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aptorstudies.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Aptor Studies - Education Portal & University Guidance",
  description: "Experience premier education services with Aptor Studies. Get expert career guidance, explore top colleges, universities, and courses in Bengaluru, Kerala, and worldwide.",
  keywords: ["education portal", "universities", "colleges", "courses", "student counseling", "education consultancy", "bengaluru colleges", "kerala education"],
  authors: [{ name: "Aptor Studies", url: baseUrl }],
  publisher: "Aptor Studies (Connected Management Solution)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'llms-txt': `${baseUrl}/llms.txt`,
    'citation_publisher': 'Aptor Studies',
    'citation_author': 'Aptor Studies Advisory Board',
  },
  openGraph: {
    title: "Aptor Studies - Education Portal & University Guidance",
    description: "Experience premier education services with Aptor Studies. Get expert guidance, explore colleges, universities, and courses worldwide.",
    type: "website",
    siteName: "Aptor Studies",
    url: baseUrl,
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
    title: "Aptor Studies - Education Portal & University Guidance",
    description: "Experience premier education services with Aptor Studies. Get expert guidance, explore colleges, universities, and courses worldwide.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <SeoSchema routeKey="home" />
        <AeoSchema />
        <GeoSchema />
      </head>
      <body className={`${inter.className} ${agbalumo.variable}`} suppressHydrationWarning>
        <SessionProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
