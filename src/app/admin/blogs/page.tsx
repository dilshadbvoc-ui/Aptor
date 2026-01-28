"use client";

import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Crown, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

interface Blog {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    author: string;
    publishedAt: string;
    isPublished: boolean;
    createdAt: string;
}

export default function AdminBlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/admin/blogs');
            if (response.ok) {
                const data = await response.json();
                setBlogs(data.blogs || []);
            } else {
                setError("Failed to fetch blogs");
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Failed to fetch blogs");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog post?")) return;

        try {
            const response = await fetch(`/api/admin/blogs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBlogs(blogs.filter(blog => blog._id !== id));
            } else {
                alert("Failed to delete blog post");
            }
        } catch (error) {
            console.error("Error deleting blog:", error);
            alert("Failed to delete blog post");
        }
    };

    const togglePublishStatus = async (id: string, currentStatus: boolean) => {
        try {
            const response = await fetch(`/api/admin/blogs/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isPublished: !currentStatus }),
            });

            if (response.ok) {
                setBlogs(blogs.map(blog => 
                    blog._id === id ? { ...blog, isPublished: !currentStatus } : blog
                ));
            } else {
                alert("Failed to update blog status");
            }
        } catch (error) {
            console.error("Error updating blog:", error);
            alert("Failed to update blog status");
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-2">
                        <BookOpen className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">BLOGS</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Manage Blog Posts</h1>
                    <p className="text-gray-400 mt-1">Create and manage your blog content</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium transition-colors duration-200"
                >
                    <Plus className="w-4 h-4" />
                    Add New Post
                </Link>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            {/* Blogs List */}
            <div className="card-premium overflow-hidden">
                {blogs.length === 0 ? (
                    <div className="text-center py-12">
                        <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-white mb-2">No Blog Posts Found</h3>
                        <p className="text-gray-400 mb-4">Get started by creating your first blog post.</p>
                        <Link
                            href="/admin/blogs/new"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium transition-colors duration-200"
                        >
                            <Plus className="w-4 h-4" />
                            Create Post
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-yellow-400/20">
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Author
                                    </th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Published
                                    </th>
                                    <th className="text-right py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-yellow-400/10">
                                {blogs.map((blog) => (
                                    <tr key={blog._id} className="hover:bg-yellow-400/5 transition-colors">
                                        <td className="py-4 px-6">
                                            <div>
                                                <h3 className="text-white font-medium">{blog.title}</h3>
                                                {blog.excerpt && (
                                                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                                                        {blog.excerpt}
                                                    </p>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-gray-300">{blog.author}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <button
                                                onClick={() => togglePublishStatus(blog._id, blog.isPublished)}
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                                                    blog.isPublished
                                                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                                        : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                                                }`}
                                            >
                                                {blog.isPublished ? 'Published' : 'Draft'}
                                            </button>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-gray-400 text-sm">
                                                {new Date(blog.publishedAt).toLocaleDateString()}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/blogs/${blog.slug}`}
                                                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                <Link
                                                    href={`/admin/blogs/${blog._id}/edit`}
                                                    className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(blog._id)}
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
