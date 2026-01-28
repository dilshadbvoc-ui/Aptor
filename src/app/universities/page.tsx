import Link from "next/link";
import { ArrowRight } from "lucide-react";
import connectDB from "@/lib/db";
import University from "@/models/University";

async function getUniversities() {
    try {
        await connectDB();
        const universities = await University.find({});
        return universities;
    } catch (error) {
        console.error("Failed to fetch universities:", error);
        return [];
    }
}

export default async function UniversitiesPage() {
    const universities = await getUniversities();

    return (
        <div className="bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Explore</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                        Universities
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover top universities in Bengaluru and find your perfect fit.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {universities.length > 0 ? (
                        universities.map((uni) => (
                            <Link
                                key={uni._id}
                                href={`/universities/${uni.slug}`}
                                className="group block p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-100 border border-transparent hover:border-gray-100 transition-all"
                            >
                                <div className="h-40 w-full bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-4xl">🏛️</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">{uni.name}</h3>
                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{uni.description}</p>
                                <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <div className="text-6xl mb-4">🎓</div>
                            <p className="text-gray-500">No universities found yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
