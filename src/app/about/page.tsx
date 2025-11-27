import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
    title: "About Us | BongoArt",
    description: "Learn about BongoArt's history, craftsmanship, and commitment to sustainable furniture design since 1998.",
    openGraph: {
        title: "About Us | BongoArt",
        description: "Crafting timeless furniture with nature's finest materials since 1998.",
        images: ["/images/bg1.webp"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
