"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Diamond, Star, Shield, Hash } from "lucide-react";

const benefits = [
    {
        icon: Crown,
        title: "Expert Mentorship",
        description: "Quality guidance from industry professionals and academic experts"
    },
    {
        icon: Diamond,
        title: "Proven Excellence",
        description: "Join a network of students achieving outstanding success"
    },
    {
        icon: Star,
        title: "Quality Experience",
        description: "Comprehensive educational journey tailored to your aspirations"
    },
    {
        icon: Shield,
        title: "Security",
        description: "Secure platform trusted by students and institutions worldwide"
    },
];

export function ValuesSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#fbfdfc] bg-light-green-dots overflow-hidden mobile-safe-area relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
                    
                    {/* Left Column: Heading, Subtitle & Buttons (Span 4) */}
                    <div className="lg:col-span-4 fade-in">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-6 shadow-sm">
                            <Crown className="w-4 h-4 text-[#095738]" />
                            <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">ADVANTAGE</span>
                            <Hash className="w-3.5 h-3.5 text-[#095738]" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                            Why Students
                            <span className="block text-[#063b25]">Choose Us</span>
                        </h2>

                        {/* Aptor Logo Branding Badge */}
                        <div className="inline-flex items-center gap-3 p-2 bg-white rounded-2xl border border-slate-100 shadow-md mb-6">
                            <Image 
                                src="/logo.png" 
                                alt="Aptor Logo" 
                                width={48} 
                                height={48} 
                                className="w-11 h-11 object-contain rounded-xl"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                            We&apos;re dedicated to elevating your educational journey with quality support, guidance, and exceptional results that define educational excellence.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                            <Link 
                                href="/counselling" 
                                className="bg-[#063b25] hover:bg-[#094d31] text-white font-bold text-xs sm:text-sm xl:text-base px-5 sm:px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 sm:gap-2.5 shadow-lg shadow-[#063b25]/20 hover:shadow-[#063b25]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                            >
                                <Crown className="w-4 h-4 shrink-0" />
                                <span>Discover Excellence</span>
                                <ArrowRight className="w-4 h-4 shrink-0" />
                            </Link>

                            <Link 
                                href="/contact" 
                                className="bg-white hover:bg-emerald-50/50 border-2 border-[#063b25] text-[#063b25] font-bold text-xs sm:text-sm xl:text-base px-5 sm:px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 sm:gap-2.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                            >
                                <Diamond className="w-4 h-4 text-[#063b25] shrink-0" />
                                <span>Join Network</span>
                            </Link>
                        </div>
                    </div>

                    {/* Center Column: Rotated Diamond Image & Floating Stat Box (Span 4) */}
                    <div className="lg:col-span-4 relative flex items-center justify-center my-8 lg:my-0 py-6">
                        
                        {/* Decorative Curved Dotted Trajectory Line */}
                        <svg className="absolute w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] pointer-events-none opacity-45 z-0" viewBox="0 0 400 400" fill="none">
                            <path d="M 60 200 A 140 140 0 0 1 340 200" stroke="#10b981" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                            <circle cx="60" cy="200" r="5" fill="#063b25" />
                        </svg>

                        {/* Rotated Diamond Frame Container */}
                        <div className="relative z-10">
                            {/* Outer Rotated Green Diamond Frame */}
                            <div className="w-[250px] sm:w-[300px] lg:w-[270px] xl:w-[310px] h-[250px] sm:h-[300px] lg:h-[270px] xl:h-[310px] rotate-45 rounded-[40px] bg-gradient-to-br from-[#10b981] via-[#1a6843] to-[#063b25] p-3 sm:p-4 shadow-2xl flex items-center justify-center transition-transform hover:scale-[1.02] duration-300">
                                
                                {/* Inner Rotated Image Container (Mask) */}
                                <div className="w-full h-full rounded-[32px] overflow-hidden relative shadow-inner">
                                    <Image
                                        src="/campus.png"
                                        alt="Modern University Campus Architecture"
                                        fill
                                        sizes="(max-width: 768px) 300px, 350px"
                                        className="-rotate-45 scale-[1.45] object-cover object-center"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Highlight Stat Box (Bottom-Left) */}
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 z-20">
                                <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100/90 text-center min-w-[105px] sm:min-w-[120px] hover:scale-105 transition-transform duration-300">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#063b25] text-white flex items-center justify-center mx-auto mb-1 shadow-sm">
                                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-current" />
                                    </div>
                                    <div className="text-lg sm:text-xl font-extrabold text-[#063b25] tracking-tight mb-0.5">
                                        99.8%
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                                        Success Rate
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Highlighting Content Container Box (Span 4) */}
                    <div className="lg:col-span-4 fade-in">
                        <div className="bg-[#062419] rounded-[36px] sm:rounded-[44px] p-6 sm:p-8 lg:p-8 xl:p-9 text-white shadow-2xl border border-emerald-900/40 space-y-6 sm:space-y-7 relative z-10">
                            {benefits.map((benefit) => {
                                const IconComp = benefit.icon;
                                return (
                                    <div key={benefit.title} className="flex items-start gap-4 group">
                                        {/* Icon Badge */}
                                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b7a4e] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#22c55e] transition-colors duration-200">
                                            <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#34d399] transition-colors duration-200">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-emerald-100/70 font-normal leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}