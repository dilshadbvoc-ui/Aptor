import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST() {
    try {
        await connectDB();

        // Check if admin user already exists
        const existingAdmin = await User.findOne({ email: 'info@aptorstudies.com' });

        if (existingAdmin) {
            // Delete and recreate to fix potential password issues
            await User.deleteOne({ email: 'info@aptorstudies.com' });
        }

        // Create admin user - password will be hashed by the User model's pre-save hook
        const password = process.env.ADMIN_PASSWORD || 'SecureAdmin123!';

        const adminUser = new User({
            name: 'Admin User',
            email: 'info@aptorstudies.com',
            password: password, // Plain password - User model will hash it
            role: 'admin',
            isActive: true
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