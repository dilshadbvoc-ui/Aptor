"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, User, Crown, Star, Diamond, Sparkles } from "lucide-react";

const recentBlogs = [
    {
        title: "Top Engineering Colleges in Bengaluru 2024",
        excerpt: "Discover the most prestigious engineering institutions in Bengaluru with exceptional placement records and industry partnerships.",
        date: "Jan 15, 2024",
        author: "Education Team",
        slug: "top-engineering-colleges-bengaluru-2024",
        category: "Higher Education"
    },
    {
        title: "MBA Programs: Complete Guide",
        excerpt: "Everything you need to know about MBA programs, entrance processes, and career prospects in Bengaluru.",
        date: "Jan 12, 2024",
        author: "Career Expert",
        slug: "mba-programs-complete-guide",
        category: "Graduate Education"
    },
    {
        title: "Student Success Stories",
        excerpt: "Inspiring journeys of our students who achieved excellence through our guidance and network connections.",
        date: "Jan 10, 2024",
        author: "Success Guide",
        slug: "student-success-stories",
        category: "Success Stories"
    }
];

export function CTASection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50 mobile-safe-area">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* Blogs Section - Mobile Optimized */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12 fade-in">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 border border-green-300 rounded-full mb-4 sm:mb-6">
                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            <span className="text-green-700 text-xs sm:text-sm font-medium">EDUCATIONAL INSIGHTS</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-3 sm:mb-4">
                            <span className="gradient-text">Quality</span> Educational Insights
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-green-600">
                            Dive into comprehensive educational content crafted by our expert team
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
                                    <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-green-100 border border-green-300 rounded-full mb-3 sm:mb-4 self-start">
                                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-600" />
                                        <span className="text-green-700 text-xs font-medium line-clamp-1">{blog.category}</span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-green-500 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                                            <span className="text-green-600">{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                                            <span className="text-green-600">{blog.author}</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-800 mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-green-600 text-sm leading-relaxed mb-4 sm:mb-6 group-hover:text-green-700 transition-colors flex-1 line-clamp-mobile-3 sm:line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center text-yellow-600 font-medium group-hover:gap-2 transition-all mt-auto text-sm">
                                        <span>Read Insights</span>
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
                            Explore All Content
                        </Link>
                    </div>
                </div>

                {/* Final CTA Section - Mobile Optimized */}
                <div className="card-premium p-4 sm:p-6 lg:p-8 xl:p-12 text-center shadow-lg">
                    <div className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 border border-green-300 rounded-full mb-4 sm:mb-6">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            <span className="text-green-700 text-xs sm:text-sm font-medium">OPPORTUNITY</span>
                            <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                        </div>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-3 sm:mb-4 leading-tight">
                        Begin Your <span className="gradient-text">Educational</span> Journey Today!
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-green-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                        Experience personalized guidance from our admission experts and take the first step towards your career in India's top institutions.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 lg:mb-12">
                        <Link
                            href="/counselling"
                            className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold text-sm sm:text-base min-h-[48px]"
                        >
                            <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                            Book Counselling
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-700 rounded-lg sm:rounded-xl font-medium hover:bg-green-500 hover:text-white transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base min-h-[48px]"
                        >
                            <Diamond className="w-4 h-4 sm:w-5 sm:h-5" />
                            Join Network
                        </Link>
                    </div>

                    {/* Stats - Mobile Optimized */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-green-200">
                        {[
                            { num: "500+", label: "Partner Institutions", icon: Crown },
                            { num: "10K+", label: "Success Stories", icon: Star },
                            { num: "95%", label: "Placement Rate", icon: Diamond },
                            { num: "24/7", label: "Support", icon: Sparkles },
                        ].map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <div className="flex justify-center mb-1 sm:mb-2">
                                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-600" />
                                </div>
                                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold gradient-text mb-0.5 sm:mb-1">
                                    {stat.num}
                                </div>
                                <div className="text-xs sm:text-sm text-green-600 line-clamp-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}