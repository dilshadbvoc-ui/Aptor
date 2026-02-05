import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import User from "@/models/User";
import University from "@/models/University";
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
        const [totalUsers, universities, applications] = await Promise.all([
            User.countDocuments({ isActive: true }),
            University.countDocuments().catch(() => 0),
            Contact.countDocuments().catch(() => 0)
        ]);

        // Calculate success rate (placeholder - can be customized based on your business logic)
        const successRate = applications > 0 ? "N/A" : "0%";

        return NextResponse.json({
            totalUsers,
            universities,
            applications,
            successRate
        });

    } catch (error) {
        console.error("Error fetching stats:", error);
        return NextResponse.json({
            totalUsers: 0,
            universities: 0,
            applications: 0,
            successRate: "0%"
        });
    }
}
