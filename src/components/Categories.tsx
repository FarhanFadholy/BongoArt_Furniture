"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IoArrowForward } from "react-icons/io5";

const categories = [
    { name: "Living Room", image: "/images/01.webp" },
    { name: "Dining", image: "/images/02.webp" },
    { name: "Bedroom", image: "/images/03.webp" },
];

export default function Categories() {
    return (
        <section className="py-24 bg-stone-50 px-6 md:px-16 lg:px-32">
            <div className="max-w-screen-2xl mx-auto space-y-12">
                <div className="flex justify-between items-end">
                    <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Curated Spaces</h2>
                    <Button variant="link" className="text-stone-500 hover:text-gray-900 p-0 h-auto font-light">
                        View All <IoArrowForward className="ml-2" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                                <CardContent className="p-0 space-y-4">
                                    <div className="aspect-[3/4] relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${cat.image}")` }}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-lg font-light text-gray-900 group-hover:text-stone-600 transition-colors">
                                        {cat.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
