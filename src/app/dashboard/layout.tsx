"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import SidebarNav from "@/components/dashboard/SidebarNav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Check auth on mount
    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/login');
            }
        };
        checkAuth();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-stone-900 text-white transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:translate-x-0 flex flex-col`}
            >
                <div className="p-6 border-b border-stone-800 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-widest uppercase">
                        Bongo Admin
                    </Link>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-stone-400">
                        <FaTimes />
                    </button>
                </div>

                <Suspense fallback={<div className="p-4 text-stone-500">Loading navigation...</div>}>
                    <SidebarNav onNavigate={() => setIsSidebarOpen(false)} />
                </Suspense>

                <div className="p-4 border-t border-stone-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left text-stone-400 hover:text-red-400 transition-colors"
                    >
                        <FaSignOutAlt />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center shrink-0">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600">
                        <FaBars size={24} />
                    </button>
                    <span className="ml-4 font-medium text-gray-900">Dashboard</span>
                </header>

                <main className="flex-1 overflow-y-auto bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
