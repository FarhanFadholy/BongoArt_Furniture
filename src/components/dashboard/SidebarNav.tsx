"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChair, FaLightbulb, FaGem, FaLeaf, FaLayerGroup } from "react-icons/fa";

interface SidebarNavProps {
    onNavigate: () => void;
}

export default function SidebarNav({ onNavigate }: SidebarNavProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category');

    const categories = [
        { id: "furniture", label: "Furniture", icon: FaChair },
        { id: "lighting", label: "Lighting", icon: FaLightbulb },
        { id: "stone", label: "Stone Collection", icon: FaGem },
        { id: "decor", label: "Home Decor", icon: FaLeaf },
    ];

    return (
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
            {/* Main Menu */}
            <div>
                <p className="px-4 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Main</p>
                <Link
                    href="/dashboard/products"
                    onClick={onNavigate}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/dashboard/products' && !currentCategory
                        ? "bg-green-700 text-white"
                        : "text-stone-400 hover:bg-stone-800 hover:text-white"
                        }`}
                >
                    <FaLayerGroup />
                    <span>All Products</span>
                </Link>
            </div>

            {/* Categories Menu */}
            <div>
                <p className="px-4 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Categories</p>
                <div className="space-y-1">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/dashboard/products?category=${cat.id}`}
                            onClick={onNavigate}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${currentCategory === cat.id
                                ? "bg-stone-800 text-green-400 border-l-2 border-green-500"
                                : "text-stone-400 hover:bg-stone-800 hover:text-white"
                                }`}
                        >
                            <cat.icon size={14} />
                            <span>{cat.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
