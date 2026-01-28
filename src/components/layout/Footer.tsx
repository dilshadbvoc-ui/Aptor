import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Crown, Diamond, Star, Sparkles } from "lucide-react";

const quickLinks = [
    { label: "Universities & Colleges", href: "/universities-colleges" },
    { label: "Exclusive Courses", href: "/courses" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

const services = [
    { label: "Counselling", href: "/counselling" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Internships", href: "/internships" },
    { label: "VIP Events", href: "/events" },
    { label: "Programs", href: "/courses" },
    { label: "Accommodation", href: "/accommodation" },
];

const locations = [
    "Vadakara",
    "Tirur", 
    "Nadhapuram",
    "Kalpetta",
    "Calicut",
    "Kochi"
];

export function Footer() {
    return (
        <footer className="bg-black border-t border-yellow-400/20 mobile-safe-area-bottom">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Brand Section - Mobile Optimized */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center mb-4 sm:mb-6 group">
                            <div className="relative">
                                <img 
                                    src="/logo.png" 
                                    alt="Aptor Studies Logo" 
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300"
                                />
                                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-black" />
                                </div>
                            </div>
                        </Link>
                        
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                            Aptor Studies - The world's most exclusive education portal connecting students with top institutions and luxury career opportunities globally.
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400/10 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                </div>
                                <span className="text-xs sm:text-sm truncate">info@aptorstudies.com</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400/10 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                </div>
                                <span className="text-xs sm:text-sm">+91 95267 97987</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400/10 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                </div>
                                <span className="text-xs sm:text-sm">Calicut, Kerala</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - Mobile Optimized */}
                    <div>
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                            <Diamond className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                            <h4 className="text-base sm:text-lg font-semibold text-white">Navigation</h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={`${link.href}-${index}`}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm min-h-[32px] py-1"
                                    >
                                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="line-clamp-1">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services - Mobile Optimized */}
                    <div>
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                            <h4 className="text-base sm:text-lg font-semibold text-white">Services</h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                            {services.map((service, index) => (
                                <li key={`${service.href}-${index}`}>
                                    <Link 
                                        href={service.href} 
                                        className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm min-h-[32px] py-1"
                                    >
                                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="line-clamp-1">{service.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branches - Mobile Optimized */}
                    <div>
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                            <h4 className="text-base sm:text-lg font-semibold text-white">Branches</h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                            {locations.map((location, index) => (
                                <li key={`location-${index}`}>
                                    <Link 
                                        href={`/accommodation?area=${location.toLowerCase()}`}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm min-h-[32px] py-1"
                                    >
                                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="line-clamp-1">{location}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Bottom Section - Mobile Optimized */}
                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-yellow-400/20">
                    <div className="flex flex-col space-y-4 sm:space-y-6">
                        {/* Social Media - Mobile Optimized */}
                        <div className="flex justify-center sm:justify-start">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                {[
                                    { icon: Facebook, href: "#" },
                                    { icon: Twitter, href: "#" },
                                    { icon: Instagram, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                ].map((social, index) => (
                                    <Link 
                                        key={index}
                                        href={social.href} 
                                        className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300 group min-w-[32px] min-h-[32px]"
                                    >
                                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        {/* Copyright & Links - Mobile Optimized */}
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
                                <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                &copy; {new Date().getFullYear()} Aptor Studies. All rights reserved.
                            </p>
                            
                            <div className="flex justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors min-h-[32px] flex items-center">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors min-h-[32px] flex items-center">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Badge - Mobile Optimized */}
                    <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-yellow-400/10">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-xs sm:text-sm font-medium">EDUCATION PORTAL</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
