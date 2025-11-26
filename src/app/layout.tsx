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
  title: "BongoArt | Premium Furniture",
  description: "Modern aesthetics, timeless comfort.",
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