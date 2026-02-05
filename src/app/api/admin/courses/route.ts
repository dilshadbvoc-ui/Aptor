import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import Course from "@/models/Course";
import { validateData, courseSchema, generateSlug } from "@/lib/validation";

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
        const search = searchParams.get("search");
        const level = searchParams.get("level");
        const featured = searchParams.get("featured");

        const skip = (page - 1) * limit;

        // Build filter query
        const filter: Record<string, unknown> = {};
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } }
            ];
        }
        if (level && level !== "all") {
            filter.level = level;
        }
        if (featured === "true") {
            filter.featured = true;
        }

        const courses = await Course.find(filter)
            .populate('college', 'name')
            .populate('university', 'name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Course.countDocuments(filter);

        return NextResponse.json({
            courses,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return NextResponse.json(
            { error: "Failed to fetch courses" },
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
        const validation = validateData(courseSchema, data);
        if (!validation.success) {
            return NextResponse.json(
                { error: "Validation failed", details: validation.errors },
                { status: 400 }
            );
        }

        await connectDB();

        // Check for duplicate slug
        const existingCourse = await Course.findOne({ slug: validation.data.slug });
        if (existingCourse) {
            return NextResponse.json(
                { error: "A course with this slug already exists" },
                { status: 409 }
            );
        }

        const course = new Course(validation.data);
        await course.save();

        return NextResponse.json(course, { status: 201 });
    } catch (error) {
        console.error("Error creating course:", error);
        return NextResponse.json(
            { error: "Failed to create course" },
            { status: 500 }
        );
    }
}
