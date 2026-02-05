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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">CONTACT</span>
                            <Sparkles className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Connect</span>
                            <br />
                            <span className="text-green-900">with Our Team</span>
                        </h1>
                        
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Ready to transform your educational journey? Our consultants are here to provide personalized guidance and exclusive opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left side - Info */}
                        <div className="slide-up">
                            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 h-full">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                                    <Diamond className="w-4 h-4 text-green-600" />
                                    <span className="text-green-700 text-sm font-medium">SUPPORT</span>
                                </div>

                                <h2 className="text-3xl font-bold text-green-900 mb-4">
                                    Get <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Expert</span> Assistance
                                </h2>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Experience world-class support from our education consultants. We're here to guide you through every step of your educational journey.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 hover:shadow-md transition-all duration-300 p-3 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Email</div>
                                            <div className="font-medium text-green-900">info@aptorstudies.com</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 hover:shadow-md transition-all duration-300 p-3 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Hotline</div>
                                            <div className="font-medium text-green-900">+91 95267 97987</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 hover:shadow-md transition-all duration-300 p-3 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Calicut, Kerala</div>
                                            <div className="font-medium text-green-900">Education Hub</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 hover:shadow-md transition-all duration-300 p-3 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Clock className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Support Hours</div>
                                            <div className="font-medium text-green-900">Mon-Sat: 9:00 AM - 8:00 PM</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 hover:shadow-md transition-all duration-300 p-3 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Globe className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">Global Reach</div>
                                            <div className="font-medium text-green-900">50+ Countries Served</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-8 pt-8 border-t border-green-200">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">24hrs</div>
                                            <div className="text-sm text-gray-600">Response Time</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">98%</div>
                                            <div className="text-sm text-gray-600">Satisfaction Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="slide-up" style={{ animationDelay: "200ms" }}>
                            <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-200 rounded-full mb-4">
                                        <Crown className="w-4 h-4 text-green-600" />
                                        <span className="text-green-700 text-xs font-medium">CONTACT</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-900 mb-2">Send Message</h3>
                                    <p className="text-gray-600">Get personalized assistance from our consultants</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell us about your educational goals and how we can assist you..."
                                        />
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 inline-flex items-center justify-center gap-2"
                                    >
                                        <Crown className="w-5 h-5" />
                                        {status === "submitting" ? "Sending Message..." : "Send Message"}
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>

                                {status === "success" && (
                                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-2 text-green-700">
                                            <Star className="w-4 h-4" />
                                            <span className="font-medium">Message sent successfully!</span>
                                        </div>
                                        <p className="text-green-600 text-sm mt-1">Our team will contact you within 24 hours.</p>
                                    </div>
                                )}
                                
                                {status === "error" && (
                                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <div className="flex items-center gap-2 text-red-700">
                                            <Diamond className="w-4 h-4" />
                                            <span className="font-medium">Something went wrong.</span>
                                        </div>
                                        <p className="text-red-600 text-sm mt-1">Please try again or contact us directly.</p>
                                    </div>
                                )}

                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    By submitting, you agree to our Terms & Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl border border-green-100 p-8 md:p-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">IMMEDIATE ASSISTANCE</span>
                            <Diamond className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            Need <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Immediate</span> Assistance?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Book a consultation call with our education experts and get personalized guidance within 24 hours.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919526797987"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Call Hotline
                            </a>
                            <a
                                href="mailto:info@aptorstudies.com"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-500 hover:text-white transition-all duration-300"
                            >
                                <Mail className="w-5 h-5" />
                                Email Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
