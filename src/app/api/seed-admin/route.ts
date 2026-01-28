import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST() {
    try {
        await connectDB();
        
        // Check if admin user already exists
        const existingAdmin = await User.findOne({ email: 'info@aptorstudies.com' });
        
        if (existingAdmin) {
            return NextResponse.json({
                success: false,
                message: "Admin user already exists",
                email: "info@aptorstudies.com"
            }, { status: 400 });
        }
        
        // Hash the password
        const password = process.env.ADMIN_PASSWORD || 'SecureAdmin123!';
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create admin user
        const adminUser = new User({
            name: 'Admin User',
            email: 'info@aptorstudies.com',
            password: hashedPassword,
            role: 'admin',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        await adminUser.save();
        
        return NextResponse.json({
            success: true,
            message: "Admin user created successfully",
            user: {
                name: adminUser.name,
                email: adminUser.email,
                role: adminUser.role,
                createdAt: adminUser.createdAt
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

export async function GET() {
    try {
        await connectDB();
        
        // Check if admin user exists
        const adminUser = await User.findOne({ email: 'info@aptorstudies.com' }).select('-password');
        
        if (!adminUser) {
            return NextResponse.json({
                success: false,
                message: "Admin user not found",
                exists: false
            }, { status: 404 });
        }
        
        return NextResponse.json({
            success: true,
            message: "Admin user found",
            exists: true,
            user: {
                name: adminUser.name,
                email: adminUser.email,
                role: adminUser.role,
                isActive: adminUser.isActive,
                createdAt: adminUser.createdAt,
                lastLogin: adminUser.lastLogin
            }
        }, { status: 200 });
        
    } catch (error) {
        console.error("Error checking admin user:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to check admin user",
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}