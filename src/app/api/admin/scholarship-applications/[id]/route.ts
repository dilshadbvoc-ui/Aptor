import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import ScholarshipApplication from "@/models/ScholarshipApplication";
import { validateData, scholarshipApplicationSchema, createPartialSchema } from "@/lib/validation";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = verifyToken(request);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { id } = await params;
    const application = await ScholarshipApplication.findById(id)
      .populate('assignedTo', 'name email')
      .populate('reviewedBy', 'name email');

    if (!application) {
      return NextResponse.json(
        { error: "Scholarship application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ application });
  } catch (error) {
    console.error("Error fetching scholarship application:", error);
    return NextResponse.json(
      { error: "Failed to fetch scholarship application" },
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

    const data = await request.json();
    const { id } = await params;

    // Validate data (partial update)
    const partialSchema = createPartialSchema(scholarshipApplicationSchema);
    const validation = validateData(partialSchema, data);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    await connectDB();

    // Add review information if status is being changed
    const updateData: any = { ...validation.data };
    if (data.status && data.status !== 'new') {
      updateData.reviewedAt = new Date();
      updateData.reviewedBy = authUser.userId;
    }

    const application = await ScholarshipApplication.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email').populate('reviewedBy', 'name email');

    if (!application) {
      return NextResponse.json(
        { error: "Scholarship application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Scholarship application updated successfully",
      application
    });
  } catch (error) {
    console.error("Error updating scholarship application:", error);
    return NextResponse.json(
      { error: "Failed to update scholarship application" },
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

    await connectDB();

    const { id } = await params;
    const application = await ScholarshipApplication.findByIdAndDelete(id);

    if (!application) {
      return NextResponse.json(
        { error: "Scholarship application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Scholarship application deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting scholarship application:", error);
    return NextResponse.json(
      { error: "Failed to delete scholarship application" },
      { status: 500 }
    );
  }
}