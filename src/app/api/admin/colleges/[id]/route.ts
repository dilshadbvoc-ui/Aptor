import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import College from "@/models/College";
import { validateData, collegeSchema, generateSlug } from "@/lib/validation";

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
    const college = await College.findById(id);
    
    if (!college) {
      return NextResponse.json({ error: "College not found" }, { status: 404 });
    }
    
    return NextResponse.json(college);
  } catch (error) {
    console.error("Error fetching college:", error);
    return NextResponse.json(
      { error: "Failed to fetch college" },
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
    const validation = validateData(collegeSchema, data);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Check for duplicate slug (excluding current college)
    const existingCollege = await College.findOne({ 
      slug: validation.data.slug,
      _id: { $ne: id }
    });
    if (existingCollege) {
      return NextResponse.json(
        { error: "A college with this slug already exists" },
        { status: 409 }
      );
    }
    
    const college = await College.findByIdAndUpdate(
      id,
      validation.data,
      { new: true, runValidators: true }
    );
    
    if (!college) {
      return NextResponse.json({ error: "College not found" }, { status: 404 });
    }
    
    return NextResponse.json(college);
  } catch (error) {
    console.error("Error updating college:", error);
    return NextResponse.json(
      { error: "Failed to update college" },
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
    const college = await College.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
    
    if (!college) {
      return NextResponse.json({ error: "College not found" }, { status: 404 });
    }
    
    return NextResponse.json(college);
  } catch (error) {
    console.error("Error updating college:", error);
    return NextResponse.json(
      { error: "Failed to update college" },
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
    const college = await College.findByIdAndDelete(id);
    
    if (!college) {
      return NextResponse.json({ error: "College not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "College deleted successfully" });
  } catch (error) {
    console.error("Error deleting college:", error);
    return NextResponse.json(
      { error: "Failed to delete college" },
      { status: 500 }
    );
  }
}