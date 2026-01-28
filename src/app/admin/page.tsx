"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Crown, Users, BookOpen, Star, TrendingUp, Calendar, Mail, Settings, LogOut } from "lucide-react";
import { useSession } from "@/components/providers/SessionProvider";
import Link from "next/link";

export default function AdminDashboard() {
    const { user, status, logout } = useSession();
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    
    useEffect(() => {
        if (status === "loading") return; // Still loading
        
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
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white">Loading...</p>
                </div>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return null; // Will redirect to login
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black mobile-safe-area">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header with Logout */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
                                <Crown className="w-4 h-4 text-yellow-400" />
                                <span className="text-yellow-400 text-sm font-medium">ADMIN DASHBOARD</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Welcome back, <span className="gradient-text">{user?.name}</span>
                            </h1>
                            <p className="text-gray-400">Manage your Aptor Studies premium portal</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm text-gray-400">Logged in as</p>
                                <p className="text-yellow-400 font-medium">{user?.email}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                            >
                                <LogOut className="w-4 h-4" />
                                {isLoggingOut ? "Logging out..." : "Logout"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: "Total Users", value: "1,234", icon: Users, color: "from-blue-500 to-blue-600" },
                        { title: "Universities", value: "156", icon: BookOpen, color: "from-green-500 to-green-600" },
                        { title: "Applications", value: "2,890", icon: Star, color: "from-yellow-500 to-yellow-600" },
                        { title: "Success Rate", value: "94%", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
                    ].map((stat, index) => (
                        <div key={index} className="card-premium p-6 hover-lift-premium">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-sm">{stat.title}</p>
                                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Manage Universities", desc: "Add and edit university listings", icon: BookOpen, href: "/admin/universities" },
                        { title: "View Applications", desc: "Review student applications", icon: Star, href: "/admin/student-applications" },
                        { title: "User Management", desc: "Manage user accounts", icon: Users, href: "/admin/users" },
                        { title: "Content Management", desc: "Edit blogs and content", icon: Calendar, href: "/admin/blogs" },
                        { title: "Contact Messages", desc: "View contact inquiries", icon: Mail, href: "/admin/contacts" },
                        { title: "Settings", desc: "System configuration", icon: Settings, href: "/admin/settings" },
                    ].map((action, index) => (
                        <Link key={index} href={action.href} className="card-premium p-6 hover-lift-premium group cursor-pointer block">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                                    <action.icon className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        {action.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{action.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Success Message */}
                <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Crown className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 className="text-green-400 font-semibold">Login Successful!</h3>
                            <p className="text-green-300 text-sm">You have successfully logged into the Aptor Studies admin dashboard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}