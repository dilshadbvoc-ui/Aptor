"use client";

import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Crown, Building2, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

interface University {
    _id: string;
    name: string;
    location: string;
    description?: string;
    website?: string;
    isActive: boolean;
    createdAt: string;
}

export default function AdminUniversitiesPage() {
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUniversities();
    }, []);

    const fetchUniversities = async () => {
        try {
            const response = await fetch('/api/admin/universities');
            if (response.ok) {
                const data = await response.json();
                setUniversities(data.universities || []);
            } else {
                setError("Failed to fetch universities");
            }
        } catch (error) {
            console.error("Error fetching universities:", error);
            setError("Failed to fetch universities");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this university?")) return;

        try {
            const response = await fetch(`/api/admin/universities/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUniversities(universities.filter(uni => uni._id !== id));
            } else {
                alert("Failed to delete university");
            }
        } catch (error) {
            console.error("Error deleting university:", error);
            alert("Failed to delete university");
        }
    };

    const toggleStatus = async (id: string, currentStatus: boolean) => {
        try {
            const response = await fetch(`/api/admin/universities/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isActive: !currentStatus }),
            });

            if (response.ok) {
                setUniversities(universities.map(uni =>
                    uni._id === id ? { ...uni, isActive: !currentStatus } : uni
                ));
            } else {
                alert("Failed to update university status");
            }
        } catch (error) {
            console.error("Error updating university:", error);
            alert("Failed to update university status");
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-300 rounded-full mb-2">
                        <GraduationCap className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 text-sm font-medium">COLLEGES</span>
                    </div>
                    <h1 className="text-3xl font-bold text-green-900">Manage <span className="gradient-text">Colleges</span></h1>
                    <p className="text-green-700 mt-1">Add, edit, and manage college listings</p>
                </div>
                <Link
                    href="/admin/universities/new"
                    className="btn-premium px-4 py-2 text-black font-semibold flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Add New College
                </Link>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            {/* Universities List */}
            <div className="card-premium overflow-hidden">
                {universities.length === 0 ? (
                    <div className="text-center py-12">
                        <Building2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-green-900 mb-2">No Colleges Found</h3>
                        <p className="text-green-700 mb-4">Get started by adding your first college.</p>
                        <Link
                            href="/admin/universities/new"
                            className="btn-premium px-4 py-2 text-black font-semibold flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Add College
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-yellow-400/20">
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        University
                                    </th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Location
                                    </th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th className="text-right py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-yellow-400/10">
                                {universities.map((university) => (
                                    <tr key={university._id} className="hover:bg-yellow-400/5 transition-colors">
                                        <td className="py-4 px-6">
                                            <div>
                                                <h3 className="text-white font-medium">{university.name}</h3>
                                                {university.description && (
                                                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                                                        {university.description}
                                                    </p>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-gray-300">{university.location}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <button
                                                onClick={() => toggleStatus(university._id, university.isActive)}
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors ${university.isActive
                                                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                                    : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                                                    }`}
                                            >
                                                {university.isActive ? 'Active' : 'Inactive'}
                                            </button>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-gray-400 text-sm">
                                                {new Date(university.createdAt).toLocaleDateString()}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/universities/${university.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                <Link
                                                    href={`/admin/universities/${university._id}/edit`}
                                                    className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(university._id)}
                                                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
