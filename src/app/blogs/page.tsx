"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, User, Crown, Star, Diamond, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface Blog {
    _id: string;
    title: string;
    summary: string;
    slug: string;
    publishedAt: string;
    tags: string[];
    author?: string;
    featured?: boolean;
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs');
            if (response.ok) {
                const data = await response.json();
                setBlogs(data.blogs || []);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Crown className="w-8 h-8 text-black animate-pulse" />
                    </div>
                    <p className="text-yellow-400">Loading premium insights...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <BookOpen className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">ELITE INSIGHTS</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">Premium</span>
                            <br />
                            <span className="text-white">Educational Insights</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Stay ahead with exclusive educational content, industry insights, and expert guidance from our premium education consultants.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blogs Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {blogs.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">No Premium Content Yet</h3>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Our elite content team is crafting exclusive educational insights. Check back soon for premium articles and expert guidance.
                            </p>
                            <Link 
                                href="/contact" 
                                className="btn-premium inline-flex items-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Request Premium Content
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    <span className="gradient-text">Latest</span> Premium Insights
                                </h2>
                                <p className="text-gray-400">
                                    {blogs.length} exclusive article{blogs.length !== 1 ? 's' : ''} available
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {blogs.map((blog, index) => (
                                    <Link
                                        key={blog._id}
                                        href={`/blogs/${blog.slug}`}
                                        className="card-premium hover-lift-premium slide-up group"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="p-6">
                                            {/* Premium Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Crown className="w-5 h-5 text-yellow-400" />
                                                    <span className="text-yellow-400 text-sm font-medium uppercase">
                                                        {blog.tags?.[0] || "Premium"}
                                                    </span>
                                                </div>
                                                {blog.featured && (
                                                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                        <Star className="w-3 h-3" />
                                                        Featured
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            
                                            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                                {blog.summary}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4 text-yellow-400" />
                                                    <span className="text-gray-400">
                                                        {new Date(blog.publishedAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                {blog.author && (
                                                    <div className="flex items-center gap-1">
                                                        <User className="w-4 h-4 text-yellow-400" />
                                                        <span className="text-gray-400">{blog.author}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Read More */}
                                            <div className="flex items-center text-yellow-400 font-medium group-hover:gap-2 transition-all">
                                                <span>Read Elite Insights</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">EXCLUSIVE CONTENT</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Want More <span className="gradient-text">Premium Insights?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Subscribe to our premium newsletter and get exclusive educational content, industry trends, and expert guidance delivered to your inbox.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Get Premium Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
                            >
                                <BookOpen className="w-5 h-5" />
                                Request Content
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
