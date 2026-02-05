import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import ScholarshipApplication from "@/models/ScholarshipApplication";

export async function GET(request: NextRequest) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const course = searchParams.get("course");

    const skip = (page - 1) * limit;

    // Build filter query
    const filter: any = {};
    if (status && status !== "all") {
      filter.status = status;
    }
    if (course && course !== "all") {
      filter.coursePreferred = { $in: [course] };
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { mobile: { $regex: search, $options: "i" } },
        { schoolName: { $regex: search, $options: "i" } }
      ];
    }

    const applications = await ScholarshipApplication.find(filter)
      .populate('assignedTo', 'name email')
      .populate('reviewedBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ScholarshipApplication.countDocuments(filter);

    return NextResponse.json({
      applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching scholarship applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch scholarship applications" },
      { status: 500 }
    );
  }
}