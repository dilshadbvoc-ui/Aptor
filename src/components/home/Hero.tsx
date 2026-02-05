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
        <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50 to-white overflow-hidden mobile-safe-area-top">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-green-50/30"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                        backgroundImage: "url('/hero-students.png')"
                    }}
                />
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 border border-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-32 w-24 h-24 border border-accent-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-32 left-32 w-20 h-20 border border-green-400 rounded-full animate-pulse"></div>
                </div>
            </div>
            
            {/* Content - Standardized Spacing */}
            <div className="relative z-10 section-padding">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content - Standardized Typography */}
                        <div className="text-green-800 fade-in text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-6">
                                <Crown className="w-4 h-4 text-accent-500" />
                                <span className="text-green-700 text-sm font-medium">EDUCATION PORTAL</span>
                                <Sparkles className="w-4 h-4 text-accent-500" />
                            </div>

                            <h1 className="heading-xl mb-6">
                                <span className="gradient-text">APTOR</span>
                                <br />
                                <span className="text-green-800">Studies</span>
                            </h1>
                            
                            <p className="text-body mb-8 max-w-2xl mx-auto lg:mx-0">
                                Experience quality education services with our comprehensive platform. Your gateway to top institutions and career opportunities in India&apos;s educational landscape.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                                <Link 
                                    href="/counselling" 
                                    className="btn-primary"
                                >
                                    <Crown className="w-5 h-5" />
                                    Get Counselling
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                
                                <Link
                                    href="/universities"
                                    className="btn-secondary"
                                >
                                    <Diamond className="w-5 h-5" />
                                    Explore Programs
                                </Link>
                            </div>

                            {/* Stats Grid - Standardized */}
                            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                                {[
                                    { num: "500+", label: "Partner Institutions", icon: Crown },
                                    { num: "10K+", label: "Success Stories", icon: Star },
                                    { num: "95%", label: "Placement Rate", icon: Diamond },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center card">
                                        <div className="flex justify-center mb-2">
                                            <stat.icon className="w-6 h-6 text-accent-500" />
                                        </div>
                                        <div className="heading-md gradient-text mb-1">
                                            {stat.num}
                                        </div>
                                        <div className="text-small line-clamp-2">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Standardized Form */}
                        <div className="lg:ml-auto slide-up order-first lg:order-last">
                            <div className="card max-w-md mx-auto">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-300 rounded-full mb-4">
                                        <Crown className="w-4 h-4 text-accent-500" />
                                        <span className="text-green-700 text-xs font-medium">FREE CONSULTATION</span>
                                    </div>
                                    <h3 className="heading-md text-green-800 mb-2">Expert Consultation</h3>
                                    <p className="text-small text-green-600">Get personalized guidance from our education experts</p>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-input"
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
                                            className="form-input"
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
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-primary w-full"
                                    >
                                        <Crown className="w-5 h-5" />
                                        Request Free Session
                                    </button>
                                </form>
                                
                                <p className="text-xs text-green-500 mt-4 text-center">
                                    By submitting, you agree to our Terms & Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-20"
                >
                    <defs>
                        <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f0f9f4" />
                            <stop offset="50%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#f0f9f4" />
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
