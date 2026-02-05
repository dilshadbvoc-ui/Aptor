import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Course from "@/models/Course";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;
    const course = await Course.findOne({ 
      slug: slug, 
      published: true 
    }).populate('university', 'name location website');
    
    if (!course) {
      return NextResponse.json({
        success: false,
        error: "Course not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      course: course
    });
    
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch course"
    }, { status: 500 });
  }
}