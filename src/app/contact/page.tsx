"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Crown, Star, Diamond, Sparkles, Clock, Globe } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">ELITE CONTACT</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">Connect</span>
                            <br />
                            <span className="text-white">with Elite Team</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Ready to transform your educational journey? Our premium consultants are here to provide personalized guidance and exclusive opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left side - Premium Info */}
                        <div className="slide-up">
                            <div className="card-premium p-8 h-full">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                                    <Diamond className="w-4 h-4 text-yellow-400" />
                                    <span className="text-yellow-400 text-sm font-medium">PREMIUM SUPPORT</span>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-4">
                                    Get <span className="gradient-text">Elite</span> Assistance
                                </h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Experience world-class support from our premium education consultants. We're here to guide you through every step of your elite educational journey.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 hover-lift-premium">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Mail className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Premium Email</div>
                                            <div className="font-medium text-white">info@aptorstudies.com</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 hover-lift-premium">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Phone className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Elite Hotline</div>
                                            <div className="font-medium text-white">+91 95267 97987</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 hover-lift-premium">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <MapPin className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Calicut, Kerala</div>
                                            <div className="font-medium text-white">Education Hub</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 hover-lift-premium">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Clock className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Elite Support Hours</div>
                                            <div className="font-medium text-white">Mon-Sat: 9:00 AM - 8:00 PM</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 hover-lift-premium">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Globe className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Global Reach</div>
                                            <div className="font-medium text-white">50+ Countries Served</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Premium Stats */}
                                <div className="mt-8 pt-8 border-t border-yellow-400/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold gradient-text">24hrs</div>
                                            <div className="text-sm text-gray-400">Response Time</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold gradient-text">98%</div>
                                            <div className="text-sm text-gray-400">Satisfaction Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Premium Form */}
                        <div className="slide-up" style={{ animationDelay: "200ms" }}>
                            <div className="card-premium p-8 glow">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
                                        <Crown className="w-4 h-4 text-yellow-400" />
                                        <span className="text-yellow-400 text-xs font-medium">PREMIUM CONTACT</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Send Elite Message</h3>
                                    <p className="text-gray-400">Get personalized assistance from our premium consultants</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell us about your educational goals and how we can assist you..."
                                        />
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold disabled:opacity-50"
                                    >
                                        <Crown className="w-5 h-5" />
                                        {status === "submitting" ? "Sending Elite Message..." : "Send Premium Message"}
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>

                                {status === "success" && (
                                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                        <div className="flex items-center gap-2 text-green-400">
                                            <Star className="w-4 h-4" />
                                            <span className="font-medium">Message sent successfully!</span>
                                        </div>
                                        <p className="text-green-300 text-sm mt-1">Our premium team will contact you within 24 hours.</p>
                                    </div>
                                )}
                                
                                {status === "error" && (
                                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                        <div className="flex items-center gap-2 text-red-400">
                                            <Diamond className="w-4 h-4" />
                                            <span className="font-medium">Something went wrong.</span>
                                        </div>
                                        <p className="text-red-300 text-sm mt-1">Please try again or contact us directly.</p>
                                    </div>
                                )}

                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    By submitting, you agree to our Premium Terms & Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">IMMEDIATE ASSISTANCE</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need <span className="gradient-text">Immediate</span> Assistance?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Book a premium consultation call with our elite education experts and get personalized guidance within 24 hours.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+918045678900"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Phone className="w-5 h-5" />
                                Call Elite Hotline
                            </a>
                            <a
                                href="mailto:info@aptorstudies.com"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
                            >
                                <Mail className="w-5 h-5" />
                                Email Premium Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
