"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    { name: "Victoria Hotel – Yogyakarta", description: "Custom furniture designed to enhance spatial harmony and modern elegance.", image: "/project/victoria.webp" },
    { name: "Solia Zigna Hotel – Solo", description: "Custom furniture designed to enhance spatial harmony and modern elegance.", image: "/project/solia.webp" },
    { name: "Centing Londo Resto – Solo", description: "Custom furniture designed to enhance spatial harmony and modern elegance.", image: "/project/centinglondo.webp" },
    { name: "Sure Café – Yogyakarta", description: "Custom furniture designed to enhance spatial harmony and modern elegance.", image: "/project/surecafe.webp" },
    { name: "Tolak Balik Café – Yogyakarta", description: "Custom furniture designed to enhance spatial harmony and modern elegance.", image: "/project/tolakbalik.webp" },
    { name: "Gajah Mungkur Resto – Sentul, Bogor", description: "Custom furniture designed to enhance spatial harmony and modern elegance.", image: "/project/gajahmungkur.webp" },
];

export default function ProjectClient() {
    return (
        <section className="py-24 bg-stone-50 px-6 md:px-16 lg:px-32">
            <div className="max-w-screen-2xl mx-auto space-y-12">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Client Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-none shadow-none bg-transparent group cursor-pointer h-full">
                                <CardContent className="p-0 space-y-4">
                                    <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${project.image}")` }}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-stone-600 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}