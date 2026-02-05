"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "@/components/providers/SessionProvider";
import Link from "next/link";
import {
    Crown,
    Users,
    BookOpen,
    Star,
    Mail,
    Settings,
    LogOut,
    Home,
    Building2,
    GraduationCap,
    Search,
    Menu,
    X
} from "lucide-react";

const adminNavItems = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/universities", label: "Universities", icon: GraduationCap },
    { href: "/admin/colleges", label: "Affiliated Colleges", icon: Building2 },
    { href: "/admin/courses", label: "Courses", icon: BookOpen },
    { href: "/admin/blogs", label: "Blogs", icon: BookOpen },
    { href: "/admin/student-applications", label: "Applications", icon: Star },
    { href: "/admin/scholarship-applications", label: "Scholarship Applications", icon: GraduationCap },
    { href: "/admin/contacts", label: "Contacts", icon: Mail },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/seo", label: "SEO", icon: Search },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, status, logout } = useSession();
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (status === "loading") return;

        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    const handleLogout = async () => {
        setIsLoggingOut(true);

        try {
            await logout();
            router.push("/login");
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center mobile-safe-area">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-green-900">Loading...</p>
                </div>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return null;
    }

    return (
        <div className="min-h-screen bg-white mobile-safe-area">
            <div className="flex">
                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-50 border-r border-green-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                    <div className="flex items-center justify-between h-16 px-4 border-b border-green-200">
                        <div className="flex items-center gap-2">
                            <Crown className="w-6 h-6 text-green-600" />
                            <span className="text-green-900 font-semibold">Admin Panel</span>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden text-green-600 hover:text-green-700"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="mt-4 px-2">
                        {adminNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className="flex items-center gap-3 px-3 py-2 text-green-700 hover:text-green-900 hover:bg-green-100 rounded-lg transition-colors duration-200 mb-1"
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 lg:ml-0">
                    {/* Top Bar */}
                    <div className="bg-white border-b border-green-200 px-4 py-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    className="lg:hidden text-green-600 hover:text-green-700"
                                >
                                    <Menu className="w-6 h-6" />
                                </button>
                                <div className="hidden sm:block">
                                    <p className="text-sm text-green-600">Welcome back,</p>
                                    <p className="text-green-900 font-medium">{user?.name}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right hidden md:block">
                                    <p className="text-xs text-green-600">Logged in as</p>
                                    <p className="text-green-700 text-sm font-medium">{user?.email}</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    disabled={isLoggingOut}
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                >
                                    <LogOut className="w-4 h-4" />
                                    {isLoggingOut ? "Logging out..." : "Logout"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Page Content */}
                    <div className="p-4 lg:p-6">
                        {children}
                    </div>
                </div>
            </div>

            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}