import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import University from "@/models/University";
import { validateData, universitySchema, generateSlug } from "@/lib/validation";

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
    const university = await University.findById(id);
    
    if (!university) {
      return NextResponse.json({ error: "University not found" }, { status: 404 });
    }
    
    return NextResponse.json(university);
  } catch (error) {
    console.error("Error fetching university:", error);
    return NextResponse.json(
      { error: "Failed to fetch university" },
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
    if (!data.slug && data.name) {
      data.slug = generateSlug(data.name);
    }
    
    // Validate data
    const validation = validateData(universitySchema, data);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Check for duplicate slug (excluding current university)
    const existingUniversity = await University.findOne({ 
      slug: validation.data.slug,
      _id: { $ne: id }
    });
    if (existingUniversity) {
      return NextResponse.json(
        { error: "A university with this slug already exists" },
        { status: 409 }
      );
    }
    
    const university = await University.findByIdAndUpdate(
      id,
      validation.data,
      { new: true, runValidators: true }
    );
    
    if (!university) {
      return NextResponse.json({ error: "University not found" }, { status: 404 });
    }
    
    return NextResponse.json(university);
  } catch (error) {
    console.error("Error updating university:", error);
    return NextResponse.json(
      { error: "Failed to update university" },
      { status: 500 }
    );
  }
}

export async function PATCH(
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
    
    await connectDB();
    
    // For PATCH, we only update the provided fields
    const university = await University.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
    
    if (!university) {
      return NextResponse.json({ error: "University not found" }, { status: 404 });
    }
    
    return NextResponse.json(university);
  } catch (error) {
    console.error("Error updating university:", error);
    return NextResponse.json(
      { error: "Failed to update university" },
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
    const university = await University.findByIdAndDelete(id);
    
    if (!university) {
      return NextResponse.json({ error: "University not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "University deleted successfully" });
  } catch (error) {
    console.error("Error deleting university:", error);
    return NextResponse.json(
      { error: "Failed to delete university" },
      { status: 500 }
    );
  }
}