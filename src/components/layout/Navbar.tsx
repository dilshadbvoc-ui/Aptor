"use client";

import Link from "next/link";
import { Menu, X, Phone, Mail, Crown, Sparkles } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/universities-colleges", label: "Colleges" },
    { href: "/courses", label: "Courses" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/about", label: "About Us" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Top Bar - Standardized */}
            <div className="bg-green-800/95 backdrop-blur-md text-white py-3 text-sm border-b border-green-500/30 mobile-safe-area-top">
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
            <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-green-200 shadow-sm mobile-safe-area">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - Standardized */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative">
                                <img 
                                    src="/logo.png" 
                                    alt="APTOR Studies Logo" 
                                    className="w-16 h-16 rounded-xl object-cover shadow-lg group-hover:shadow-green-400/25 transition-all duration-300"
                                />
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent-400 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-2.5 h-2.5 text-black" />
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation - Standardized */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg group min-h-touch ${
                                        pathname === link.href
                                            ? "text-green-700 bg-green-100"
                                            : "text-green-600 hover:text-green-800 hover:bg-green-50"
                                    }`}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    {pathname === link.href && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons - Standardized */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/login"
                                className="btn-secondary px-4 py-2 text-sm"
                            >
                                <Crown className="w-4 h-4" />
                                Login
                            </Link>
                            
                            <Link
                                href="/counselling"
                                className="btn-primary px-6 py-3"
                            >
                                <Crown className="w-4 h-4" />
                                <span className="hidden lg:inline">Counselling</span>
                                <span className="lg:hidden">Counsel</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button - Standardized */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-3 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all duration-300 min-w-touch min-h-touch flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation - Standardized */}
                    {isOpen && (
                        <div className="lg:hidden border-t border-green-200 bg-white/95 backdrop-blur-md mobile-safe-area-bottom">
                            <div className="py-6 space-y-2 max-h-[80vh] overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-6 py-4 text-sm font-medium rounded-xl transition-all duration-300 min-h-touch-lg flex items-center ${
                                            pathname === link.href
                                                ? "text-green-700 bg-green-100 border border-green-200"
                                                : "text-green-600 hover:text-green-800 hover:bg-green-50 active:bg-green-100"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                
                                {/* Mobile Login */}
                                <div className="pt-4 border-t border-green-200 mt-4">
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-6 py-4 text-sm font-medium text-green-700 bg-green-100 border border-green-200 hover:bg-green-200 rounded-xl transition-all duration-300 min-h-touch-lg flex items-center gap-2"
                                    >
                                        <Crown className="w-4 h-4" />
                                        Member Login
                                    </Link>
                                </div>
                                
                                {/* Mobile CTA */}
                                <div className="pt-6 border-t border-green-200 mt-6">
                                    <Link
                                        href="/counselling"
                                        onClick={() => setIsOpen(false)}
                                        className="btn-primary w-full min-h-touch-lg"
                                    >
                                        <Crown className="w-4 h-4" />
                                        Counselling
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
