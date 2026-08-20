"use client";

import { Crown, Star, BookOpen, Clock, Users, Award, Globe, Sparkles, ArrowRight, Play, Trophy, Search, Building2, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

interface Course {
    _id: string;
    title: string;
    description: string;
    level: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
    duration: string;
    fees?: string;
    image?: string;
    college?: {
        _id: string;
        name: string;
        location: string;
    };
    slug: string;
}

interface ImageState {
    [key: string]: boolean;
}

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [imageErrors, setImageErrors] = useState<ImageState>({});

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            console.log('🔄 Fetching courses from API...');
            const response = await fetch('/api/courses');
            if (response.ok) {
                const data = await response.json();
                console.log(`✅ Received ${data.courses?.length || 0} courses from API`);
                setCourses(data.courses || []);
            } else {
                console.error('❌ API response not OK:', response.status);
            }
        } catch (error) {
            console.error('❌ Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesFilter = activeFilter === "all" || course.level === activeFilter;
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (course.college?.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const handleEnrollClick = (courseTitle: string) => {
        setSelectedCourse(courseTitle);
        setIsModalOpen(true);
    };

    const handleImageError = (courseId: string) => {
        setImageErrors(prev => ({ ...prev, [courseId]: true }));
    };

    if (loading) {
        return (
            <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pt-28 pb-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-12 h-12 border-4 border-[#063326] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#063326] font-bold text-base">Loading Academic Courses...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pb-20">
            <AeoSchema
                breadcrumbs={[{ name: "Home", item: "/" }, { name: "Courses", item: "/courses" }]}
                faqs={[
                    {
                        question: "What academic levels of courses are available at Aptor Studies?",
                        answer: "Aptor Studies offers guidance for Undergraduate degrees (B.Tech, MBBS, BBA, BCA, B.Com), Postgraduate programs (MBA, MCA, M.Tech, M.Sc), Professional Diplomas, and Certificate courses."
                    },
                    {
                        question: "How do I choose the right course for my career?",
                        answer: "You can schedule a free 1-on-1 career counselling session with an Aptor Studies advisor who will analyze your academic background, strengths, and career ambitions to match you with top-tier courses."
                    }
                ]}
                extraSchemas={courses.length > 0 ? [
                    {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Featured Academic Courses",
                        "itemListElement": courses.map((c, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "name": c.title,
                            "description": c.description,
                            "url": `https://aptorstudies.com/courses/${c.slug}`
                        }))
                    }
                ] : []}
            />
            <GeoSchema pageTitle="Academic Courses & Degree Programs - Aptor Studies" pagePath="/courses" />
            <SeoSchema routeKey="courses" />

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
                        <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">ACADEMIC PROGRAMS & COURSES</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
                        Explore World-Class <span className="text-[#1b7a4b]">Courses & Degrees</span>
                    </h1>
                    <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

                    <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
                        Discover industry-aligned undergraduate, postgraduate, diploma, and certificate programs designed to launch and elevate your career.
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
                    {/* Search & Filter Container */}
                    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-[#d5ebd9] mb-12">
                        {/* Search Input */}
                        <div className="relative mb-5">
                            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search courses by name, subject, or college..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent focus:bg-white transition-all text-sm sm:text-base"
                            />
                        </div>

                        {/* Filter Pills */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Filter Level:</span>
                            {[
                                { key: "all", label: "All Programs" },
                                { key: "Undergraduate", label: "Undergraduate" },
                                { key: "Postgraduate", label: "Postgraduate" },
                                { key: "Diploma", label: "Diploma" },
                                { key: "Certificate", label: "Certificate" }
                            ].map((filter) => (
                                <button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                                        activeFilter === filter.key
                                            ? "bg-[#063326] text-white shadow-md shadow-emerald-900/20 border border-emerald-500/30"
                                            : "bg-slate-100 text-slate-600 hover:text-[#063326] hover:bg-emerald-50 border border-transparent"
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Courses Grid Area */}
                    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div
                                    key={course._id}
                                    className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl border border-emerald-100/80 hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Image Frame */}
                                        <div className="h-44 sm:h-48 w-full bg-slate-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative border border-slate-100 shadow-inner">
                                            {course.image && !imageErrors[course._id] ? (
                                                <img 
                                                    src={course.image} 
                                                    alt={course.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={() => handleImageError(course._id)}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-[#032619] to-[#063326] flex items-center justify-center text-white">
                                                    <GraduationCap className="w-14 h-14 text-[#eab308] opacity-90 group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                            )}

                                            {/* Level Badge over Image */}
                                            <div className="absolute top-3 left-3 bg-[#063326]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-emerald-500/30">
                                                {course.level}
                                            </div>

                                            {/* Duration Badge over Image */}
                                            {course.duration && (
                                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#eab308] text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-yellow-500/20">
                                                    <Clock className="w-3 h-3 text-[#eab308]" />
                                                    <span>{course.duration}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Associated College Badge if present */}
                                        {course.college && (
                                            <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#d8f5e5] border border-[#a3e6c2] rounded-lg text-xs font-semibold text-[#095738]">
                                                <Building2 className="w-3.5 h-3.5 shrink-0" />
                                                <span className="truncate max-w-[220px]">{course.college.name}</span>
                                            </div>
                                        )}

                                        {/* Course Title */}
                                        <Link href={`/courses/${course.slug}`}>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#063326] transition-colors leading-snug mb-2 line-clamp-2 hover:underline cursor-pointer">
                                                {course.title}
                                            </h3>
                                        </Link>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                                            {course.description}
                                        </p>
                                    </div>

                                    {/* Bottom Info & Action Buttons */}
                                    <div>
                                        {course.fees && (
                                            <div className="pt-3 mb-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                                                <span className="text-slate-400">Estimated Fees</span>
                                                <span className="font-bold text-[#095738]">{course.fees}</span>
                                            </div>
                                        )}

                                        <div className="pt-2">
                                            <button
                                                onClick={() => handleEnrollClick(course.title)}
                                                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                                            >
                                                <Crown className="w-4 h-4 shrink-0" />
                                                <span>Learn More & Apply</span>
                                                <ArrowRight className="w-4 h-4 shrink-0" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16 bg-white rounded-3xl p-8 border border-emerald-100 shadow-md">
                                <div className="w-16 h-16 rounded-full bg-[#d8f5e5] text-[#095738] flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No Courses Found</h3>
                                <p className="text-slate-500 max-w-md mx-auto text-sm mb-6">
                                    {searchTerm || activeFilter !== "all" 
                                        ? "No courses matched your search or filter criteria. Try clearing filters or searching for something else." 
                                        : "No courses found yet. Check back soon!"
                                    }
                                </p>
                                {(searchTerm || activeFilter !== "all") && (
                                    <button
                                        onClick={() => { setSearchTerm(""); setActiveFilter("all"); }}
                                        className="px-5 py-2.5 bg-[#063326] text-white rounded-xl font-bold text-sm hover:bg-[#084e31] transition-all cursor-pointer"
                                    >
                                        Reset Filters
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Learn More About ${selectedCourse}`}
                subtitle="Get Course Information"
                source={`course-${selectedCourse.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}
