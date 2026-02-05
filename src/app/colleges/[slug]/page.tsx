"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

interface College {
    _id: string;
    name: string;
    description: string;
    location: string;
    establishedYear?: number;
    type: "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other";
    affiliation?: string;
    website?: string;
    courses?: string[];
    facilities?: string[];
    images?: string[];
}

export default function CollegePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [college, setCollege] = useState<College | null>(null);
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
            fetchCollege();
        }
    }, [slug]);

    const fetchCollege = async () => {
        try {
            const response = await fetch(`/api/colleges/${slug}`);
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setCollege(data.college);
                } else {
                    notFound();
                }
            } else {
                notFound();
            }
        } catch (error) {
            console.error('Error fetching college:', error);
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

    if (!college) {
        notFound();
    }

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    <div>
                        <div className="h-64 w-full bg-gray-200 rounded-lg mb-8 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-gray-400">
                            {college.images && college.images.length > 0 ? (
                                <img 
                                    src={college.images[0]} 
                                    alt={college.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            ) : (
                                "No Image Available"
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {college.name}
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            {college.location}
                        </p>
                        {college.affiliation && (
                            <p className="mt-2 text-sm text-indigo-600 font-medium">
                                Affiliated to: {college.affiliation}
                            </p>
                        )}
                        {college.establishedYear && (
                            <p className="mt-2 text-sm text-gray-500">
                                Established: {college.establishedYear}
                            </p>
                        )}
                        <div className="mt-6 prose prose-blue text-gray-500 mx-auto">
                            <p>{college.description}</p>
                        </div>
                        <div className="mt-8">
                            {college.website ? (
                                <Link
                                    href={college.website}
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
                        {college.courses && college.courses.length > 0 ? (
                            college.courses.map((course: string, index: number) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-gray-900">{course}</h4>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Course information pending.</p>
                        )}
                    </div>
                </div>

                {college.facilities && college.facilities.length > 0 && (
                    <div className="mt-24">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Facilities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {college.facilities.map((facility: string, index: number) => (
                                <div key={index} className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <h4 className="font-semibold text-indigo-900">{facility}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
