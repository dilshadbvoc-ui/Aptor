import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { emailService } from "@/lib/email";
import { validateData, contactSchema } from "@/lib/validation";

export async function POST(req: Request) {
    try {
        await connectDB();
        
        const body = await req.json();
        
        // Validate input data
        const validation = validateData(contactSchema, body);
        if (!validation.success) {
            return NextResponse.json(
                { message: "Validation failed", errors: validation.errors }, 
                { status: 400 }
            );
        }

        const { name, email, phone, message } = validation.data;

        // Create new contact entry
        const contact = new Contact({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            message: message.trim(),
        });

        await contact.save();

        // Send email notifications
        try {
            // Send notification to admin
            await emailService.sendContactNotification({
                name,
                email,
                phone,
                message
            });

            // Send confirmation to user
            await emailService.sendContactConfirmation(email, name);
            
            console.log("Contact form emails sent successfully");
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            // Don't fail the request if email fails
        }

        console.log("Contact Form Submission Saved:", { 
            id: contact._id, 
            name: contact.name, 
            email: contact.email 
        });

        return NextResponse.json({ 
            message: "Message sent successfully! We'll get back to you soon.",
            id: contact._id 
        }, { status: 200 });

    } catch (error: any) {
        console.error("Contact API Error:", error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json({ 
                message: "Validation failed", 
                errors 
            }, { status: 400 });
        }

        // Handle duplicate key errors
        if (error.code === 11000) {
            return NextResponse.json({ 
                message: "A submission with this email already exists" 
            }, { status: 409 });
        }

        return NextResponse.json({ 
            message: "Internal server error. Please try again later." 
        }, { status: 500 });
    }
}
