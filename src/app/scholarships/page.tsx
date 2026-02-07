"use client";

import { Star, Award, Calendar, Users, BookOpen, ArrowRight, GraduationCap, CheckCircle, Diamond, Sparkles } from "lucide-react";
import { useState } from "react";
import ScholarshipApplicationForm from "@/components/ScholarshipApplicationForm";

export default function ScholarshipsPage() {
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    const scholarship = {
        name: "Aptor Studies Merit Scholarship 2024",
        amount: "₹5,00,000",
        duration: "Full Academic Program",
        eligibility: "Academic Excellence (85%+ in 12th Grade)",
        deadline: "June 30, 2024",
        recipients: "100 students",
        description: "A comprehensive scholarship program designed to support meritorious students in pursuing their higher education dreams at top colleges worldwide.",
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
        setShowApplicationForm(false);
    };

    return (
        <div className="bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Scholarship Opportunity</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                        Merit Scholarship Program 2024
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Transform your educational dreams into reality with our comprehensive scholarship program designed for exceptional students.
                    </p>
                    
                    <button 
                        onClick={() => setShowApplicationForm(true)}
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
                    >
                        <GraduationCap className="w-5 h-5" />
                        Apply Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: Award, value: "₹5,00,000", label: "Scholarship Amount" },
                        { icon: Users, value: "100", label: "Recipients" },
                        { icon: Star, value: "85%+", label: "Min. Requirement" },
                        { icon: Calendar, value: "June 30", label: "Application Deadline" }
                    ].map((stat, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1 text-center">{stat.value}</div>
                            <div className="text-sm text-gray-600 text-center">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Scholarship Details */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <Diamond className="w-6 h-6 text-teal-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Scholarship Details</h2>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{scholarship.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="text-teal-600 text-sm font-medium mb-1">Amount</div>
                                    <div className="text-gray-900 font-bold text-lg">{scholarship.amount}</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="text-teal-600 text-sm font-medium mb-1">Duration</div>
                                    <div className="text-gray-900 font-bold">{scholarship.duration}</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="text-teal-600 text-sm font-medium mb-1">Recipients</div>
                                    <div className="text-gray-900 font-bold">{scholarship.recipients}</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="text-teal-600 text-sm font-medium mb-1">Deadline</div>
                                    <div className="text-red-600 font-bold">{scholarship.deadline}</div>
                                </div>
                            </div>

                            <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                                <div className="text-teal-700 text-sm font-medium mb-2">Eligibility Criteria</div>
                                <div className="text-gray-900">{scholarship.eligibility}</div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-6 h-6 text-teal-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Scholarship Benefits</h2>
                        </div>
                        
                        <div className="space-y-3">
                            {scholarship.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Requirements */}
                <div className="mb-12">
                    <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <BookOpen className="w-6 h-6 text-teal-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Application Requirements</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {scholarship.requirements.map((requirement, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700">{requirement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Application Process */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Application Process
                        </h2>
                        <p className="text-gray-600">
                            Follow these simple steps to apply for the scholarship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
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
                                icon: GraduationCap
                            }
                        ].map((process, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                                        <process.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-teal-600 font-bold text-sm mb-2 text-center">STEP {process.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{process.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed text-center">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl border border-teal-200 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Don't Miss This Opportunity
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Applications close on June 30, 2024. Apply now to secure your future with our merit scholarship program.
                    </p>
                    
                    <button
                        onClick={() => setShowApplicationForm(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold text-lg transition-colors"
                    >
                        <GraduationCap className="w-5 h-5" />
                        Apply for Scholarship
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

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