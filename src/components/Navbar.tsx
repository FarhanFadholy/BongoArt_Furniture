"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Catalog", href: "/catalog" },
        { name: "Product", href: "/product" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 left-0 w-full z-50 shadow-sm transition-all duration-300 flex h-16 bg-white">
            {/* Logo Section - 20% width on desktop, auto on mobile */}
            <div className="bg-green-700 h-full flex items-center justify-center md:w-[20%] w-auto px-4 md:px-0">
                <Link
                    href="/"
                    className="text-white text-base md:text-xl font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
                    style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
                >
                    Bongo Art
                </Link>
            </div>

            {/* Menu Section - Remaining width */}
            <div className="bg-white/80 backdrop-blur-md flex-1 h-full flex items-center justify-end px-6 md:px-16 lg:px-32">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 uppercase tracking-wide px-3 py-1 ${pathname === link.href
                                ? "text-green-700 font-bold"
                                : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                        <a href="https://www.instagram.com/bongo_art2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                            <FaInstagram size={18} />
                        </a>
                        <a href="https://wa.me/+6281227868548" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                            <FaWhatsapp size={18} />
                        </a>
                        <a href="mailto:bongo_art@yahoo.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                            <FaEnvelope size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
                    <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
                    <div className="w-6 h-0.5 bg-current transition-all"></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col px-6 py-8 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-light transition-colors uppercase tracking-widest ${pathname === link.href ? "text-green-700 font-bold" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                        <a href="https://www.instagram.com/bongo_art2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                            <FaInstagram size={18} />
                        </a>
                        <a href="https://wa.me/+6281227868548" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                            <FaWhatsapp size={18} />
                        </a>
                        <a href="mailto:bongo_art@yahoo.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                            <FaEnvelope size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
