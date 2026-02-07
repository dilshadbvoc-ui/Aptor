"use client";

import { useState } from "react";
import { Crown, CheckCircle, AlertCircle, Loader } from "lucide-react";
import Link from "next/link";

export default function SetupAdminPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string; user?: any } | null>(null);

    const createAdmin = async () => {
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('/api/seed-admin', {
                method: 'POST',
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult({
                success: false,
                message: 'Failed to create admin user. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    const checkAdmin = async () => {
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('/api/seed-admin');
            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult({
                success: false,
                message: 'Failed to check admin user. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <div className="card p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-600 text-sm font-medium">ADMIN SETUP</span>
                        </div>
                        <h1 className="text-3xl font-bold text-green-900 mb-2">
                            Admin User Setup
                        </h1>
                        <p className="text-green-700">
                            Create or check the admin user for APTOR Studies
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <button
                            onClick={checkAdmin}
                            disabled={loading}
                            className="btn-secondary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader className="w-5 h-5 animate-spin" />
                            ) : (
                                <AlertCircle className="w-5 h-5" />
                            )}
                            Check Admin User
                        </button>

                        <button
                            onClick={createAdmin}
                            disabled={loading}
                            className="btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader className="w-5 h-5 animate-spin" />
                            ) : (
                                <Crown className="w-5 h-5" />
                            )}
                            Create/Reset Admin
                        </button>
                    </div>

                    {/* Result */}
                    {result && (
                        <div className={`p-6 rounded-lg border-2 ${
                            result.success 
                                ? 'bg-green-50 border-green-300' 
                                : 'bg-red-50 border-red-300'
                        }`}>
                            <div className="flex items-start gap-3">
                                {result.success ? (
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                ) : (
                                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                )}
                                <div className="flex-1">
                                    <h3 className={`font-semibold mb-2 ${
                                        result.success ? 'text-green-900' : 'text-red-900'
                                    }`}>
                                        {result.success ? 'Success!' : 'Error'}
                                    </h3>
                                    <p className={result.success ? 'text-green-700' : 'text-red-700'}>
                                        {result.message}
                                    </p>

                                    {result.user && (
                                        <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                                            <h4 className="font-semibold text-green-900 mb-3">Admin User Details:</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-green-600">Name:</span>
                                                    <span className="text-green-900 font-medium">{result.user.name}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-600">Email:</span>
                                                    <span className="text-green-900 font-medium">{result.user.email}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-600">Role:</span>
                                                    <span className="text-green-900 font-medium">{result.user.role}</span>
                                                </div>
                                                {result.user.isActive !== undefined && (
                                                    <div className="flex justify-between">
                                                        <span className="text-green-600">Status:</span>
                                                        <span className={`font-medium ${
                                                            result.user.isActive ? 'text-green-600' : 'text-red-600'
                                                        }`}>
                                                            {result.user.isActive ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {result.success && (
                                        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                                            <h4 className="font-semibold text-yellow-900 mb-2">Login Credentials:</h4>
                                            <div className="space-y-1 text-sm">
                                                <p className="text-yellow-800">
                                                    <strong>Email:</strong> info@aptorstudies.com
                                                </p>
                                                <p className="text-yellow-800">
                                                    <strong>Password:</strong> {process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'SecureAdmin123!'}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Info Box */}
                    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-3">ℹ️ Information</h3>
                        <ul className="space-y-2 text-sm text-blue-800">
                            <li>• <strong>Check Admin User:</strong> Verifies if the admin user exists in the database</li>
                            <li>• <strong>Create/Reset Admin:</strong> Creates a new admin user or resets the existing one</li>
                            <li>• Default email: <code className="bg-blue-100 px-2 py-1 rounded">info@aptorstudies.com</code></li>
                            <li>• Default password: <code className="bg-blue-100 px-2 py-1 rounded">SecureAdmin123!</code></li>
                            <li>• Password can be changed in <code className="bg-blue-100 px-2 py-1 rounded">.env.local</code> file</li>
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8 pt-6 border-t border-green-200 space-y-3">
                        <Link 
                            href="/login" 
                            className="inline-block text-green-600 hover:text-green-700 transition-colors font-medium"
                        >
                            Go to Login Page →
                        </Link>
                        <br />
                        <Link 
                            href="/" 
                            className="inline-block text-green-600 hover:text-green-700 transition-colors text-sm"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
