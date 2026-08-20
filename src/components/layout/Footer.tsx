import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Crown, Diamond, Star, Sparkles } from "lucide-react";

const quickLinks = [
    { label: "Colleges", href: "/colleges" },
    { label: "Courses", href: "/courses" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Aptor Academy", href: "/academy" },
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

const services = [
    { label: "Counselling", href: "/counselling" },
    { label: "Scholarships", href: "/scholarships" },
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
        <footer className="bg-[#2A602E] border-t border-green-600 mobile-safe-area-bottom">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {/* Brand Section - Compact Spacing */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center mb-2.5 sm:mb-3 group">
                            <div className="relative">
                                <img 
                                    src="/logo.png" 
                                    alt="APTOR Studies Logo" 
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover shadow-lg group-hover:shadow-green-400/25 transition-all duration-300"
                                />
                                <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-2 h-2 text-black" />
                                </div>
                            </div>
                        </Link>
                        
                        <p className="text-green-100 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                            Aptor Studies - Your trusted education portal connecting students with top institutions and quality career opportunities globally.
                        </p>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center gap-2 sm:gap-2.5 text-green-100 hover:text-yellow-400 transition-colors">
                                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-700 rounded-md flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-3 h-3 text-yellow-400" />
                                </div>
                                <span className="text-xs sm:text-sm truncate">info@aptorstudies.com</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-2.5 text-green-100 hover:text-yellow-400 transition-colors">
                                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-700 rounded-md flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-3 h-3 text-yellow-400" />
                                </div>
                                <span className="text-xs sm:text-sm">+91 95267 97987</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-2.5 text-green-100 hover:text-yellow-400 transition-colors">
                                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-700 rounded-md flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-3 h-3 text-yellow-400" />
                                </div>
                                <span className="text-xs sm:text-sm">Calicut, Kerala</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - Compact Spacing */}
                    <div>
                        <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3">
                            <Diamond className="w-4 h-4 text-yellow-400" />
                            <h4 className="text-sm sm:text-base font-bold text-white">Navigation</h4>
                        </div>
                        <ul className="space-y-1 sm:space-y-1.5">
                            {quickLinks.map((link, index) => (
                                <li key={`${link.href}-${index}`}>
                                    <Link 
                                        href={link.href} 
                                        className="text-green-200 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-xs sm:text-sm py-0.5"
                                    >
                                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="line-clamp-1">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services - Compact Spacing */}
                    <div>
                        <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <h4 className="text-sm sm:text-base font-bold text-white">Services</h4>
                        </div>
                        <ul className="space-y-1 sm:space-y-1.5">
                            {services.map((service, index) => (
                                <li key={`${service.href}-${index}`}>
                                    <Link 
                                        href={service.href} 
                                        className="text-green-200 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-xs sm:text-sm py-0.5"
                                    >
                                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="line-clamp-1">{service.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branches - Compact Spacing */}
                    <div>
                        <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <h4 className="text-sm sm:text-base font-bold text-white">Branches</h4>
                        </div>
                        <ul className="space-y-1 sm:space-y-1.5">
                            {locations.map((location, index) => (
                                <li key={`location-${index}`}>
                                    <Link 
                                        href={`/accommodation?area=${location.toLowerCase()}`}
                                        className="text-green-200 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-xs sm:text-sm py-0.5"
                                    >
                                        <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="line-clamp-1">{location}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Bottom Section - Compact Spacing */}
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-green-600/80">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        {/* Social Media & Copyright Row */}
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                            
                            <div className="flex items-center justify-center sm:justify-start space-x-3">
                                {[
                                    { icon: Facebook, href: "#" },
                                    { icon: Twitter, href: "#" },
                                    { icon: Instagram, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                ].map((social, index) => (
                                    <Link 
                                        key={index}
                                        href={social.href} 
                                        className="w-7 h-7 sm:w-8 sm:h-8 bg-green-700 rounded-md flex items-center justify-center text-green-200 hover:text-yellow-400 hover:bg-green-600 transition-all duration-300 group"
                                    >
                                        <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                                    </Link>
                                ))}
                            </div>

                            <p className="text-green-200 text-xs text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                                <Crown className="w-3 h-3 text-yellow-400" />
                                &copy; {new Date().getFullYear()} Aptor Studies. All rights reserved.
                            </p>
                            
                            <div className="flex justify-center sm:justify-end gap-4 text-xs">
                                <Link href="/privacy-policy" className="text-green-200 hover:text-yellow-400 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-green-200 hover:text-yellow-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Badge - Compact */}
                    {/* <div className="text-center mt-3 sm:mt-4 pt-3 border-t border-green-700/80">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-700/90 border border-green-600 rounded-full">
                            <Crown className="w-3 h-3 text-yellow-400" />
                            <span className="text-yellow-400 text-xs font-semibold">EDUCATION PORTAL</span>
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

