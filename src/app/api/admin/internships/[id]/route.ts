import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import Internship from "@/models/Internship";
import { validateData, internshipSchema, generateSlug } from "@/lib/validation";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    await connectDB();
    const internship = await Internship.findById(id);
    
    if (!internship) {
      return NextResponse.json({ error: "Internship not found" }, { status: 404 });
    }
    
    return NextResponse.json(internship);
  } catch (error) {
    console.error("Error fetching internship:", error);
    return NextResponse.json(
      { error: "Failed to fetch internship" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const data = await request.json();
    
    // Generate slug if not provided
    if (!data.slug && data.title) {
      data.slug = generateSlug(data.title);
    }
    
    // Validate data
    const validation = validateData(internshipSchema, data);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Check for duplicate slug (excluding current internship)
    const existingInternship = await Internship.findOne({ 
      slug: validation.data.slug,
      _id: { $ne: id }
    });
    if (existingInternship) {
      return NextResponse.json(
        { error: "An internship with this slug already exists" },
        { status: 409 }
      );
    }
    
    const internship = await Internship.findByIdAndUpdate(
      id,
      validation.data,
      { new: true, runValidators: true }
    );
    
    if (!internship) {
      return NextResponse.json({ error: "Internship not found" }, { status: 404 });
    }
    
    return NextResponse.json(internship);
  } catch (error) {
    console.error("Error updating internship:", error);
    return NextResponse.json(
      { error: "Failed to update internship" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    await connectDB();
    const internship = await Internship.findByIdAndDelete(id);
    
    if (!internship) {
      return NextResponse.json({ error: "Internship not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Internship deleted successfully" });
  } catch (error) {
    console.error("Error deleting internship:", error);
    return NextResponse.json(
      { error: "Failed to delete internship" },
      { status: 500 }
    );
  }
}