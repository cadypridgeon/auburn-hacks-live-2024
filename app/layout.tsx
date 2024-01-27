import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auburn Hacks 2024 | February 3-4, 2024",
  description: "Auburn Hacks Day Of Website",
  keywords: ["auburn", "hacks", "hackathon", "auburn hacks 2024", "mlh"],
  authors: [{ name: "Cady Pridgeon" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Auburn Hacks 2024 | February 3-4, 2024",
    description: "Auburn Hacks Day Of Website",
    url: "https://auburnhacks.com",
    siteName: "Auburn Hacks",
    images: [
      {
        url: "https://auburnhacks.com/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auburn Hacks 2024",
    description: "Get excited for Auburn Hacks 2024! Pre-register today!",
    images: ["https://auburnhacks.com/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/bho6wmy.css"
        ></link>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
