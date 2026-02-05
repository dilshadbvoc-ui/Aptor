import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Course from "@/models/Course";

export async function GET() {
  try {
    await connectDB();
    
    const courses = await Course.find({ 
      published: true,
      isActive: true 
    })
      .select('title description level duration fees university slug')
      .populate('university', 'name location')
      .sort({ createdAt: -1 })
      .limit(50);
    
    return NextResponse.json({
      success: true,
      courses: courses
    });
    
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch courses"
    }, { status: 500 });
  }
}