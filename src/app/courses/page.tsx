"use client";

import { Crown, Star, Diamond, BookOpen, Clock, Users, Award, Globe, Sparkles, ArrowRight, Play, Trophy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";

// Mock data for courses - in a real app, this would come from your API
const courses = [
    {
        id: 1,
        title: "Business Administration",
        level: "Master's",
        duration: "2 years",
        mode: "Hybrid",
        price: "₹70,00,000",
        university: "Harvard Business School",
        rating: 4.9,
        students: "2,500+",
        description: "Transform into a global business leader with our MBA program featuring exclusive case studies and industry partnerships.",
        category: "business",
        featured: true,
        image: "/campus.png"
    },
    {
        id: 2,
        title: "Advanced Computer Science",
        level: "Master's",
        duration: "2 years",
        mode: "Online",
        price: "₹53,00,000",
        university: "Stanford University",
        rating: 4.8,
        students: "1,800+",
        description: "Master cutting-edge technologies including AI, Machine Learning, and Quantum Computing with industry experts.",
        category: "technology",
        featured: true,
        image: "/campus.png"
    },
    {
        id: 3,
        title: "Medical Studies",
        level: "Doctorate",
        duration: "4 years",
        mode: "On-Campus",
        price: "₹98,00,000",
        university: "Johns Hopkins University",
        rating: 4.9,
        students: "800+",
        description: "Medical education with access to world-class research facilities and renowned medical professionals.",
        category: "medical",
        featured: true,
        image: "/campus.png"
    },
    {
        id: 4,
        title: "International Law & Policy",
        level: "Master's",
        duration: "1.5 years",
        mode: "Hybrid",
        price: "₹61,00,000",
        university: "Yale Law School",
        rating: 4.7,
        students: "1,200+",
        description: "Navigate complex global legal landscapes with our comprehensive international law program.",
        category: "law",
        featured: false,
        image: "/campus.png"
    },
    {
        id: 5,
        title: "Luxury Brand Management",
        level: "Master's",
        duration: "1 year",
        mode: "On-Campus",
        price: "₹77,00,000",
        university: "INSEAD",
        rating: 4.8,
        students: "600+",
        description: "Master the art of luxury brand strategy and management in the world's most exclusive markets.",
        category: "business",
        featured: false,
        image: "/campus.png"
    },
    {
        id: 6,
        title: "Sustainable Engineering",
        level: "Master's",
        duration: "2 years",
        mode: "Hybrid",
        price: "₹57,00,000",
        university: "MIT",
        rating: 4.6,
        students: "1,500+",
        description: "Pioneer sustainable solutions for tomorrow's engineering challenges with cutting-edge research.",
        category: "engineering",
        featured: false,
        image: "/campus.png"
    }
];

export default function CoursesPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string>("");

    const filteredCourses = courses.filter(course => {
        const matchesFilter = activeFilter === "all" || course.category === activeFilter;
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const featuredCourses = courses.filter(course => course.featured);

    const handleEnrollClick = (courseTitle: string) => {
        setSelectedCourse(courseTitle);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <BookOpen className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">EXCLUSIVE COURSES</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">Exclusive</span>
                            <br />
                            <span className="text-white">Courses</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Access the world's most exclusive educational programs. Master cutting-edge skills with faculty at prestigious institutions worldwide.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { icon: BookOpen, value: "500+", label: "Courses" },
                            { icon: Users, value: "50K+", label: "Students" },
                            { icon: Award, value: "98%", label: "Success Rate" },
                            { icon: Globe, value: "100+", label: "Universities" }
                        ].map((stat, index) => (
                            <div key={index} className="card-premium p-6 text-center hover-lift-premium">
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-black" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                            <div className="relative flex-1 max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            
                            <div className="flex flex-wrap gap-2 justify-center">
                                {[
                                    { key: "all", label: "All" },
                                    { key: "business", label: "Business" },
                                    { key: "technology", label: "Technology" },
                                    { key: "medical", label: "Medical" },
                                    { key: "law", label: "Law" },
                                    { key: "engineering", label: "Engineering" }
                                ].map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => setActiveFilter(filter.key)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                                            activeFilter === filter.key
                                                ? "bg-yellow-400 text-black"
                                                : "bg-black/50 text-gray-400 hover:text-yellow-400 border border-yellow-400/30"
                                        }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">FEATURED PROGRAMS</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="gradient-text">Featured</span> Courses
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className="card-premium hover-lift-premium slide-up group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-xl">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                                            {course.level}
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            Featured
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Crown className="w-5 h-5 text-yellow-400" />
                                        <span className="text-yellow-400 text-sm font-medium uppercase">
                                            {course.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        {course.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {course.description}
                                    </p>
                                    
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">University:</span>
                                            <span className="text-white text-sm">{course.university}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Duration:</span>
                                            <span className="text-white text-sm">{course.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Mode:</span>
                                            <span className="text-white text-sm">{course.mode}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Course Fee:</span>
                                            <span className="text-yellow-400 font-bold">{course.price}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-white text-sm">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4 text-yellow-400" />
                                            <span className="text-white text-sm">{course.students}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleEnrollClick(course.title)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold"
                                    >
                                        <Play className="w-4 h-4" />
                                        Enroll Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Courses */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            All <span className="gradient-text">Courses</span>
                        </h2>
                        <p className="text-gray-400">
                            {filteredCourses.length} exclusive courses found
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className="card-premium hover-lift-premium slide-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-xl">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                                            {course.level}
                                        </div>
                                    </div>
                                    {course.featured && (
                                        <div className="absolute top-4 left-4">
                                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                Featured
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <BookOpen className="w-5 h-5 text-yellow-400" />
                                        <span className="text-yellow-400 text-sm font-medium uppercase">
                                            {course.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        {course.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {course.description}
                                    </p>
                                    
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">University:</span>
                                            <span className="text-white text-sm">{course.university}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Duration:</span>
                                            <span className="text-white text-sm">{course.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Mode:</span>
                                            <span className="text-white text-sm">{course.mode}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Course Fee:</span>
                                            <span className="text-yellow-400 font-bold">{course.price}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-white text-sm">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4 text-yellow-400" />
                                            <span className="text-white text-sm">{course.students}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleEnrollClick(course.title)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold"
                                    >
                                        <Play className="w-4 h-4" />
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">START LEARNING</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Begin Your <span className="gradient-text">Education?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get personalized course recommendations and enrollment guidance from our education consultants.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Get Course Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/scholarships"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
                            >
                                <Trophy className="w-5 h-5" />
                                View Scholarships
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Enroll in ${selectedCourse}`}
                subtitle="Begin Your Education"
                source={`course-${selectedCourse.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}
