"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRuler, FaWeightHanging, FaLayerGroup, FaGem } from "react-icons/fa";
import { products } from "@/data/products";

const product = {
    id: "featured-stone-bathtub",
    name: "River Stone Bathtub",
    category: "stone",
    description: "Hand-carved from a single boulder of river stone, this bathtub preserves the natural texture and organic shape of the material. The interior is polished to a smooth, matte finish for comfort, while the exterior retains its rugged, raw beauty. Each piece is unique, a testament to the forces of nature.",
    dimensions: "Approx. L 180cm x W 90cm x H 60cm",
    weight: "Approx. 800kg",
    material: "Natural River Stone",
    finish: "Polished Interior, Natural Exterior",
    images: [
        "/products/stone/a (2).webp",
        "/products/stone/a (3).webp",
        "/products/stone/a (5).webp"
    ]
};

export default function ProductClient() {
    // Get related products (same category)
    const relatedProducts = products
        .filter(p => p.category === "stone")
        .slice(0, 3);

    return (
        <main className="min-h-screen pt-10 pb-20 px-6 md:px-16 lg:px-32 bg-white">
            <div className="max-w-screen-2xl mx-auto">

                {/* Breadcrumb */}
                <nav className="mb-12 flex items-center text-xs font-medium tracking-[0.2em] uppercase text-stone-400">
                    <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/catalog" className="hover:text-gray-900 transition-colors">Catalog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <div className="aspect-[4/5] bg-stone-50 relative overflow-hidden rounded-sm shadow-sm group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url("${product.images[0]}")` }}
                            />
                            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                Featured Item
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {product.images.slice(1).map((img, idx) => (
                                <div key={idx} className="aspect-square bg-stone-50 relative overflow-hidden rounded-sm cursor-pointer hover:opacity-80 transition-opacity">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url("${img}")` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:sticky lg:top-32 space-y-10"
                    >
                        <div className="space-y-4 border-b border-gray-100 pb-8">
                            <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                                {product.category} Collection
                            </span>
                            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-[1.1]">
                                {product.name}
                            </h1>
                        </div>

                        <div className="text-gray-600 font-light leading-relaxed text-lg">
                            <p>{product.description}</p>
                        </div>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-stone-400 mb-1">
                                    <FaRuler size={14} />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Dimensions</span>
                                </div>
                                <p className="text-sm text-gray-900">{product.dimensions}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-stone-400 mb-1">
                                    <FaWeightHanging size={14} />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Weight</span>
                                </div>
                                <p className="text-sm text-gray-900">{product.weight}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-stone-400 mb-1">
                                    <FaLayerGroup size={14} />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Material</span>
                                </div>
                                <p className="text-sm text-gray-900">{product.material}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-stone-400 mb-1">
                                    <FaGem size={14} />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Finish</span>
                                </div>
                                <p className="text-sm text-gray-900">{product.finish}</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4 pt-4">
                            <Button
                                className="w-full bg-gray-900 text-white hover:bg-green-800 h-14 uppercase tracking-widest text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                                onClick={() => window.location.href = "/contact"}
                            >
                                Enquire About This Item
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 h-14 uppercase tracking-widest text-xs font-medium"
                            >
                                Download Spec Sheet
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                <section className="border-t border-gray-100 pt-20">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl font-light text-gray-900">More from Stone Collection</h2>
                        <Link href="/catalog" className="text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-gray-900 transition-colors">
                            View All
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {relatedProducts.map((item) => (
                            <Link href={`/product/${item.id}`} key={item.id} className="group block">
                                <div className="aspect-[3/4] bg-stone-50 relative overflow-hidden mb-6">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-stone-500 uppercase tracking-widest">
                                        {item.category}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
