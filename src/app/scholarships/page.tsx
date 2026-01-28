"use client";

import { Crown, Star, Diamond, Award, DollarSign, Calendar, Users, BookOpen, Sparkles, ArrowRight, Globe, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LeadModal } from "@/components/ui";

const scholarships = [
    {
        id: 1,
        name: "Merit Scholarship",
        provider: "Aptor Studies Foundation",
        amount: "₹40,00,000",
        duration: "4 years",
        eligibility: "Academic Excellence (GPA 3.8+)",
        deadline: "March 15, 2024",
        recipients: "50 students",
        category: "merit",
        featured: true,
        description: "Full tuition coverage for exceptional students pursuing undergraduate degrees at top universities."
    },
    {
        id: 2,
        name: "Global Leadership Scholarship",
        provider: "International Education Fund",
        amount: "₹61,00,000",
        duration: "2 years",
        eligibility: "Leadership Experience + GPA 3.7+",
        deadline: "April 30, 2024",
        recipients: "25 students",
        category: "leadership",
        featured: true,
        description: "Comprehensive support for future leaders pursuing graduate programs worldwide."
    },
    {
        id: 3,
        name: "STEM Innovation Grant",
        provider: "Technology Excellence Foundation",
        amount: "₹32,00,000",
        duration: "4 years",
        eligibility: "STEM Field + Research Experience",
        deadline: "February 28, 2024",
        recipients: "100 students",
        category: "stem",
        featured: true,
        description: "Supporting the next generation of innovators in Science, Technology, Engineering, and Mathematics."
    },
    {
        id: 4,
        name: "Diversity Excellence Award",
        provider: "Global Inclusion Initiative",
        amount: "₹24,00,000",
        duration: "4 years",
        eligibility: "Underrepresented Communities",
        deadline: "May 15, 2024",
        recipients: "75 students",
        category: "diversity",
        featured: false,
        description: "Promoting diversity and inclusion in higher education through financial support."
    },
    {
        id: 5,
        name: "Entrepreneurship Scholarship",
        provider: "Business Innovation Fund",
        amount: "₹49,00,000",
        duration: "2 years",
        eligibility: "Business Plan + Leadership",
        deadline: "June 1, 2024",
        recipients: "30 students",
        category: "business",
        featured: false,
        description: "Supporting future entrepreneurs and business leaders in their educational journey."
    },
    {
        id: 6,
        name: "Arts & Culture Grant",
        provider: "Creative Excellence Foundation",
        amount: "₹28,00,000",
        duration: "4 years",
        eligibility: "Portfolio + Creative Achievement",
        deadline: "March 30, 2024",
        recipients: "40 students",
        category: "arts",
        featured: false,
        description: "Nurturing artistic talent and cultural innovation through educational support."
    }
];

export default function ScholarshipsPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedScholarship, setSelectedScholarship] = useState<string>("");

    const filteredScholarships = scholarships.filter(scholarship => {
        const matchesFilter = activeFilter === "all" || scholarship.category === activeFilter;
        const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const featuredScholarships = scholarships.filter(scholarship => scholarship.featured);

    const handleApplyClick = (scholarshipName: string) => {
        setSelectedScholarship(scholarshipName);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">SCHOLARSHIPS</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">Scholarships</span>
                            <br />
                            <span className="text-white">& Funding</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Unlock exclusive scholarship opportunities worth millions. Access funding for your education journey at the world's top institutions.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { icon: DollarSign, value: "₹20.5Cr+", label: "Total Funding" },
                            { icon: Users, value: "320+", label: "Recipients" },
                            { icon: Award, value: "15+", label: "Programs" },
                            { icon: Globe, value: "50+", label: "Countries" }
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

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                            <div className="relative flex-1 max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search scholarships..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            
                            <div className="flex flex-wrap gap-2 justify-center">
                                {[
                                    { key: "all", label: "All" },
                                    { key: "merit", label: "Merit" },
                                    { key: "leadership", label: "Leadership" },
                                    { key: "stem", label: "STEM" },
                                    { key: "business", label: "Business" },
                                    { key: "arts", label: "Arts" }
                                ].map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => setActiveFilter(filter.key)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                                            activeFilter === filter.key
                                                ? "bg-yellow-400 text-black"
                                                : "bg-black/50 text-gray-400 hover:text-yellow-400 border border-yellow-400/30"
                                        }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Scholarships */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">FEATURED OPPORTUNITIES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="gradient-text">Featured</span> Scholarships
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredScholarships.map((scholarship, index) => (
                            <div
                                key={scholarship.id}
                                className="card-premium hover-lift-premium slide-up group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Crown className="w-5 h-5 text-yellow-400" />
                                            <span className="text-yellow-400 text-sm font-medium uppercase">
                                                {scholarship.category}
                                            </span>
                                        </div>
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            Featured
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        {scholarship.name}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {scholarship.description}
                                    </p>
                                    
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Amount:</span>
                                            <span className="text-yellow-400 font-bold">{scholarship.amount}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Duration:</span>
                                            <span className="text-white">{scholarship.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Recipients:</span>
                                            <span className="text-white">{scholarship.recipients}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Deadline:</span>
                                            <span className="text-red-400 font-medium">{scholarship.deadline}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="border-t border-yellow-400/20 pt-4 mb-4">
                                        <p className="text-gray-400 text-sm">
                                            <strong className="text-white">Eligibility:</strong> {scholarship.eligibility}
                                        </p>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleApplyClick(scholarship.name)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold"
                                    >
                                        <Trophy className="w-4 h-4" />
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Scholarships */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            All <span className="gradient-text">Scholarships</span>
                        </h2>
                        <p className="text-gray-400">
                            {filteredScholarships.length} scholarship opportunities found
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredScholarships.map((scholarship, index) => (
                            <div
                                key={scholarship.id}
                                className="card-premium hover-lift-premium slide-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Award className="w-5 h-5 text-yellow-400" />
                                            <span className="text-yellow-400 text-sm font-medium uppercase">
                                                {scholarship.category}
                                            </span>
                                        </div>
                                        {scholarship.featured && (
                                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        {scholarship.name}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {scholarship.description}
                                    </p>
                                    
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Amount:</span>
                                            <span className="text-yellow-400 font-bold">{scholarship.amount}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Duration:</span>
                                            <span className="text-white">{scholarship.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Recipients:</span>
                                            <span className="text-white">{scholarship.recipients}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Deadline:</span>
                                            <span className="text-red-400 font-medium">{scholarship.deadline}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="border-t border-yellow-400/20 pt-4 mb-4">
                                        <p className="text-gray-400 text-sm">
                                            <strong className="text-white">Eligibility:</strong> {scholarship.eligibility}
                                        </p>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleApplyClick(scholarship.name)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold"
                                    >
                                        <Trophy className="w-4 h-4" />
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
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
                            Follow these steps to secure your scholarship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Choose Your Scholarship",
                                description: "Browse our scholarship database and select opportunities that match your profile and goals.",
                                icon: BookOpen
                            },
                            {
                                step: "02",
                                title: "Prepare Application",
                                description: "Gather required documents, write compelling essays, and prepare for interviews with our expert guidance.",
                                icon: Award
                            },
                            {
                                step: "03",
                                title: "Submit & Track",
                                description: "Submit your application through our portal and track progress with real-time updates.",
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
                            <span className="text-yellow-400 text-sm font-medium">START YOUR JOURNEY</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Secure Your <span className="gradient-text">Scholarship?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get personalized scholarship matching and application support from our education consultants.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Get Scholarship Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/universities-colleges"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
                            >
                                <Diamond className="w-5 h-5" />
                                View Institutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Apply for ${selectedScholarship}`}
                subtitle="Secure Your Scholarship"
                source={`scholarship-${selectedScholarship.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}