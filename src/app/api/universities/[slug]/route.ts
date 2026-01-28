import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import University from "@/models/University";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    
    const university = await University.findOne({ 
      slug: params.slug, 
      published: true 
    });
    
    if (!university) {
      return NextResponse.json({
        success: false,
        error: "University not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      university: university
    });
    
  } catch (error) {
    console.error("Error fetching university:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch university"
    }, { status: 500 });
  }
}