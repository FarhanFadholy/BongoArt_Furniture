"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaHammer, FaLeaf, FaRegClock, FaPaintBrush, FaTree, FaTools, FaCogs, FaQuoteLeft, FaCheck } from "react-icons/fa";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";

const values = [
    { title: "Craftsmanship", desc: "Every piece is handmade by skilled artisans using traditional techniques.", icon: FaHammer },
    { title: "Sustainability", desc: "We use ethically sourced materials and eco-friendly production methods.", icon: FaLeaf },
    { title: "Timeless Design", desc: "Furniture that transcends trends and remains beautiful for generations.", icon: FaRegClock },
];

const team = [
    { name: "Muhammad Mursid", role: "Founder", image: "/images/IMG_7813.webp" },
    { name: "David Chen", role: "Master Craftsman", image: "/images/2122.webp" },
    { name: "Elena Rodriguez", role: "Creative Director", image: "/images/2123.webp" },
];

const productionSteps = [
    { title: "Carving", icon: FaTools, desc: "Detail carving by skilled hands." },
    { title: "Wood Processing", icon: FaTree, desc: "Selecting and processing the best wood." },
    { title: "Finishing", icon: FaPaintBrush, desc: "Finishing with precision and care." },
    { title: "Assembly", icon: FaCogs, desc: "Assembling for durability and strength." },
];

export default function AboutClient() {
    return (
        <main className="min-h-screen pt-10 pb-20 px-6 md:px-16 lg:px-32 bg-white">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center space-y-12 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        Since 1998
                    </span>
                    <h1 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                        Designing for the <br /> <span className="italic font-serif text-stone-600">Art of Living</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                        BongoArt was founded on a simple belief: that the objects we surround ourselves with should bring joy, comfort, and beauty to our daily lives.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-96 md:h-[500px] bg-stone-100 relative overflow-hidden rounded-sm"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/images/bg1.webp")' }}
                    />
                </motion.div>
            </div>

            {/* About & Profile Section */}
            <section className="py-24 bg-stone-50 mb-32 -mx-6 md:-mx-16 lg:-mx-32 px-6 md:px-16 lg:px-32 relative overflow-hidden">
                {/* Watermark */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                    <span className="text-[200px] md:text-[400px] font-bold text-gray-900 leading-none -ml-10 md:-ml-20 select-none">1998</span>
                </div>

                <div className="max-w-screen-2xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-light text-gray-900 tracking-tight border-b border-gray-200 pb-4">About Bongo Art</h2>
                            <div className="text-gray-600 font-light leading-relaxed space-y-4 text-lg">
                                <p>
                                    Founded in 1998 in Bantul, Yogyakarta, Bongo Art was born out of creativity and resilience during Indonesia’s economic crisis. What began as a small workshop in Bongos has grown into a respected name in handcrafted furniture and art.
                                </p>
                                <p>
                                    From humble beginnings, we have evolved into a brand recognized at national and international exhibitions, continuously pursuing quality, elegance, and meaning in every piece we craft.
                                </p>
                            </div>
                        </motion.div>

                        {/* Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-light text-gray-900 tracking-tight border-b border-gray-200 pb-4">Company Profile</h2>
                            <div className="text-gray-600 font-light leading-relaxed space-y-4 text-lg">
                                <p>
                                    Formerly known as Bongo Art, our journey began crafting furniture from coconut wood, stone, and natural materials — transforming them into meaningful works of art.
                                </p>
                                <p>
                                    Today, Bongo Art stands for functionality, aesthetics, and harmony with nature. We actively participate in <strong className="font-semibold text-gray-900">ASMINDO</strong> and <strong className="font-semibold text-gray-900">KADIN DIY</strong>, with showcases in <strong className="font-semibold text-gray-900">INACRAFT, IFEX, IFFINA, and JIFFINA</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-24 bg-stone-900 text-white mb-32 -mx-6 md:-mx-16 lg:-mx-32 px-6 md:px-16 lg:px-32">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 text-green-500">
                                <FaQuoteLeft size={32} />
                                <span className="text-sm font-medium tracking-[0.2em] uppercase">Our Vision</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed text-stone-200">
                                "To become the best and most trusted handicraft and home decor company with creative, innovative, and high-quality products, capable of competing at both national and international levels."
                            </h3>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8 bg-stone-800/50 p-8 md:p-12 rounded-lg border border-stone-800"
                        >
                            <span className="text-sm font-medium tracking-[0.2em] text-green-500 uppercase block mb-6">Our Mission</span>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="p-1.5 bg-green-900/30 rounded-full text-green-500 mt-1 shrink-0">
                                        <FaCheck size={12} />
                                    </div>
                                    <p className="text-stone-300 font-light text-lg">To be a leader in the home decor and furniture manufacturing industry.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-1.5 bg-green-900/30 rounded-full text-green-500 mt-1 shrink-0">
                                        <FaCheck size={12} />
                                    </div>
                                    <p className="text-stone-300 font-light text-lg">To provide the best service and maintain product quality.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-1.5 bg-green-900/30 rounded-full text-green-500 mt-1 shrink-0">
                                        <FaCheck size={12} />
                                    </div>
                                    <p className="text-stone-300 font-light text-lg">To establish Bongo Art products as a local and international trend.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className="mb-32">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        How We Create
                    </span>
                    <h2 className="text-3xl font-light text-gray-900">Production Process</h2>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-stone-300" />

                    {productionSteps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center text-center space-y-4"
                        >
                            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-stone-800 text-2xl z-10 ring-8 ring-white transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                                <step.icon />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-500 font-light">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className="mb-32">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        What We Stand For
                    </span>
                    <h2 className="text-3xl font-light text-gray-900">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((val, idx) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-stone-50">
                                <CardContent className="p-8 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 shadow-sm">
                                        <val.icon size={20} />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900 uppercase tracking-wide">{val.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed">{val.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Work With Us Section */}
            <WhyWorkWithUs />

            {/* Team Section */}
            <section className="mt-32">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        The Makers
                    </span>
                    <h2 className="text-3xl font-light text-gray-900">Meet the Team</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="aspect-[3/4] bg-stone-100 mb-6 relative overflow-hidden rounded-sm mx-auto max-w-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                                    style={{ backgroundImage: `url("${member.image}")` }}
                                />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                            <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main >
    );
}
