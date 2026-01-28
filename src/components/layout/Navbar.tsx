"use client";

import Link from "next/link";
import { Menu, X, Phone, Mail, Crown, Sparkles } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/universities-colleges", label: "Universities & Colleges" },
    { href: "/courses", label: "Exclusive Courses" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/about", label: "About Us" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Top Bar - Mobile Optimized */}
            <div className="bg-green-800/95 backdrop-blur-md text-white py-2 sm:py-3 text-xs sm:text-sm border-b border-green-500/30 mobile-safe-area-top">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Mobile: Show only phone and portal badge */}
                        <div className="flex items-center space-x-3 sm:space-x-8">
                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                <span className="text-green-100 text-xs sm:text-sm">+91 95267 97987</span>
                            </div>
                            <div className="hidden sm:flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-yellow-400" />
                                <span className="text-green-100">info@aptorstudies.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-6">
                            <div className="flex items-center space-x-1 sm:space-x-2 text-yellow-400">
                                <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="text-xs font-medium hidden sm:inline">EDUCATION PORTAL</span>
                                <span className="text-xs font-medium sm:hidden">PORTAL</span>
                            </div>
                            <div className="hidden md:flex items-center">
                                <Link href="/login" className="text-green-100 hover:text-yellow-400 transition-colors font-medium text-sm">
                                    Member Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Mobile Optimized */}
            <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-green-200 shadow-sm mobile-safe-area">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo - Mobile Optimized */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative">
                                <img 
                                    src="/logo.png" 
                                    alt="APTOR Studies Logo" 
                                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl object-cover shadow-lg group-hover:shadow-green-400/25 transition-all duration-300"
                                />
                                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-black" />
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 xl:px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg group ${
                                        pathname === link.href
                                            ? "text-green-700 bg-green-100"
                                            : "text-green-600 hover:text-green-800 hover:bg-green-50"
                                    }`}
                                >
                                    <span className="relative z-10 line-clamp-1">{link.label}</span>
                                    {pathname === link.href && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button & Login - Mobile Optimized */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                            {/* Small Login Button */}
                            <Link
                                href="/api/auth/signin"
                                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs lg:text-sm font-medium text-green-600 hover:text-green-800 border border-green-300 hover:border-green-400 rounded-lg transition-all duration-300 min-h-[36px] lg:min-h-[40px]"
                            >
                                <Crown className="w-3 h-3 lg:w-4 lg:h-4" />
                                <span>Login</span>
                            </Link>
                            
                            {/* Counselling Button */}
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center gap-1.5 lg:gap-2 text-black font-semibold text-sm lg:text-base px-3 lg:px-6 py-2 lg:py-3"
                            >
                                <Crown className="w-3 h-3 lg:w-4 lg:h-4" />
                                <span className="hidden lg:inline">Counselling</span>
                                <span className="lg:hidden">Counsel</span>
                            </Link>
                        </div>

                        {/* Mobile menu button - Touch Optimized */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2.5 sm:p-3 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation - Enhanced */}
                    {isOpen && (
                        <div className="lg:hidden border-t border-green-200 bg-white/95 backdrop-blur-md mobile-safe-area-bottom">
                            <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2 max-h-[80vh] overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium rounded-lg sm:rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                                            pathname === link.href
                                                ? "text-green-700 bg-green-100 border border-green-200"
                                                : "text-green-600 hover:text-green-800 hover:bg-green-50 active:bg-green-100"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                
                                {/* Mobile Login Link */}
                                <div className="pt-3 sm:pt-4 border-t border-green-200 mt-3 sm:mt-4">
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium text-green-700 bg-green-100 border border-green-200 hover:bg-green-200 rounded-lg sm:rounded-xl transition-all duration-300 min-h-[44px] flex items-center gap-2"
                                    >
                                        <Crown className="w-4 h-4" />
                                        Member Login
                                    </Link>
                                </div>
                                
                                {/* Mobile CTA */}
                                <div className="pt-4 sm:pt-6 border-t border-green-200 mt-4 sm:mt-6">
                                    <Link
                                        href="/counselling"
                                        onClick={() => setIsOpen(false)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold min-h-[48px]"
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
