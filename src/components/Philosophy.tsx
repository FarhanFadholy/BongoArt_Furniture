"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Philosophy() {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-32 max-w-screen-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 items-center"
            >
                <div className="w-full md:w-1/2 space-y-6">
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        Philosophy
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                        We believe in the power of <span className="italic font-serif text-stone-600">understated elegance</span>.
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed">
                        Every piece in our collection is a testament to superior craftsmanship and timeless design.
                        We strip away the unnecessary to reveal the essential beauty of form and function.
                    </p>
                    <Link href="/about">
                        <Button variant="outline" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all uppercase tracking-widest text-xs h-12 px-8">
                            Read Our Story
                        </Button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/images/bg1.webp")' }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
