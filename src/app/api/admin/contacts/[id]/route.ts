import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { isAuthenticated } from "@/lib/auth-middleware";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    if (!isAuthenticated(request as any)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await connectDB();
    
    const contact = await Contact.findById(id);
    
    if (!contact) {
      return NextResponse.json({
        success: false,
        error: "Contact not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      contact: contact
    });
    
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch contact"
    }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    if (!isAuthenticated(request as any)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    
    await connectDB();
    
    const contact = await Contact.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true }
    );
    
    if (!contact) {
      return NextResponse.json({
        success: false,
        error: "Contact not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      contact: contact
    });
    
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to update contact"
    }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    if (!isAuthenticated(request as any)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await connectDB();
    
    const contact = await Contact.findByIdAndDelete(id);
    
    if (!contact) {
      return NextResponse.json({
        success: false,
        error: "Contact not found"
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully"
    });
    
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to delete contact"
    }, { status: 500 });
  }
}