import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import NewProductForm from "@/components/dashboard/NewProductForm";

export const dynamic = 'force-dynamic';

export default function NewProductPage() {
    return (
        <Suspense fallback={
            <div className="flex h-[50vh] items-center justify-center">
                <div className="flex items-center gap-2 text-gray-500">
                    <FaSpinner className="animate-spin" /> Loading...
                </div>
            </div>
        }>
            <NewProductForm />
        </Suspense>
    );
}
