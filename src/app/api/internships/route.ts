import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Internship from "@/models/Internship";

export async function GET() {
  try {
    await connectDB();
    
    const internships = await Internship.find({ 
      published: true,
      applicationDeadline: { $gte: new Date() } // Only active internships
    })
      .select('title company description location duration stipend applicationDeadline slug')
      .sort({ applicationDeadline: 1 })
      .limit(20);
    
    return NextResponse.json({
      success: true,
      internships: internships
    });
    
  } catch (error) {
    console.error("Error fetching internships:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch internships"
    }, { status: 500 });
  }
}