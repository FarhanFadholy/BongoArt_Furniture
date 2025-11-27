import type { Metadata, ResolvingMetadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";
import { products as staticProducts } from "@/data/products";
import { supabase } from "@/lib/supabase";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Helper to fetch product
async function getProduct(id: string) {
    const { data } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (data) return data;

    // Fallback to static
    return staticProducts.find(p => p.id === id);
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return {
            title: "Product Not Found | BongoArt",
        };
    }

    return {
        title: `${product.name} | BongoArt`,
        description: product.description?.substring(0, 160) || "Product details",
        openGraph: {
            title: `${product.name} | BongoArt`,
            description: product.description || "Product details",
            images: [product.image],
        },
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = await getProduct(id);

    // We can handle the "not found" case here or inside the client component
    // If we pass undefined to the client component, it handles it.
    // But TypeScript might complain if we don't cast or check.

    return <ProductDetailClient product={product!} />;
}
