"use client";

import { Crown, Star, Diamond, Award, DollarSign, Calendar, Users, BookOpen, Sparkles, ArrowRight, Globe, Trophy, GraduationCap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ScholarshipApplicationForm from "@/components/ScholarshipApplicationForm";

export default function ScholarshipsPage() {
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    const scholarship = {
        name: "Aptor Studies Merit Scholarship 2024",
        provider: "Aptor Studies Foundation",
        amount: "₹5,00,000",
        duration: "Full Academic Program",
        eligibility: "Academic Excellence (85%+ in 12th Grade)",
        deadline: "June 30, 2024",
        recipients: "100 students",
        description: "A comprehensive scholarship program designed to support meritorious students in pursuing their higher education dreams at top universities worldwide.",
        benefits: [
            "Full tuition fee coverage",
            "Monthly stipend for living expenses",
            "Book and study material allowance",
            "Career counseling and mentorship",
            "Internship placement assistance",
            "Alumni network access"
        ],
        requirements: [
            "Minimum 85% marks in 12th grade",
            "Valid entrance exam scores",
            "Statement of purpose",
            "Two letters of recommendation",
            "Financial need documentation",
            "Interview participation"
        ]
    };

    const handleApplicationSuccess = () => {
        // Refresh or show success message
        console.log("Application submitted successfully");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">SCHOLARSHIP OPPORTUNITY</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">Merit Scholarship</span>
                            <br />
                            <span className="text-white">Program 2024</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                            Transform your educational dreams into reality with our comprehensive scholarship program designed for exceptional students.
                        </p>

                        <button 
                            onClick={() => setShowApplicationForm(true)}
                            className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold text-lg px-8 py-4"
                        >
                            <GraduationCap className="w-5 h-5" />
                            Apply Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { icon: DollarSign, value: "₹5,00,000", label: "Scholarship Amount" },
                            { icon: Users, value: "100", label: "Recipients" },
                            { icon: Award, value: "85%+", label: "Min. Requirement" },
                            { icon: Calendar, value: "June 30", label: "Application Deadline" }
                        ].map((stat, index) => (
                            <div key={index} className="card-premium p-6 text-center hover-lift-premium">
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-black" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scholarship Details */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Main Details */}
                        <div className="card-premium p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Crown className="w-6 h-6 text-yellow-400" />
                                <h2 className="text-2xl font-bold text-white">Scholarship Details</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{scholarship.name}</h3>
                                    <p className="text-gray-400 leading-relaxed">{scholarship.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <div className="text-yellow-400 text-sm font-medium mb-1">Amount</div>
                                        <div className="text-white font-bold text-lg">{scholarship.amount}</div>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <div className="text-yellow-400 text-sm font-medium mb-1">Duration</div>
                                        <div className="text-white font-bold">{scholarship.duration}</div>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <div className="text-yellow-400 text-sm font-medium mb-1">Recipients</div>
                                        <div className="text-white font-bold">{scholarship.recipients}</div>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <div className="text-yellow-400 text-sm font-medium mb-1">Deadline</div>
                                        <div className="text-red-400 font-bold">{scholarship.deadline}</div>
                                    </div>
                                </div>

                                <div className="bg-yellow-400/10 border border-yellow-400/30 p-4 rounded-lg">
                                    <div className="text-yellow-400 text-sm font-medium mb-2">Eligibility Criteria</div>
                                    <div className="text-white">{scholarship.eligibility}</div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="card-premium p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Star className="w-6 h-6 text-yellow-400" />
                                <h2 className="text-2xl font-bold text-white">Scholarship Benefits</h2>
                            </div>
                            
                            <div className="space-y-3">
                                {scholarship.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <BookOpen className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-2xl font-bold text-white">Application Requirements</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {scholarship.requirements.map((requirement, index) => (
                                <div key={index} className="flex items-start gap-3 bg-black/30 p-4 rounded-lg">
                                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-300">{requirement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="gradient-text">Application</span> Process
                        </h2>
                        <p className="text-gray-400">
                            Follow these simple steps to apply for the scholarship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Fill Application Form",
                                description: "Complete the online application form with your personal and academic details.",
                                icon: BookOpen
                            },
                            {
                                step: "02",
                                title: "Document Verification",
                                description: "Our team will verify your submitted documents and academic credentials.",
                                icon: Award
                            },
                            {
                                step: "03",
                                title: "Selection & Award",
                                description: "Successful candidates will be notified and awarded the scholarship.",
                                icon: Trophy
                            }
                        ].map((process, index) => (
                            <div key={index} className="card-premium p-6 text-center hover-lift-premium">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                                        <process.icon className="w-8 h-8 text-black" />
                                    </div>
                                </div>
                                <div className="text-yellow-400 font-bold text-sm mb-2">STEP {process.step}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">LIMITED TIME OFFER</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Don't Miss This <span className="gradient-text">Opportunity</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Applications close on June 30, 2024. Apply now to secure your future with our merit scholarship program.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowApplicationForm(true)}
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold text-lg px-8 py-4"
                            >
                                <GraduationCap className="w-5 h-5" />
                                Apply for Scholarship
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
                            >
                                <Diamond className="w-5 h-5" />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            {showApplicationForm && (
                <ScholarshipApplicationForm
                    onClose={() => setShowApplicationForm(false)}
                    onSuccess={handleApplicationSuccess}
                />
            )}
        </div>
    );
}