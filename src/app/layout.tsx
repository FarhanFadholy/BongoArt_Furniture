import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bongoart.com"), // Replace with your actual domain
  title: {
    default: "BongoArt | Premium Furniture & Stone Bathtubs",
    template: "%s | BongoArt"
  },
  description: "Discover BongoArt's exclusive collection of hand-carved river stone bathtubs and sustainable teak furniture. Modern aesthetics meets timeless nature.",
  keywords: ["furniture", "stone bathtub", "river stone", "teak furniture", "luxury furniture", "indonesia furniture", "bongo art"],
  authors: [{ name: "BongoArt Team" }],
  creator: "BongoArt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bongoart.com",
    title: "BongoArt | Premium Furniture & Stone Bathtubs",
    description: "Hand-carved river stone bathtubs and sustainable teak furniture.",
    siteName: "BongoArt",
    images: [
      {
        url: "/images/hero.webp", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "BongoArt Premium Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BongoArt | Premium Furniture",
    description: "Modern aesthetics, timeless comfort. Hand-carved stone and wood furniture.",
    images: ["/images/hero.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${comicNeue.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}