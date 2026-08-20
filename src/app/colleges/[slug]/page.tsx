"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, Crown, Star, Diamond, Sparkles, MapPin, Building2, Calendar, Globe, GraduationCap, CheckCircle } from "lucide-react";

interface College {
    _id: string;
    name: string;
    description: string;
    location: string;
    establishedYear?: number;
    type: "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other";
    affiliation?: string;
    website?: string;
    courses?: string[];
    facilities?: string[];
    images?: string[];
}

export default function CollegePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [college, setCollege] = useState<College | null>(null);
    const [loading, setLoading] = useState(true);
    const [slug, setSlug] = useState<string>("");

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setSlug(resolvedParams.slug);
        };
        getParams();
    }, [params]);

    useEffect(() => {
        if (slug) {
            fetchCollege();
        }
    }, [slug]);

    const fetchCollege = async () => {
        try {
            const response = await fetch(`/api/colleges/${slug}`);
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setCollege(data.college);
                } else {
                    notFound();
                }
            } else {
                notFound();
            }
        } catch (error) {
            console.error('Error fetching college:', error);
            notFound();
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pt-28 pb-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-12 h-12 border-4 border-[#063326] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#063326] font-bold text-base">Loading College Details...</p>
                </div>
            </div>
        );
    }

    if (!college) {
        notFound();
    }

    return (
        <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pb-20">
            {/* Header Banner */}
            <section className="relative bg-gradient-to-b from-[#01160d] via-[#032619] to-[#063326] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-light-green-dots-dark opacity-35 pointer-events-none z-0"></div>
                <div className="max-w-7xl mx-auto relative z-10 fade-in">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-4 shadow-sm">
                        <Crown className="w-4 h-4 text-[#095738]" />
                        <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">{college.type}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">{college.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-100/90 font-medium">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[#eab308]" />
                            <span>{college.location}</span>
                        </div>
                        {college.establishedYear && (
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-[#eab308]" />
                                <span>Est. {college.establishedYear}</span>
                            </div>
                        )}
                        {college.affiliation && (
                            <div className="flex items-center gap-1.5">
                                <Building2 className="w-4 h-4 text-[#eab308]" />
                                <span>{college.affiliation}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content Details */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
                    {/* Left Image & CTA */}
                    <div className="lg:col-span-5 mb-8 lg:mb-0">
                        <div className="h-72 sm:h-80 w-full bg-slate-100 rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-xl relative mb-6">
                            {college.images && college.images.length > 0 ? (
                                <img 
                                    src={college.images[0]} 
                                    alt={college.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-[#063326] flex items-center justify-center text-white">
                                    <GraduationCap className="w-16 h-16 text-[#eab308]" />
                                </div>
                            )}
                        </div>

                        {college.website && (
                            <Link
                                href={college.website}
                                target="_blank"
                                className="w-full bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] font-bold text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all text-center"
                            >
                                <Globe className="w-5 h-5 shrink-0" />
                                <span>Visit Official Website</span>
                                <ArrowRight className="w-5 h-5 shrink-0" />
                            </Link>
                        )}
                    </div>

                    {/* Right Details */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-lg">
                        <h2 className="text-2xl font-black text-slate-900 mb-4">About {college.name}</h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">{college.description}</p>
                        
                        {college.affiliation && (
                            <div className="p-4 bg-[#d8f5e5]/50 border border-[#a3e6c2] rounded-xl mb-6 flex items-center gap-3">
                                <Building2 className="w-5 h-5 text-[#095738]" />
                                <span className="text-xs sm:text-sm font-bold text-[#095738]">Affiliated to: {college.affiliation}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Courses Offered */}
                <div className="mt-12 sm:mt-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-4 shadow-sm">
                        <GraduationCap className="w-4 h-4 text-[#095738]" />
                        <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">PROGRAMS</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Courses Offered</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {college.courses && college.courses.length > 0 ? (
                            college.courses.map((course: string, index: number) => (
                                <div key={index} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-md flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#d8f5e5] text-[#095738] flex items-center justify-center shrink-0">
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{course}</h4>
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-500 text-sm">Course information pending.</p>
                        )}
                    </div>
                </div>

                {/* Facilities */}
                {college.facilities && college.facilities.length > 0 && (
                    <div className="mt-12 sm:mt-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-4 shadow-sm">
                            <Sparkles className="w-4 h-4 text-[#095738]" />
                            <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">AMENITIES</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Campus Facilities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {college.facilities.map((facility: string, index: number) => (
                                <div key={index} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-md flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#063326] text-[#eab308] flex items-center justify-center shrink-0">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{facility}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
