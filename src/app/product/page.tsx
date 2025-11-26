"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";

const product = {
    name: "River Stone Bathtub",
    collection: "Stone Collection",
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

export default function ProductPage() {
    return (
        <main className="min-h-screen pt-4 pb-20 px-6 md:px-16 lg:px-32 bg-white">
            <div className="max-w-screen-2xl mx-auto">

                {/* Breadcrumb / Back */}
                <div className="mb-12">
                    <a href="/catalog" className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase hover:text-gray-900 transition-colors">
                        ← Back to Collection
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="aspect-[4/5] bg-stone-50 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url("${product.images[0]}")` }}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {product.images.slice(1).map((img, idx) => (
                                <div key={idx} className="aspect-square bg-stone-50 relative overflow-hidden">
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:sticky lg:top-32 space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">
                                {product.collection}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                                {product.name}
                            </h1>
                        </div>

                        <div className="space-y-8 text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-8">
                            <p>{product.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Dimensions</h4>
                                    <p className="text-sm">{product.dimensions}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Weight</h4>
                                    <p className="text-sm">{product.weight}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Material</h4>
                                    <p className="text-sm">{product.material}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Finish</h4>
                                    <p className="text-sm">{product.finish}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-8">
                            <Button
                                className="w-full bg-gray-900 text-white hover:bg-gray-800 h-14 uppercase tracking-widest text-xs"
                                onClick={() => window.location.href = "/contact"}
                            >
                                Enquire About This Item
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-gray-300 text-gray-900 hover:bg-gray-50 h-14 uppercase tracking-widest text-xs"
                            >
                                Download Spec Sheet
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
