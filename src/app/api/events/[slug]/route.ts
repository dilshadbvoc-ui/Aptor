import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Event from "@/models/Event";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;
    const event = await Event.findOne({ 
      slug: slug, 
      published: true 
    });
    
    if (!event) {
      return NextResponse.json({
        success: false,
        error: "Event not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      event: event
    });
    
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch event"
    }, { status: 500 });
  }
}