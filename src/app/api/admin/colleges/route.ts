import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import College from "@/models/College";
import { validateData, collegeSchema, generateSlug } from "@/lib/validation";

export async function GET(request: NextRequest) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type');
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query: Record<string, unknown> = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }
    if (type) {
      query.type = type;
    }
    
    const [colleges, total] = await Promise.all([
      College.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      College.countDocuments(query)
    ]);
    
    return NextResponse.json({
      colleges,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return NextResponse.json(
      { error: "Failed to fetch colleges" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

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
    
    // Check for duplicate slug
    const existingCollege = await College.findOne({ slug: validation.data.slug });
    if (existingCollege) {
      return NextResponse.json(
        { error: "A college with this slug already exists" },
        { status: 409 }
      );
    }
    
    const college = new College(validation.data);
    await college.save();
    
    return NextResponse.json(college, { status: 201 });
  } catch (error) {
    console.error("Error creating college:", error);
    return NextResponse.json(
      { error: "Failed to create college" },
      { status: 500 }
    );
  }
}