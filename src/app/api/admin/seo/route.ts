import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import SeoSettings from "@/models/SeoSettings";

// GET - Fetch SEO settings
export async function GET(request: NextRequest) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    
    let settings = await SeoSettings.findOne();
    
    // Create default settings if none exist
    if (!settings) {
      settings = new SeoSettings();
      await settings.save();
    }

    return NextResponse.json(settings, { status: 200 });
  } catch (error) {
    console.error("SEO Settings GET Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// PUT - Update SEO settings
export async function PUT(request: NextRequest) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    
    const body = await request.json();
    
    let settings = await SeoSettings.findOne();
    
    if (!settings) {
      settings = new SeoSettings(body);
    } else {
      Object.assign(settings, body);
    }
    
    await settings.save();

    return NextResponse.json({ 
      message: "SEO settings updated successfully",
      settings 
    }, { status: 200 });
  } catch (error: any) {
    console.error("SEO Settings PUT Error:", error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ 
        message: "Validation failed", 
        errors 
      }, { status: 400 });
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}