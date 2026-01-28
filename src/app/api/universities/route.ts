import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import University from "@/models/University";

export async function GET() {
  try {
    await connectDB();
    
    const universities = await University.find({ published: true })
      .select('name description location country establishedYear type ranking website slug')
      .sort({ ranking: 1, name: 1 })
      .limit(50);
    
    return NextResponse.json({
      success: true,
      universities: universities
    });
    
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch universities"
    }, { status: 500 });
  }
}