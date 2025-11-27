import type { Metadata } from "next";
import ProductClient from "@/components/ProductClient";

export const metadata: Metadata = {
    title: "River Stone Bathtub | BongoArt Stone Collection",
    description: "Hand-carved river stone bathtub from BongoArt. Unique, organic, and timeless luxury for your bathroom.",
    openGraph: {
        title: "River Stone Bathtub | BongoArt",
        description: "Hand-carved river stone bathtub. A masterpiece of nature.",
        images: ["/products/stone/a (2).webp"],
    },
};

export default function ProductPage() {
    return <ProductClient />;
}
