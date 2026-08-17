"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    GraduationCap, 
    Sparkles, 
    Crown, 
    BookOpen, 
    Award, 
    Users, 
    ArrowRight, 
    CheckCircle2,
    Briefcase,
    Presentation,
    User,
    Target,
    Laptop,
    Eye,
    Gem,
    Star,
    ShieldCheck,
    Lightbulb,
    UserCheck,
    TrendingUp,
    MessageSquare,
    Monitor,
    HeartHandshake,
    Handshake,
    Wifi,
    FileText,
    FileEdit,
    Phone,
    MapPin,
    Globe,
    Quote
} from "lucide-react";
import { LeadModal } from "@/components/ui";

export default function AcademyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center bg-white overflow-hidden py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20">
                {/* Right Side Watermark Graphic */}
                <div className="absolute right-[-8%] sm:right-[-4%] lg:right-[1%] top-1/2 -translate-y-1/2 w-[80vw] sm:w-[56vw] lg:w-[42vw] max-w-[650px] aspect-[1.1/1] pointer-events-none select-none z-0">
                    <svg
    viewBox="0 0 460 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
>
    <path
        d="
            M 334 4
            C 326 2, 319 0, 314 0
            C 308 0, 303 5, 299 13
            L 166 213
            L 5 441
            C -2 451, -1 461, 0 465
            C 3 474, 12 480, 21 480
            C 31 481, 40 477, 49 473
            L 298 331
            C 301 329, 301 324, 300 321
            C 299 317, 296 316, 293 316
            L 232 315
            L 307 209
            L 341 282
            C 344 288, 348 293, 352 294
            L 447 298
            C 454 298, 458 293, 459 287
            C 461 282, 459 276, 457 272
            L 343 17
            C 340 10, 337 6, 334 4
            Z
        "
        fill="rgba(15, 77, 66, 0.05)"
    />
</svg>
                </div>

                <div className="max-w-7xl w-full mx-auto relative z-10">
                    <div className="max-w-2xl sm:max-w-3xl">
                        {/* Aptor Academy Logo Header */}
                        <div className="mb-8 sm:mb-10">
                            <img
                                src="/Aptor_logo.png"
                                alt="Aptor Academy Logo"
                                className="h-28 sm:h-36 lg:h-44 w-auto object-contain select-none"
                            />
                        </div>

                        {/* Solid Green Horizontal Line */}
                        <div className="w-28 sm:w-36 h-1.5 sm:h-2 bg-[#0f4d42] rounded-full mb-8 sm:mb-10"></div>

                        {/* Tagline */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug mb-4 sm:mb-6">
                            <span className="text-gray-900 font-normal">Building Careers. </span>
                            <span className="text-[#0f4d42] font-semibold">Creating Futures.</span>
                        </h1>

                        {/* Sub-headings */}
                        <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-normal flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4">
                            <span>Professional Education</span>
                            <span className="text-gray-300 font-light">|</span>
                            <span>Industry Training</span>
                            <span className="text-gray-300 font-light">|</span>
                            <span>Career Development</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Column: Text & Features */}
                        <div className="lg:col-span-6 z-10">
                            {/* Main Title */}
                            <div className="mb-6">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    ABOUT
                                </h2>
                                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    US
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-4"></div>
                            </div>

                            {/* Descriptions */}
                            <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg mb-10 max-w-xl">
                                <p>
                                    Aptor Academy is a career-focused education institute committed to preparing students for academic excellence and professional success.
                                </p>
                                <p>
                                    Through industry-relevant programs, practical learning, and skill development, we help students build the confidence and expertise needed for today’s competitive job market.
                                </p>
                            </div>

                            {/* What We Offer Section */}
                            <div className="pt-2">
                                <h3 className="text-sm sm:text-base font-bold text-[#0f4d42] uppercase tracking-wider mb-6">
                                    WHAT WE OFFER
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 items-start">
                                    {/* Item 1 */}
                                    <div className="text-center sm:px-3 sm:border-r border-gray-200">
                                        <div className="flex justify-center mb-3">
                                            <BookOpen className="w-10 h-10 text-[#0f4d42] stroke-[1.5]" />
                                        </div>
                                        <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                                            Professional Degree Programs
                                        </p>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="text-center sm:px-3 sm:border-r border-gray-200">
                                        <div className="flex justify-center mb-3">
                                            <GraduationCap className="w-10 h-10 text-[#0f4d42] stroke-[1.5]" />
                                        </div>
                                        <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                                            Career Development
                                        </p>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="text-center sm:px-3 sm:border-r border-gray-200">
                                        <div className="flex justify-center mb-3">
                                            <Presentation className="w-10 h-10 text-[#0f4d42] stroke-[1.5]" />
                                        </div>
                                        <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                                            Practical Learning
                                        </p>
                                    </div>

                                    {/* Item 4 */}
                                    <div className="text-center sm:px-3">
                                        <div className="flex justify-center mb-3">
                                            <Briefcase className="w-10 h-10 text-[#0f4d42] stroke-[1.5]" />
                                        </div>
                                        <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                                            Industry-Oriented Training
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Custom Curved Image with Top-Right & Bottom-Left Mint Accents */}
                        <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-end">
                            {/* Inline SVG definition for objectBoundingBox clip-path */}
                            <svg width="0" height="0" className="absolute pointer-events-none">
                                <defs>
                                    <clipPath id="academyAboutClip" clipPathUnits="objectBoundingBox">
                                        <path d="M 0.36 0 H 1 V 1 H 0.32 C 0.18 1, 0.10 0.86, 0.14 0.68 C 0.18 0.50, 0.22 0.36, 0.15 0.18 C 0.10 0.06, 0.22 0, 0.36 0 Z" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[0.75/1] sm:aspect-[0.85/1] md:aspect-[0.9/1] lg:aspect-[0.82/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-8 -right-8 w-44 h-44 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-12 left-4 w-72 h-44 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-students.jpg" 
                                        alt="Aptor Academy Classroom Students"
                                        className="w-full h-full object-cover object-right-top"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-gray-100">
                {/* Background Watermark 'A' */}
                <div className="absolute -bottom-12 -left-8 text-[280px] sm:text-[340px] font-black text-[#0f4d42]/[0.035] pointer-events-none select-none z-0 leading-none">
                    A
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Left Column: Leadership Header & Intro */}
                        <div className="lg:col-span-3 z-10 pt-4">
                            <div className="mb-6">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-none">
                                    Leader<span className="font-extrabold text-[#0f4d42]">ship</span>
                                </h2>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-4"></div>
                            </div>

                            <div className="text-gray-700 text-lg sm:text-xl font-normal leading-relaxed max-w-xs space-y-1">
                                <p>Experienced leaders.</p>
                                <p>Driving excellence</p>
                                <p>in education.</p>
                            </div>
                        </div>

                        {/* Right Column: Leader Cards Grid Container */}
                        <div className="lg:col-span-9 flex flex-col items-center justify-center gap-8 sm:gap-12 pt-4">
                            {/* Row 1: 3 Leaders (Guaranteed 3 on single row on desktop with generous gap) */}
                            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 sm:gap-12 lg:gap-14 w-full">
                                {[
                                    { name: "Adv Arif Wafy", role: "Chairman", image: "/Chairman.png" },
                                    { name: "Mr Jamsheer Backer", role: "Founder & Managing Director", image: "/Founder.png" },
                                    { name: "Mr Ibrahim Othman", role: "Chief Executive Officer", image: "/chief-executive.png" },
                                ].map((leader, idx) => (
                                    <div key={idx} className="relative flex flex-col items-center group mt-8 sm:mt-12 mb-2 flex-shrink-0 mx-2 sm:mx-3">
                                        {/* Top Container: Photo Backdrop Box (Centered over Name Div) */}
                                        <div className="relative w-44 sm:w-48 md:w-52 h-38 sm:h-44 md:h-46">
                                            {/* Dark Teal Skewed Box */}
                                            <div className="absolute inset-0 bg-[#0f4d42] rounded-3xl transform -skew-x-12 shadow-md transition-transform duration-300 group-hover:-translate-y-1"></div>
                                            
                                            {/* Photo Container / Photo Space (Leader Image Centered) */}
                                            <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 overflow-visible">
                                                {leader.image ? (
                                                    <img 
                                                        src={leader.image} 
                                                        alt={leader.name} 
                                                        className="h-[140%] max-w-none w-auto object-contain object-bottom drop-shadow-xl -mb-1" 
                                                    />
                                                ) : (
                                                    /* Space for Leader Image Placeholder */
                                                    <div className="w-[85%] h-[120%] -mb-1 border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center bg-white/10 backdrop-blur-xs text-white/80">
                                                        <User className="w-9 h-9 mb-1 opacity-70" />
                                                        <span className="text-[9px] uppercase font-semibold tracking-wider opacity-70">Photo Space</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Separate Div: Proportionally Scaled Name & Position Banner */}
                                        <div className="relative -mt-5 z-20 w-[122%] sm:w-[125%] bg-[#0f4d42] rounded-2xl px-3.5 py-2.5 sm:py-3 transform -skew-x-12 shadow-lg border-t border-[#145a4e]">
                                            {/* Unskewed Content */}
                                            <div className="transform skew-x-12 text-center">
                                                <h4 className="font-extrabold text-white text-sm sm:text-base leading-tight tracking-tight">
                                                    {leader.name}
                                                </h4>
                                                <p className="text-[11px] sm:text-xs text-emerald-200/90 font-light italic mt-0.5">
                                                    {leader.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Row 2: 2 Leaders (Guaranteed 2 on single row on desktop with generous gap) */}
                            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 sm:gap-12 lg:gap-14 w-full">
                                {[
                                    { name: "Mr Mohammed Shakir Inayath", role: "Director", image: "/director1.png" },
                                    { name: "Mr Fahid Khalid", role: "Director", image: "/director2.png" },
                                ].map((leader, idx) => (
                                    <div key={idx} className="relative flex flex-col items-center group mt-8 sm:mt-12 mb-2 flex-shrink-0 mx-2 sm:mx-3">
                                        {/* Top Container: Photo Backdrop Box (Centered over Name Div) */}
                                        <div className="relative w-44 sm:w-48 md:w-52 h-38 sm:h-44 md:h-46">
                                            {/* Dark Teal Skewed Box */}
                                            <div className="absolute inset-0 bg-[#0f4d42] rounded-3xl transform -skew-x-12 shadow-md transition-transform duration-300 group-hover:-translate-y-1"></div>
                                            
                                            {/* Photo Container / Photo Space (Leader Image Centered) */}
                                            <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 overflow-visible">
                                                {leader.image ? (
                                                    <img 
                                                        src={leader.image} 
                                                        alt={leader.name} 
                                                        className="h-[138%] max-w-none w-auto object-contain object-bottom drop-shadow-xl -mb-1" 
                                                    />
                                                ) : (
                                                    /* Space for Leader Image Placeholder */
                                                    <div className="w-[85%] h-[120%] -mb-1 border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center bg-white/10 backdrop-blur-xs text-white/80">
                                                        <User className="w-9 h-9 mb-1 opacity-70" />
                                                        <span className="text-[9px] uppercase font-semibold tracking-wider opacity-70">Photo Space</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Separate Div: Proportionally Scaled Name & Position Banner */}
                                        <div className="relative -mt-5 z-20 w-[122%] sm:w-[125%] bg-[#0f4d42] rounded-2xl px-3.5 py-2.5 sm:py-3 transform -skew-x-12 shadow-lg border-t border-[#145a4e]">
                                            {/* Unskewed Content */}
                                            <div className="transform skew-x-12 text-center">
                                                <h4 className="font-extrabold text-white text-sm sm:text-base leading-tight tracking-tight">
                                                    {leader.name}
                                                </h4>
                                                <p className="text-[11px] sm:text-xs text-emerald-200/90 font-light italic mt-0.5">
                                                    {leader.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Column: Text & Objective */}
                        <div className="lg:col-span-6 z-10">
                            {/* Main Title */}
                            <div className="mb-6">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    OUR
                                </h2>
                                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    STORY
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-4"></div>
                            </div>

                            {/* Subheading */}
                            <h3 className="text-lg sm:text-xl font-bold text-[#0f4d42] mb-4">
                                Shaping Future Professionals
                            </h3>

                            {/* Descriptions */}
                            <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg mb-8 max-w-xl">
                                <p>
                                    Education today demands more than classroom knowledge.
                                </p>
                                <p>
                                    At Aptor Academy, we bridge the gap between academics and industry by combining quality education with practical exposure, communication skills, and career guidance.
                                </p>
                            </div>

                            {/* Objective Callout Box */}
                            <div className="flex items-center gap-4 pt-2">
                                <div className="w-12 h-12 rounded-full border-2 border-[#0f4d42] flex items-center justify-center flex-shrink-0 text-[#0f4d42]">
                                    <Target className="w-6 h-6 stroke-[1.75]" />
                                </div>
                                
                                <div className="w-px h-12 bg-gray-200 flex-shrink-0"></div>

                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-0.5">
                                        Our objective is simple:
                                    </p>
                                    <p className="text-[#0f4d42] font-bold text-base sm:text-lg leading-snug max-w-md">
                                        Transform students into skilled professionals ready for employment and leadership.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[0.75/1] sm:aspect-[0.85/1] md:aspect-[0.9/1] lg:aspect-[0.82/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-8 -right-8 w-44 h-44 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-12 left-4 w-72 h-44 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-our-story.jpg" 
                                        alt="Aptor Academy Students Collaboration"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Courses Section */}
            <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Column: Text & 3 Course Category Columns */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-6">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    OUR
                                </h2>
                                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    COURSES
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-4"></div>
                            </div>

                            {/* Subheading */}
                            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
                                Industry-relevant programs designed to build knowledge, skills and careers.
                            </p>

                            {/* 3 Course Categories Columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-10">
                                
                                {/* Column 1: Undergraduate Programs */}
                                <div className="sm:border-r border-gray-200 sm:pr-4">
                                    <div className="w-12 h-12 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-4">
                                        <GraduationCap className="w-6 h-6 stroke-[1.75]" />
                                    </div>
                                    
                                    <h4 className="font-extrabold text-[#0f4d42] text-xs sm:text-sm uppercase tracking-tight leading-tight mb-2">
                                        UNDERGRADUATE<br />PROGRAMS
                                    </h4>
                                    <div className="w-8 h-0.5 bg-[#0f4d42] mb-4"></div>

                                    <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>BBA</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>B.Com</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>BCA</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2: Professional Management */}
                                <div className="sm:border-r border-gray-200 sm:pr-4">
                                    <div className="w-12 h-12 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-4">
                                        <Briefcase className="w-6 h-6 stroke-[1.75]" />
                                    </div>
                                    
                                    <h4 className="font-extrabold text-[#0f4d42] text-xs sm:text-sm uppercase tracking-tight leading-tight mb-2">
                                        PROFESSIONAL<br />MANAGEMENT
                                    </h4>
                                    <div className="w-8 h-0.5 bg-[#0f4d42] mb-4"></div>

                                    <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>HR Management</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>Hospital Administration</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>Logistics Management</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 3: Technology Programs */}
                                <div className="sm:pr-2">
                                    <div className="w-12 h-12 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-4">
                                        <Laptop className="w-6 h-6 stroke-[1.75]" />
                                    </div>
                                    
                                    <h4 className="font-extrabold text-[#0f4d42] text-xs sm:text-sm uppercase tracking-tight leading-tight mb-2">
                                        TECHNOLOGY<br />PROGRAMS
                                    </h4>
                                    <div className="w-8 h-0.5 bg-[#0f4d42] mb-4"></div>

                                    <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>Digital Marketing</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>Artificial Intelligence</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>Cyber Security</span>
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <span className="text-gray-400 font-bold">•</span>
                                            <span>Data Science</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* Tagline Callout Box */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-1 h-10 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg sm:text-xl leading-tight">
                                        Learn Today.
                                    </p>
                                    <p className="text-[#0f4d42] font-bold text-lg sm:text-xl leading-tight">
                                        Lead Tomorrow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[0.75/1] sm:aspect-[0.85/1] md:aspect-[0.9/1] lg:aspect-[0.82/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-8 -right-8 w-44 h-44 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-12 left-4 w-72 h-44 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-our-courses.jpg" 
                                        alt="Aptor Academy Courses Students"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mission, Vision & Core Values Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    
                    {/* Header Title */}
                    <div className="mb-8 sm:mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                            MISSION, VISION
                        </h2>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                            & CORE VALUES
                        </div>
                        <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                    </div>

                    {/* 3 Columns Grid: Mission, Vision, Core Values */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        
                        {/* Column 1: Mission */}
                        <div className="lg:col-span-4 lg:border-r border-gray-200 lg:pr-6">
                            <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-4">
                                <Target className="w-5.5 h-5.5 stroke-[1.75]" />
                            </div>

                            <h3 className="font-extrabold text-[#0f4d42] text-base sm:text-lg uppercase tracking-tight mb-1">
                                MISSION
                            </h3>
                            <div className="w-8 h-0.5 bg-[#0f4d42] mb-3"></div>

                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-normal max-w-sm">
                                To provide practical, industry-oriented education that empowers students with knowledge, confidence, and employable skills.
                            </p>
                        </div>

                        {/* Column 2: Vision */}
                        <div className="lg:col-span-4 lg:border-r border-gray-200 lg:pr-6">
                            <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-4">
                                <Eye className="w-5.5 h-5.5 stroke-[1.75]" />
                            </div>

                            <h3 className="font-extrabold text-[#0f4d42] text-base sm:text-lg uppercase tracking-tight mb-1">
                                VISION
                            </h3>
                            <div className="w-8 h-0.5 bg-[#0f4d42] mb-3"></div>

                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-normal max-w-sm">
                                To become one of the most trusted career development academies by creating future-ready professionals.
                            </p>
                        </div>

                        {/* Column 3: Core Values */}
                        <div className="lg:col-span-4 lg:pl-2">
                            <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-4">
                                <Gem className="w-5.5 h-5.5 stroke-[1.75]" />
                            </div>

                            <h3 className="font-extrabold text-[#0f4d42] text-base sm:text-lg uppercase tracking-tight mb-1">
                                CORE VALUES
                            </h3>
                            <div className="w-8 h-0.5 bg-[#0f4d42] mb-3"></div>

                            {/* Values List with Circular Icons & Border Dividers */}
                            <div className="space-y-0.5">
                                {[
                                    { name: "Excellence", icon: Star },
                                    { name: "Integrity", icon: ShieldCheck },
                                    { name: "Innovation", icon: Lightbulb },
                                    { name: "Practical Learning", icon: BookOpen },
                                    { name: "Student Success", icon: UserCheck },
                                    { name: "Continuous Growth", icon: TrendingUp },
                                ].map((value, idx) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-2.5 py-1.5 border-b border-gray-100 last:border-b-0">
                                            <div className="w-7 h-7 rounded-full bg-[#0f4d42] text-white flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="w-3.5 h-3.5 stroke-[2]" />
                                            </div>
                                            <span className="text-gray-800 font-semibold text-xs sm:text-sm">
                                                {value.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Skill Development Programs Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 6 Programs List */}
                        <div className="lg:col-span-6 z-10">
                            {/* Main Title */}
                            <div className="mb-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    SKILL DEVELOPMENT
                                </h2>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    PROGRAMS
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* Subheading Paragraph */}
                            <div className="text-gray-600 text-xs sm:text-sm mb-4 font-normal leading-relaxed max-w-md">
                                <p>Practical skills. Better confidence. Stronger careers.</p>
                            </div>

                            {/* 6 Skill Programs List */}
                            <div className="space-y-0.5 mb-5 max-w-lg">
                                {[
                                    {
                                        title: "PSDP",
                                        subtitle: "Personnel Skill Development Program",
                                        icon: User
                                    },
                                    {
                                        title: "INTERVIEWS",
                                        subtitle: "Interview Preparation & Techniques",
                                        icon: Users
                                    },
                                    {
                                        title: "COMMUNICATION SKILL",
                                        subtitle: "Build Clarity. Speak with Confidence.",
                                        icon: MessageSquare
                                    },
                                    {
                                        title: "COMPUTER KNOWLEDGE",
                                        subtitle: "Essential Tools for Today's Workplace",
                                        icon: Monitor
                                    },
                                    {
                                        title: "SPOKEN ENGLISH",
                                        subtitle: "Speak Better. Connect Better.",
                                        icon: BookOpen
                                    },
                                    {
                                        title: "PRACTICAL ORIENTED CLASS",
                                        subtitle: "Learn by Doing. Excel in Real World.",
                                        icon: Presentation
                                    },
                                ].map((program, idx) => {
                                    const IconComponent = program.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-3 py-1.5 border-b border-gray-100 last:border-b-0">
                                            <div className="w-8 h-8 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="w-4 h-4 stroke-[1.75]" />
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-[#0f4d42] text-xs sm:text-sm uppercase tracking-tight leading-tight">
                                                    {program.title}
                                                </h4>
                                                <p className="text-gray-600 text-[11px] sm:text-xs font-normal mt-0.5">
                                                    {program.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Tagline Callout Box */}
                            <div className="flex items-center gap-3 pt-1">
                                <div className="w-1 h-8 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="text-gray-900 font-bold text-base sm:text-lg leading-tight">
                                        Develop Skills.
                                    </p>
                                    <p className="text-[#0f4d42] font-bold text-base sm:text-lg leading-tight">
                                        Unlock Opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-skill-development.jpg" 
                                        alt="Aptor Academy Skill Development Programs Trainer"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Student Support Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 8 Feature Cards Grid (2 rows x 4 columns) */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    STUDENT
                                </h2>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    SUPPORT
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* Subheading */}
                            <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-lg leading-relaxed">
                                We support you at every step of your learning journey.
                            </p>

                            {/* 8 Features Grid (2 Rows x 4 Columns) */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 mb-6">
                                
                                {/* Item 1: Academic Guidance */}
                                <div className="sm:border-r border-gray-200 sm:pr-2.5">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <UserCheck className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        ACADEMIC<br />GUIDANCE
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Personalized support from expert mentors.
                                    </p>
                                </div>

                                {/* Item 2: Career Counselling */}
                                <div className="sm:border-r border-gray-200 sm:pr-2.5">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Briefcase className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        CAREER<br />COUNSELLING
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Career planning and guidance for the future.
                                    </p>
                                </div>

                                {/* Item 3: Placement Assistance */}
                                <div className="sm:border-r border-gray-200 sm:pr-2.5">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Users className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        PLACEMENT<br />ASSISTANCE
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Training and support to help you get placed.
                                    </p>
                                </div>

                                {/* Item 4: Continuous Learning */}
                                <div className="sm:pr-1">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <GraduationCap className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        CONTINUOUS<br />LEARNING
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Workshops, webinars and skill enhancement programs.
                                    </p>
                                </div>

                                {/* Item 5: Mental Wellness Support */}
                                <div className="sm:border-r border-gray-200 sm:pr-2.5 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <HeartHandshake className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        MENTAL WELLNESS<br />SUPPORT
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        We care for your well-being.
                                    </p>
                                </div>

                                {/* Item 6: Learning Resources */}
                                <div className="sm:border-r border-gray-200 sm:pr-2.5 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Monitor className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        LEARNING<br />RESOURCES
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Access to digital resources and tools.
                                    </p>
                                </div>

                                {/* Item 7: Feedback & Improvement */}
                                <div className="sm:border-r border-gray-200 sm:pr-2.5 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <MessageSquare className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        FEEDBACK &<br />IMPROVEMENT
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Regular feedback to help you grow better.
                                    </p>
                                </div>

                                {/* Item 8: Alumni Network */}
                                <div className="sm:pr-1 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Handshake className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        ALUMNI<br />NETWORK
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Connect, collaborate and grow together.
                                    </p>
                                </div>

                            </div>

                            {/* Tagline Callout Box */}
                            <div className="flex items-center gap-3 pt-1">
                                <div className="w-1 h-8 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="text-gray-900 font-bold text-base sm:text-lg leading-tight">
                                        Your Success.
                                    </p>
                                    <p className="text-[#0f4d42] font-bold text-base sm:text-lg leading-tight">
                                        Our Commitment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-student-support.jpg" 
                                        alt="Aptor Academy Student Support Collaboration"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Infrastructure & Facilities Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 6 Feature Cards Grid (2 rows x 3 columns) */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    INFRASTRUCTURE
                                </h2>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    & FACILITIES
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* Subheading */}
                            <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-lg leading-relaxed">
                                Modern facilities that create the perfect environment to learn, grow and excel.
                            </p>

                            {/* 6 Features Grid (2 Rows x 3 Columns) */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 mb-6">
                                
                                {/* Item 1: Smart Classrooms */}
                                <div className="sm:border-r border-gray-200 sm:pr-3">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Presentation className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        SMART CLASSROOMS
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Interactive learning with modern tools.
                                    </p>
                                </div>

                                {/* Item 2: Computer Labs */}
                                <div className="sm:border-r border-gray-200 sm:pr-3">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Monitor className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        COMPUTER LABS
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        High-performance systems and software.
                                    </p>
                                </div>

                                {/* Item 3: High-Speed Wi-Fi */}
                                <div className="sm:pr-1">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Wifi className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        HIGH-SPEED WI-FI
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Seamless internet for research and learning.
                                    </p>
                                </div>

                                {/* Item 4: Resource Library */}
                                <div className="sm:border-r border-gray-200 sm:pr-3 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <BookOpen className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        RESOURCE LIBRARY
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Extensive collection of books and resources.
                                    </p>
                                </div>

                                {/* Item 5: Student Lounge */}
                                <div className="sm:border-r border-gray-200 sm:pr-3 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Users className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        STUDENT LOUNGE
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        A comfortable space to connect and relax.
                                    </p>
                                </div>

                                {/* Item 6: Seminar & Event Hall */}
                                <div className="sm:pr-1 pt-3 sm:pt-4">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Presentation className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        SEMINAR & EVENT HALL
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        For workshops, seminars and guest sessions.
                                    </p>
                                </div>

                            </div>

                            {/* Tagline Callout Box */}
                            <div className="flex items-center gap-3 pt-1">
                                <div className="w-1 h-8 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                <div className="text-base sm:text-lg leading-tight font-bold">
                                    <span className="text-gray-900">Built to </span>
                                    <span className="text-[#0f4d42]">Inspire. </span>
                                    <span className="text-gray-900">Designed to </span>
                                    <span className="text-[#0f4d42]">Empower.</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-infrastructure.jpg" 
                                        alt="Aptor Academy Infrastructure & Facilities"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Learning Approach Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 5-Step Process Timeline */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    OUR LEARNING
                                </h2>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    APPROACH
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* Subheading */}
                            <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-lg leading-relaxed">
                                A structured path that transforms learning into career success.
                            </p>

                            {/* 5-Step Timeline Process */}
                            <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-2 sm:gap-1 mb-6">
                                {[
                                    {
                                        step: "01",
                                        title: "ACADEMIC",
                                        subtitle: "FOUNDATION",
                                        desc: "Strong academic base with in-depth conceptual learning.",
                                        icon: BookOpen
                                    },
                                    {
                                        step: "02",
                                        title: "PRACTICAL",
                                        subtitle: "TRAINING",
                                        desc: "Hands-on training for real-world exposure.",
                                        icon: Laptop
                                    },
                                    {
                                        step: "03",
                                        title: "SKILL",
                                        subtitle: "DEVELOPMENT",
                                        desc: "Building essential skills for personal and professional growth.",
                                        icon: Target
                                    },
                                    {
                                        step: "04",
                                        title: "CAREER",
                                        subtitle: "PREPARATION",
                                        desc: "Interview training, communication skills and career guidance.",
                                        icon: Briefcase
                                    },
                                    {
                                        step: "05",
                                        title: "PROFESSIONAL",
                                        subtitle: "SUCCESS",
                                        desc: "Empowering students to achieve their dream careers.",
                                        icon: TrendingUp
                                    },
                                ].map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={idx} className="contents sm:flex sm:items-start flex-1">
                                            <div className="flex-1 text-center min-w-[90px] px-0.5">
                                                {/* Top Icon Circle */}
                                                <div className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mx-auto mb-1.5">
                                                    <IconComponent className="w-5 h-5 stroke-[1.75]" />
                                                </div>

                                                {/* Step Number Badge */}
                                                <div className="w-6 h-6 rounded-full bg-[#0f4d42] text-white flex items-center justify-center text-[10px] font-bold mx-auto mb-2">
                                                    {item.step}
                                                </div>

                                                {/* Title */}
                                                <h4 className="font-extrabold text-[#0f4d42] text-[10px] sm:text-[11px] uppercase tracking-tight leading-tight mb-1">
                                                    {item.title}<br />{item.subtitle}
                                                </h4>

                                                {/* Description */}
                                                <p className="text-gray-600 text-[10px] leading-tight max-w-[110px] mx-auto">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            {/* Connecting Right Arrow (for steps 1-4) */}
                                            {idx < 4 && (
                                                <div className="hidden sm:flex items-center justify-center pt-3 text-gray-300">
                                                    <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Tagline Callout Box */}
                            <div className="flex items-center gap-3 pt-1">
                                <div className="w-1 h-8 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                <div className="text-base sm:text-lg leading-tight font-bold">
                                    <span className="text-gray-900">Learn. </span>
                                    <span className="text-[#0f4d42]">Develop. </span>
                                    <span className="text-gray-900">Succeed.</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-learning-approach.jpg" 
                                        alt="Aptor Academy Our Learning Approach"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Placement Support Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 5 Feature Columns */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    PLACEMENT
                                </h2>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    SUPPORT
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* Subheading */}
                            <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-lg leading-relaxed">
                                We bridge the gap between learning and the right career opportunity.
                            </p>

                            {/* 5 Feature Columns (Single row of 5 columns) */}
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-2 mb-6">
                                
                                {/* Item 1: Career Guidance */}
                                <div className="sm:border-r border-gray-200 sm:pr-2">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <FileText className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        CAREER<br />GUIDANCE
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Personalized guidance to choose the right path.
                                    </p>
                                </div>

                                {/* Item 2: Resume Building */}
                                <div className="sm:border-r border-gray-200 sm:pr-2">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <FileEdit className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        RESUME<br />BUILDING
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Create impactful resumes that get noticed.
                                    </p>
                                </div>

                                {/* Item 3: Interview Preparation */}
                                <div className="sm:border-r border-gray-200 sm:pr-2">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <MessageSquare className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        INTERVIEW<br />PREPARATION
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Mock interviews and expert feedback.
                                    </p>
                                </div>

                                {/* Item 4: Job Opportunities */}
                                <div className="sm:border-r border-gray-200 sm:pr-2">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <Briefcase className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        JOB<br />OPPORTUNITIES
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        Access to top job openings and company partnerships.
                                    </p>
                                </div>

                                {/* Item 5: Placement Assistance */}
                                <div className="sm:pr-1">
                                    <div className="w-9 h-9 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center mb-2">
                                        <UserCheck className="w-4.5 h-4.5 stroke-[1.75]" />
                                    </div>
                                    <h4 className="font-extrabold text-[#0f4d42] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mb-1">
                                        PLACEMENT<br />ASSISTANCE
                                    </h4>
                                    <p className="text-gray-600 text-[11px] leading-tight">
                                        End-to-end support until you get placed.
                                    </p>
                                </div>

                            </div>

                            {/* Tagline Callout Box */}
                            <div className="flex items-center gap-3 pt-1">
                                <div className="w-1 h-8 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="text-gray-900 font-bold text-base sm:text-lg leading-tight">
                                        Your Career.
                                    </p>
                                    <p className="text-[#0f4d42] font-bold text-base sm:text-lg leading-tight">
                                        Our Commitment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-placement-support.jpg" 
                                        alt="Aptor Academy Placement Support Handshake"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 3 Feature Rows + Footer Callout */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 uppercase tracking-wide leading-none">
                                    OUR
                                </h2>
                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight mt-1 leading-none">
                                    COMMITMENT
                                </div>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* 3 Main Commitment Rows */}
                            <div className="space-y-4 mb-8 max-w-lg">
                                {/* Row 1: Student Success */}
                                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <GraduationCap className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-[#0f4d42] text-xs sm:text-sm mb-1">
                                            Committed to Student Success
                                        </h4>
                                        <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">
                                            Every student deserves quality education, practical experience, and career guidance.
                                        </p>
                                    </div>
                                </div>

                                {/* Row 2: Nurturing Confident Professionals */}
                                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <BookOpen className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">
                                            Our commitment is to nurture confident professionals equipped with the knowledge, skills, and mindset required to succeed in today&apos;s evolving industries.
                                        </p>
                                    </div>
                                </div>

                                {/* Row 3: Growth Purpose */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                        <Target className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-[#0f4d42] text-sm sm:text-base">
                                            Your Growth Is Our Purpose.
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Dual Callout Row */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
                                {/* Left Callout: Dedicated to creating learning experience */}
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#0f4d42] rounded-full flex-shrink-0"></div>
                                    <div className="w-8 h-8 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                        <UserCheck className="w-4 h-4 stroke-[1.75]" />
                                    </div>
                                    <p className="text-gray-700 font-semibold text-xs sm:text-sm leading-tight max-w-xs">
                                        We are dedicated to creating a learning experience that transforms potential into achievement.
                                    </p>
                                </div>

                                {/* Vertical Divider */}
                                <div className="hidden sm:block w-[1px] h-8 bg-gray-200"></div>

                                {/* Right Callout: Success & Commitment */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-4 h-4 stroke-[1.75]" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold text-xs sm:text-sm leading-tight">
                                            Your Success.
                                        </p>
                                        <p className="text-[#0f4d42] font-bold text-xs sm:text-sm leading-tight">
                                            Our Commitment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-our-commitment.jpg" 
                                        alt="Aptor Academy Our Commitment Desk"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* Left Column: Text & 5 Contact Rows + Bottom Quote */}
                        <div className="lg:col-span-7 z-10">
                            {/* Main Title */}
                            <div className="mb-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f4d42] uppercase tracking-tight leading-none">
                                    CONTACT
                                </h2>
                                <div className="w-16 h-1 bg-[#0f4d42] mt-3"></div>
                            </div>

                            {/* 5 Contact Rows */}
                            <div className="space-y-4 mb-6 max-w-lg">
                                {/* Phone 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <a href="tel:+916238033599" className="text-gray-800 font-bold text-base sm:text-lg hover:text-[#0f4d42] transition-colors">
                                            +91 62380 33599
                                        </a>
                                    </div>
                                </div>

                                {/* Phone 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <a href="tel:+919526006200" className="text-gray-800 font-bold text-base sm:text-lg hover:text-[#0f4d42] transition-colors">
                                            +91 95260 06200
                                        </a>
                                    </div>
                                </div>

                                {/* Address Calicut */}
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <p className="text-gray-800 font-medium text-xs sm:text-sm leading-relaxed">
                                            YMCA Cross Road,<br />
                                            Opp. HDFC Bank,<br />
                                            Near KSRTC Stand, Calicut
                                        </p>
                                    </div>
                                </div>

                                {/* Address Vadakara Branch */}
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <h4 className="font-extrabold text-[#0f4d42] text-xs sm:text-sm uppercase tracking-tight mb-0.5">
                                            VADAKKAR BRANCH
                                        </h4>
                                        <p className="text-gray-800 font-medium text-xs sm:text-sm leading-relaxed">
                                            Daliya Square Building<br />
                                            opposite axis bank- vadakara
                                        </p>
                                    </div>
                                </div>

                                {/* Website URL */}
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-full bg-[#e6f4f1] text-[#0f4d42] flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-5 h-5 stroke-[1.75]" />
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <a href="https://aptorstudies.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-bold text-base sm:text-lg hover:text-[#0f4d42] transition-colors">
                                            aptorstudies.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Quote Callout */}
                            <div className="pt-4 border-t border-gray-200 max-w-lg flex items-center gap-3">
                                <Quote className="w-5 h-5 text-[#0f4d42] rotate-180 flex-shrink-0" />
                                <p className="text-gray-700 font-semibold text-xs sm:text-sm italic">
                                    Empowering students with knowledge, skills, and confidence for a brighter future.
                                </p>
                                <Quote className="w-5 h-5 text-[#0f4d42] flex-shrink-0" />
                            </div>
                        </div>

                        {/* Right Column: Clipped Image with Mint Background Accent */}
                        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
                            <div className="relative w-full max-w-md lg:max-w-lg aspect-[0.85/1] sm:aspect-[0.9/1] lg:aspect-[0.85/1] select-none">
                                {/* Top Right Mint Accent Shape */}
                                <div 
                                    className="absolute -top-6 -right-6 w-36 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
                                ></div>

                                {/* Bottom Left Mint Accent Shape */}
                                <div 
                                    className="absolute -bottom-10 left-3 w-60 h-36 bg-[#e6f4f1] pointer-events-none -z-10"
                                    style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                                ></div>

                                {/* Clipped Image Container */}
                                <div 
                                    className="w-full h-full relative"
                                    style={{ clipPath: "url(#academyAboutClip)" }}
                                >
                                    <img 
                                        src="/academy-contact.jpg" 
                                        alt="Aptor Academy Contact Mug and Notebook"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Lead Modal for Enquiries */}
            <LeadModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Apply for Aptor Academy"
                subtitle="Start your skill development and learning journey with us"
                source="academy_page"
            />
        </main>
    );
}
