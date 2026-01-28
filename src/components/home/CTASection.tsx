"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, User, Crown, Star, Diamond, Sparkles } from "lucide-react";

const recentBlogs = [
    {
        title: "Elite Engineering Colleges in Bengaluru 2024",
        excerpt: "Discover the most prestigious engineering institutions in Bengaluru with exceptional placement records and industry partnerships.",
        date: "Jan 15, 2024",
        author: "Elite Team",
        slug: "elite-engineering-colleges-bengaluru-2024",
        category: "Premium Education"
    },
    {
        title: "Luxury MBA Programs: Complete Elite Guide",
        excerpt: "Everything you need to know about premium MBA programs, exclusive entrance processes, and elite career prospects in Bengaluru.",
        date: "Jan 12, 2024",
        author: "Career Expert",
        slug: "luxury-mba-programs-elite-guide",
        category: "Executive Education"
    },
    {
        title: "Elite Student Success Stories",
        excerpt: "Inspiring journeys of our premium students who achieved excellence through our exclusive guidance and elite network connections.",
        date: "Jan 10, 2024",
        author: "Success Guide",
        slug: "elite-student-success-stories",
        category: "Premium Success"
    }
];

export function CTASection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900 mobile-safe-area">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* Premium Blogs Section - Mobile Optimized */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12 fade-in">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6">
                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-xs sm:text-sm font-medium">ELITE INSIGHTS</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            <span className="gradient-text">Premium</span> Educational Insights
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-400">
                            Dive into exclusive educational content crafted by our elite experts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {recentBlogs.map((blog, index) => (
                            <Link
                                key={index}
                                href={`/blogs/${blog.slug}`}
                                className="group card-premium hover-lift-premium slide-up min-h-[280px] sm:min-h-[320px]"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="p-4 sm:p-6 h-full flex flex-col">
                                    {/* Category Badge - Mobile Optimized */}
                                    <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-3 sm:mb-4 self-start">
                                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
                                        <span className="text-yellow-400 text-xs font-medium line-clamp-1">{blog.category}</span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                            <span className="text-gray-400">{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                            <span className="text-gray-400">{blog.author}</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors flex-1 line-clamp-mobile-3 sm:line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center text-yellow-400 font-medium group-hover:gap-2 transition-all mt-auto text-sm">
                                        <span>Read Elite Insights</span>
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-6 sm:mt-8">
                        <Link
                            href="/blogs"
                            className="btn-premium inline-flex items-center gap-2 text-black font-semibold text-sm sm:text-base min-h-[48px]"
                        >
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                            Explore All Elite Content
                        </Link>
                    </div>
                </div>

                {/* Premium Final CTA Section - Mobile Optimized */}
                <div className="card-premium p-4 sm:p-6 lg:p-8 xl:p-12 text-center glow">
                    <div className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-xs sm:text-sm font-medium">EXCLUSIVE OPPORTUNITY</span>
                            <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        </div>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        Begin Your <span className="gradient-text">Elite Educational</span> Journey Today!
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                        Experience personalized guidance from our premium admission experts and take the first step towards your luxury career in Bengaluru's elite institutions.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 lg:mb-12">
                        <Link
                            href="/counselling"
                            className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold text-sm sm:text-base min-h-[48px]"
                        >
                            <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                            Book Elite Counselling
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 rounded-lg sm:rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass text-sm sm:text-base min-h-[48px]"
                        >
                            <Diamond className="w-4 h-4 sm:w-5 sm:h-5" />
                            Join Elite Network
                        </Link>
                    </div>

                    {/* Premium Stats - Mobile Optimized */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-yellow-400/20">
                        {[
                            { num: "500+", label: "Elite Partners", icon: Crown },
                            { num: "10K+", label: "Success Stories", icon: Star },
                            { num: "95%", label: "Premium Placements", icon: Diamond },
                            { num: "24/7", label: "Elite Support", icon: Sparkles },
                        ].map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <div className="flex justify-center mb-1 sm:mb-2">
                                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
                                </div>
                                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold gradient-text mb-0.5 sm:mb-1">
                                    {stat.num}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400 line-clamp-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}