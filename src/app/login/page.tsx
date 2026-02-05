"use client";

import { useState } from "react";
import { Crown, Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSession } from "@/components/providers/SessionProvider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useSession();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const success = await login(email, password);

            if (success) {
                router.push("/admin");
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 mobile-safe-area">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-32 h-32 border border-green-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-24 h-24 border border-gold/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-green-600/20 rounded-full animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* Login Card */}
                <div className="card p-6 sm:p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-600 text-sm font-medium">ADMIN ACCESS</span>
                            <Sparkles className="w-4 h-4 text-green-600" />
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
                            Welcome Back to <span className="gradient-text">APTOR Studies</span>
                        </h1>
                        <p className="text-green-700">Sign in to access your admin dashboard</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-2">
                                <Mail className="w-4 h-4 inline mr-2" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-white border border-green-300 rounded-lg text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 min-h-[48px]"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-2">
                                <Lock className="w-4 h-4 inline mr-2" />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-white border border-green-300 rounded-lg text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 min-h-[48px] pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-primary w-full text-center inline-flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Crown className="w-5 h-5" />
                            {isLoading ? "Signing In..." : "Sign In to Admin Portal"}
                        </button>
                    </form>


                    {/* Footer */}
                    <div className="text-center mt-8 pt-6 border-t border-green-200">
                        <Link href="/" className="text-green-600 hover:text-green-700 transition-colors text-sm">
                            ← Back to APTOR Studies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}