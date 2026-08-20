"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, User, Crown, Star, Diamond, Sparkles, GraduationCap, Trophy, Hash } from "lucide-react";

const recentBlogs = [
    {
        title: "Top Engineering Colleges in Bengaluru 2024",
        excerpt: "Discover the most prestigious engineering institutions in Bengaluru with exceptional placement records and industry partnerships.",
        date: "Jan 15, 2024",
        author: "Education Team",
        slug: "top-engineering-colleges-bengaluru-2024",
        category: "Higher Education",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
        icon: Star
    },
    {
        title: "MBA Programs: Complete Guide",
        excerpt: "Everything you need to know about MBA programs, entrance processes, and career prospects in Bengaluru.",
        date: "Jan 12, 2024",
        author: "Career Expert",
        slug: "mba-programs-complete-guide",
        category: "Graduate Education",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
        icon: GraduationCap
    },
    {
        title: "Student Success Stories",
        excerpt: "Inspiring journeys of our students who achieved excellence through our guidance and network connections.",
        date: "Jan 10, 2024",
        author: "Success Guide",
        slug: "student-success-stories",
        category: "Success Stories",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
        icon: Trophy
    }
];

export function CTASection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#fcfdfd] bg-light-green-dots overflow-hidden mobile-safe-area relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 fade-in max-w-3xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-4 shadow-sm">
                        <BookOpen className="w-4 h-4 text-[#095738]" />
                        <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">EDUCATIONAL INSIGHTS</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3">
                        Quality <span className="text-[#063b25]">Educational</span> Insights
                    </h2>

                    {/* Subtitle */}
                    <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed mb-4">
                        Dive into comprehensive educational content crafted by our expert team
                    </p>

                    {/* Short Centered Accent Bar */}
                    <div className="w-12 h-1 bg-[#10b981] rounded-full mx-auto"></div>
                </div>

                {/* Timeline Grid Container */}
                <div className="relative">
                    
                    {/* Horizontal Timeline Connecting Line */}
                    <div className="hidden lg:block absolute top-[4px] left-[15%] right-[15%] h-[1.5px] bg-slate-200 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 relative z-10">
                        {recentBlogs.map((blog, index) => {
                            const IconComp = blog.icon;
                            return (
                                <div key={index} className="flex flex-col group fade-in">
                                    
                                    {/* Timeline Node Dot above each column */}
                                    <div className="hidden lg:flex items-center justify-center mb-8">
                                        <div className="w-3 h-3 rounded-full bg-[#063b25] ring-4 ring-[#fcfdfd]" />
                                    </div>

                                    {/* Card Content Row (Circular Image Left + Text Right) */}
                                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                                        
                                        {/* Left Side: Circular Image Container */}
                                        <div className="relative shrink-0 self-center sm:self-start">
                                            {/* Dotted Trajectory Outer Arc */}
                                            <svg className="absolute -top-2.5 -left-2.5 w-[124px] sm:w-[140px] h-[124px] sm:h-[140px] pointer-events-none opacity-50" viewBox="0 0 140 140" fill="none">
                                                <path d="M 15 70 A 55 55 0 0 1 125 70" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 5" fill="none" />
                                            </svg>

                                            {/* Circular Image Frame */}
                                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-slate-100">
                                                <img 
                                                    src={blog.image} 
                                                    alt={blog.title} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Floating Icon Badge at Bottom-Left */}
                                            <div className="w-8 h-8 rounded-full bg-[#063b25] text-white flex items-center justify-center border-2 border-white shadow-md absolute bottom-0 left-0 z-10">
                                                <IconComp className="w-4 h-4 text-white" />
                                            </div>
                                        </div>

                                        {/* Right Side: Details & Content */}
                                        <div className="flex-1 min-w-0">
                                            {/* Category */}
                                            <span className="text-[#15803d] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
                                                {blog.category}
                                            </span>

                                            {/* Meta Info (Date & Author) */}
                                            <div className="flex items-center gap-3 text-[11px] sm:text-xs text-slate-400 font-medium mb-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                                                    <span>{blog.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User className="w-3.5 h-3.5 text-amber-600" />
                                                    <span>{blog.author}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2 group-hover:text-[#063b25] transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed mb-3">
                                                {blog.excerpt}
                                            </p>

                                            {/* Read Link */}
                                            <Link 
                                                href={`/blogs/${blog.slug}`}
                                                className="text-[#095738] hover:text-[#063b25] font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                                            >
                                                <span>Read Insights</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="text-center mt-12 sm:mt-16 fade-in">
                    <Link
                        href="/blogs"
                        className="bg-[#063b25] hover:bg-[#094d31] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#063b25]/20 hover:shadow-[#063b25]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>Explore All Content</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Opportunity CTA Card (Full Section Viewport Scale) */}
                <div className="bg-white rounded-[36px] lg:rounded-[44px] p-8 sm:p-12 lg:p-14 xl:p-16 shadow-2xl border border-emerald-100/80 max-w-7xl mx-auto mt-20 sm:mt-24 lg:mt-28 min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-center fade-in relative z-10 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center relative">

                        {/* Left Column: Text & Buttons (Span 5) */}
                        <div className="lg:col-span-5 text-left relative z-10">
                            {/* Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-6 shadow-sm">
                                <Crown className="w-4 h-4 text-[#095738]" />
                                <span className="text-[#095738] text-xs sm:text-sm font-bold tracking-wide uppercase">OPPORTUNITY</span>
                                <Diamond className="w-4 h-4 text-[#095738]" />
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.12] mb-5 tracking-tight">
                                Begin Your <br className="hidden sm:block" />
                                <span className="text-[#063326]">Educational Journey </span>
                                <span className="text-[#f59e0b] italic font-serif text-5xl sm:text-6xl xl:text-7xl block sm:inline mt-2 sm:mt-0">Today!</span>
                            </h2>

                            {/* Dotted Flight Path & Paper Airplane Graphic */}
                            <div className="hidden lg:block absolute top-4 right-[-90px] xl:right-[-120px] w-56 h-44 pointer-events-none z-0">
                                <svg viewBox="0 0 160 120" fill="none" className="w-full h-full text-emerald-500 opacity-60">
                                    <path d="M 10 90 Q 60 10, 140 85" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5" />
                                    <g transform="translate(135, 75) rotate(25) scale(1.1)">
                                        <path d="M0 0 L24 10 L10 14 L6 24 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M10 14 L24 10" stroke="currentColor" strokeWidth="1.5" />
                                    </g>
                                </svg>
                            </div>

                            {/* Subtitle */}
                            <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                                Experience personalized guidance from our admission experts and take the first step towards your career in India&apos;s top institutions.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <Link
                                    href="/counselling"
                                    className="bg-[#f59e0b] hover:bg-[#d97706] text-[#05291b] font-bold text-base sm:text-lg px-7 py-4 rounded-2xl inline-flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                                >
                                    <Crown className="w-5 h-5 shrink-0" />
                                    <span>Book Counselling</span>
                                    <ArrowRight className="w-5 h-5 shrink-0" />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="bg-white hover:bg-emerald-50/50 border-2 border-[#063326] text-[#063326] font-bold text-base sm:text-lg px-7 py-4 rounded-2xl inline-flex items-center justify-center gap-2.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                                >
                                    <Diamond className="w-5 h-5 text-[#063326] shrink-0" />
                                    <span>Join Network</span>
                                </Link>
                            </div>
                        </div>

                        {/* Center Column: Arched Circular Graduate Image & Golden Arch Badge (Span 4) */}
                        <div className="lg:col-span-4 flex justify-center relative my-6 lg:my-0">
                            <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] h-[340px] sm:h-[400px] lg:h-[440px]">
                                {/* Outer Green Border Circle Frame */}
                                <div className="w-full h-[300px] sm:h-[350px] lg:h-[390px] rounded-full overflow-hidden border-[8px] border-[#063326] shadow-2xl relative bg-slate-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                                        alt="Graduate Student Celebrating"
                                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Floating Half-Circle Golden Arch Dome at Bottom */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-52 sm:w-60 lg:w-64 h-24 sm:h-28 lg:h-30 bg-[#f59e0b] rounded-t-full flex items-center justify-center shadow-xl border-4 border-white">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#063326] text-white flex items-center justify-center shadow-md">
                                        <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Dark Green Vertical Stats Container (Span 3) */}
                        <div className="lg:col-span-3 h-full flex flex-col justify-center">
                            <div className="bg-[#042d20] rounded-[32px] p-6 sm:p-7 lg:p-8 text-white shadow-2xl flex flex-col justify-around gap-5 sm:gap-6 border border-emerald-800/60 min-h-[380px] lg:min-h-[440px]">
                                {[
                                    { num: "500+", label: "Partner Institutions", icon: Crown },
                                    { num: "10K+", label: "Success Stories", icon: Star },
                                    { num: "95%", label: "Placement Rate", icon: Diamond },
                                    { num: "24/7", label: "Support", icon: Sparkles },
                                ].map((stat) => {
                                    const StatIcon = stat.icon;
                                    return (
                                        <div key={stat.label} className="flex items-center gap-4">
                                            {/* White Rounded Square Badge */}
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#042d20] flex items-center justify-center shrink-0 shadow-lg">
                                                <StatIcon className="w-6 h-6 text-[#042d20]" />
                                            </div>

                                            {/* Number & Label */}
                                            <div className="text-left flex-1 min-w-0">
                                                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#f59e0b] tracking-tight leading-none mb-1">
                                                    {stat.num}
                                                </div>
                                                <div className="text-xs sm:text-sm lg:text-base text-slate-200 font-semibold line-clamp-1">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}