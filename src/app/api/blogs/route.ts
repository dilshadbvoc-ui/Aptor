import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();
    
    const blogs = await Blog.find({ published: true })
      .select('title excerpt slug tags createdAt author')
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .limit(20);
    
    return NextResponse.json({
      success: true,
      blogs: blogs
    });
    
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch blogs"
    }, { status: 500 });
  }
}