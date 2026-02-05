import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        
        const body = await request.json();
        const { name, email, password, role = 'admin' } = body;
        
        // Validate required fields
        if (!name || !email || !password) {
            return NextResponse.json({
                success: false,
                message: "Name, email, and password are required"
            }, { status: 400 });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({
                success: false,
                message: "Invalid email format"
            }, { status: 400 });
        }
        
        // Validate password strength
        if (password.length < 8) {
            return NextResponse.json({
                success: false,
                message: "Password must be at least 8 characters long"
            }, { status: 400 });
        }
        
        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User with this email already exists"
            }, { status: 400 });
        }
        
        // Hash the password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create new admin user
        const newUser = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            role: role,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        await newUser.save();
        
        return NextResponse.json({
            success: true,
            message: "Admin user created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                isActive: newUser.isActive,
                createdAt: newUser.createdAt
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error("Error creating admin user:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to create admin user",
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}