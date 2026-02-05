"use client";

import { useState } from "react";
import { Crown, X, Sparkles, ArrowRight, Phone, Mail, User, BookOpen, GraduationCap } from "lucide-react";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    source?: string; // Track where the lead came from
}

export function LeadModal({ isOpen, onClose, title = "Apply Now", subtitle = "Start Your Elite Journey", source = "general" }: LeadModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        currentEducation: '',
        preferredCountry: '',
        message: '',
        source: source
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.email || !formData.name || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

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
                    message: `Lead Generation - Source: ${formData.source} | Interest: ${formData.interest} | Current Education: ${formData.currentEducation} | Preferred Country: ${formData.preferredCountry} | Message: ${formData.message}`
                }),
            });

            if (response.ok) {
                alert('Application submitted successfully! Our team will contact you within 24 hours.');
                setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    interest: '', 
                    currentEducation: '', 
                    preferredCountry: '', 
                    message: '',
                    source: source
                });
                onClose();
            } else {
                const error = await response.json();
                alert(error.message || 'Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-modal flex items-end sm:items-center justify-center p-4 mobile-safe-area">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative w-full max-w-2xl max-h-screen-safe overflow-y-auto">
                <div className="card shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Crown className="w-6 h-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="heading-md text-green-900 truncate">{title}</h2>
                                <p className="text-small text-green-600 truncate">{subtitle}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-2 min-w-touch min-h-touch"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Badge */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                            <Sparkles className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">APPLICATION</span>
                            <Crown className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-small text-gray-600 mt-2">
                            Join thousands of successful students worldwide
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="form-label">
                                    <User className="w-4 h-4 inline mr-2" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    <Mail className="w-4 h-4 inline mr-2" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="form-label">
                                    <Phone className="w-4 h-4 inline mr-2" />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    <BookOpen className="w-4 h-4 inline mr-2" />
                                    Area of Interest
                                </label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="">Select your interest</option>
                                    <option value="engineering">Engineering & Technology</option>
                                    <option value="medical">Medical & Life Sciences</option>
                                    <option value="business">Business & Management</option>
                                    <option value="arts">Arts & Humanities</option>
                                    <option value="law">Law & Legal Studies</option>
                                    <option value="sciences">Pure Sciences</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="form-label">
                                    <GraduationCap className="w-4 h-4 inline mr-2" />
                                    Current Education Level
                                </label>
                                <select
                                    name="currentEducation"
                                    value={formData.currentEducation}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="">Select current level</option>
                                    <option value="high-school">High School</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="graduate">Graduate</option>
                                    <option value="postgraduate">Postgraduate</option>
                                    <option value="professional">Working Professional</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label">
                                    Preferred Study Destination
                                </label>
                                <select
                                    name="preferredCountry"
                                    value={formData.preferredCountry}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="">Select destination</option>
                                    <option value="usa">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="canada">Canada</option>
                                    <option value="australia">Australia</option>
                                    <option value="germany">Germany</option>
                                    <option value="france">France</option>
                                    <option value="singapore">Singapore</option>
                                    <option value="india">India</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="form-label">
                                Additional Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Tell us about your educational goals and any specific requirements..."
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={3}
                                className="form-input resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Crown className="w-5 h-5" />
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="text-center pt-4 border-t border-green-200">
                            <p className="text-small text-gray-600">
                                Our consultants will contact you within 24 hours
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-500">
                                <span>✓ Free Consultation</span>
                                <span>✓ Personalized Guidance</span>
                                <span className="hidden sm:inline">✓ 98% Success Rate</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}