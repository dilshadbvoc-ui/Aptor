import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import Internship from "@/models/Internship";
import { validateData, internshipSchema, generateSlug } from "@/lib/validation";

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
    const active = searchParams.get('active');
    
    const skip = (page - 1) * limit;
    
    // Build query
    const query: any = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }
    if (type) {
      query.type = type;
    }
    if (active !== null && active !== undefined) {
      query.isActive = active === 'true';
    }
    
    const [internships, total] = await Promise.all([
      Internship.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Internship.countDocuments(query)
    ]);
    
    return NextResponse.json({
      internships,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching internships:", error);
    return NextResponse.json(
      { error: "Failed to fetch internships" },
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
    
    // Check for duplicate slug
    const existingInternship = await Internship.findOne({ slug: validation.data.slug });
    if (existingInternship) {
      return NextResponse.json(
        { error: "An internship with this slug already exists" },
        { status: 409 }
      );
    }
    
    const internship = new Internship(validation.data);
    await internship.save();
    
    return NextResponse.json(internship, { status: 201 });
  } catch (error) {
    console.error("Error creating internship:", error);
    return NextResponse.json(
      { error: "Failed to create internship" },
      { status: 500 }
    );
  }
}