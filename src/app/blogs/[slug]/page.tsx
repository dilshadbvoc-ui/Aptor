import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Crown, Star, Diamond, Sparkles } from "lucide-react";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

async function getBlog(slug: string) {
    try {
        await connectDB();
        const blog = await Blog.findOne({ slug });
        return blog;
    } catch (error) {
        console.error("Failed to fetch blog:", error);
        return null;
    }
}

export default async function BlogParamsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link 
                            href="/blogs" 
                            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Elite Insights
                        </Link>
                    </div>

                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">PREMIUM INSIGHT</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        
                        {/* Meta Information */}
                        <div className="flex items-center justify-center gap-6 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-yellow-400" />
                                <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</span>
                            </div>
                            {blog.author && (
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-yellow-400" />
                                    <span>{blog.author}</span>
                                </div>
                            )}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <span>{blog.tags[0]}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12">
                        {/* Summary */}
                        {blog.summary && (
                            <div className="mb-8 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <Diamond className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 font-medium">Executive Summary</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {blog.summary}
                                </p>
                            </div>
                        )}

                        {/* Main Content */}
                        <div className="prose prose-lg prose-invert max-w-none">
                            <div 
                                className="text-gray-300 leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                    __html: blog.content
                                        .replace(/\n\n/g, '</p><p class="mb-6">')
                                        .replace(/\n/g, '<br/>')
                                        .replace(/^/, '<p class="mb-6">')
                                        .replace(/$/, '</p>')
                                }} 
                            />
                        </div>

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-yellow-400/20">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 font-medium">Topics</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-sm font-medium text-yellow-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">TAKE ACTION</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Apply These <span className="gradient-text">Elite Insights?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get personalized guidance from our premium education consultants and turn these insights into your success story.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Get Premium Consultation
                            </Link>
                            <Link
                                href="/blogs"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
                            >
                                <Star className="w-5 h-5" />
                                More Elite Insights
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
