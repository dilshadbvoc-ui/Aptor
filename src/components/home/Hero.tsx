"use client";

import Link from "next/link";
import Image from "next/image";
import { Crown, Star, Diamond, ArrowRight, Hash } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formData.email || !formData.name || !formData.phone) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Phone validation
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a valid phone number');
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
        <section className="relative min-h-[92vh] overflow-hidden mobile-safe-area-top py-14 lg:py-20 flex items-center bg-[#01160d]">
            {/* Aptor Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Aptor_hero.png"
                    alt="Aptor Hero Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Overlay gradient for contrast and high text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#01160d]/85 via-[#01160d]/60 to-black/30 pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column */}
                    <div className="fade-in text-center lg:text-left">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-6 shadow-sm">
                            <Crown className="w-4 h-4 text-[#095738]" />
                            <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">EDUCATION PORTAL</span>
                            <Hash className="w-3.5 h-3.5 text-[#095738]" />
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                            <span className="text-[#eab308] block">APTOR</span>
                            <span className="text-white block">Studies</span>
                        </h1>

                        {/* Description */}
                        <p className="text-[#cbf3df] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal opacity-90">
                            Experience quality education services with our comprehensive platform. Your gateway to top institutions and career opportunities in India&apos;s educational landscape.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                            <Link 
                                href="/counselling" 
                                className="bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <Crown className="w-4 h-4" />
                                Get Counselling
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/colleges"
                                className="bg-[#063b25]/80 hover:bg-[#084e31] border border-[#1a6e46] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
                            >
                                <Diamond className="w-4 h-4 text-emerald-400" />
                                Explore Programs
                            </Link>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                            {[
                                { num: "500+", label: "Partner Institutions", icon: Crown },
                                { num: "10K+", label: "Success Stories", icon: Star },
                                { num: "95%", label: "Placement Rate", icon: Diamond },
                            ].map((stat) => (
                                <div 
                                    key={stat.label} 
                                    className="bg-[#053722]/80 backdrop-blur-md border border-[#0e5235] hover:border-[#1ca765]/50 rounded-2xl p-3.5 text-center transition-all duration-200"
                                >
                                    <div className="flex justify-center mb-1.5">
                                        <stat.icon className="w-4 h-4 text-[#eab308]" />
                                    </div>
                                    <div className="text-xl sm:text-2xl font-bold text-[#eab308] mb-0.5 tracking-tight">
                                        {stat.num}
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-[#a7f3d0] font-medium leading-tight line-clamp-2">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form Card */}
                    <div className="lg:ml-auto w-full max-w-md slide-up z-10">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 border border-emerald-100/20">
                            
                            {/* Form Header Badge */}
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-3">
                                    <Crown className="w-3.5 h-3.5 text-[#095738]" />
                                    <span className="text-[#095738] text-[11px] font-bold tracking-wide uppercase">FREE CONSULTATION</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#063b25] mb-1">
                                    Expert Consultation
                                </h3>
                                <p className="text-xs text-gray-500 font-medium">
                                    Get personalized guidance from our education experts
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-[#f8faf9] border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#063b25] focus:border-transparent transition-all placeholder:text-gray-400"
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
                                        className="w-full px-4 py-3 bg-[#f8faf9] border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#063b25] focus:border-transparent transition-all placeholder:text-gray-400"
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
                                        className="w-full px-4 py-3 bg-[#f8faf9] border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#063b25] focus:border-transparent transition-all placeholder:text-gray-400"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all duration-200 cursor-pointer mt-2"
                                >
                                    <Crown className="w-4 h-4" />
                                    Request Free Session
                                </button>
                            </form>

                            {/* Form Footer */}
                            <p className="text-[11px] text-[#095738] mt-4 text-center font-medium">
                                By submitting, you agree to our Terms & Privacy Policy
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}


