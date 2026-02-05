"use client";

import { Crown, Building2, BookOpen, Laptop, Calendar, Users, Star, Diamond, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Colleges",
        description: "Exclusive partnerships with world-class institutions and top faculty",
        icon: Building2,
        href: "/universities-colleges",
        color: "from-blue-500 to-blue-700",
        accent: "text-blue-400"
    },
    {
        title: "Courses",
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
        <section className="section-padding bg-gradient-to-b from-white to-green-50 mobile-safe-area">
            <div className="max-w-7xl mx-auto container-padding">
                {/* Section Header - Standardized */}
                <div className="text-center mb-12 fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-6">
                        <Diamond className="w-4 h-4 text-accent-500" />
                        <span className="text-green-700 text-sm font-medium">SERVICES</span>
                        <Sparkles className="w-4 h-4 text-accent-500" />
                    </div>
                    <h2 className="heading-lg mb-4">
                        <div className="inline-flex items-center gap-4">
                            <img 
                                src="/logo.png" 
                                alt="Aptor Studies Logo" 
                                className="w-16 h-16 rounded-lg object-cover shadow-lg"
                            />
                            <span className="gradient-text">Educational</span> Excellence
                        </div>
                    </h2>
                    <p className="text-body max-w-3xl mx-auto">
                        Experience quality education services crafted for students seeking excellence in India's educational landscape
                    </p>
                </div>

                {/* Services Grid - Standardized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group card min-h-[200px] transition-all duration-300 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="h-full flex flex-col">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="heading-md text-green-800 mb-3 text-center group-hover:text-accent-500 transition-colors line-clamp-2">
                                    {service.title}
                                </h3>
                                <p className="text-small text-green-600 text-center group-hover:text-green-700 transition-colors flex-1 line-clamp-3">
                                    {service.description}
                                </p>
                                <div className="flex justify-center mt-4">
                                    <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Student Support Section - Standardized */}
                <div className="card shadow-lg">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-accent-500" />
                            <span className="text-green-700 text-sm font-medium">SUPPORT</span>
                        </div>
                        <h3 className="heading-lg text-green-800 mb-4">Student Experience</h3>
                        <p className="text-body max-w-4xl mx-auto">
                            Our platform is a comprehensive educational portal, dedicated to transforming education into an enriching experience. We focus on building trust, maintaining quality standards, and attracting students from across the globe.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <blockquote className="text-xl font-medium text-center italic">
                            <span className="gradient-text">"Quality education is not just about learning—it's about transformation, and our platform is your gateway to excellence."</span>
                        </blockquote>
                    </div>

                    {/* Vision & Mission - Standardized Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center card">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                                    <Diamond className="w-6 h-6 text-black" />
                                </div>
                            </div>
                            <h4 className="heading-md text-green-800 mb-4">Our Vision</h4>
                            <p className="text-small text-green-600">
                                To establish our platform as a leading educational portal by revolutionizing admission processes, providing quality career guidance, and fostering partnerships with top institutions.
                            </p>
                        </div>
                        <div className="text-center card">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                                    <Crown className="w-6 h-6 text-black" />
                                </div>
                            </div>
                            <h4 className="heading-md text-green-800 mb-4">Our Mission</h4>
                            <p className="text-small text-green-600">
                                To attract and empower ambitious students by providing access to quality education experiences in India, nurturing talent, and creating a network of future industry leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
