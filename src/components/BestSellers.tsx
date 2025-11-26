"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IoArrowForward, IoStar } from "react-icons/io5";
import Link from "next/link";

const products = [
    { name: "Velvet Sofa", price: "$1,299", rating: 4.9, image: "/products/furniture/a.webp" },
    { name: "Marble Table", price: "$899", rating: 4.8, image: "/products/stone/a (2).webp" },
    { name: "Lounge Chair", price: "$599", rating: 5.0, image: "/products/furniture/f.webp" },
    { name: "Cozy Bed", price: "$1,499", rating: 4.9, image: "/products/furniture/e.webp" },
];

export default function BestSellers() {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-32 max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        Selection
                    </span>
                    <h2 className="text-3xl font-light text-gray-900 mt-2">Best Sellers</h2>
                </div>
                <Link href="/catalog">
                    <Button variant="link" className="text-stone-500 hover:text-gray-900 p-0 h-auto font-light">
                        View All <IoArrowForward className="ml-2" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <div className="bg-stone-50 aspect-square mb-6 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url("${product.image}")` }}
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-light text-gray-900 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-1 text-stone-400 text-xs mt-1">
                                    <IoStar /> <span>{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
