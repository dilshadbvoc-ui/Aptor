"use client";

import Link from "next/link";
import { Calendar, MapPin, Building, Clock, DollarSign, Crown, Star, Diamond, Sparkles, ArrowRight, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";

interface Internship {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  applicationDeadline: string;
  description: string;
  requirements: string[];
  featured: boolean;
  slug: string;
  applicationUrl?: string;
}

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<string>("");

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await fetch('/api/internships');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setInternships(data.internships);
        }
      }
    } catch (error) {
      console.error('Error fetching internships:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyClick = (internshipTitle: string) => {
    setSelectedInternship(internshipTitle);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-black animate-pulse" />
          </div>
          <p className="text-yellow-400">Loading premium internships...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">PREMIUM INTERNSHIPS</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Elite</span>
              <br />
              <span className="text-white">Internship Opportunities</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover exclusive internship opportunities with top-tier companies. Gain valuable experience and kickstart your premium career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {internships.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Active Premium Internships</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                There are currently no active elite internship opportunities. Please check back later for exclusive opportunities.
              </p>
              <Link 
                href="/contact" 
                className="btn-premium inline-flex items-center gap-2 text-black font-semibold"
              >
                <Crown className="w-5 h-5" />
                Contact Elite Team
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="gradient-text">Premium</span> Opportunities
                </h2>
                <p className="text-gray-400">
                  {internships.length} exclusive internship{internships.length !== 1 ? 's' : ''} available
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {internships.map((internship, index) => (
                  <div
                    key={internship._id}
                    className="card-premium hover-lift-premium slide-up group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Crown className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-400 text-sm font-medium uppercase">
                            {internship.type}
                          </span>
                        </div>
                        {internship.featured && (
                          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {internship.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{internship.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{internship.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{internship.duration}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <DollarSign className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium text-yellow-400">{internship.stipend}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">Apply by: {new Date(internship.applicationDeadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {internship.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {internship.requirements.slice(0, 3).map((req: string, reqIndex: number) => (
                          <span
                            key={reqIndex}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-400/10 border border-yellow-400/30 text-yellow-400"
                          >
                            {req}
                          </span>
                        ))}
                        {internship.requirements.length > 3 && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-400/10 border border-yellow-400/30 text-yellow-400">
                            +{internship.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link
                          href={`/internships/${internship.slug}`}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 bg-black/50 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-300"
                        >
                          View Details
                        </Link>
                        
                        <button
                          onClick={() => handleApplyClick(internship.title)}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 font-semibold"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 text-center glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">CAREER ACCELERATION</span>
              <Diamond className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Launch Your <span className="gradient-text">Elite Career?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get personalized career guidance and internship matching from our premium consultants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/counselling"
                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
              >
                <Crown className="w-5 h-5" />
                Get Career Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
              >
                <Trophy className="w-5 h-5" />
                View Elite Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Apply for ${selectedInternship}`}
        subtitle="Start Your Premium Career Journey"
        source={`internship-${selectedInternship.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
}