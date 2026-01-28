import { NextResponse } from "next/server";

export async function GET() {
  // Redirect old NextAuth signin requests to our login page
  return NextResponse.redirect(new URL("/login", process.env.NEXTAUTH_URL || "http://localhost:7001"));
}

export async function POST() {
  // Redirect old NextAuth signin requests to our login API
  return NextResponse.redirect(new URL("/api/login", process.env.NEXTAUTH_URL || "http://localhost:7001"));
}