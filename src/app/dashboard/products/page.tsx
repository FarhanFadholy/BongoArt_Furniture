import { Suspense } from "react";
import ProductList from "@/components/dashboard/ProductList";

export const dynamic = 'force-dynamic';

export default function DashboardProducts() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading dashboard...</div>}>
            <ProductList />
        </Suspense>
    );
}
