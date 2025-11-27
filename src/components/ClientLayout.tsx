"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");
    const isLoginPage = pathname === "/login";

    if (isDashboard || isLoginPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
