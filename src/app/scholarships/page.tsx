"use client";

import { Star, Award, Calendar, Users, BookOpen, ArrowRight, GraduationCap, CheckCircle, Diamond, Sparkles, Crown, Target } from "lucide-react";
import { useState } from "react";
import ScholarshipApplicationForm from "@/components/ScholarshipApplicationForm";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

export default function ScholarshipsPage() {
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    const scholarship = {
        name: "Aptor Studies Merit Scholarship",
        amount: "Up to ₹5,00,000",
        duration: "Full Academic Program",
        eligibility: "Academic Excellence",
        recipients: "Limited Seats",
        description: "A comprehensive scholarship program designed to support meritorious students in pursuing their higher education dreams at top colleges.",
        benefits: [
            "Financial assistance for tuition fees",
            "Academic support and guidance",
            "Career counseling services",
            "Mentorship opportunities"
        ],
        requirements: [
            "Academic merit",
            "Valid entrance exam scores",
            "Statement of purpose",
            "Recommendation letters"
        ]
    };

    const handleApplicationSuccess = () => {
        setShowApplicationForm(false);
    };

    return (
        <div className="min-h-screen bg-white">
            <AeoSchema
                breadcrumbs={[{ name: "Home", item: "/" }, { name: "Scholarships", item: "/scholarships" }]}
                faqs={[
                    {
                        question: "What is the Aptor Studies Merit Scholarship Program?",
                        answer: "The Aptor Studies Merit Scholarship provides up to ₹5,00,000 in financial support for meritorious students pursuing higher education programs at partner colleges."
                    },
                    {
                        question: "What are the eligibility requirements for Aptor scholarships?",
                        answer: "Selection is merit-based and requires proof of academic excellence, entrance exam scores, a statement of purpose, and recommendation letters."
                    }
                ]}
                extraSchemas={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Grant",
                        "name": "Aptor Studies Merit Scholarship",
                        "amount": {
                            "@type": "MonetaryAmount",
                            "currency": "INR",
                            "value": 500000
                        },
                        "sponsor": {
                            "@type": "EducationalOrganization",
                            "name": "Aptor Studies",
                            "url": "https://aptorstudies.com"
                        },
                        "description": "Comprehensive scholarship program designed to support meritorious students in pursuing higher education."
                    }
                ]}
            />
            <GeoSchema pageTitle="Merit Scholarships & Grant Assistance - Aptor Studies" pagePath="/scholarships" />
            <SeoSchema routeKey="scholarships" />

            {/* Hero Section */}
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
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">SCHOLARSHIP OPPORTUNITY</span>
                            <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
                            <span className="text-[#1b7a4b]">Merit Scholarship</span> Program
                        </h1>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

                        {/* Paragraph */}
                        <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-8">
                            Transform your educational dreams into reality with our comprehensive scholarship program designed for exceptional students.
                        </p>

                        <button
                            onClick={() => setShowApplicationForm(true)}
                            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#073623] hover:bg-[#106841] text-white rounded-2xl font-bold text-base shadow-xl hover:shadow-emerald-950/20 transition-all transform hover:-translate-y-1 group"
                        >
                            <GraduationCap className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                            <span>Apply Now</span>
                            <ArrowRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Award, value: "Up to ₹5L", label: "Scholarship Amount" },
                            { icon: Users, value: "Limited", label: "Seats Available" },
                            { icon: Star, value: "Merit Based", label: "Selection Criteria" }
                        ].map((stat, index) => {
                            const isDark = index === 0 || index === 2;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-[2.2rem] p-6 sm:p-7 text-center transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                                            ? 'bg-[#073623] text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                                            : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10'
                                        }`}
                                >
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

            {/* Scholarship Details & Benefits Section */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
                {/* Decorative Bottom Left Leaf Vector */}
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                        {/* Details Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-[#d5ebd9] shadow-xl hover:shadow-emerald-900/10 transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4] flex items-center justify-center shadow-sm">
                                        <Diamond className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-[#106841]">PROGRAM INFO</div>
                                        <h2 className="text-2xl sm:text-3xl font-black text-[#0c2b1e] tracking-tight">Scholarship Details</h2>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-black text-[#0c2b1e] mb-2">{scholarship.name}</h3>
                                        <p className="text-[#475569] leading-relaxed text-sm sm:text-base font-normal">{scholarship.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#f4f9f6] p-4 sm:p-5 rounded-2xl border border-[#d5ebd9]">
                                            <div className="text-[#106841] text-xs font-bold tracking-wider uppercase mb-1">Amount</div>
                                            <div className="text-[#0c2b1e] font-black text-lg sm:text-xl">{scholarship.amount}</div>
                                        </div>
                                        <div className="bg-[#f4f9f6] p-4 sm:p-5 rounded-2xl border border-[#d5ebd9]">
                                            <div className="text-[#106841] text-xs font-bold tracking-wider uppercase mb-1">Duration</div>
                                            <div className="text-[#0c2b1e] font-bold text-sm sm:text-base">{scholarship.duration}</div>
                                        </div>
                                        <div className="bg-[#f4f9f6] p-4 sm:p-5 rounded-2xl border border-[#d5ebd9] col-span-2">
                                            <div className="text-[#106841] text-xs font-bold tracking-wider uppercase mb-1">Availability</div>
                                            <div className="text-[#0c2b1e] font-bold text-sm sm:text-base">{scholarship.recipients}</div>
                                        </div>
                                    </div>

                                    <div className="bg-[#e4f5ec] border border-[#a8e0c4] p-5 rounded-2xl">
                                        <div className="text-[#106841] text-xs font-extrabold uppercase tracking-wider mb-1">Eligibility Criteria</div>
                                        <div className="text-[#0c2b1e] font-bold text-base sm:text-lg">{scholarship.eligibility}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Card */}
                        <div className="bg-[#073623] bg-light-green-dots-dark text-white rounded-[2.5rem] p-8 sm:p-10 border border-[#1b7a4b]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                            {/* Matrix Dot Overlay */}
                            <div className="absolute top-6 right-6 grid grid-cols-6 gap-2 z-0 opacity-25 group-hover:opacity-45 transition-opacity">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                ))}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#106841] text-emerald-300 border border-emerald-500/30 flex items-center justify-center shadow-md">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">KEY ADVANTAGES</div>
                                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Scholarship Benefits</h2>
                                    </div>
                                </div>

                                <div className="space-y-4 my-8">
                                    {scholarship.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-[#106841]/50 border border-emerald-500/30 p-4 rounded-2xl transition-transform hover:translate-x-1">
                                            <div className="w-9 h-9 rounded-xl bg-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                                                <CheckCircle className="w-5 h-5 text-emerald-300" />
                                            </div>
                                            <span className="text-emerald-50 font-medium text-base sm:text-lg">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-emerald-700/40 relative z-10 flex items-center justify-between">
                                <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Aptor Merit Advantage</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Requirements */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
                {/* Decorative Top Right Leaf Vector */}
                <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                            <BookOpen className="w-4 h-4 text-[#106841]" />
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">CHECKLIST</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
                            Application <span className="text-[#1b7a4b]">Requirements</span>
                        </h2>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
                        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                            Ensure you have all necessary documents and criteria prepared before applying.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {scholarship.requirements.map((requirement, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border border-[#d5ebd9] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="w-12 h-12 bg-[#073623] rounded-2xl flex items-center justify-center text-emerald-300 text-lg font-black shrink-0 shadow-md">
                                    0{index + 1}
                                </div>
                                <span className="text-[#0c2b1e] font-bold text-base sm:text-lg">{requirement}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
                {/* Decorative Bottom Left Leaf Vector */}
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
                    <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
                        <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
                            <Target className="w-4 h-4 text-[#106841]" />
                            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">HOW IT WORKS</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
                            Application <span className="text-[#1b7a4b]">Process</span>
                        </h2>
                        <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
                        <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                            Follow these simple steps to apply for the scholarship program.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Fill Application Form",
                                description: "Complete the online application form with your personal and academic details.",
                                icon: BookOpen
                            },
                            {
                                step: "02",
                                title: "Document Verification",
                                description: "Our team will verify your submitted documents and academic credentials.",
                                icon: Award
                            },
                            {
                                step: "03",
                                title: "Selection & Award",
                                description: "Successful candidates will be notified and awarded the scholarship.",
                                icon: GraduationCap
                            }
                        ].map((process, index) => {
                            const isDark = index === 1;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                                            ? 'bg-[#073623] bg-light-green-dots-dark text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                                            : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10'
                                        }`}
                                >
                                    {isDark && (
                                        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                                            ))}
                                        </div>
                                    )}

                                    <div
                                        className={`absolute -bottom-4 -right-2 text-7xl font-black select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 ${isDark ? 'text-emerald-900/40' : 'text-[#e4f5ec]'
                                            }`}
                                    >
                                        {process.step}
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-6 z-10 relative">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${isDark
                                                        ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                                                        : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                                                    }`}
                                            >
                                                <process.icon className="w-7 h-7" />
                                            </div>
                                            <span
                                                className={`text-xs font-bold px-3 py-1 rounded-full border ${isDark
                                                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                                                        : 'bg-[#f0f9f4] text-[#106841] border-[#c2e7d3]'
                                                    }`}
                                            >
                                                STEP {process.step}
                                            </span>
                                        </div>

                                        <h3
                                            className={`text-2xl font-black mb-3 tracking-tight z-10 relative ${isDark ? 'text-white group-hover:text-emerald-300' : 'text-[#0c2b1e] group-hover:text-[#1b7a4b]'
                                                } transition-colors`}
                                        >
                                            {process.title}
                                        </h3>

                                        <p
                                            className={`text-sm leading-relaxed z-10 relative ${isDark ? 'text-emerald-100/80 font-light' : 'text-[#475569] font-normal'
                                                }`}
                                        >
                                            {process.description}
                                        </p>
                                    </div>

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

            {/* CTA Section - Styled like JOIN APTOR STUDIES in About page */}
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
                        <span className="text-[#095738] text-xs font-bold tracking-wider uppercase">TAKE THE NEXT STEP</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07301f] tracking-tight leading-[1.15] mb-5 max-w-3xl mx-auto">
                        Apply for <span className="text-[#097544]">Scholarship</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-[#09472e]/80 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                        Take the first step towards your educational goals. Apply now to secure financial support for your academic journey.
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowApplicationForm(true)}
                            className="bg-[#095738] hover:bg-[#07442b] text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl shadow-emerald-900/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 border border-emerald-600/30 group"
                        >
                            <GraduationCap className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                            <span>Apply for Scholarship</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Bottom Accent Bar & Dot */}
                    <div className="flex items-center justify-center gap-1.5 mt-8 sm:mt-10">
                        <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#097544] rounded-full" />
                        <div className="w-1.5 h-1.5 bg-[#097544] rounded-full" />
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            {showApplicationForm && (
                <ScholarshipApplicationForm
                    onClose={() => setShowApplicationForm(false)}
                    onSuccess={handleApplicationSuccess}
                />
            )}
        </div>
    );
}