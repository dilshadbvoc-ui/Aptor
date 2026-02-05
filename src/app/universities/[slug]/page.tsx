"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

interface University {
    _id: string;
    name: string;
    description: string;
    location: string;
    country: string;
    establishedYear?: number;
    foundedYear?: number;
    type: "public" | "private";
    ranking?: number;
    website?: string;
    courses?: string[];
    features?: string[];
    images?: string[];
}

export default function UniversityPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [university, setUniversity] = useState<University | null>(null);
    const [loading, setLoading] = useState(true);
    const [slug, setSlug] = useState<string>("");

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setSlug(resolvedParams.slug);
        };
        getParams();
    }, [params]);

    useEffect(() => {
        if (slug) {
            fetchUniversity();
        }
    }, [slug]);

    const fetchUniversity = async () => {
        try {
            const response = await fetch(`/api/universities/${slug}`);
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setUniversity(data.university);
                } else {
                    notFound();
                }
            } else {
                notFound();
            }
        } catch (error) {
            console.error('Error fetching university:', error);
            notFound();
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center py-16">
                        <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!university) {
        notFound();
    }

    const displayYear = university.establishedYear || university.foundedYear;

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    <div>
                        <div className="h-64 w-full bg-gray-200 rounded-lg mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center text-gray-400">
                            {university.images && university.images.length > 0 ? (
                                <img 
                                    src={university.images[0]} 
                                    alt={university.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            ) : (
                                "No Image Available"
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {university.name}
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            {university.location}, {university.country}
                        </p>
                        {displayYear && (
                            <p className="mt-2 text-sm text-gray-500">
                                Founded: {displayYear}
                            </p>
                        )}
                        <div className="mt-6 prose prose-blue text-gray-500 mx-auto">
                            <p>{university.description}</p>
                        </div>
                        <div className="mt-8">
                            {university.website ? (
                                <Link
                                    href={university.website}
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Visit Website
                                </Link>
                            ) : (
                                <span className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                                    Website Not Available
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Courses Offered</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {university.courses && university.courses.length > 0 ? (
                            university.courses.map((course: string, index: number) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-gray-900">{course}</h4>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Course information pending.</p>
                        )}
                    </div>
                </div>

                {university.features && university.features.length > 0 && (
                    <div className="mt-24">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {university.features.map((feature: string, index: number) => (
                                <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                    <h4 className="font-semibold text-blue-900">{feature}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
