"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to select countries worldwide. Shipping costs and delivery times vary depending on the destination. Please contact our support team for a specific quote."
    },
    {
        question: "Can I customize the fabric or wood finish?",
        answer: "Absolutely. Many of our pieces are made-to-order, allowing for customization of fabrics, leathers, and wood finishes. Visit our showroom or contact us to view our full material library."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all standard items in their original condition. Custom orders are final sale, but we will work with you to ensure you are completely satisfied with your design before production begins."
    },
    {
        question: "How do I care for my wood furniture?",
        answer: "We recommend dusting regularly with a soft, dry cloth. Avoid direct sunlight and excessive moisture. For deep cleaning, use a specialized wood cleaner recommended by our care guide included with your purchase."
    },
    {
        question: "Do you offer trade discounts for designers?",
        answer: "Yes, we have a dedicated Trade Program for interior designers, architects, and industry professionals. Please apply through our Trade page or contact us for more details."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-stone-50 px-6 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                        Common Questions
                    </span>
                    <h2 className="text-3xl font-light text-gray-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                <span className="text-stone-400 ml-4">
                                    {openIndex === idx ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-gray-100 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
