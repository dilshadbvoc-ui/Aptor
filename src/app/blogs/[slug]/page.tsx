import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Crown, Star, Sparkles, ArrowRight, Tag, BookOpen } from "lucide-react";
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
        <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pb-20">
            
            {/* Dark Forest Green Hero Header Banner */}
            <section className="relative bg-gradient-to-b from-[#01160d] via-[#032619] to-[#063326] text-white pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Dot Matrix Pattern */}
                <div className="absolute inset-0 bg-light-green-dots-dark opacity-35 pointer-events-none z-0" />
                {/* Ambient Radial Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back Navigation Button */}
                    <div className="mb-6">
                        <Link 
                            href="/blogs" 
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#053722]/80 hover:bg-[#084e31] border border-[#1a6e46] rounded-full text-emerald-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4 text-[#eab308]" />
                            <span>Back to Articles</span>
                        </Link>
                    </div>

                    {/* Tag Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-4 shadow-sm">
                        <Crown className="w-4 h-4 text-[#095738]" />
                        <span className="text-[#095738] text-xs font-bold tracking-wider uppercase">{blog.tags?.[0] || "EDUCATIONAL ARTICLE"}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-100/90 font-medium pt-4 border-t border-emerald-500/30">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#eab308]" />
                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        {blog.author && (
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-[#eab308]" />
                                <span>{blog.author}</span>
                            </div>
                        )}
                        {blog.featured && (
                            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                <span>Featured Article</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Article Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <article className="bg-white rounded-[2.2rem] p-6 sm:p-10 shadow-xl border border-emerald-100">
                    {/* Summary Callout */}
                    {blog.summary && (
                        <div className="mb-8 p-6 bg-[#f4fbf7] border border-[#d2f3e2] rounded-2xl">
                            <div className="flex items-center gap-2 mb-2 text-[#095738] font-bold text-sm uppercase tracking-wider">
                                <BookOpen className="w-4 h-4 text-[#10b981]" />
                                <span>Executive Summary</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-medium text-base sm:text-lg">
                                {blog.summary}
                            </p>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-normal text-base sm:text-lg">
                        <div 
                            dangerouslySetInnerHTML={{ 
                                __html: blog.content
                                    .replace(/\n\n/g, '</p><p class="mb-6">')
                                    .replace(/\n/g, '<br/>')
                                    .replace(/^/, '<p class="mb-6">')
                                    .replace(/$/, '</p>')
                            }} 
                        />
                    </div>

                    {/* Tags List */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center flex-wrap gap-2">
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
                                <Tag className="w-3.5 h-3.5" />
                                <span>Tags:</span>
                            </div>
                            {blog.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full text-xs font-bold text-[#095738]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </article>

                {/* Bottom Counselling CTA Banner */}
                <div className="mt-12 bg-gradient-to-br from-[#01160d] via-[#032619] to-[#063326] text-white rounded-[2.2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-emerald-500/30 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d8f5e5] text-[#095738] rounded-full text-xs font-bold mb-4">
                        <Crown className="w-3.5 h-3.5" />
                        <span>FREE ADMISSION GUIDANCE</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Need Expert Counselling?</h3>
                    <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-normal max-w-xl mx-auto">
                        Get 1-on-1 career counselling and admission assistance from Aptor Studies.
                    </p>

                    <Link 
                        href="/counselling" 
                        className="inline-flex items-center justify-center gap-2 bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <Crown className="w-4 h-4" />
                        <span>Get Free Counselling</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
