"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";

interface College {
    _id: string;
    name: string;
    description: string;
    location: string;
    establishedYear: number;
    type: "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other";
    affiliation?: string;
    website?: string;
    images?: string[];
    slug: string;
}

interface ImageState {
    [key: string]: boolean;
}

export default function CollegesPage() {
    const [colleges, setColleges] = useState<College[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState<string>("");
    const [imageErrors, setImageErrors] = useState<ImageState>({});

    useEffect(() => {
        fetchColleges();
    }, []);

    const fetchColleges = async () => {
        try {
            console.log('🔄 Fetching colleges from API...');
            const response = await fetch('/api/colleges');
            if (response.ok) {
                const data = await response.json();
                console.log(`✅ Received ${data.colleges?.length || 0} colleges from API`);
                setColleges(data.colleges || []);
            } else {
                console.error('❌ API response not OK:', response.status);
            }
        } catch (error) {
            console.error('❌ Error fetching colleges:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApplyClick = (collegeName: string) => {
        setSelectedCollege(collegeName);
        setIsModalOpen(true);
    };

    const handleImageError = (collegeId: string) => {
        setImageErrors(prev => ({ ...prev, [collegeId]: true }));
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
                        Colleges
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Find the best colleges in Bengaluru for your career goals.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {colleges.length > 0 ? (
                        colleges.map((college) => (
                            <Link
                                key={college._id}
                                href={`/colleges/${college.slug}`}
                                className="group block p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-100 border border-transparent hover:border-gray-100 transition-all"
                            >
                                <div className="h-40 w-full bg-gradient-to-br from-violet-100 to-violet-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                    {college.images && college.images[0] && !imageErrors[college._id] ? (
                                        <img 
                                            src={college.images[0]} 
                                            alt={college.name}
                                            className="w-full h-full object-cover"
                                            onError={() => handleImageError(college._id)}
                                        />
                                    ) : (
                                        <span className="text-4xl">🎓</span>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">{college.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{college.location}</p>
                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{college.description}</p>
                                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                                    <span className="capitalize">{college.type}</span>
                                    <span>Est. {college.establishedYear}</span>
                                </div>
                                <div className="mt-4 flex flex-col gap-2">
                                    <button
                                        onClick={() => handleApplyClick(college.name)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <Link
                                        href={`/colleges/${college.slug}`}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <div className="text-6xl mb-4">🎓</div>
                            <p className="text-gray-500">No colleges found yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Apply to ${selectedCollege}`}
                subtitle="Start Your Application"
                source={`college-${selectedCollege.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}
