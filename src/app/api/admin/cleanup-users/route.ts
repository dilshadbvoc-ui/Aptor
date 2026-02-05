import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import User from "@/models/User";

// Delete all users except admin
export async function POST(request: NextRequest) {
    try {
        // Verify authentication
        const authUser = verifyToken(request);
        if (!authUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();

        // Delete all users except the main admin account
        const result = await User.deleteMany({
            email: { $ne: "info@aptorstudies.com" }
        });

        return NextResponse.json({
            success: true,
            message: `Deleted ${result.deletedCount} non-admin users`,
            deletedCount: result.deletedCount
        });

    } catch (error) {
        console.error("Error cleaning up users:", error);
        return NextResponse.json({
            success: false,
            error: "Failed to clean up users"
        }, { status: 500 });
    }
}
