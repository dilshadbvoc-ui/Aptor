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
        const search = searchParams.get('search') || '';

        // Build query
        const query: any = {};
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const courses = await Course.find(query)
            .populate('college', 'name')
            .populate('university', 'name')
            .sort({ createdAt: -1 });

        return NextResponse.json({ courses });
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
