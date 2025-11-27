import type { Metadata, ResolvingMetadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";
import { products } from "@/data/products";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found | BongoArt",
        };
    }

    return {
        title: `${product.name} | BongoArt`,
        description: product.description.substring(0, 160),
        openGraph: {
            title: `${product.name} | BongoArt`,
            description: product.description,
            images: [product.image],
        },
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    // We can handle the "not found" case here or inside the client component
    // If we pass undefined to the client component, it handles it.
    // But TypeScript might complain if we don't cast or check.

    return <ProductDetailClient product={product!} />;
}
