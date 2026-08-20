"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, User, Crown, Star, Sparkles, Trophy, ArrowLeft, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

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
            <div className="min-h-screen bg-[#fbfdfc] bg-light-green-dots flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-3xl border border-emerald-100 shadow-xl">
                    <div className="w-14 h-14 bg-[#d8f5e5] text-[#095738] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#a3e6c2]">
                        <Crown className="w-7 h-7 animate-pulse" />
                    </div>
                    <p className="text-[#0c2b1e] font-bold text-base">Loading Educational Insights...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <AeoSchema
                breadcrumbs={[{ name: "Home", item: "/" }, { name: "Blogs", item: "/blogs" }]}
                faqs={[
                    {
                        question: "What topics are covered in Aptor Studies blogs?",
                        answer: "Our blogs cover university selection guides, scholarship application tips, medical & engineering course details, career orientation, and international admission guidance."
                    }
                ]}
            />
            <GeoSchema pageTitle="Educational Insights & News | Aptor Studies" pagePath="/blogs" />
            <SeoSchema routeKey="blogs" />

            {/* Hero Header Section (About Page Style) */}
            <section className="relative py-20 lg:py-24 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Top Right Leaf Vector */}
                <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    {/* Mint Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                        <Crown className="w-4 h-4 text-[#106841]" />
                        <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">EDUCATIONAL INSIGHTS & ARTICLES</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
                        <span className="text-[#1b7a4b]">Educational</span> Insights & News
                    </h1>
                    <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

                    {/* Description */}
                    <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-2">
                        Stay informed with the latest trends, admission strategies, university guides, and expert advice from Aptor Studies.
                    </p>
                </div>
            </section>

            {/* Main Content & Blog Grid Section */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
                {/* Decorative Bottom Left Leaf Vector */}
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {blogs.length === 0 ? (
                        <div className="bg-white rounded-[2.2rem] p-8 sm:p-12 border border-[#d5ebd9] shadow-xl text-center max-w-lg mx-auto">
                            <div className="w-14 h-14 rounded-2xl bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4] flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-[#0c2b1e] mb-2">No Articles Available Yet</h3>
                            <p className="text-[#475569] text-sm leading-relaxed mb-6 font-normal">
                                Our editorial team is working on new educational articles. Check back soon or contact us for personalized counselling.
                            </p>
                            <Link 
                                href="/counselling" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#106841] hover:bg-[#1b7a4b] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                            >
                                <Crown className="w-4 h-4 text-emerald-300" />
                                <span>Get Free Counselling</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#d5ebd9] pb-6">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b1e]">Latest Articles</h2>
                                    <p className="text-[#475569] text-sm font-medium mt-1">
                                        Showing {blogs.length} article{blogs.length !== 1 ? 's' : ''}
                                    </p>
                                </div>
                            </div>

                            {/* Blog Cards Grid */}
                            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                                {blogs.map((blog) => (
                                    <Link
                                        key={blog._id}
                                        href={`/blogs/${blog.slug}`}
                                        className="bg-white rounded-[2.2rem] p-6 sm:p-8 shadow-xl border border-[#d5ebd9] hover:border-[#10b981] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden relative"
                                    >
                                        <div>
                                            {/* Tag & Featured Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full text-xs font-bold text-[#106841]">
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                    <span>{blog.tags?.[0] || "General"}</span>
                                                </div>
                                                {blog.featured && (
                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-700">
                                                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                        <span>Featured</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-[#0c2b1e] group-hover:text-[#106841] transition-colors leading-snug mb-3 line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            
                                            {/* Summary */}
                                            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 font-normal">
                                                {blog.summary}
                                            </p>
                                        </div>

                                        <div>
                                            {/* Meta & CTA Footer */}
                                            <div className="pt-4 border-t border-[#d5ebd9]/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-[#106841]" />
                                                    <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                </div>
                                                <div className="inline-flex items-center gap-1 text-[#106841] font-bold group-hover:translate-x-1 transition-transform">
                                                    <span>Read Article</span>
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Expert Admission Assistance CTA Section (Exact Style of JOIN APTOR STUDIES in About Page) */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
                {/* Bottom Layered Wave Curves Across Section */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 pointer-events-none z-0 opacity-75">
                    <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,120 C320,180 640,90 960,140 C1280,190 1360,110 1440,130 L1440,180 L0,180 Z" fill="#c8e9d6" opacity="0.4" />
                        <path d="M0,140 C280,90 560,170 840,120 C1120,70 1320,150 1440,140 L1440,180 L0,180 Z" fill="#a3e0c0" opacity="0.25" />
                        <path d="M0,160 C400,130 800,180 1200,150 L1440,170 L1440,180 L0,180 Z" fill="#0d7a4d" opacity="0.08" />
                    </svg>
                </div>

                {/* Central Content Container */}
                <div className="max-w-4xl mx-auto relative z-20 text-center">
                    {/* Mint Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d7efe2] border border-[#b8e4cd] rounded-full mb-6 shadow-sm">
                        <Crown className="w-4 h-4 text-[#095738]" />
                        <span className="text-[#095738] text-xs font-bold tracking-wider uppercase">EXPERT ADMISSION ASSISTANCE</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07301f] tracking-tight leading-[1.15] mb-5 max-w-3xl mx-auto">
                        Need Personalized <span className="text-[#097544]">Academic Advice?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-[#09472e]/80 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                        Connect with top educational consultants at Aptor Studies to choose the best courses and university scholarships.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/counselling"
                            className="bg-[#095738] hover:bg-[#07442b] text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl shadow-emerald-900/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 border border-emerald-600/30"
                        >
                            <Crown className="w-5 h-5 text-[#eab308]" />
                            <span>Book Free Consultation</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/colleges"
                            className="bg-white hover:bg-[#e4f5ec] text-[#095738] font-bold text-base py-4 px-8 rounded-2xl border-2 border-[#095738] shadow-md hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5"
                        >
                            <Globe className="w-5 h-5 text-[#095738]" />
                            <span>Explore Colleges</span>
                        </Link>
                    </div>

                    {/* Bottom Accent Bar & Dot */}
                    <div className="flex items-center justify-center gap-1.5 mt-8 sm:mt-10">
                        <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#097544] rounded-full" />
                        <div className="w-1.5 h-1.5 bg-[#097544] rounded-full" />
                    </div>
                </div>
            </section>
        </div>
    );
}
