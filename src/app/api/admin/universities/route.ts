import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import University from "@/models/University";
import { validateData, universitySchema, generateSlug } from "@/lib/validation";

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
    const country = searchParams.get('country');
    const type = searchParams.get('type');
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query: any = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }
    if (country) {
      query.country = country;
    }
    if (type) {
      query.type = type;
    }
    
    const [universities, total] = await Promise.all([
      University.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      University.countDocuments(query)
    ]);
    
    return NextResponse.json({
      universities,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json(
      { error: "Failed to fetch universities" },
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
    const validation = validateData(universitySchema, data);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Check for duplicate slug
    const existingUniversity = await University.findOne({ slug: validation.data.slug });
    if (existingUniversity) {
      return NextResponse.json(
        { error: "A university with this slug already exists" },
        { status: 409 }
      );
    }
    
    const university = new University(validation.data);
    await university.save();
    
    return NextResponse.json(university, { status: 201 });
  } catch (error) {
    console.error("Error creating university:", error);
    return NextResponse.json(
      { error: "Failed to create university" },
      { status: 500 }
    );
  }
}