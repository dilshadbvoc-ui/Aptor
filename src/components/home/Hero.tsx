"use client";

import Link from "next/link";
import { Crown, Sparkles, ArrowRight, Star, Diamond } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.email || !formData.name || !formData.phone) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: 'Elite counselling request submitted via premium hero form'
                }),
            });

            if (response.ok) {
                alert('Request submitted successfully! Our elite team will contact you soon.');
                setFormData({ email: '', name: '', phone: '' });
            } else {
                const error = await response.json();
                alert(error.message || 'Failed to submit request. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Failed to submit request. Please try again.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="relative min-h-screen animated-bg overflow-hidden mobile-safe-area-top">
            {/* Premium Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 sm:opacity-20"
                    style={{
                        backgroundImage: "url('/hero-students.png')"
                    }}
                />
                {/* Luxury Overlay Pattern - Mobile Optimized */}
                <div className="absolute inset-0 opacity-5 sm:opacity-10">
                    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 border border-yellow-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-16 sm:bottom-32 left-16 sm:left-32 w-10 sm:w-20 h-10 sm:h-20 border border-yellow-400 rounded-full animate-pulse delay-2000"></div>
                </div>
            </div>
            
            {/* Premium Content - Mobile Optimized */}
            <div className="relative z-10 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        {/* Left Content - Premium Mobile Optimized */}
                        <div className="text-white fade-in text-center lg:text-left">
                            {/* Elite Badge - Mobile Optimized */}
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6">
                                <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                <span className="text-yellow-400 text-xs sm:text-sm font-medium">ELITE EDUCATION PORTAL</span>
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-shadow-premium">
                                <span className="gradient-text">Aptor</span>
                                <br />
                                <span className="text-white">Studies</span>
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                                Experience premium education services with our elite platform. Your exclusive gateway to elite institutions and luxury career opportunities in India's Silicon Valley.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 justify-center lg:justify-start">
                                <Link 
                                    href="/counselling" 
                                    className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold text-sm sm:text-base min-h-[48px] sm:min-h-[52px]"
                                >
                                    <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Elite Counselling
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                                
                                <Link
                                    href="/universities"
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-medium text-white border-2 border-yellow-400 rounded-lg sm:rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 glass min-h-[48px] sm:min-h-[52px]"
                                >
                                    <Diamond className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Explore Premium
                                </Link>
                            </div>

                            {/* Premium Stats - Mobile Optimized */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-md sm:max-w-lg mx-auto lg:mx-0">
                                {[
                                    { num: "500+", label: "Elite Partners", icon: Crown },
                                    { num: "10K+", label: "Success Stories", icon: Star },
                                    { num: "95%", label: "Premium Placements", icon: Diamond },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center card-premium p-2 sm:p-3 lg:p-4 hover-lift-premium">
                                        <div className="flex justify-center mb-1 sm:mb-2">
                                            <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
                                        </div>
                                        <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text mb-0.5 sm:mb-1">
                                            {stat.num}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400 line-clamp-mobile-2">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Premium Form Mobile Optimized */}
                        <div className="lg:ml-auto slide-up order-first lg:order-last">
                            <div className="card-premium p-4 sm:p-6 lg:p-8 max-w-md mx-auto glow">
                                <div className="text-center mb-4 sm:mb-6">
                                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-3 sm:mb-4">
                                        <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                        <span className="text-yellow-400 text-xs font-medium">EXCLUSIVE ACCESS</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Elite Consultation</h3>
                                    <p className="text-sm sm:text-base text-gray-400">Get personalized guidance from our premium education experts</p>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold text-sm sm:text-base min-h-[48px]"
                                    >
                                        <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Request Elite Session
                                    </button>
                                </form>
                                
                                <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center leading-relaxed">
                                    By submitting, you agree to our Premium Terms & Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Curved Bottom Section - Mobile Optimized */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-12 sm:h-16 md:h-20 lg:h-32"
                >
                    <defs>
                        <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1a1a1a" />
                            <stop offset="50%" stopColor="#2a2a2a" />
                            <stop offset="100%" stopColor="#1a1a1a" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="url(#curveGradient)"
                    />
                </svg>
            </div>
        </section>
    );
}
