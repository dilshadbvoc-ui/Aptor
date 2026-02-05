"use client";

import { Crown, Star, Diamond, BookOpen, Clock, Users, Award, Globe, Sparkles, ArrowRight, Play, Trophy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";

interface Course {
    _id: string;
    title: string;
    description: string;
    level: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
    duration: string;
    fees?: string;
    university?: {
        _id: string;
        name: string;
        location: string;
    };
    slug: string;
}

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string>("");

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('/api/courses');
            if (response.ok) {
                const data = await response.json();
                setCourses(data.courses || []);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesFilter = activeFilter === "all" || course.level === activeFilter;
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (course.university?.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const handleEnrollClick = (courseTitle: string) => {
        setSelectedCourse(courseTitle);
        setIsModalOpen(true);
    };

    if (loading) {
        return (
            <div className="bg-white pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center py-16">
                        <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Explore</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                        Courses
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover comprehensive courses designed to advance your career.
                    </p>
                </div>

                {/* Search */}
                <div className="mt-8 max-w-md">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>

                {/* Filters */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {[
                        { key: "all", label: "All" },
                        { key: "Undergraduate", label: "Undergraduate" },
                        { key: "Postgraduate", label: "Postgraduate" },
                        { key: "Diploma", label: "Diploma" },
                        { key: "Certificate", label: "Certificate" }
                    ].map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                                activeFilter === filter.key
                                    ? "bg-teal-500 text-white"
                                    : "bg-gray-100 text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div
                                key={course._id}
                                className="group block p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-100 border border-transparent hover:border-gray-100 transition-all"
                            >
                                <div className="h-40 w-full bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-4xl">📚</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">{course.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{course.description}</p>
                                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                                    <span>{course.level}</span>
                                    <span>{course.duration}</span>
                                </div>
                                {course.university && (
                                    <p className="mt-2 text-sm text-teal-600">{course.university.name}</p>
                                )}
                                <button
                                    onClick={() => handleEnrollClick(course.title)}
                                    className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <div className="text-6xl mb-4">📚</div>
                            <p className="text-gray-500">
                                {searchTerm || activeFilter !== "all" 
                                    ? "No courses match your search criteria." 
                                    : "No courses found yet. Check back soon!"
                                }
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Learn More About ${selectedCourse}`}
                subtitle="Get Course Information"
                source={`course-${selectedCourse.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}
