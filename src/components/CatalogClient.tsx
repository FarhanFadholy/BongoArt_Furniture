"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { products, categories } from "@/data/products";
import Link from "next/link";

export default function CatalogClient() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? products
        : products.filter(item => item.category === activeCategory);

    return (
        <main className="min-h-screen pt-10 pb-20 px-6 md:px-16 lg:px-32 bg-white">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-widest uppercase">
                        The Collection
                    </h1>
                    <p className="text-gray-500 font-light max-w-2xl mx-auto">
                        Explore our comprehensive catalog of {products.length} unique pieces, categorized for your inspiration.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-100 pb-8 sticky top-16 bg-white z-10 py-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 ${activeCategory === cat.id
                                ? "text-gray-900 border-b-2 border-gray-900"
                                : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {filteredItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[3/4] bg-stone-50 relative overflow-hidden mb-6 p-8">
                                <div
                                    className="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Link href={`/product/${item.id}`}>
                                        <Button
                                            variant="outline"
                                            className="bg-white/90 border-none text-gray-900 hover:bg-white uppercase tracking-widest text-xs px-8 py-6 shadow-sm"
                                        >
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-medium text-gray-900 uppercase tracking-widest">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-stone-400 uppercase tracking-widest">
                                    {categories.find(c => c.id === item.category)?.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-400 font-light">
                        No items found in this category.
                    </div>
                )}
            </div>
        </main>
    );
}
