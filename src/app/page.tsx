import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | BongoArt",
  description: "Welcome to BongoArt. Explore our premium collection of river stone bathtubs and teak furniture.",
};

import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProjectClient from "@/components/ProjectClient";
import BestSellers from "@/components/BestSellers";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Philosophy />
      <ProjectClient />
      <BestSellers />
      <ContactSection />
    </main >
  );
}
