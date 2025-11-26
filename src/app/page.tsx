"use client";

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
