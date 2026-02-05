import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import User from "@/models/User";
import College from "@/models/College";
import Contact from "@/models/Contact";

export async function GET(request: NextRequest) {
    try {
        // Verify authentication
        const authUser = verifyToken(request);
        if (!authUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();

        // Fetch real counts from database
        const [totalUsers, colleges, applications] = await Promise.all([
            User.countDocuments({ isActive: true }),
            College.countDocuments().catch(() => 0),
            Contact.countDocuments().catch(() => 0)
        ]);

        // Calculate success rate (placeholder - can be customized based on your business logic)
        const successRate = applications > 0 ? "N/A" : "0%";

        return NextResponse.json({
            totalUsers,
            colleges,
            applications,
            successRate
        });

    } catch (error) {
        console.error("Error fetching stats:", error);
        return NextResponse.json({
            totalUsers: 0,
            colleges: 0,
            applications: 0,
            successRate: "0%"
        });
    }
}
