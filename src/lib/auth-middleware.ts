import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export interface AuthUser {
  userId: string;
  email: string;
  role: string;
}

export function verifyToken(request: NextRequest): AuthUser | null {
  try {
    const token = request.cookies.get("auth-token")?.value;
    
    if (!token) {
      return null;
    }
    
    const decoded = jwt.verify(
      token, 
      process.env.AUTH_SECRET || "fallback-secret"
    ) as AuthUser;
    
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export function isAuthenticated(request: NextRequest): boolean {
  return verifyToken(request) !== null;
}

export function isAdmin(request: NextRequest): boolean {
  const user = verifyToken(request);
  return user?.role === "admin";
}

export function requireAdmin(request: NextRequest): AuthUser {
  const user = verifyToken(request);
  if (!user) {
    throw new Error('Unauthorized');
  }
  if (user.role !== 'admin') {
    throw new Error('Forbidden: Admin access required');
  }
  return user;
}