"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Crown, Users, BookOpen, Star, TrendingUp, Calendar, Mail, Settings } from "lucide-react";
import { useSession } from "@/components/providers/SessionProvider";
import Link from "next/link";

interface DashboardStats {
    totalUsers: number;
    universities: number;
    applications: number;
    successRate: string;
}

export default function AdminDashboard() {
    const { user, status } = useSession();
    const router = useRouter();
    const [stats, setStats] = useState<DashboardStats>({
        totalUsers: 0,
        universities: 0,
        applications: 0,
        successRate: "0%"
    });

    useEffect(() => {
        if (status === "loading") return; // Still loading

        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    // Fetch real stats from API
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/admin/stats');
                if (response.ok) {
                    const data = await response.json();
                    setStats(data);
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            }
        };

        if (status === "authenticated") {
            fetchStats();
        }
    }, [status]);

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
        return null; // Will redirect to login
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-4">
                    <Crown className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 text-sm font-medium">ADMIN DASHBOARD</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
                    Welcome back, <span className="gradient-text">{user?.name}</span>
                </h1>
                <p className="text-green-700">Manage your APTOR Studies admin portal</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Total Users", value: stats.totalUsers.toString(), icon: Users, color: "from-green-500 to-green-600" },
                    { title: "Universities", value: stats.universities.toString(), icon: BookOpen, color: "from-blue-500 to-blue-600" },
                    { title: "Applications", value: stats.applications.toString(), icon: Star, color: "from-yellow-500 to-yellow-600" },
                    { title: "Success Rate", value: stats.successRate, icon: TrendingUp, color: "from-purple-500 to-purple-600" },
                ].map((stat, index) => (
                    <div key={index} className="card-premium p-6 hover-lift-premium">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-600 text-sm">{stat.title}</p>
                                <p className="text-2xl font-bold text-green-900 mt-1">{stat.value}</p>
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
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                <action.icon className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
                                    {action.title}
                                </h3>
                                <p className="text-green-600 text-sm">{action.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Success Message */}
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Crown className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <h3 className="text-green-700 font-semibold">Login Successful!</h3>
                        <p className="text-green-600 text-sm">You have successfully logged into the APTOR Studies admin dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}