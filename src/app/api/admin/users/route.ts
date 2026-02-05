import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET(request: NextRequest) {
    try {
        // Verify authentication
        const authUser = verifyToken(request);
        if (!authUser || authUser.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();

        // Fetch all users
        const users = await User.find({}).sort({ createdAt: -1 }).select("-password");

        return NextResponse.json({ users });

    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({
            success: false,
            error: "Failed to fetch users"
        }, { status: 500 });
    }
}
