"use client";

import { Crown, Building2, BookOpen, Laptop, Calendar, Users, Star, Diamond, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Universities & Colleges",
        description: "Exclusive partnerships with world-class institutions and top faculty",
        icon: Building2,
        href: "/universities-colleges",
        color: "from-blue-500 to-blue-700",
        accent: "text-blue-400"
    },
    {
        title: "Exclusive Courses",
        description: "Curated curriculum designed for career advancement",
        icon: BookOpen,
        href: "/courses",
        color: "from-purple-500 to-purple-700",
        accent: "text-purple-400"
    },
    {
        title: "Scholarships",
        description: "Access to exclusive funding opportunities worth millions",
        icon: Star,
        href: "/scholarships",
        color: "from-yellow-500 to-yellow-700",
        accent: "text-yellow-400"
    },
    {
        title: "Online Learning",
        description: "Digital learning with personalized mentorship",
        icon: Laptop,
        href: "/courses",
        color: "from-orange-500 to-orange-700",
        accent: "text-orange-400"
    },
    {
        title: "Programs",
        description: "Exclusive short-term programs with industry leaders",
        icon: Star,
        href: "/courses",
        color: "from-red-500 to-red-700",
        accent: "text-red-400"
    },
    {
        title: "Events",
        description: "Exclusive networking with industry titans and thought leaders",
        icon: Users,
        href: "/events",
        color: "from-pink-500 to-pink-700",
        accent: "text-pink-400"
    }
];

export function FeaturesGrid() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50 mobile-safe-area">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* Section Header - Mobile Optimized */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16 fade-in">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 border border-green-300 rounded-full mb-4 sm:mb-6">
                        <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                        <span className="text-green-700 text-xs sm:text-sm font-medium">SERVICES</span>
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4 leading-tight">
                        <div className="inline-flex items-center gap-3 sm:gap-4">
                            <img 
                                src="/logo.png" 
                                alt="Aptor Studies Logo" 
                                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg object-cover shadow-lg"
                            />
                            <span className="gradient-text">Educational</span> Excellence
                        </div>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
                        Experience quality education services crafted for students seeking excellence in India's educational landscape
                    </p>
                </div>

                {/* Services Grid - Mobile Optimized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group card-premium hover-lift-premium slide-up min-h-[200px] sm:min-h-[220px]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="p-4 sm:p-6 h-full flex flex-col">
                                <div className="flex justify-center mb-3 sm:mb-4">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-2 sm:mb-3 text-center group-hover:text-yellow-600 transition-colors line-clamp-2">
                                    {service.title}
                                </h3>
                                <p className="text-green-600 text-xs sm:text-sm text-center leading-relaxed group-hover:text-green-700 transition-colors flex-1 line-clamp-mobile-3 sm:line-clamp-3">
                                    {service.description}
                                </p>
                                <div className="flex justify-center mt-3 sm:mt-4">
                                    <div className={`w-6 h-0.5 sm:w-8 sm:h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-8 sm:group-hover:w-12 transition-all duration-300`}></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Student Support Section - Mobile Optimized */}
                <div className="card-premium p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg">
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 border border-green-300 rounded-full mb-4 sm:mb-6">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            <span className="text-green-700 text-xs sm:text-sm font-medium">SUPPORT</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-3 sm:mb-4">Student Experience</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-green-600 max-w-4xl mx-auto leading-relaxed">
                            Our platform is a comprehensive educational portal, dedicated to transforming education into an enriching experience. We focus on building trust, maintaining quality standards, and attracting students from across the globe.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                        <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-center italic leading-relaxed">
                            <span className="gradient-text">"Quality education is not just about learning—it's about transformation, and our platform is your gateway to excellence."</span>
                        </blockquote>
                    </div>

                    {/* Vision & Mission - Mobile Optimized */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="text-center card-premium p-4 sm:p-6 hover-lift-premium">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                    <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                </div>
                            </div>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800 mb-3 sm:mb-4">Our Vision</h4>
                            <p className="text-sm sm:text-base text-green-600 leading-relaxed">
                                To establish our platform as a leading educational portal by revolutionizing admission processes, providing quality career guidance, and fostering partnerships with top institutions.
                            </p>
                        </div>
                        <div className="text-center card-premium p-4 sm:p-6 hover-lift-premium">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                </div>
                            </div>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800 mb-3 sm:mb-4">Our Mission</h4>
                            <p className="text-sm sm:text-base text-green-600 leading-relaxed">
                                To attract and empower ambitious students by providing access to quality education experiences in India, nurturing talent, and creating a network of future industry leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
