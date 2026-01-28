import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "@/lib/db"
import User from "@/models/User"
import { authConfig } from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    console.log("Auth attempt for:", credentials?.email);
                    
                    await connectDB();

                    const email = credentials?.email as string;
                    const password = credentials?.password as string;

                    if (!email || !password) {
                        console.log("Missing email or password");
                        return null;
                    }

                    // Find user in database
                    const user = await User.findOne({ 
                        email: email.toLowerCase(),
                        isActive: true 
                    });

                    if (!user) {
                        console.log("User not found:", email);
                        return null;
                    }

                    // Verify password
                    const isValidPassword = await user.comparePassword(password);
                    if (!isValidPassword) {
                        console.log("Invalid password for user:", email);
                        return null;
                    }

                    // Update last login
                    user.lastLogin = new Date();
                    await user.save();

                    console.log("User authenticated successfully:", email);
                    
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    };
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && token.sub) {
                session.user.id = token.sub;
                session.user.role = token.role as string;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
});
