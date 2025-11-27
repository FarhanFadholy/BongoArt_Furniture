import type { Metadata } from "next";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
    title: "Catalog | BongoArt",
    description: "Browse our complete collection of river stone bathtubs, sinks, and teak furniture. Handcrafted in Indonesia.",
    openGraph: {
        title: "Catalog | BongoArt",
        description: "Explore our collection of premium stone and wood furniture.",
        images: ["/images/hero.webp"],
    },
};

export default function CatalogPage() {
    return <CatalogClient />;
}
