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
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 mobile-safe-area">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-24 h-24 border border-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-400/20 rounded-full animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* Premium Login Card */}
                <div className="card-premium p-6 sm:p-8 glow">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">ELITE ACCESS</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            Welcome Back to <span className="gradient-text">Aptor Studies</span>
                        </h1>
                        <p className="text-gray-400">Sign in to access your premium dashboard</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                <Mail className="w-4 h-4 inline mr-2" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 min-h-[48px]"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                <Lock className="w-4 h-4 inline mr-2" />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 min-h-[48px] pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Crown className="w-5 h-5" />
                            {isLoading ? "Signing In..." : "Sign In to Elite Portal"}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="mt-8 p-4 bg-yellow-400/5 border border-yellow-400/20 rounded-lg">
                        <h3 className="text-sm font-medium text-yellow-400 mb-2">Demo Credentials:</h3>
                        <div className="text-xs text-gray-400 space-y-1">
                            <div>Email: info@aptorstudies.com</div>
                            <div>Password: SecureAdmin123!</div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8 pt-6 border-t border-yellow-400/20">
                        <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                            ← Back to Aptor Studies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}