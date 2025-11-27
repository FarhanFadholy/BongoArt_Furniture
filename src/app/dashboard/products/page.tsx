"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products as staticProducts } from "@/data/products";
import { FaPlus, FaEdit, FaTrash, FaImage, FaCloudUploadAlt, FaBox, FaChair, FaLightbulb, FaGem, FaLeaf, FaChartPie } from "react-icons/fa";

// Define the Product interface matching your Supabase table
interface Product {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    // Add other fields as needed
}

const CATEGORIES = [
    { id: "furniture", label: "Furniture", icon: FaChair, color: "bg-amber-100 text-amber-700" },
    { id: "lighting", label: "Lighting", icon: FaLightbulb, color: "bg-yellow-100 text-yellow-700" },
    { id: "stone", label: "Stone Collection", icon: FaGem, color: "bg-stone-200 text-stone-700" },
    { id: "decor", label: "Home Decor", icon: FaLeaf, color: "bg-green-100 text-green-700" },
];

export default function DashboardProducts() {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category') || 'all';

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [seeding, setSeeding] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error fetching products:", error);
        } else {
            setProducts(data || []);
        }
        setLoading(false);
    };

    const handleSeedData = async () => {
        if (!confirm("This will upload all demo products to your database. Continue?")) return;
        setSeeding(true);

        try {
            const productsToInsert = staticProducts.map(p => ({
                name: p.name,
                category: p.category,
                description: p.description,
                dimensions: p.dimensions,
                weight: p.weight,
                material: p.material,
                image: p.image,
            }));

            const { error } = await supabase
                .from('products')
                .insert(productsToInsert);

            if (error) throw error;

            alert("Demo data imported successfully!");
            fetchProducts();
        } catch (error) {
            console.error("Error seeding data:", error);
            alert("Failed to import demo data.");
        } finally {
            setSeeding(false);
        }
    };

    const deleteProduct = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', id);

        if (error) {
            alert("Error deleting product");
            console.error(error);
        } else {
            fetchProducts();
        }
    };

    const handleDeleteAll = async () => {
        if (!confirm("WARNING: This will delete ALL products from the database. This action cannot be undone. Are you sure?")) return;

        setLoading(true);
        const { error } = await supabase
            .from('products')
            .delete()
            .neq('id', '00000000-0000-0000-0000-000000000000');

        if (error) {
            console.error("Error deleting all:", error);
            alert("Failed to delete all products.");
        } else {
            fetchProducts();
        }
        setLoading(false);
    };

    // Calculate Stats
    const totalProducts = products.length;
    const categoryStats = CATEGORIES.map(cat => {
        const count = products.filter(p => p.category === cat.id).length;
        const percentage = totalProducts > 0 ? (count / totalProducts) * 100 : 0;
        return { ...cat, count, percentage };
    });

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    const currentCategoryLabel = activeCategory === 'all'
        ? "All Products"
        : CATEGORIES.find(c => c.id === activeCategory)?.label || "Products";

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-light text-gray-900">{currentCategoryLabel}</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Showing {filteredProducts.length} {activeCategory === 'all' ? 'total' : ''} products
                    </p>
                </div>
                <div className="flex gap-3">
                    {products.length === 0 ? (
                        <Button
                            variant="outline"
                            onClick={handleSeedData}
                            disabled={seeding}
                            className="gap-2"
                        >
                            <FaCloudUploadAlt />
                            {seeding ? "Importing..." : "Import Demo Data"}
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            onClick={handleDeleteAll}
                            className="gap-2 text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
                        >
                            <FaTrash />
                            Delete All Data
                        </Button>
                    )}
                    <Link href="/dashboard/products/new">
                        <Button className="bg-green-700 hover:bg-green-800 text-white gap-2 shadow-lg shadow-green-900/20">
                            <FaPlus /> Add New Product
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Cards - Only show on 'All Products' view to avoid clutter */}
            {activeCategory === 'all' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Total Products Card */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Products</p>
                                <h3 className="text-2xl font-bold text-gray-900">{totalProducts}</h3>
                            </div>
                            <div className="p-2 rounded-lg bg-gray-900 text-white">
                                <FaBox size={16} />
                            </div>
                        </div>

                        <div className="z-10">
                            <p className="text-xs text-gray-400">Entire Catalog</p>
                        </div>

                        {/* Decorative Background Icon */}
                        <FaBox className="absolute -bottom-4 -right-4 text-gray-50 opacity-50 transform group-hover:scale-110 transition-transform duration-500" size={80} />
                    </div>

                    {categoryStats.map((stat) => (
                        <div key={stat.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start z-10">
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                                    <h3 className="text-2xl font-bold text-gray-900">{stat.count}</h3>
                                </div>
                                <div className={`p-2 rounded-lg ${stat.color}`}>
                                    <stat.icon size={16} />
                                </div>
                            </div>

                            <div className="z-10">
                                <div className="flex justify-between text-xs text-gray-400 mb-1">
                                    <span>Distribution</span>
                                    <span>{Math.round(stat.percentage)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-1.5">
                                    <div
                                        className="bg-gray-900 h-1.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${stat.percentage}%` }}
                                    />
                                </div>
                            </div>

                            {/* Decorative Background Icon */}
                            <stat.icon className="absolute -bottom-4 -right-4 text-gray-50 opacity-50 transform group-hover:scale-110 transition-transform duration-500" size={80} />
                        </div>
                    ))}
                </div>
            )}

            {/* Product List */}
            {loading ? (
                <div className="text-center py-20">
                    <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p className="mt-4 text-gray-500">Loading products...</p>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-24">Image</th>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="p-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200">
                                                {product.image ? (
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-gray-300">
                                                        <FaImage />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-medium text-gray-900">{product.name}</p>
                                            <p className="text-xs text-gray-400 mt-1 line-clamp-1 max-w-xs">{product.description}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right whitespace-nowrap">
                                            <div className="flex justify-end gap-2">
                                                <Link href={`/dashboard/products/${product.id}/edit`}>
                                                    <Button variant="outline" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 border-blue-200 hover:bg-blue-50">
                                                        <FaEdit size={14} />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8 text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
                                                    onClick={() => deleteProduct(product.id)}
                                                >
                                                    <FaTrash size={14} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredProducts.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="p-12 text-center text-gray-500">
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="bg-gray-50 p-4 rounded-full mb-4">
                                                    <FaBox className="text-gray-300" size={32} />
                                                </div>
                                                <p className="text-lg font-medium text-gray-900">No products found</p>
                                                <p className="text-sm text-gray-500">Try selecting a different category or add a new product.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
