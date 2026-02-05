import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Event from "@/models/Event";

export async function GET() {
  try {
    await connectDB();
    
    const events = await Event.find({ 
      published: true,
      date: { $gte: new Date() } // Only future events
    })
      .select('title description date location type slug')
      .sort({ date: 1 })
      .limit(20);
    
    return NextResponse.json({
      success: true,
      events: events
    });
    
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch events"
    }, { status: 500 });
  }
}