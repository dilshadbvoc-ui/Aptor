"use client";

import { Crown, Star, Diamond, BookOpen, Clock, Users, Award, Globe, Sparkles, ArrowRight, Play, Trophy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";

// Demo data removed - courses will be loaded from database
const courses: any[] = [];

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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <BookOpen className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">COURSES</span>
                            <Sparkles className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Courses</span>
                        </h1>
                        
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Access the world's most educational programs. Master cutting-edge skills with faculty at prestigious institutions worldwide.
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
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
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
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
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
                                                ? "bg-green-500 text-white"
                                                : "bg-white text-gray-700 hover:text-green-600 border border-gray-300 hover:border-green-300"
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
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Star className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">FEATURED PROGRAMS</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Featured</span> Courses
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.length > 0 ? (
                            featuredCourses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className="bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="relative overflow-hidden rounded-t-xl">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {course.level}
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                Featured
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Crown className="w-5 h-5 text-green-600" />
                                            <span className="text-green-700 text-sm font-medium uppercase">
                                                {course.category}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {course.description}
                                        </p>
                                        
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">University:</span>
                                                <span className="text-green-900 text-sm">{course.university}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">Duration:</span>
                                                <span className="text-green-900 text-sm">{course.duration}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">Mode:</span>
                                                <span className="text-green-900 text-sm">{course.mode}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">Course Fee:</span>
                                                <span className="text-green-600 font-bold">{course.price}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-green-500 fill-current" />
                                                <span className="text-green-900 text-sm">{course.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4 text-green-600" />
                                                <span className="text-green-900 text-sm">{course.students}</span>
                                            </div>
                                        </div>
                                        
                                        <button 
                                            onClick={() => handleEnrollClick(course.title)}
                                            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                                        >
                                            <Play className="w-4 h-4" />
                                            Enroll Now
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8">
                                    <BookOpen className="w-16 h-16 text-green-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-green-900 mb-2">No Featured Courses Yet</h3>
                                    <p className="text-gray-600">Featured courses will appear here once they are added to the system.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* All Courses */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            All <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Courses</span>
                        </h2>
                        <p className="text-gray-600">
                            {filteredCourses.length} courses found
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className="bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative overflow-hidden rounded-t-xl">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {course.level}
                                            </div>
                                        </div>
                                        {course.featured && (
                                            <div className="absolute top-4 left-4">
                                                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                    <Star className="w-3 h-3" />
                                                    Featured
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <BookOpen className="w-5 h-5 text-green-600" />
                                            <span className="text-green-700 text-sm font-medium uppercase">
                                                {course.category}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {course.description}
                                        </p>
                                        
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">University:</span>
                                                <span className="text-green-900 text-sm">{course.university}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">Duration:</span>
                                                <span className="text-green-900 text-sm">{course.duration}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">Mode:</span>
                                                <span className="text-green-900 text-sm">{course.mode}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600 text-sm">Course Fee:</span>
                                                <span className="text-green-600 font-bold">{course.price}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-green-500 fill-current" />
                                                <span className="text-green-900 text-sm">{course.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4 text-green-600" />
                                                <span className="text-green-900 text-sm">{course.students}</span>
                                            </div>
                                        </div>
                                        
                                        <button 
                                            onClick={() => handleEnrollClick(course.title)}
                                            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                                        >
                                            <Play className="w-4 h-4" />
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8">
                                    <BookOpen className="w-16 h-16 text-green-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-green-900 mb-2">No Courses Found</h3>
                                    <p className="text-gray-600">
                                        {searchTerm || activeFilter !== "all" 
                                            ? "Try adjusting your search or filter criteria." 
                                            : "Courses will appear here once they are added to the system."
                                        }
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8 md:p-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">START LEARNING</span>
                            <Diamond className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            Ready to Begin Your <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Education?</span>
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Get personalized course recommendations and enrollment guidance from our education consultants.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                <Crown className="w-5 h-5" />
                                Get Course Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/scholarships"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-500 hover:text-white transition-all duration-300"
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
