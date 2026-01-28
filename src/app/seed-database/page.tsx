"use client";

import { useState } from "react";
import { Crown, Database, CheckCircle, XCircle, Loader, RefreshCw } from "lucide-react";

export default function SeedDatabasePage() {
    const [isSeeding, setIsSeeding] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [seedResult, setSeedResult] = useState<any>(null);
    const [dbStatus, setDbStatus] = useState<any>(null);
    const [error, setError] = useState<string>("");

    const handleSeedDatabase = async () => {
        setIsSeeding(true);
        setError("");
        setSeedResult(null);

        try {
            const response = await fetch('/api/seed-all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                setSeedResult(data);
            } else {
                setError(data.message || 'Failed to seed database');
            }
        } catch (error) {
            console.error('Seeding error:', error);
            setError('Failed to connect to the server');
        } finally {
            setIsSeeding(false);
        }
    };

    const handleCheckStatus = async () => {
        setIsChecking(true);
        setError("");

        try {
            const response = await fetch('/api/seed-all', {
                method: 'GET',
            });

            const data = await response.json();

            if (data.success) {
                setDbStatus(data);
            } else {
                setError(data.message || 'Failed to check database status');
            }
        } catch (error) {
            console.error('Status check error:', error);
            setError('Failed to connect to the server');
        } finally {
            setIsChecking(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                        <Database className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">DATABASE SEEDING</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="gradient-text">Database</span> Management
                    </h1>
                    
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Initialize your MongoDB Atlas database with sample data including admin user, universities, colleges, blogs, courses, events, and internships.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="card-premium p-6">
                        <div className="text-center">
                            <Database className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Seed Database</h3>
                            <p className="text-gray-400 mb-4">
                                Populate your database with sample data and create admin user
                            </p>
                            <button
                                onClick={handleSeedDatabase}
                                disabled={isSeeding}
                                className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSeeding ? (
                                    <>
                                        <Loader className="w-4 h-4 animate-spin mr-2" />
                                        Seeding Database...
                                    </>
                                ) : (
                                    <>
                                        <Database className="w-4 h-4 mr-2" />
                                        Seed Database
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="card-premium p-6">
                        <div className="text-center">
                            <RefreshCw className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Check Status</h3>
                            <p className="text-gray-400 mb-4">
                                View current database status and record counts
                            </p>
                            <button
                                onClick={handleCheckStatus}
                                disabled={isChecking}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isChecking ? (
                                    <>
                                        <Loader className="w-4 h-4 animate-spin mr-2" />
                                        Checking...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="w-4 h-4 mr-2" />
                                        Check Status
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Error Display */}
                {error && (
                    <div className="card-premium p-6 mb-8 border-red-500/30">
                        <div className="flex items-center gap-3">
                            <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-red-400 font-semibold">Error</h3>
                                <p className="text-gray-300">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Seed Result */}
                {seedResult && (
                    <div className="card-premium p-6 mb-8 border-green-500/30">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <h3 className="text-green-400 font-semibold text-lg">Database Seeded Successfully!</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.universities}</div>
                                <div className="text-sm text-gray-400">Universities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.colleges}</div>
                                <div className="text-sm text-gray-400">Colleges</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.blogs}</div>
                                <div className="text-sm text-gray-400">Blogs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.courses}</div>
                                <div className="text-sm text-gray-400">Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.events}</div>
                                <div className="text-sm text-gray-400">Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.internships}</div>
                                <div className="text-sm text-gray-400">Internships</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.contacts}</div>
                                <div className="text-sm text-gray-400">Contacts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">{seedResult.results.admin ? '✓' : '✗'}</div>
                                <div className="text-sm text-gray-400">Admin User</div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-black/30 rounded-lg">
                            <h4 className="text-white font-semibold mb-2">Admin Login Credentials:</h4>
                            <p className="text-gray-300">Email: <span className="text-yellow-400">info@aptorstudies.com</span></p>
                            <p className="text-gray-300">Password: <span className="text-yellow-400">SecureAdmin123!</span></p>
                        </div>
                    </div>
                )}

                {/* Database Status */}
                {dbStatus && (
                    <div className="card-premium p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="w-6 h-6 text-blue-400" />
                            <h3 className="text-blue-400 font-semibold text-lg">Database Status</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.users}</div>
                                <div className="text-sm text-gray-400">Users</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.universities}</div>
                                <div className="text-sm text-gray-400">Universities</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.colleges}</div>
                                <div className="text-sm text-gray-400">Colleges</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.blogs}</div>
                                <div className="text-sm text-gray-400">Blogs</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.courses}</div>
                                <div className="text-sm text-gray-400">Courses</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.events}</div>
                                <div className="text-sm text-gray-400">Events</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.internships}</div>
                                <div className="text-sm text-gray-400">Internships</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.contacts}</div>
                                <div className="text-sm text-gray-400">Contacts</div>
                            </div>
                            <div className="text-center p-3 bg-black/30 rounded-lg">
                                <div className="text-xl font-bold text-white">{dbStatus.stats.seoSettings}</div>
                                <div className="text-sm text-gray-400">SEO Settings</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                            <div>
                                <div className="text-white font-semibold">Admin User Status</div>
                                <div className="text-gray-400">info@aptorstudies.com</div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                dbStatus.adminUser === 'Exists' 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : 'bg-red-500/20 text-red-400'
                            }`}>
                                {dbStatus.adminUser}
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <div className="text-2xl font-bold text-yellow-400">{dbStatus.totalRecords}</div>
                            <div className="text-gray-400">Total Records in Database</div>
                        </div>
                    </div>
                )}

                {/* Instructions */}
                <div className="card-premium p-6 mt-8">
                    <h3 className="text-white font-semibold text-lg mb-4">Instructions</h3>
                    <div className="space-y-3 text-gray-300">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                            <div>
                                <strong>Seed Database:</strong> Click "Seed Database" to populate your MongoDB Atlas database with sample data including admin user, universities, colleges, blogs, courses, events, and internships.
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                            <div>
                                <strong>Check Status:</strong> Use "Check Status" to view current database statistics and verify that all data has been properly seeded.
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                            <div>
                                <strong>Admin Access:</strong> After seeding, you can login to the admin panel using the credentials: <code className="bg-black/50 px-2 py-1 rounded">info@aptorstudies.com</code> / <code className="bg-black/50 px-2 py-1 rounded">SecureAdmin123!</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}