"use client";

import { 
    Building2, 
    BookOpen, 
    GraduationCap, 
    Laptop, 
    Award, 
    Users, 
    ArrowRight, 
    Crown, 
    Diamond
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Colleges",
        description: "Partnered with top institutions and experienced faculty.",
        icon: Building2,
        href: "/colleges",
    },
    {
        title: "Courses",
        description: "Industry-aligned curriculum for career advancement.",
        icon: BookOpen,
        href: "/courses",
    },
    {
        title: "Scholarships",
        description: "Exclusive funding opportunities worth millions.",
        icon: GraduationCap,
        href: "/scholarships",
    },
    {
        title: "Online Learning",
        description: "Learn anytime, anywhere with personalized mentorship.",
        icon: Laptop,
        href: "/courses",
    },
    {
        title: "Programs",
        description: "Short-term programs designed for future leaders.",
        icon: Award,
        href: "/courses",
    },
    {
        title: "Counselling",
        description: "Expert guidance for your academic and career journey.",
        icon: Users,
        href: "/counselling",
    }
];

export function FeaturesGrid() {
    return (
        <section className="relative bg-[#f8faf9] bg-light-green-dots overflow-hidden mobile-safe-area">
            {/* Top Dark Green Banner Header */}
            <div className="relative bg-[#063326] bg-light-green-dots-dark text-white pt-16 pb-32 px-4 sm:px-6 lg:px-8">
                {/* Background Pattern / Subtle Image Overlay */}
                <div 
                    className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')` }}
                />

                {/* Top-Left Decorative Concentric Arcs */}
                <svg className="absolute top-0 left-0 w-40 sm:w-64 h-40 sm:h-64 pointer-events-none opacity-25" viewBox="0 0 200 200" fill="none">
                    <circle cx="0" cy="0" r="180" stroke="#f3b538" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="145" stroke="#f3b538" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="110" stroke="#f3b538" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="75" stroke="#f3b538" strokeWidth="1.5" />
                </svg>

                {/* Top-Right Decorative Concentric Arcs */}
                <svg className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 pointer-events-none opacity-25" viewBox="0 0 200 200" fill="none">
                    <circle cx="200" cy="0" r="180" stroke="#f3b538" strokeWidth="1.5" />
                    <circle cx="200" cy="0" r="145" stroke="#f3b538" strokeWidth="1.5" />
                    <circle cx="200" cy="0" r="110" stroke="#f3b538" strokeWidth="1.5" />
                    <circle cx="200" cy="0" r="75" stroke="#f3b538" strokeWidth="1.5" />
                </svg>

                <div className="relative max-w-5xl mx-auto text-center z-10">
                    {/* Subtitle tag */}
                    <span className="inline-block text-[#f3b538] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                        OUR SERVICES
                    </span>

                    {/* Main Title with Serif font and highlighted keywords */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.15] mb-6 text-white font-normal">
                        Empowering <span className="text-[#f3b538] font-serif font-medium">Education.</span>
                        <br />
                        Enriching <span className="text-[#f3b538] font-serif font-medium">Futures.</span>
                    </h2>

                    {/* Subdescription */}
                    <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
                        Discover our comprehensive range of educational services designed to help students achieve excellence.
                    </p>
                </div>

                {/* Curved Bottom Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0">
                    <svg 
                        className="relative block w-full h-12 sm:h-20 md:h-24 text-[#f8faf9]" 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none"
                    >
                        <path 
                            d="M0,0 C300,85 900,85 1200,0 L1200,120 L0,120 Z" 
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Cards Grid Container - Elevated overlay */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 z-20 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(6,51,38,0.12)] border border-slate-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center w-full">
                                    {/* Circular Icon Container */}
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#063326] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#0c4a38] transition-all duration-300 shadow-md">
                                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-[1.75]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#063326] transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Arrow Button */}
                                <div className="pt-2">
                                    <ArrowRight className="w-5 h-5 text-slate-700 group-hover:text-[#063326] group-hover:translate-x-1.5 transition-all duration-300" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Additional Student Support & Experience Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-emerald-100">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-[#063326]" />
                            <span className="text-[#063326] text-xs font-semibold uppercase tracking-wider">STUDENT EXPERIENCE</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#063326] mb-4">Transforming Education Into an Enriching Journey</h3>
                        <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
                            Our platform is a comprehensive educational portal, dedicated to transforming education into an enriching experience. We focus on building trust, maintaining quality standards, and attracting students from across the globe.
                        </p>
                    </div>

                    <div className="bg-[#063326]/5 border border-[#063326]/10 rounded-2xl p-6 sm:p-8 mb-10 text-center">
                        <blockquote className="text-lg sm:text-xl font-medium text-[#063326] italic">
                            "Quality education is not just about learning—it's about transformation, and our platform is your gateway to excellence."
                        </blockquote>
                    </div>

                    {/* Vision & Mission Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center hover:border-emerald-300 transition-colors">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-[#063326] rounded-xl flex items-center justify-center shadow-sm">
                                    <Diamond className="w-6 h-6 text-[#f3b538]" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-[#063326] mb-3">Our Vision</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                To establish our platform as a leading educational portal by revolutionizing admission processes, providing quality career guidance, and fostering partnerships with top institutions.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center hover:border-emerald-300 transition-colors">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-[#063326] rounded-xl flex items-center justify-center shadow-sm">
                                    <Crown className="w-6 h-6 text-[#f3b538]" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-[#063326] mb-3">Our Mission</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                To attract and empower ambitious students by providing access to quality education experiences in India, nurturing talent, and creating a network of future industry leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

