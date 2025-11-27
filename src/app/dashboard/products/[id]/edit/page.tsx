"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaArrowLeft, FaSave, FaSpinner, FaChevronDown, FaCheck } from "react-icons/fa";
import Link from "next/link";

const categories = [
    { value: "furniture", label: "Furniture" },
    { value: "lighting", label: "Lighting" },
    { value: "stone", label: "Stone Collection" },
    { value: "decor", label: "Home Decor" },
];

export default function EditProductPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        category: "furniture",
        description: "",
        dimensions: "",
        weight: "",
        material: "",
        image_url: ""
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching product:", error);
                alert("Product not found");
                router.push('/dashboard/products');
            } else if (data) {
                setFormData({
                    name: data.name,
                    category: data.category,
                    description: data.description || "",
                    dimensions: data.dimensions || "",
                    weight: data.weight || "",
                    material: data.material || "",
                    image_url: data.image || ""
                });
            }
            setFetching(false);
        };

        if (id) fetchProduct();
    }, [id, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategorySelect = (value: string) => {
        setFormData({ ...formData, category: value });
        setIsCategoryOpen(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const uploadImage = async () => {
        if (!imageFile) return null;

        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('product-images')
            .upload(filePath, imageFile);

        if (uploadError) {
            throw uploadError;
        }

        const { data } = supabase.storage
            .from('product-images')
            .getPublicUrl(filePath);

        return data.publicUrl;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = formData.image_url;

            if (imageFile) {
                const uploadedUrl = await uploadImage();
                if (uploadedUrl) imageUrl = uploadedUrl;
            }

            const { error } = await supabase
                .from('products')
                .update({
                    name: formData.name,
                    category: formData.category,
                    description: formData.description,
                    dimensions: formData.dimensions,
                    weight: formData.weight,
                    material: formData.material,
                    image: imageUrl,
                    updated_at: new Date()
                })
                .eq('id', id);

            if (error) throw error;

            router.push('/dashboard/products');
            router.refresh();
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product.");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-8 text-center">Loading product details...</div>;

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <div className="mb-8">
                <Link href="/dashboard/products" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 mb-4">
                    <FaArrowLeft size={12} /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-light text-gray-900">Edit Product</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-100">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Product Name</label>
                        <Input name="name" required value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Category</label>
                        <div className="relative">
                            <div
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            >
                                <span className={formData.category ? "text-gray-900" : "text-gray-500"}>
                                    {categories.find(c => c.value === formData.category)?.label || "Select Category"}
                                </span>
                                <FaChevronDown className={`text-gray-400 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`} size={12} />
                            </div>

                            {isCategoryOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setIsCategoryOpen(false)} />
                                    <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-100 bg-white shadow-xl max-h-60 overflow-auto py-1 top-full">
                                        {categories.map((cat) => (
                                            <div
                                                key={cat.value}
                                                className={`px-3 py-2.5 text-sm cursor-pointer hover:bg-stone-50 flex items-center justify-between transition-colors ${formData.category === cat.value ? "bg-stone-50 font-medium text-green-800" : "text-gray-700"}`}
                                                onClick={() => handleCategorySelect(cat.value)}
                                            >
                                                {cat.label}
                                                {formData.category === cat.value && <FaCheck size={12} />}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Description</label>
                    <Textarea name="description" required value={formData.description} onChange={handleChange} rows={4} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Dimensions</label>
                        <Input name="dimensions" value={formData.dimensions} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Weight</label>
                        <Input name="weight" value={formData.weight} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Material</label>
                        <Input name="material" value={formData.material} onChange={handleChange} />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Product Image</label>
                    {formData.image_url && (
                        <div className="mb-2 w-32 h-32 bg-gray-100 rounded overflow-hidden">
                            <img src={formData.image_url} alt="Current" className="w-full h-full object-cover" />
                        </div>
                    )}
                    <Input type="file" accept="image/*" onChange={handleImageChange} />
                    <Input name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL" className="mt-2" />
                </div>

                <div className="pt-4">
                    <Button type="submit" disabled={loading} className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12">
                        {loading ? <span className="flex items-center gap-2"><FaSpinner className="animate-spin" /> Updating...</span> : <span className="flex items-center gap-2"><FaSave /> Update Product</span>}
                    </Button>
                </div>

            </form>
        </div>
    );
}
