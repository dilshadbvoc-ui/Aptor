"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Routes that should not have navbar and footer
    const noLayoutRoutes = ['/login', '/admin'];
    
    // Check if current path should exclude layout
    const shouldExcludeLayout = noLayoutRoutes.some(route => 
        pathname === route || pathname.startsWith(route + '/')
    );

    if (shouldExcludeLayout) {
        return <>{children}</>;
    }

    return (
        <div className="flex flex-col min-h-screen mobile-safe-area">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}