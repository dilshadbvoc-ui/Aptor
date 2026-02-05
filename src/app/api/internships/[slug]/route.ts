import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Internship from "@/models/Internship";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;
    const internship = await Internship.findOne({ 
      slug: slug, 
      published: true 
    });
    
    if (!internship) {
      return NextResponse.json({
        success: false,
        error: "Internship not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      internship: internship
    });
    
  } catch (error) {
    console.error("Error fetching internship:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch internship"
    }, { status: 500 });
  }
}