import Link from "next/link";
import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import College from "@/models/College";

async function getCollege(slug: string) {
    try {
        await connectDB();
        const college = await College.findOne({ slug });
        return college;
    } catch (error) {
        console.error("Failed to fetch college:", error);
        return null;
    }
}

export default async function CollegePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const college = await getCollege(slug);

    if (!college) {
        notFound();
    }

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    <div>
                        <div className="h-64 w-full bg-gray-200 rounded-lg mb-8 bg-linear-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-gray-400">
                            No Image Available
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {college.name}
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            {college.location}
                        </p>
                        {college.universityAffiliation && (
                            <p className="mt-2 text-sm text-indigo-600 font-medium">
                                {college.universityAffiliation}
                            </p>
                        )}
                        <div className="mt-6 prose prose-blue text-gray-500 mx-auto">
                            <p>{college.description}</p>
                        </div>
                        <div className="mt-8">
                            <Link
                                href={college.website || "#"}
                                target="_blank"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Visit Website
                            </Link>
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
            </div>
        </div>
    );
}
