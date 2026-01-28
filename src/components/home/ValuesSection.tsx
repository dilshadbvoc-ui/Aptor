"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Diamond, Star, Shield, Sparkles, Award } from "lucide-react";

const benefits = [
    {
        icon: Crown,
        title: "Expert Mentorship",
        description: "Exclusive guidance from industry titans and academic luminaries",
        color: "from-yellow-400 to-yellow-600"
    },
    {
        icon: Diamond,
        title: "Proven Excellence",
        description: "Join an exclusive network of students achieving extraordinary success",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: Star,
        title: "Luxury Experience",
        description: "Bespoke educational journey tailored to your aspirations",
        color: "from-purple-400 to-purple-600"
    },
    {
        icon: Shield,
        title: "Security",
        description: "Ultra-secure platform trusted by the world's most discerning students",
        color: "from-emerald-400 to-emerald-600"
    },
];

export function ValuesSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-black mobile-safe-area">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Image Side - Mobile Optimized */}
                    <div className="relative order-2 lg:order-1 fade-in">
                        <div className="relative">
                            {/* Main image */}
                            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                <Image
                                    src="/campus.png"
                                    alt="University campus with luxury facilities and architecture"
                                    width={600}
                                    height={500}
                                    className="w-full object-cover aspect-[4/3] sm:aspect-auto"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                            </div>

                            {/* Floating stats card - Mobile Optimized */}
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 card-premium p-3 sm:p-4 lg:p-6 hidden sm:block hover-lift-premium glow">
                                <div className="text-center">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                        <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black fill-current" />
                                    </div>
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-0.5 sm:mb-1">99.8%</div>
                                    <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
                                </div>
                            </div>

                            {/* Decorative elements - Mobile Optimized */}
                            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 border-yellow-400 rounded-full opacity-60 animate-pulse"></div>
                            <div className="absolute top-1/2 -right-1 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
                        </div>
                    </div>

                    {/* Content Side - Mobile Optimized */}
                    <div className="order-1 lg:order-2 fade-in">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-xs sm:text-sm font-medium">ADVANTAGE</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Why <span className="gradient-text">Students</span> Choose 
                            <div className="inline-flex items-center gap-2 sm:gap-3 ml-2 sm:ml-3">
                                <img 
                                    src="/logo.png" 
                                    alt="Aptor Studies Logo" 
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg object-cover shadow-lg"
                                />
                            </div>
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8">
                            We're dedicated to elevating your educational journey with exclusive support, guidance, and unparalleled results that define luxury education.
                        </p>

                        {/* Benefits - Mobile Optimized */}
                        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                            {benefits.map((benefit, i) => (
                                <div
                                    key={benefit.title}
                                    className="flex items-start gap-3 sm:gap-4 card-premium p-3 sm:p-4 hover-lift-premium slide-up"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shrink-0 shadow-lg`}>
                                        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons - Mobile Optimized */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in">
                            <Link 
                                href="/about" 
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold text-sm sm:text-base min-h-[48px]"
                            >
                                <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                                Discover Excellence
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                            
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 text-sm font-medium text-yellow-400 border-2 border-yellow-400 rounded-lg sm:rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 glass min-h-[48px]"
                            >
                                <Diamond className="w-4 h-4 sm:w-5 sm:h-5" />
                                Join Network
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}