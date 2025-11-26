"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="relative py-32 px-6 md:px-16 lg:px-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/hero.webp")' }}
                />
                <div className="absolute inset-0 bg-stone-950/90" /> {/* Dark Overlay */}
            </div>

            <div className="relative z-10 max-w-screen-xl mx-auto text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <span className="text-xs font-medium tracking-[0.3em] text-green-500 uppercase">
                        Start Your Journey
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                        Ready to Transform <br />
                        <span className="font-serif italic text-stone-400">Your Sanctuary?</span>
                    </h2>
                    <p className="text-stone-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking for a statement piece or a complete home makeover, our team is here to bring your vision to life.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link href="/contact">
                        <Button className="bg-white text-stone-950 hover:bg-stone-200 h-14 px-10 rounded-none text-xs uppercase tracking-widest transition-all duration-300 min-w-[200px]">
                            Contact Us
                        </Button>
                    </Link>
                    <Link href="/catalog">
                        <Button variant="outline" className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white hover:border-stone-500 h-14 px-10 rounded-none text-xs uppercase tracking-widest transition-all duration-300 min-w-[200px]">
                            View Catalog
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
