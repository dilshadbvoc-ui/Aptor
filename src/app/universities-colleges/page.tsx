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
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 mobile-safe-area-top">
            {/* Hero Section - Mobile Optimized */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12 fade-in">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6">
                            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-xs sm:text-sm font-medium">INSTITUTIONS</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            <span className="gradient-text">Universities</span>
                            <br />
                            <span className="text-white">& Colleges</span>
                        </h1>
                        
                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
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

            {/* Featured Institutions - Mobile Optimized */}
            <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-xs sm:text-sm font-medium">FEATURED</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            <span className="gradient-text">Featured</span> Institutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {featuredInstitutions.map((institution, index) => (
                            <div
                                key={institution.id}
                                className="card-premium hover-lift-premium slide-up group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-lg sm:rounded-t-xl">
                                    <img
                                        src={institution.image}
                                        alt={institution.name}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                        <div className="bg-yellow-400 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                                            {institution.ranking}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                
                                <div className="p-3 sm:p-4 lg:p-6">
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                        <span className="text-yellow-400 text-xs sm:text-sm font-medium uppercase">
                                            {institution.type}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                        {institution.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-2 sm:mb-3">
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="text-xs sm:text-sm line-clamp-1">{institution.location}</span>
                                    </div>
                                    
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">{institution.students} Students</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm line-clamp-1">{institution.programs}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                            <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm font-medium">{institution.tuition}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleApplyClick(institution.name)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-1.5 sm:gap-2 text-black font-semibold text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]"
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
            <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            All <span className="gradient-text">Institutions</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400">
                            {filteredInstitutions.length} premium institutions found
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {filteredInstitutions.map((institution, index) => (
                            <div
                                key={institution.id}
                                className="card-premium hover-lift-premium slide-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-lg sm:rounded-t-xl">
                                    <img
                                        src={institution.image}
                                        alt={institution.name}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                        <div className="bg-yellow-400 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                                            {institution.ranking}
                                        </div>
                                    </div>
                                    {institution.featured && (
                                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
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
                                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                        <span className="text-yellow-400 text-xs sm:text-sm font-medium uppercase">
                                            {institution.type}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                        {institution.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 mb-2 sm:mb-3">
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="text-xs sm:text-sm line-clamp-1">{institution.location}</span>
                                    </div>
                                    
                                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">{institution.students} Students</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm line-clamp-1">{institution.programs}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                                            <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm font-medium">{institution.tuition}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleApplyClick(institution.name)}
                                        className="btn-premium w-full text-center inline-flex items-center justify-center gap-1.5 sm:gap-2 text-black font-semibold text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]"
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
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">EXCLUSIVE ACCESS</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Join the <span className="gradient-text">Best?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get personalized guidance from our premium education consultants and secure your place at the world's most prestigious institutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Get Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/scholarships"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
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