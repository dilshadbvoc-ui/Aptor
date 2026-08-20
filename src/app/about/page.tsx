"use client";

import { Crown, Star, Diamond, Award, Users, Globe, Target, Heart, Sparkles, ArrowRight, Trophy, Shield, Phone, GraduationCap, Landmark, Quote, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

const stats = [
    { icon: Users, value: "50K+", label: "Elite Students" },
    { icon: Globe, value: "100+", label: "Partner Universities" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Trophy, value: "25+", label: "Years Experience" }
];

const values = [
    {
        icon: Crown,
        title: "Excellence",
        description: "We maintain the highest standards in everything we do, ensuring our students receive world-class education and support.",
        num: "01"
    },
    {
        icon: Shield,
        title: "Trust",
        description: "Built on integrity and transparency, we've earned the trust of thousands of students and prestigious institutions worldwide.",
        num: "02"
    },
    {
        icon: Heart,
        title: "Care",
        description: "Every student's journey is unique. We provide personalized attention and support to help you achieve your dreams.",
        num: "03"
    },
    {
        icon: Target,
        title: "Innovation",
        description: "We continuously evolve our services and technology to provide cutting-edge solutions for modern education needs.",
        num: "04"
    }
];

const team = [
    {
        name: "Jamsheer Backer",
        role: "MANAGING DIRECTOR",
        image: "/jamsheer-backer.jpeg",
        description: "Visionary leader with 20+ years in elite education consulting, committed to connecting students with world-class opportunities.",
        quote: "Excellence isn't just a goal at APTOR—it's our standard. We go to great lengths to vet and select premier universities with state-of-the-art facilities, ensuring our students have access to the best possible learning environments."
    },
    {
        name: "Adv. Arif Wafy",
        role: "CHAIRMAN",
        image: "/arif-wafy.jpeg",
        description: "Strategic leader ensuring highest standards of excellence and ethical practice in all our operations.",
        quote: "Our focus on student satisfaction has helped us win the respect of both students and parents. Because of how well we have served them, parents have become our strongest advocates."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <AeoSchema
                breadcrumbs={[{ name: "Home", item: "/" }, { name: "About Us", item: "/about" }]}
                faqs={[
                    {
                        question: "Who leads Aptor Studies?",
                        answer: "Aptor Studies is led by Managing Director Jamsheer Backer (20+ years experience in elite education consulting) and Chairman Adv. Arif Wafy under Connected Management Solution."
                    },
                    {
                        question: "Where are Aptor Studies branches located?",
                        answer: "Aptor Studies has offices in Vadakara (Main Branch), Calicut, Tirur, Nadhapuram, Kalpetta, Kochi, and the UAE."
                    }
                ]}
            />
            <GeoSchema pageTitle="About Aptor Studies - Premier Education Portal & Leadership" pagePath="/about" />
            <SeoSchema routeKey="about" />
            {/* Hero Section - Redesigned to match bottom sections theme */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Top Right Leaf Vector */}
                <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14 sm:mb-16 fade-in">
                        {/* Mint Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                            <Crown className="w-4 h-4 text-[#106841]" />
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">ABOUT APTOR STUDIES</span>
                            <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
                            <span className="text-[#1b7a4b]">Transforming</span> Education
                        </h1>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

                        {/* Paragraphs */}
                        <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-3">
                            For over 25 years, Aptor Studies has been the premier education consultancy, connecting exceptional students with prestigious institutions globally.
                        </p>

                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#106841]">
                            Running under <span className="text-[#0c2b1e] font-black">Connected Management Solution</span>
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
                        {stats.map((stat, index) => {
                            const isDark = index === 0 || index === 3;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-[2.2rem] p-6 sm:p-7 text-center transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                                            ? 'bg-[#073623] bg-light-green-dots-dark text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                                            : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10'
                                        }`}
                                >
                                    {/* Matrix Dots Overlay for Dark Cards */}
                                    {isDark && (
                                        <div className="absolute top-3 right-3 grid grid-cols-3 gap-1 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                            {Array.from({ length: 9 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex justify-center mb-4 relative z-10">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${isDark
                                                ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                                                : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                                            }`}>
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className={`text-2xl sm:text-3xl font-black tracking-tight mb-1 relative z-10 ${isDark ? 'text-emerald-300' : 'text-[#106841]'
                                        }`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-xs sm:text-sm font-bold relative z-10 ${isDark ? 'text-emerald-100/80' : 'text-[#0c2b1e]'
                                        }`}>
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section Redesigned */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Bottom Left Leaf Vector */}
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

                        {/* Left Content Column */}
                        <div className="lg:col-span-6 xl:col-span-6 fade-in">
                            {/* Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                                <Target className="w-4 h-4 text-[#106841]" />
                                <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">OUR MISSION</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
                                Empowering <br />
                                <span className="text-[#1b7a4b]">Global Leaders</span>
                            </h2>
                            <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mb-6" />

                            {/* Paragraphs */}
                            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed mb-8 font-normal">
                                <p>
                                    Facilitating best educational opportunities in both national and prestigious universities abroad. We rightly set the academic goals for aspiring students.
                                </p>
                                <p>
                                    Complementing the aptitudes of students, we recommend nothing less than the best in their academic pursuit.
                                </p>
                                <p>
                                    Relieving you of uncertainties and confusion regarding career options, we serve you by providing the best counselling and guidance to help you make the right decision.
                                </p>
                            </div>

                            {/* Feature List */}
                            <div className="space-y-0 max-w-xl">
                                {[
                                    {
                                        icon: GraduationCap,
                                        title: "Personalized education consulting",
                                        subtitle: "for every student"
                                    },
                                    {
                                        icon: Award,
                                        title: "Access to exclusive",
                                        subtitle: "scholarship opportunities"
                                    },
                                    {
                                        icon: Landmark,
                                        title: "Direct partnerships",
                                        subtitle: "with top-tier institutions"
                                    },
                                    {
                                        icon: Users,
                                        title: "Comprehensive career guidance",
                                        subtitle: "and mentorship"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`py-3.5 flex items-center gap-4 ${index !== 0 ? 'border-t border-[#d5ebd9]' : ''}`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#e4f5ec] text-[#106841] flex items-center justify-center shrink-0 shadow-sm">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-base sm:text-lg font-bold text-[#0c2b1e] leading-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-500 font-normal">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Wavy Image Container */}
                        <div className="lg:col-span-6 xl:col-span-6 relative fade-in">
                            {/* Deep Forest Green Background Shape with Organic Curve Frame */}
                            <div className="relative w-full aspect-[4/3.5] sm:aspect-[4/3] lg:aspect-[4/3.8] rounded-[3rem] lg:rounded-[4rem] bg-[#073623] bg-light-green-dots-dark p-3 sm:p-4 shadow-2xl overflow-hidden">

                                {/* Top-Right Matrix Dot Grid Overlay */}
                                <div className="absolute top-6 right-6 grid grid-cols-6 gap-2 z-10 opacity-30">
                                    {Array.from({ length: 24 }).map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                    ))}
                                </div>

                                {/* Bottom-Right Matrix Dot Grid Overlay */}
                                <div className="absolute bottom-6 right-6 grid grid-cols-6 gap-2 z-10 opacity-30">
                                    {Array.from({ length: 24 }).map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                    ))}
                                </div>

                                {/* Inner Wavy Clip Campus Image */}
                                <div
                                    className="w-full h-full relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem]"
                                    style={{
                                        clipPath: "ellipse(85% 90% at 75% 50%)"
                                    }}
                                >
                                    <Image
                                        src="/campus.png"
                                        alt="Aptor Studies Campus"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating "25+ Years of Excellence" Badge Card */}
                            <div className="absolute -bottom-6 left-6 sm:left-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-5 flex items-center gap-4 z-20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#073623] rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
                                    <Award className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-300" />
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl sm:text-3xl font-black text-[#106841] tracking-tight">25+</span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-bold text-[#0c2b1e]">Years of Excellence</p>
                                    <div className="w-7 h-1 bg-[#106841] rounded-full mt-1" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Values Section - Redesigned to match Mission Theme */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Top Right Leaf Vector */}
                <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-16 fade-in">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                            <Heart className="w-4 h-4 text-[#106841]" />
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">OUR VALUES</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
                            What <span className="text-[#1b7a4b]">Drives Us</span>
                        </h2>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
                        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                            Our core values guide everything we do and shape the exceptional experience we provide to our students.
                        </p>
                    </div>

                    {/* Unique Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
                        {values.map((value, index) => {
                            const isDark = index === 0 || index === 3;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-[2.5rem] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                                        ? 'bg-[#073623] bg-light-green-dots-dark text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                                        : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10'
                                        }`}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Top Matrix Dots Overlay for Dark Cards */}
                                    {isDark && (
                                        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                            ))}
                                        </div>
                                    )}

                                    {/* Large Background Watermark Number */}
                                    <div
                                        className={`absolute -bottom-4 -right-2 text-7xl font-black select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 ${isDark ? 'text-emerald-900/40' : 'text-[#e4f5ec]'
                                            }`}
                                    >
                                        {value.num}
                                    </div>

                                    <div>
                                        {/* Header Row: Icon & Number Badge */}
                                        <div className="flex items-center justify-between mb-6 z-10 relative">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${isDark
                                                    ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                                                    : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                                                    }`}
                                            >
                                                <value.icon className="w-7 h-7" />
                                            </div>
                                            <span
                                                className={`text-xs font-bold px-3 py-1 rounded-full border ${isDark
                                                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                                                    : 'bg-[#f0f9f4] text-[#106841] border-[#c2e7d3]'
                                                    }`}
                                            >
                                                {value.num}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`text-2xl font-black mb-3 tracking-tight z-10 relative ${isDark ? 'text-white group-hover:text-emerald-300' : 'text-[#0c2b1e] group-hover:text-[#1b7a4b]'
                                                } transition-colors`}
                                        >
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className={`text-sm leading-relaxed z-10 relative ${isDark ? 'text-emerald-100/80 font-light' : 'text-[#475569] font-normal'
                                                }`}
                                        >
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent Indicator */}
                                    <div className="mt-8 pt-4 border-t border-dashed border-current/10 flex items-center justify-between z-10 relative">
                                        <div
                                            className={`h-1 rounded-full transition-all duration-500 group-hover:w-16 ${isDark ? 'w-8 bg-emerald-400' : 'w-8 bg-[#106841]'
                                                }`}
                                        />
                                        <div
                                            className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-[#106841]'
                                                }`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Team Section - Redesigned to match Mission Theme */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Bottom Left Leaf Vector */}
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-16 fade-in">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                            <Users className="w-4 h-4 text-[#106841]" />
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">LEADERSHIP TEAM</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
                            Meet Our <span className="text-[#1b7a4b]">Visionary Leaders</span>
                        </h2>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
                        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                            Our leadership team brings decades of experience from the world's most prestigious institutions.
                        </p>
                    </div>

                    {/* Unique 2-Column Leader Cards Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                        {team.map((member, index) => {
                            const isDark = index === 0;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 shadow-2xl overflow-hidden group ${isDark
                                        ? 'bg-[#073623] bg-light-green-dots-dark text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/30'
                                        : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10 hover:border-[#106841]/40'
                                        }`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {/* Background Dot Grid for Dark Card / Light Card */}
                                    {isDark ? (
                                        <div className="absolute top-6 right-6 grid grid-cols-6 gap-2 z-0 opacity-25 group-hover:opacity-45 transition-opacity">
                                            {Array.from({ length: 24 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="absolute top-6 right-6 grid grid-cols-6 gap-2 z-0 opacity-15 group-hover:opacity-30 transition-opacity">
                                            {Array.from({ length: 24 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#106841]" />
                                            ))}
                                        </div>
                                    )}

                                    <div>
                                        {/* Profile Header */}
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 z-10 relative">
                                            {/* Photo Frame */}
                                            <div
                                                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-[2.2rem] p-1.5 shadow-xl shrink-0 relative overflow-hidden transition-transform duration-500 group-hover:scale-105 ${isDark
                                                    ? 'bg-[#106841] border-2 border-emerald-400/40'
                                                    : 'bg-[#e4f5ec] border-2 border-[#a8e0c4]'
                                                    }`}
                                            >
                                                <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        sizes="(max-width: 640px) 112px, 128px"
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            </div>

                                            {/* Name & Role */}
                                            <div className="text-center sm:text-left pt-2">
                                                <h3
                                                    className={`text-2xl sm:text-3xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-[#0c2b1e]'
                                                        }`}
                                                >
                                                    {member.name}
                                                </h3>
                                                <div
                                                    className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-sm ${isDark
                                                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                                                        : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                                                        }`}
                                                >
                                                    <Crown className="w-3.5 h-3.5" />
                                                    <span>{member.role}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quote Box */}
                                        <div
                                            className={`rounded-2xl p-6 mb-8 z-10 relative ${isDark
                                                ? 'bg-emerald-950/40 border border-emerald-700/30'
                                                : 'bg-[#f4f9f6] border border-[#d5ebd9]'
                                                }`}
                                        >
                                            <Quote
                                                className={`w-7 h-7 mb-3 ${isDark ? 'text-emerald-400/60' : 'text-[#106841]/50'
                                                    }`}
                                            />
                                            <blockquote
                                                className={`text-base sm:text-lg italic leading-relaxed font-medium ${isDark ? 'text-emerald-50/90' : 'text-[#0c2b1e]'
                                                    }`}
                                            >
                                                "{member.quote}"
                                            </blockquote>
                                        </div>
                                    </div>

                                    {/* Description Footer */}
                                    <div className="pt-6 border-t border-dashed border-current/15 flex items-start gap-3.5 z-10 relative">
                                        <div
                                            className={`w-1.5 h-12 rounded-full shrink-0 mt-0.5 ${isDark ? 'bg-emerald-400' : 'bg-[#106841]'
                                                }`}
                                        />
                                        <p
                                            className={`text-sm leading-relaxed ${isDark ? 'text-emerald-100/80 font-light' : 'text-[#475569] font-normal'
                                                }`}
                                        >
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quote Section - Redesigned to match exact reference design image */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Top-Left Organic Wave Background Vector */}
                <div className="absolute top-0 left-0 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px] pointer-events-none z-0 opacity-80">
                    <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-50 -50 C120 40, 220 180, 280 320 C180 240, 40 180, -50 150 Z" fill="#0d7a4d" opacity="0.08" />
                        <path d="M-50 80 C80 140, 180 240, 220 380 C150 280, 20 220, -50 190 Z" fill="#10b981" opacity="0.06" />
                        <path d="M-50 -50 L300 -50 C240 100, 100 200, -50 250 Z" fill="#a4e1c1" opacity="0.15" />
                    </svg>
                </div>

                {/* Right Side Illustration: High-Tech 3D Dotted Globe & Network */}
                <div className="absolute -right-6 lg:right-2 top-1/2 -translate-y-1/2 z-10 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] pointer-events-none opacity-85 sm:opacity-100 hidden sm:block">
                    <svg viewBox="0 0 450 450" className="w-full h-full">
                        <defs>
                            <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                                <stop offset="60%" stopColor="#0d7a4d" stopOpacity="0.08" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Ambient Glow */}
                        <circle cx="225" cy="225" r="190" fill="url(#globeGlow)" />

                        {/* Outer Dotted Sphere Ring */}
                        <circle cx="225" cy="225" r="175" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="3 7" opacity="0.35" />

                        {/* 3D Latitude Curved Lines */}
                        <ellipse cx="225" cy="225" rx="175" ry="40" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />
                        <ellipse cx="225" cy="225" rx="175" ry="85" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.45" />
                        <ellipse cx="225" cy="225" rx="175" ry="130" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />

                        {/* 3D Longitude Curved Lines */}
                        <ellipse cx="225" cy="225" rx="50" ry="175" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.35" />
                        <ellipse cx="225" cy="225" rx="105" ry="175" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />
                        <ellipse cx="225" cy="225" rx="150" ry="175" fill="none" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />

                        <line x1="50" y1="225" x2="400" y2="225" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />
                        <line x1="225" y1="50" x2="225" y2="400" stroke="#0d7a4d" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.4" />

                        {/* Outer Sweeping Network Arcs */}
                        <path d="M 80 200 A 180 180 0 0 1 360 140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 6" fill="none" opacity="0.5" />
                        <path d="M 120 300 A 190 190 0 0 1 390 220" stroke="#095738" strokeWidth="1.5" fill="none" opacity="0.35" />

                        {/* Connected Network Node Dots */}
                        <g fill="#10b981">
                            <circle cx="160" cy="150" r="4" />
                            <circle cx="160" cy="150" r="8" fill="#10b981" opacity="0.25" />
                            <circle cx="280" cy="110" r="4.5" />
                            <circle cx="340" cy="170" r="3.5" />
                            <circle cx="225" cy="225" r="5" fill="#095738" />
                            <circle cx="300" cy="260" r="4" />
                            <circle cx="180" cy="310" r="4" />
                            <circle cx="120" cy="240" r="3.5" />
                        </g>
                    </svg>
                </div>

                {/* Central Content Container */}
                <div className="max-w-4xl mx-auto relative z-20 text-center">

                    {/* Top Circular Quote Icon Badge */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#d7efe2] border border-[#b8e4cd] flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-sm transition-transform hover:scale-105 duration-300">
                        {/* Double Open Quote Icon fill-[#073824] */}
                        <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-[#073824]" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Blockquote Text */}
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black italic tracking-tight leading-[1.3] text-[#07301f] max-w-3xl mx-auto">
                        “Education is the passport to the future, and <span className="text-[#097544] not-italic sm:italic font-black">Aptor Studies</span> is your first-class ticket.”
                    </blockquote>

                    {/* Bottom Accent Bar & Dot */}
                    <div className="flex items-center justify-center gap-1.5 mt-7 sm:mt-9">
                        <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#097544] rounded-full" />
                        <div className="w-1.5 h-1.5 bg-[#097544] rounded-full" />
                    </div>
                </div>
            </section>

            {/* Branches Section - Redesigned to match Mission Theme */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
                {/* Decorative Top Right Leaf Vector */}
                <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-16 fade-in">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                            <Globe className="w-4 h-4 text-[#106841]" />
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">OUR BRANCHES</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
                            <span className="text-[#1b7a4b]">Global Presence</span> & Local Support
                        </h2>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
                        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                            With branches across Kerala and UAE, we provide personalized education consulting services closer to you.
                        </p>
                    </div>

                    {/* Unique Branch Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
                        {[
                            { name: "Vadakara", region: "Kerala, India", type: "Main Branch", isMain: true },
                            { name: "Tirur", region: "Kerala, India", type: "Branch Office", isMain: false },
                            { name: "Nadhapuram", region: "Kerala, India", type: "Branch Office", isMain: false },
                            { name: "Kalpetta", region: "Kerala, India", type: "Branch Office", isMain: false },
                            { name: "Calicut", region: "Kerala, India", type: "Regional Office", isMain: false },
                            { name: "Kochi", region: "Kerala, India", type: "Regional Office", isMain: false },
                            { name: "UAE", region: "United Arab Emirates", type: "International Office", isMain: true }
                        ].map((branch, index) => {
                            const isDark = branch.isMain;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-[2.2rem] p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                                        ? 'bg-[#073623] text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/30'
                                        : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10 hover:border-[#106841]/40'
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Matrix Dots Overlay for Featured Cards */}
                                    {isDark && (
                                        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                            ))}
                                        </div>
                                    )}

                                    <div>
                                        {/* Header Row: Icon & Type Badge */}
                                        <div className="flex items-center justify-between mb-6 z-10 relative">
                                            <div
                                                className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${isDark
                                                    ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                                                    : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                                                    }`}
                                            >
                                                <Globe className="w-6 h-6" />
                                            </div>
                                            <span
                                                className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${isDark
                                                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60'
                                                    : 'bg-[#f0f9f4] text-[#106841] border-[#c2e7d3]'
                                                    }`}
                                            >
                                                {branch.type}
                                            </span>
                                        </div>

                                        {/* Branch Name */}
                                        <h3
                                            className={`text-2xl font-black mb-2 tracking-tight z-10 relative ${isDark ? 'text-white group-hover:text-emerald-300' : 'text-[#0c2b1e] group-hover:text-[#1b7a4b]'
                                                } transition-colors`}
                                        >
                                            {branch.name}
                                        </h3>

                                        {/* Region */}
                                        <div className="flex items-center gap-1.5 z-10 relative">
                                            <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-[#106841]'}`} />
                                            <p className={`text-xs sm:text-sm ${isDark ? 'text-emerald-100/80' : 'text-[#475569]'}`}>
                                                {branch.region}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Accent Bar */}
                                    <div className="mt-6 pt-4 border-t border-dashed border-current/10 flex items-center justify-between z-10 relative">
                                        <div
                                            className={`h-1 rounded-full transition-all duration-500 group-hover:w-16 ${isDark ? 'w-8 bg-emerald-400' : 'w-8 bg-[#106841]'
                                                }`}
                                        />
                                        <div
                                            className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-[#106841]'
                                                }`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Central Contact Card */}
                    <div className="text-center mt-14 sm:mt-16 fade-in">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-[#a8e0c4] p-6 sm:p-8 inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-6 hover:shadow-emerald-900/15 transition-all">
                            <div className="w-14 h-14 bg-[#073623] rounded-2xl flex items-center justify-center text-emerald-300 shadow-lg shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-xs font-bold uppercase tracking-wider text-[#106841] mb-1">
                                    Contact All Branches
                                </div>
                                <a
                                    href="tel:+919526797987"
                                    className="text-2xl sm:text-3xl font-black text-[#0c2b1e] hover:text-[#1b7a4b] transition-colors tracking-tight block"
                                >
                                    +91 95267 97987
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Section - Seamlessly connected with Quote Section */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
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
                        <span className="text-[#095738] text-xs font-bold tracking-wider uppercase">JOIN APTOR STUDIES</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07301f] tracking-tight leading-[1.15] mb-5 max-w-3xl mx-auto">
                        Ready to Transform Your <span className="text-[#097544]">Educational Journey?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-[#09472e]/80 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                        Join thousands of successful students who have achieved their academic dreams with Aptor Studies.
                        Let us help you unlock your potential and secure your place at top institutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/counselling"
                            className="bg-[#095738] hover:bg-[#07442b] text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl shadow-emerald-900/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 border border-emerald-600/30"
                        >
                            <Crown className="w-5 h-5 text-[#eab308]" />
                            <span>Start Your Journey</span>
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