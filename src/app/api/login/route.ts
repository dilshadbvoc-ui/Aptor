import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { loginSchema } from "@/lib/validation";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = loginSchema.parse(body);
    const { email, password } = validatedData;
    
    console.log("Login attempt for:", email);
    
    await connectDB();
    
    // Find user in database
    const user = await User.findOne({ 
      email: email.toLowerCase(),
      isActive: true 
    });

    if (!user) {
      console.log("User not found:", email);
      return NextResponse.json({ 
        success: false,
        error: "Invalid email or password"
      }, { status: 401 });
    }

    // Verify password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      console.log("Invalid password for user:", email);
      return NextResponse.json({ 
        success: false,
        error: "Invalid email or password"
      }, { status: 401 });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    console.log("User authenticated successfully:", email);
    
    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user._id.toString(),
        email: user.email,
        role: user.role 
      },
      process.env.AUTH_SECRET || "fallback-secret",
      { expiresIn: "7d" }
    );
    
    // Set HTTP-only cookie
    const response = NextResponse.json({ 
      success: true,
      message: "Login successful",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
    
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });
    
    return response;
    
  } catch (error) {
    console.error("Login error:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ 
        success: false,
        error: "Invalid input data"
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      success: false,
      error: "Login failed"
    }, { status: 500 });
  }
}