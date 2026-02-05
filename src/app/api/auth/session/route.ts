import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-middleware";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET(request: NextRequest) {
  try {
    const authUser = verifyToken(request);
    
    if (!authUser) {
      return NextResponse.json({ user: null });
    }
    
    // Get fresh user data from database
    await connectDB();
    const user = await User.findById(authUser.userId).select('-password');
    
    if (!user || !user.isActive) {
      return NextResponse.json({ user: null });
    }
    
    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
    
  } catch (error) {
    console.error("Session check error:", error);
    return NextResponse.json({ user: null });
  }
}