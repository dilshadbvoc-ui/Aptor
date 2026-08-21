"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Crown, Star, Diamond, Sparkles, MapPin, Building2, Calendar, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

interface College {
    _id: string;
    name: string;
    description: string;
    location: string;
    establishedYear: number;
    type: "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other";
    affiliation?: string;
    website?: string;
    images?: string[];
    slug: string;
}

interface ImageState {
    [key: string]: boolean;
}

export default function CollegesPage() {
    const [colleges, setColleges] = useState<College[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState<string>("");
    const [imageErrors, setImageErrors] = useState<ImageState>({});

    useEffect(() => {
        fetchColleges();
    }, []);

    const fetchColleges = async () => {
        try {
            console.log('🔄 Fetching colleges from API...');
            const response = await fetch('/api/colleges');
            if (response.ok) {
                const data = await response.json();
                console.log(`✅ Received ${data.colleges?.length || 0} colleges from API`);
                setColleges(data.colleges || []);
            } else {
                console.error('❌ API response not OK:', response.status);
            }
        } catch (error) {
            console.error('❌ Error fetching colleges:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApplyClick = (collegeName: string) => {
        setSelectedCollege(collegeName);
        setIsModalOpen(true);
    };

    const handleImageError = (collegeId: string) => {
        setImageErrors(prev => ({ ...prev, [collegeId]: true }));
    };

    if (loading) {
        return (
            <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pt-28 pb-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-12 h-12 border-4 border-[#063326] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#063326] font-bold text-base">Loading Colleges & Institutions...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <AeoSchema
                breadcrumbs={[{ name: "Home", item: "/" }, { name: "Colleges", item: "/colleges" }]}
                faqs={[
                    {
                        question: "How do I apply to colleges in Bengaluru through Aptor Studies?",
                        answer: "Select your desired college on Aptor Studies, click 'Apply Now' to submit your application details, and an expert Aptor educational counsellor will contact you to guide you through admission requirements and documentation."
                    },
                    {
                        question: "What types of colleges are listed on Aptor Studies?",
                        answer: "Aptor Studies lists top accredited engineering institutes, medical colleges, management institutes, arts & science colleges, and allied health institutions in Bengaluru and across India."
                    }
                ]}
                extraSchemas={colleges.length > 0 ? [
                    {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Featured Colleges & Institutions",
                        "itemListElement": colleges.map((c, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "name": c.name,
                            "description": c.description,
                            "url": `https://aptorstudies.com/colleges/${c.slug}`
                        }))
                    }
                ] : []}
            />
            <GeoSchema pageTitle="Top Colleges in Bengaluru & Kerala - Aptor Studies" pagePath="/colleges" />
            <SeoSchema routeKey="colleges" />

            {/* Hero Header Section (About Page Style Background) */}
            <section className="relative py-20 lg:py-24 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Top Right Leaf Vector */}
                <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10 fade-in">
                    {/* Mint Green Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                        <Crown className="w-4 h-4 text-[#106841]" />
                        <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">FEATURED INSTITUTIONS</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
                        Explore Top <span className="text-[#1b7a4b]">Colleges & Universities</span>
                    </h1>
                    <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

                    <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
                        Find the best colleges in Bengaluru and across India for your career goals.
                    </p>
                </div>
            </section>

            {/* Main Content Area (About Page Style Background) */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
                {/* Decorative Bottom Left Leaf Vector */}
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {colleges.length > 0 ? (
                            colleges.map((college) => (
                                <div
                                    key={college._id}
                                    className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl border border-emerald-100/80 hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <Link href={`/colleges/${college.slug}`} className="block">
                                        {/* Image Frame */}
                                        <div className="h-44 sm:h-48 w-full bg-slate-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative border border-slate-100 shadow-inner">
                                            {college.images && college.images[0] && !imageErrors[college._id] ? (
                                                <img 
                                                    src={college.images[0]} 
                                                    alt={college.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={() => handleImageError(college._id)}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-[#ffffff] to-[#02d673] flex items-center justify-center text-white">
                                                    <GraduationCap className="w-12 h-12 text-[#eab308]" />
                                                </div>
                                            )}

                                            {/* Type Pill Badge over Image */}
                                            <div className="absolute top-3 left-3 bg-[#063326]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-emerald-500/30">
                                                {college.type}
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#063326] transition-colors leading-snug mb-2 line-clamp-2">
                                            {college.name}
                                        </h3>

                                        {/* Location */}
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                                            <MapPin className="w-3.5 h-3.5 text-[#eab308] shrink-0" />
                                            <span className="truncate">{college.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                                            {college.description}
                                        </p>

                                        {/* Est Year & Affiliation */}
                                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                                            <span className="capitalize text-[#095738] font-semibold">{college.type}</span>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5 text-[#eab308]" />
                                                <span>Est. {college.establishedYear}</span>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-2.5 pt-2">
                                        <button
                                            onClick={() => handleApplyClick(college.name)}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                                        >
                                            <Crown className="w-4 h-4 shrink-0" />
                                            <span>Apply Now</span>
                                            <ArrowRight className="w-4 h-4 shrink-0" />
                                        </button>

                                        <Link
                                            href={`/colleges/${college.slug}`}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-emerald-50/50 border-2 border-[#063326] text-[#063326] rounded-xl font-bold text-sm transition-all duration-200 text-center"
                                        >
                                            <Diamond className="w-4 h-4 text-[#063326] shrink-0" />
                                            <span>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16 bg-white rounded-3xl p-8 border border-emerald-100 shadow-md">
                                <div className="w-16 h-16 rounded-full bg-[#d8f5e5] text-[#095738] flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No colleges found yet</h3>
                                <p className="text-slate-500 text-sm max-w-md mx-auto">Check back soon as we continuously update our institution directory.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Apply to ${selectedCollege}`}
                subtitle="Start Your Application"
                source={`college-${selectedCollege.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}
