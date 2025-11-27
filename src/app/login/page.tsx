"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaLock, FaEnvelope, FaSpinner } from "react-icons/fa";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const supabase = createClientComponentClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push("/dashboard/products");
            router.refresh();
        } catch (err: any) {
            setError(err.message || "Failed to login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-light text-gray-900 tracking-widest uppercase mb-2">Admin Access</h1>
                    <p className="text-sm text-gray-500">Sign in to manage your catalog</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@bongoart.com"
                                className="pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 uppercase tracking-widest text-xs"
                        disabled={loading}
                    >
                        {loading ? <FaSpinner className="animate-spin mr-2" /> : "Sign In"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
