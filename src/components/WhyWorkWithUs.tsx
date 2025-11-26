"use client";

import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaTruck, FaShieldAlt, FaPencilRuler } from "react-icons/fa";

const reasons = [
    {
        title: "Custom Design Service",
        description: "Collaborate with our designers to create pieces that perfectly fit your space and style.",
        icon: FaPencilRuler
    },
    {
        title: "White Glove Delivery",
        description: "We handle everything from shipping to assembly and placement in your home.",
        icon: FaTruck
    },
    {
        title: "Lifetime Warranty",
        description: "We stand behind the quality of our craftsmanship with a comprehensive lifetime warranty.",
        icon: FaShieldAlt
    },
    {
        title: "Ethical Sourcing",
        description: "We ensure fair wages and safe working conditions for all our artisans and partners.",
        icon: FaHandHoldingHeart
    }
];

export default function WhyWorkWithUs() {
    return (
        <section className="py-24 bg-stone-900 text-white">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-32">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 space-y-6">
                        <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light leading-tight">
                            Experience the <br /> <span className="italic font-serif text-stone-300">BongoArt Difference</span>
                        </h2>
                        <p className="text-stone-400 font-light leading-relaxed">
                            We go beyond just selling furniture. We offer a complete experience dedicated to elevating your living space with peace of mind.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-white mb-2">
                                    <reason.icon size={20} />
                                </div>
                                <h3 className="text-xl font-medium text-white">{reason.title}</h3>
                                <p className="text-stone-400 font-light leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
