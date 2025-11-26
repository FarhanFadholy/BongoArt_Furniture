"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-[calc(100vh-4rem)] flex items-center overflow-hidden">
            {/* Background Image with Parallax/Zoom Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/hero.webp")' }}
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
            </motion.div>

            <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-32 w-full flex flex-col justify-center h-full text-white">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl space-y-8"
                >
                    <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-stone-200 border-b border-stone-200 pb-2">
                        BongoArt Indonesia
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight">
                        The Stone & Wood <br />
                        <span className="italic font-serif text-stone-200">Combination</span>
                    </h1>

                    <p className="text-lg md:text-xl text-stone-200 font-light max-w-lg leading-relaxed">
                        Experience the perfect fusion of natural river stone and sustainable teak.
                        BongoArt crafts timeless pieces that bring the raw beauty of nature into your home.
                    </p>

                    <div className="pt-8">
                        <a
                            href="/catalog"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-stone-200 transition-all duration-300"
                        >
                            Explore Collection
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
