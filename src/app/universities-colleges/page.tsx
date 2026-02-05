"use client";

import { Crown, Star, Diamond, MapPin, Users, Award, BookOpen, Globe, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LeadModal } from "@/components/ui";

const universities = [
    {
        id: 1,
        name: "Harvard University",
        location: "Cambridge, Massachusetts, USA",
        ranking: "#1 Global",
        students: "23,000+",
        programs: "Engineering, Business, Medicine, Law",
        tuition: "₹44,00,000/year",
        image: "/campus.png",
        type: "university",
        featured: true
    },
    {
        id: 2,
        name: "Stanford University",
        location: "Stanford, California, USA",
        ranking: "#2 Global",
        students: "17,000+",
        programs: "Technology, Business, Engineering",
        tuition: "₹45,00,000/year",
        image: "/campus.png",
        type: "university",
        featured: true
    },
    {
        id: 3,
        name: "MIT",
        location: "Cambridge, Massachusetts, USA",
        ranking: "#3 Global",
        students: "11,000+",
        programs: "Engineering, Technology, Science",
        tuition: "₹43,00,000/year",
        image: "/campus.png",
        type: "university",
        featured: false
    }
];

const colleges = [
    {
        id: 4,
        name: "Williams College",
        location: "Williamstown, Massachusetts, USA",
        ranking: "#1 Liberal Arts",
        students: "2,000+",
        programs: "Liberal Arts, Sciences, Humanities",
        tuition: "₹48,00,000/year",
        image: "/campus.png",
        type: "college",
        featured: true
    },
    {
        id: 5,
        name: "Amherst College",
        location: "Amherst, Massachusetts, USA",
        ranking: "#2 Liberal Arts",
        students: "1,800+",
        programs: "Liberal Arts, Economics, Psychology",
        tuition: "₹47,00,000/year",
        image: "/campus.png",
        type: "college",
        featured: true
    },
    {
        id: 6,
        name: "Swarthmore College",
        location: "Swarthmore, Pennsylvania, USA",
        ranking: "#3 Liberal Arts",
        students: "1,600+",
        programs: "Liberal Arts, Engineering, Sciences",
        tuition: "₹45,00,000/year",
        image: "/campus.png",
        type: "college",
        featured: false
    }
];

export default function UniversitiesCollegesPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInstitution, setSelectedInstitution] = useState<string>("");

    const allInstitutions = [...universities, ...colleges];
    
    const filteredInstitutions = allInstitutions.filter(institution => {
        const matchesFilter = activeFilter === "all" || institution.type === activeFilter;
        const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            institution.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            institution.programs.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const featuredInstitutions = allInstitutions.filter(inst => inst.featured);

    const handleApplyClick = (institutionName: string) => {
        setSelectedInstitution(institutionName);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white mobile-safe-area-top">
            {/* Hero Section - Mobile Optimized */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12 fade-in">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 border border-green-200 rounded-full mb-4 sm:mb-6">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                            <span className="text-green-700 text-xs sm:text-sm font-medium">INSTITUTIONS</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-900 mb-4 sm:mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Universities</span>
                            <br />
                            <span className="text-green-900">& Colleges</span>
                        </h1>
                        
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Discover the world's most prestigious educational institutions. Access exclusive opportunities at universities and colleges worldwide.
                        </p>
                    </div>

                    {/* Search and Filter - Mobile Optimized */}
                    <div className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                        <div className="flex flex-col gap-3 sm:gap-4 items-stretch">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search institutions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                                />
                            </div>
                            
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {[
                                    { key: "all", label: "All" },
                                    { key: "university", label: "Universities" },
                                    { key: "college", label: "Colleges" }
                                ].map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => setActiveFilter(filter.key)}
                                        className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base min-h-[44px] flex-shrink-0 ${
                                            activeFilter === filter.key
                                                ? "bg-green-500 text-white"
                                                : "bg-white text-gray-700 hover:text-green-600 border border-gray-300 hover:border-green-300"
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

            {/* Featured Institutions - Mobile Optimized */}
            <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 bg-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 border border-green-200 rounded-full mb-4 sm:mb-6">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                            <span className="text-green-700 text-xs sm:text-sm font-medium">FEATURED</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Featured</span> Institutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {featuredInstitutions.map((institution, index) => (
                            <div
                                key={institution.id}
                                className="bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-lg sm:rounded-t-xl">
                                    <img
                                        src={institution.image}
                                        alt={institution.name}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                        <div className="bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                                            {institution.ranking}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                
                                <div className="p-3 sm:p-4 lg:p-6">
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                        <span className="text-green-700 text-xs sm:text-sm font-medium uppercase">
                                            {institution.type}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                                        {institution.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 mb-2 sm:mb-3">
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="text-xs sm:text-sm line-clamp-1">{institution.location}</span>
                                    </div>
                                    
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">{institution.students} Students</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm line-clamp-1">{institution.programs}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                                            <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm font-medium">{institution.tuition}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleApplyClick(institution.name)}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px] inline-flex items-center justify-center gap-1.5 sm:gap-2"
                                    >
                                        <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                                        Apply Now
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Institutions - Mobile Optimized */}
            <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
                            All <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Institutions</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            {filteredInstitutions.length} institutions found
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {filteredInstitutions.map((institution, index) => (
                            <div
                                key={institution.id}
                                className="bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-lg sm:rounded-t-xl">
                                    <img
                                        src={institution.image}
                                        alt={institution.name}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                        <div className="bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                                            {institution.ranking}
                                        </div>
                                    </div>
                                    {institution.featured && (
                                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                                            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                                                <Star className="w-2 h-2 sm:w-3 sm:h-3" />
                                                <span className="hidden sm:inline">Featured</span>
                                                <span className="sm:hidden">★</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                
                                <div className="p-3 sm:p-4 lg:p-6">
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                        <span className="text-green-700 text-xs sm:text-sm font-medium uppercase">
                                            {institution.type}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                                        {institution.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 mb-2 sm:mb-3">
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="text-xs sm:text-sm line-clamp-1">{institution.location}</span>
                                    </div>
                                    
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">{institution.students} Students</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm line-clamp-1">{institution.programs}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                                            <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm font-medium">{institution.tuition}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleApplyClick(institution.name)}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px] inline-flex items-center justify-center gap-1.5 sm:gap-2"
                                    >
                                        <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                                        Learn More
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8 md:p-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">EXCLUSIVE ACCESS</span>
                            <Diamond className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            Ready to Join the <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Best?</span>
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Get personalized guidance from our education consultants and secure your place at the world's most prestigious institutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                <Crown className="w-5 h-5" />
                                Get Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/scholarships"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-500 hover:text-white transition-all duration-300"
                            >
                                <Diamond className="w-5 h-5" />
                                View Scholarships
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Generation Modal */}
            <LeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Apply to ${selectedInstitution}`}
                subtitle="Start Your Education Journey"
                source={`university-${selectedInstitution.toLowerCase().replace(/\s+/g, '-')}`}
            />
        </div>
    );
}