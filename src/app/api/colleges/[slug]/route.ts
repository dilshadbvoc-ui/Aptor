import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import College from "@/models/College";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;
    const college = await College.findOne({ 
      slug: slug, 
      published: true 
    });
    
    if (!college) {
      return NextResponse.json({
        success: false,
        error: "College not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      college: college
    });
    
  } catch (error) {
    console.error("Error fetching college:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch college"
    }, { status: 500 });
  }
}