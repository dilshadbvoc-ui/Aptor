"use client";

import { useState } from "react";
import { Crown, User, Mail, Lock, Eye, EyeOff, UserPlus, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateAdminUserPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "admin"
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch('/api/admin/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ type: 'success', text: `Admin user "${formData.name}" created successfully!` });
                setFormData({ name: "", email: "", password: "", role: "admin" });
            } else {
                setMessage({ type: 'error', text: data.message || 'Failed to create admin user' });
            }
        } catch (error) {
            console.error("Error creating admin user:", error);
            setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-4">
                        <UserPlus className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 text-sm font-medium">CREATE ADMIN USER</span>
                    </div>
                    <h1 className="text-3xl font-bold text-green-900 mb-2">
                        Create New Admin User
                    </h1>
                    <p className="text-green-700">Add a new administrator to the APTOR Studies system</p>
                </div>
                <Link 
                    href="/admin/users"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Users
                </Link>
            </div>

            {/* Create User Form */}
            <div className="max-w-2xl">
                <div className="card-premium p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {message && (
                            <div className={`p-4 rounded-lg border ${
                                message.type === 'success' 
                                    ? 'bg-green-50 border-green-200 text-green-700' 
                                    : 'bg-red-50 border-red-200 text-red-700'
                            }`}>
                                {message.text}
                            </div>
                        )}

                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-2">
                                <User className="w-4 h-4 inline mr-2" />
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter full name"
                                className="w-full px-4 py-3 bg-white border border-green-300 rounded-lg text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 min-h-[48px]"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-2">
                                <Mail className="w-4 h-4 inline mr-2" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email address"
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter password (min 8 characters)"
                                    className="w-full px-4 py-3 bg-white border border-green-300 rounded-lg text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 min-h-[48px] pr-12"
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="text-xs text-green-600 mt-1">Password must be at least 8 characters long</p>
                        </div>

                        {/* Role Field */}
                        <div>
                            <label className="block text-sm font-medium text-green-700 mb-2">
                                <Crown className="w-4 h-4 inline mr-2" />
                                Role
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white border border-green-300 rounded-lg text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 min-h-[48px]"
                            >
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                                <option value="viewer">Viewer</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <UserPlus className="w-5 h-5" />
                            {isLoading ? "Creating User..." : "Create Admin User"}
                        </button>
                    </form>

                    {/* Info Box */}
                    <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="text-sm font-medium text-green-700 mb-2">User Roles:</h3>
                        <div className="text-xs text-green-600 space-y-1">
                            <div><strong>Admin:</strong> Full access to all features and settings</div>
                            <div><strong>Editor:</strong> Can manage content but not system settings</div>
                            <div><strong>Viewer:</strong> Read-only access to dashboard</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}