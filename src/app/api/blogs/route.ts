import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();
    
    const blogs = await Blog.find({ published: true })
      .select('title excerpt slug tags publishedAt author authorName featured')
      .populate('author', 'name')
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(20);
    
    // Transform data to match frontend expectations
    const transformedBlogs = blogs.map(blog => ({
      _id: blog._id,
      title: blog.title,
      summary: blog.excerpt, // Map excerpt to summary for frontend
      slug: blog.slug,
      publishedAt: blog.publishedAt || blog.createdAt,
      tags: blog.tags,
      author: blog.author?.name || blog.authorName || "Aptor Studies Team",
      featured: blog.featured
    }));
    
    return NextResponse.json({
      success: true,
      blogs: transformedBlogs
    });
    
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch blogs"
    }, { status: 500 });
  }
}