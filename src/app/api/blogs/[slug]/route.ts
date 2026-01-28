import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    
    const blog = await Blog.findOne({ 
      slug: params.slug, 
      published: true 
    }).populate('author', 'name');
    
    if (!blog) {
      return NextResponse.json({
        success: false,
        error: "Blog not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      blog: blog
    });
    
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch blog"
    }, { status: 500 });
  }
}