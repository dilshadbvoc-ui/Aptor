import type { NextAuthConfig } from "next-auth"

// Edge-compatible auth config WITHOUT database calls
// Used by middleware for session checks
export const authConfig = {
    providers: [],
    callbacks: {
        authorized: async ({ auth, request }) => {
            const isLoggedIn = !!auth?.user;
            const { pathname } = request.nextUrl;

            // Protect admin routes
            if (pathname.startsWith('/admin')) {
                return isLoggedIn;
            }

            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub;
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt",
    },
} satisfies NextAuthConfig;
