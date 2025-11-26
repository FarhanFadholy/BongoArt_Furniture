"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you might have this or use standard textarea
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
    const [activeLocation, setActiveLocation] = useState("workshop");
    return (
        <main className="min-h-screen pt-10 pb-20 px-6 md:px-16 lg:px-32 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-screen-2xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                                Get in Touch
                            </span>
                            <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                                Let's Start a Conversation
                            </h1>
                            <p className="text-lg text-gray-500 font-light leading-relaxed">
                                Whether you have a question about our collections, need design advice, or just want to say hello, we're here to help.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-50 rounded-full text-stone-600">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-wide text-gray-900">Visit Us</h3>
                                    <p className="text-gray-500 font-light mt-1">Jl. Parangtritis KM 9.5, Yogyakarta</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-50 rounded-full text-stone-600">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-wide text-gray-900">Email Us</h3>
                                    <p className="text-gray-500 font-light mt-1">bongo_art@yahoo.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-50 rounded-full text-stone-600">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-wide text-gray-900">Call Us</h3>
                                    <p className="text-gray-500 font-light mt-1">+62 812-2786-8548</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-stone-50 p-8 md:p-12 rounded-2xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase tracking-wide text-gray-500">First Name</label>
                                    <Input placeholder="John" className="bg-white border-gray-200" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase tracking-wide text-gray-500">Last Name</label>
                                    <Input placeholder="Doe" className="bg-white border-gray-200" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">Email</label>
                                <Input type="email" placeholder="john@example.com" className="bg-white border-gray-200" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase tracking-wide text-gray-500">Message</label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 h-12 uppercase tracking-widest text-xs">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </motion.div>

            {/* Maps Section - Modern Card Design */}
            <section className="mt-24 max-w-screen-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
                        {/* Sidebar / Info Panel */}
                        <div className="p-8 lg:p-12 bg-stone-50 flex flex-col justify-center space-y-8 relative z-10">
                            <div>
                                <h2 className="text-3xl font-light text-gray-900 mb-4">Our Locations</h2>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    Visit our workshop or showroom to experience the quality and texture of our stone collections firsthand.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveLocation('workshop')}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${activeLocation === 'workshop'
                                        ? 'bg-white shadow-lg border-l-4 border-green-700 scale-105'
                                        : 'hover:bg-white/60 hover:shadow-sm border-l-4 border-transparent'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className={`font-bold text-lg ${activeLocation === 'workshop' ? 'text-green-800' : 'text-gray-900'}`}>Workshop & Showroom 1</h3>
                                        {activeLocation === 'workshop' && <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />}
                                    </div>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Jl. Parangtritis KM 9.5, Yogyakarta</p>
                                </button>

                                <button
                                    onClick={() => setActiveLocation('showroom')}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${activeLocation === 'showroom'
                                        ? 'bg-white shadow-lg border-l-4 border-green-700 scale-105'
                                        : 'hover:bg-white/60 hover:shadow-sm border-l-4 border-transparent'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className={`font-bold text-lg ${activeLocation === 'showroom' ? 'text-green-800' : 'text-gray-900'}`}>Showroom 2</h3>
                                        {activeLocation === 'showroom' && <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />}
                                    </div>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Jl. Kasongan No.19, Bantul, Yogyakarta</p>
                                </button>
                            </div>
                        </div>

                        {/* Map Area */}
                        <div className="lg:col-span-2 relative h-[400px] lg:h-auto bg-stone-200">
                            {/* Workshop Map */}
                            <div className={`absolute inset-0 transition-opacity duration-500 ${activeLocation === 'workshop' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.962451556668!2d110.3499552!3d-7.8922484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a55e9277af71d%3A0xcbeeffcd44be9bb2!2sBongo%20Art!5e0!3m2!1sid!2sid!4v1716444000000!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            </div>

                            {/* Showroom Map */}
                            <div className={`absolute inset-0 transition-opacity duration-500 ${activeLocation === 'showroom' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4662788425076!2d110.33757617400873!3d-7.846168692175256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a572dab878e69%3A0x32bde01c2b676b69!2sBongo%20art%20showroom%20kasongan!5e0!3m2!1sid!2sid!4v1764138487119!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />
        </main>
    );
}
