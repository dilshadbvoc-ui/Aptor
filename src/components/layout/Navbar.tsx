"use client";

import Link from "next/link";
import { Menu, X, Phone, Mail, Crown, Sparkles, Lock } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/colleges", label: "Colleges" },
    { href: "/courses", label: "Courses" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/academy", label: "Aptor Academy" },
    { href: "/about", label: "About Us" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Top Bar - Standardized */}
            <div className="bg-green-800/95 backdrop-blur-md text-white py-2 text-xs border-b border-green-500/30 mobile-safe-area-top">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                                <Phone className="w-4 h-4 text-accent-400" />
                                <span className="text-green-100">+91 95267 97987</span>
                            </div>
                            <div className="hidden sm:flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-accent-400" />
                                <span className="text-green-100">info@aptorstudies.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-accent-400">
                                <Crown className="w-4 h-4" />
                                <span className="text-xs font-medium hidden sm:inline">EDUCATION PORTAL</span>
                                <span className="text-xs font-medium sm:hidden">PORTAL</span>
                            </div>
                            <div className="hidden md:flex items-center">
                                <Link href="/login" className="text-green-100 hover:text-accent-400 transition-colors font-medium text-sm">
                                    Member Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Standardized */}
            <header className="bg-[#eef2f0]/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-300/60 shadow-sm mobile-safe-area">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - Standardized */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative">
                                <img 
                                    src="/logo.png" 
                                    alt="APTOR Studies Logo" 
                                    className="w-12 h-12 rounded-xl object-cover shadow-md group-hover:shadow-green-400/25 transition-all duration-300"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation - Clean Uppercase Pill Style */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-full group ${
                                        pathname === link.href
                                            ? "text-emerald-900 bg-emerald-100/90 font-extrabold"
                                            : "text-slate-800 hover:text-emerald-800 hover:bg-slate-200/60"
                                    }`}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons - Rounded Pill Green Style */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/login"
                                className="px-5.5 py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                            >
                                <span>Login</span>
                                <Lock className="w-3.5 h-3.5 shrink-0" />
                            </Link>
                            
                            <Link
                                href="/counselling"
                                className="px-5.5 py-3 bg-[#063326] hover:bg-[#084e31] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                            >
                                <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span className="hidden lg:inline">Counselling</span>
                                <span className="lg:hidden">Counsel</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button - Standardized */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-3 text-slate-800 hover:text-emerald-800 hover:bg-slate-200/60 rounded-lg transition-all duration-300 min-w-touch min-h-touch flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation - Styled */}
                    {isOpen && (
                        <div className="lg:hidden border-t border-slate-300/60 bg-[#eef2f0]/95 backdrop-blur-md mobile-safe-area-bottom">
                            <div className="py-6 space-y-2 max-h-[80vh] overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 min-h-touch-lg flex items-center ${
                                            pathname === link.href
                                                ? "text-emerald-900 bg-emerald-100/90 font-extrabold border border-emerald-300/60"
                                                : "text-slate-800 hover:text-emerald-800 hover:bg-slate-200/60 active:bg-slate-200"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                
                                {/* Mobile Login */}
                                <div className="pt-4 border-t border-slate-300/60 mt-4 px-4">
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-300 min-h-touch-lg flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        <span>Member Login</span>
                                        <Lock className="w-4 h-4" />
                                    </Link>
                                </div>
                                
                                {/* Mobile CTA */}
                                <div className="pt-3 border-t border-slate-300/60 mt-3 px-4">
                                    <Link
                                        href="/counselling"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#063326] hover:bg-[#084e31] rounded-full transition-all duration-300 min-h-touch-lg flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        <Crown className="w-4 h-4 text-amber-400" />
                                        <span>Counselling</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
