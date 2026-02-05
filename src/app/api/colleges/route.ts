import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import College from "@/models/College";

export async function GET() {
  try {
    await connectDB();
    
    const colleges = await College.find({ published: true })
      .select('name description location country establishedYear type ranking website slug')
      .sort({ ranking: 1, name: 1 })
      .limit(50);
    
    return NextResponse.json({
      success: true,
      colleges: colleges
    });
    
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch colleges"
    }, { status: 500 });
  }
}