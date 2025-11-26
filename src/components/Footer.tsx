import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 py-16 md:py-24 border-t border-gray-100">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-light tracking-widest uppercase text-gray-900">BongoArt</h2>
                    <p className="text-sm text-gray-500 font-light max-w-xs leading-relaxed">
                        Crafting timeless furniture for the modern sanctuary.
                        Designed for elegance, built for life.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-12 text-sm font-medium text-gray-600 uppercase tracking-wide">
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-400 text-xs mb-1">Social</span>
                        <div className="flex gap-4 text-lg text-gray-600">
                            <a href="https://www.instagram.com/bongo_art2/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
                            <a href="https://wa.me/+6281227868548" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors"><FaWhatsapp /></a>
                            <a href="mailto:bongo_art@yahoo.com" className="hover:text-blue-600 transition-colors"><FaEnvelope /></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-400 text-xs mb-1">Legal</span>
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-32 mt-16 pt-8 border-t border-gray-200 text-xs text-gray-400 flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} BongoArt Interiors. All rights reserved.</p>
            </div>
        </footer>
    );
}
