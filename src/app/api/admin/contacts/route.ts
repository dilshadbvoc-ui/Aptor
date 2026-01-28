import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { isAuthenticated } from "@/lib/auth-middleware";

export async function GET(request: Request) {
  try {
    // Check authentication
    if (!isAuthenticated(request as any)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(100);
    
    return NextResponse.json({
      success: true,
      contacts: contacts
    });
    
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch contacts"
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Check authentication
    if (!isAuthenticated(request as any)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    
    await connectDB();
    
    const contact = new Contact(body);
    await contact.save();
    
    return NextResponse.json({
      success: true,
      contact: contact
    }, { status: 201 });
    
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to create contact"
    }, { status: 500 });
  }
}