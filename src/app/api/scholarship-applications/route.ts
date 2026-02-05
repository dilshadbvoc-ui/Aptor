import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ScholarshipApplication from "@/models/ScholarshipApplication";
import { validateData, scholarshipApplicationSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate data
    const validation = validateData(scholarshipApplicationSchema, data);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    await connectDB();

    // Check for duplicate email
    const existingApplication = await ScholarshipApplication.findOne({ 
      email: validation.data.email 
    });
    
    if (existingApplication) {
      return NextResponse.json(
        { error: "An application with this email already exists" },
        { status: 409 }
      );
    }

    const application = new ScholarshipApplication(validation.data);
    await application.save();

    return NextResponse.json(
      { 
        message: "Scholarship application submitted successfully", 
        applicationId: application._id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating scholarship application:", error);
    return NextResponse.json(
      { error: "Failed to submit scholarship application" },
      { status: 500 }
    );
  }
}