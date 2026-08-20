"use client";

import { Crown, Star, Diamond, Award, Users, Globe, Target, Heart, Sparkles, ArrowRight, Trophy, Shield, Phone, Mail, Calendar, CheckCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AeoSchema } from "@/components/seo/AeoSchema";
import { GeoSchema } from "@/components/seo/GeoSchema";
import { SeoSchema } from "@/components/seo/SeoSchema";

const services = [
  {
    title: "Elite Career Guidance",
    description: "Discover your ideal career path with personalized assessment and luxury consulting",
    icon: Target,
    features: ["Premium Aptitude Assessment", "Executive Career Mapping", "Industry Elite Insights", "Skill Excellence Analysis"],
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Exclusive Course Selection",
    description: "Choose from the world's most prestigious courses and specializations",
    icon: BookOpen,
    features: ["Elite Course Comparison", "Premium Curriculum Analysis", "Future Leadership Prospects", "Exclusive Admission Requirements"],
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Premier Institution Selection",
    description: "Access to the world's top universities and elite colleges",
    icon: Award,
    features: ["Global Elite Rankings", "Premium Placement Records", "Luxury Course Fee Structure", "Exclusive Scholarship Access"],
    color: "from-yellow-500 to-yellow-700"
  },
  {
    title: "VIP Admission Support",
    description: "White-glove service throughout your elite admission journey",
    icon: Crown,
    features: ["Premium Application Assistance", "Executive Document Preparation", "Elite Interview Coaching", "VIP Entrance Exam Guidance"],
    color: "from-emerald-500 to-emerald-700"
  }
];

const counsellors = [
  {
    name: "Adv. Arif Wafy",
    designation: "Elite Education Strategist",
    experience: "15+ years",
    specialization: "Premium Engineering & Technology",
    image: "/arif-wafy.jpeg",
    rating: 4.9,
    achievements: "Harvard Certified, 500+ Elite Placements"
  },
  {
    name: "Jamsheer Backer",
    designation: "Executive Career Architect",
    experience: "12+ years",
    specialization: "Elite Medical & Life Sciences",
    image: "/jamsheer-backer.jpeg",
    rating: 4.8,
    achievements: "Oxford Alumni, 300+ Premium Admissions"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Elite Computer Science",
    college: "Harvard University",
    text: "The premium counselling experience was transformative. The personalized guidance helped me secure admission to my dream university with a full scholarship.",
    rating: 5,
    achievement: "Full Scholarship Winner"
  },
  {
    name: "Rahul Kumar",
    course: "Premium Medical Program",
    college: "Johns Hopkins University",
    text: "Aptor Studies' elite counselling service provided unparalleled support. The strategic guidance was instrumental in my success.",
    rating: 5,
    achievement: "Top 1% Admission"
  },
  {
    name: "Ananya Patel",
    course: "Executive MBA",
    college: "Stanford Graduate School",
    text: "The luxury counselling experience exceeded all expectations. The career transition guidance was world-class and highly effective.",
    rating: 5,
    achievement: "Leadership Scholarship"
  }
];

const process = [
  {
    step: "01",
    title: "Elite Consultation Booking",
    description: "Schedule your premium 60-minute strategy session with our elite education consultants",
    icon: Calendar
  },
  {
    step: "02",
    title: "Comprehensive Elite Assessment",
    description: "Complete our advanced aptitude and personality profiling for personalized recommendations",
    icon: Target
  },
  {
    step: "03",
    title: "VIP Strategy Session",
    description: "One-on-one luxury consultation with our most experienced education strategists",
    icon: Crown
  },
  {
    step: "04",
    title: "Premium Action Blueprint",
    description: "Receive your personalized elite education roadmap with guaranteed success milestones",
    icon: Trophy
  }
];

export default function CounsellingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.phone) {
      alert('Please fill in all required fields');
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
          message: `Elite Counselling Request - Interest: ${formData.interest} - Message: ${formData.message}`
        }),
      });

      if (response.ok) {
        alert('Elite consultation request submitted successfully! Our premium team will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit request. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <AeoSchema
        breadcrumbs={[{ name: "Home", item: "/" }, { name: "Counselling", item: "/counselling" }]}
        faqs={[
          {
            question: "What does the Aptor Studies career counselling process involve?",
            answer: "The counselling process includes a 60-minute strategy session, comprehensive academic and career assessment, institution matching, application preparation, and interview coaching."
          },
          {
            question: "Who are the lead education consultants at Aptor Studies?",
            answer: "Lead consultants include Adv. Arif Wafy (Chairman & Education Strategist with 15+ years experience) and Jamsheer Backer (Managing Director & Career Architect with 12+ years experience)."
          }
        ]}
        extraSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Educational Counselling & Guidance",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Aptor Studies",
              "url": "https://aptorstudies.com"
            },
            "areaServed": "India and United Arab Emirates",
            "description": "Comprehensive career mapping, university selection, admission support, and entrance exam guidance."
          }
        ]}
      />
      <GeoSchema pageTitle="1-on-1 Executive Career Counselling & Guidance - Aptor Studies" pagePath="/counselling" />
      <SeoSchema routeKey="counselling" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
        {/* Decorative Top Right Leaf Vector */}
        <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
          <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
            <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 sm:mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
              <Crown className="w-4 h-4 text-[#106841]" />
              <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">ELITE COUNSELLING</span>
              <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
              <span className="text-[#1b7a4b]">Premium</span> Elite Counselling
            </h1>
            <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

            <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
              Confused about your elite educational path? Get personalized guidance from our world-class consultants
              and make strategic decisions about your premium educational future.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, value: "1000+", label: "Elite Students" },
              { icon: Award, value: "98%", label: "Success Rate" },
              { icon: Globe, value: "50+", label: "Top Universities" },
              { icon: Trophy, value: "15+", label: "Years Excellence" }
            ].map((stat, index) => {
              const isDark = index === 0 || index === 3;
              return (
                <div
                  key={index}
                  className={`relative rounded-[2.2rem] p-6 sm:p-7 text-center transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                      ? 'bg-[#073623] bg-light-green-dots-dark text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                      : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10'
                    }`}
                >
                  {isDark && (
                    <div className="absolute top-3 right-3 grid grid-cols-3 gap-1 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                      ))}
                    </div>
                  )}

                  <div className="flex justify-center mb-4 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${isDark
                        ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                        : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                      }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-black tracking-tight mb-1 relative z-10 ${isDark ? 'text-emerald-300' : 'text-[#106841]'
                    }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm font-bold relative z-10 ${isDark ? 'text-emerald-100/80' : 'text-[#0c2b1e]'
                    }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
              <Diamond className="w-4 h-4 text-[#106841]" />
              <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
              Our <span className="text-[#1b7a4b]">Elite Counselling</span> Services
            </h2>
            <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const isDark = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`rounded-[2.5rem] p-8 sm:p-10 border transition-all duration-300 shadow-xl overflow-hidden group ${isDark
                      ? 'bg-[#073623] bg-light-green-dots-dark text-white border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                      : 'bg-white text-[#0c2b1e] border-[#d5ebd9] hover:shadow-emerald-900/10'
                    }`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-md ${isDark
                        ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                        : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                      }`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0c2b1e]'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`mb-6 text-sm sm:text-base leading-relaxed ${isDark ? 'text-emerald-100/80 font-light' : 'text-[#475569] font-normal'}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center text-sm font-medium ${isDark ? 'text-emerald-100' : 'text-[#0c2b1e]'}`}>
                        <CheckCircle className={`h-4 w-4 mr-2.5 shrink-0 ${isDark ? 'text-emerald-400' : 'text-[#106841]'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
        {/* Decorative Bottom Left Leaf Vector */}
        <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
          <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
            <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
              <Target className="w-4 h-4 text-[#106841]" />
              <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">ELITE PROCESS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
              How Our <span className="text-[#1b7a4b]">Premium Process</span> Works
            </h2>
            <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => {
              const isDark = index === 0 || index === 3;
              return (
                <div
                  key={index}
                  className={`relative rounded-[2.5rem] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden group ${isDark
                      ? 'bg-[#073623] bg-light-green-dots-dark text-white border border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                      : 'bg-white text-[#0c2b1e] border border-[#d5ebd9] hover:shadow-emerald-900/10'
                    }`}
                >
                  {isDark && (
                    <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                      ))}
                    </div>
                  )}

                  <div
                    className={`absolute -bottom-4 -right-2 text-7xl font-black select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 ${isDark ? 'text-emerald-900/40' : 'text-[#e4f5ec]'
                      }`}
                  >
                    {item.step}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6 z-10 relative">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${isDark
                            ? 'bg-[#106841] text-emerald-300 border border-emerald-500/30'
                            : 'bg-[#e4f5ec] text-[#106841] border border-[#a8e0c4]'
                          }`}
                      >
                        <item.icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${isDark
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                            : 'bg-[#f0f9f4] text-[#106841] border-[#c2e7d3]'
                          }`}
                      >
                        STEP {item.step}
                      </span>
                    </div>

                    <h3
                      className={`text-xl font-black mb-3 tracking-tight z-10 relative ${isDark ? 'text-white group-hover:text-emerald-300' : 'text-[#0c2b1e] group-hover:text-[#1b7a4b]'
                        } transition-colors`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed z-10 relative ${isDark ? 'text-emerald-100/80 font-light' : 'text-[#475569] font-normal'
                        }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-dashed border-current/10 flex items-center justify-between z-10 relative">
                    <div
                      className={`h-1 rounded-full transition-all duration-500 group-hover:w-16 ${isDark ? 'w-8 bg-emerald-400' : 'w-8 bg-[#106841]'
                        }`}
                    />
                    <div
                      className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-[#106841]'
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
              <Users className="w-4 h-4 text-[#106841]" />
              <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">ELITE CONSULTANTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
              Meet Our <span className="text-[#1b7a4b]">World-Class</span> Consultants
            </h2>
            <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {counsellors.map((counsellor, index) => {
              const isDark = index === 0;
              return (
                <div
                  key={index}
                  className={`rounded-[2.5rem] p-8 border transition-all duration-300 shadow-xl overflow-hidden group text-center ${isDark
                      ? 'bg-[#073623] bg-light-green-dots-dark text-white border-[#1b7a4b]/40 hover:shadow-emerald-950/20'
                      : 'bg-white text-[#0c2b1e] border-[#d5ebd9] hover:shadow-emerald-900/10'
                    }`}
                >
                  <div className="mb-4">
                    <div className={`w-24 h-24 rounded-full overflow-hidden mx-auto border-4 ${isDark ? 'border-emerald-400/40' : 'border-[#a8e0c4]'}`}>
                      <Image
                        src={counsellor.image}
                        alt={counsellor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className={`text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-[#0c2b1e]'}`}>{counsellor.name}</h3>
                  <p className={`font-bold text-sm mb-2 ${isDark ? 'text-emerald-300' : 'text-[#106841]'}`}>{counsellor.designation}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(counsellor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className={`text-sm font-semibold ml-1 ${isDark ? 'text-emerald-100' : 'text-[#0c2b1e]'}`}>{counsellor.rating}</span>
                  </div>
                  <p className={`text-sm mb-2 ${isDark ? 'text-emerald-100/80' : 'text-gray-600'}`}>{counsellor.experience} Elite Experience</p>
                  <p className={`text-xs mb-4 ${isDark ? 'text-emerald-100/70' : 'text-gray-500'}`}>{counsellor.specialization}</p>
                  <div className={`rounded-xl p-3 border ${isDark ? 'bg-emerald-950/60 border-emerald-800/50 text-emerald-300' : 'bg-[#e4f5ec] border-[#a8e0c4] text-[#106841]'}`}>
                    <p className="text-xs font-bold">{counsellor.achievements}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
              <Trophy className="w-4 h-4 text-[#106841]" />
              <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-3">
              <span className="text-[#1b7a4b]">Elite Student</span> Success Stories
            </h2>
            <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const isDark = index === 1;
              return (
                <div
                  key={index}
                  className={`rounded-[2.2rem] p-7 border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${isDark
                      ? 'bg-[#073623] bg-light-green-dots-dark text-white border-[#1b7a4b]/40'
                      : 'bg-white text-[#0c2b1e] border-[#d5ebd9]'
                    }`}
                >
                  <div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className={`mb-4 italic leading-relaxed text-sm ${isDark ? 'text-emerald-100/90' : 'text-[#475569]'}`}>"{testimonial.text}"</p>
                  </div>
                  <div className={`border-t pt-4 ${isDark ? 'border-emerald-700/40' : 'border-[#d5ebd9]'}`}>
                    <p className={`font-bold text-base ${isDark ? 'text-white' : 'text-[#0c2b1e]'}`}>{testimonial.name}</p>
                    <p className={`text-xs ${isDark ? 'text-emerald-100/80' : 'text-gray-500'}`}>{testimonial.course}</p>
                    <p className={`text-xs font-bold mt-0.5 ${isDark ? 'text-emerald-300' : 'text-[#106841]'}`}>{testimonial.college}</p>
                    <div className={`rounded-lg p-2 mt-3 border ${isDark ? 'bg-emerald-950/60 border-emerald-800/50 text-emerald-300' : 'bg-[#e4f5ec] border-[#a8e0c4] text-[#106841]'}`}>
                      <p className="text-xs font-bold">{testimonial.achievement}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Form */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-[#d5ebd9] shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-4">
                  <Crown className="w-4 h-4 text-[#106841]" />
                  <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">BOOK SESSION</span>
                </div>
                <h3 className="text-2xl font-black text-[#0c2b1e] mb-2">Consultation Request</h3>
                <p className="text-[#475569] text-sm">Get personalized guidance from our education consultants</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#f8faf9] border border-[#d5ebd9] rounded-xl text-[#0c2b1e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#106841] focus:border-transparent transition-all duration-300 text-sm font-medium"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#f8faf9] border border-[#d5ebd9] rounded-xl text-[#0c2b1e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#106841] focus:border-transparent transition-all duration-300 text-sm font-medium"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#f8faf9] border border-[#d5ebd9] rounded-xl text-[#0c2b1e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#106841] focus:border-transparent transition-all duration-300 text-sm font-medium"
                    required
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#f8faf9] border border-[#d5ebd9] rounded-xl text-[#0c2b1e] focus:outline-none focus:ring-2 focus:ring-[#106841] focus:border-transparent transition-all duration-300 text-sm font-medium"
                  >
                    <option value="">Select Area of Interest</option>
                    <option value="engineering">Engineering & Technology</option>
                    <option value="medical">Medical & Life Sciences</option>
                    <option value="business">Business & Management</option>
                    <option value="arts">Arts & Humanities</option>
                    <option value="law">Law & Legal Studies</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your educational goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#f8faf9] border border-[#d5ebd9] rounded-xl text-[#0c2b1e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#106841] focus:border-transparent transition-all duration-300 text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#073623] hover:bg-[#106841] text-white rounded-xl font-bold text-base shadow-lg hover:shadow-emerald-950/20 transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <Crown className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                  <span>Request Consultation</span>
                  <ArrowRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-[#073623] bg-light-green-dots-dark text-white rounded-[2.5rem] p-8 sm:p-10 border border-[#1b7a4b]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Ready to Transform Your <span className="text-emerald-300">Educational Future?</span>
                </h3>
                <p className="text-emerald-100/80 text-sm font-light leading-relaxed mb-8">
                  Book your consultation today and get personalized guidance from our world-class education consultants.
                  Take the first step towards your educational journey.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-[#106841]/50 border border-emerald-500/30 p-4 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Hotline</p>
                      <a href="tel:+919526797987" className="text-white font-bold hover:text-emerald-300 transition-colors text-base">
                        +91 95267 97987
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-[#106841]/50 border border-emerald-500/30 p-4 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Support Email</p>
                      <a href="mailto:info@aptorstudies.com" className="text-white font-bold hover:text-emerald-300 transition-colors text-base">
                        info@aptorstudies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-[#106841]/50 border border-emerald-500/30 p-4 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Consultation Hours</p>
                      <p className="text-white font-bold text-base">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
        {/* Bottom Layered Wave Curves Across Section */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-44 pointer-events-none z-0 opacity-75">
          <svg className="w-full h-full preserve-3d" viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C320,180 640,90 960,140 C1280,190 1360,110 1440,130 L1440,180 L0,180 Z" fill="#c8e9d6" opacity="0.4" />
            <path d="M0,140 C280,90 560,170 840,120 C1120,70 1320,150 1440,140 L1440,180 L0,180 Z" fill="#a3e0c0" opacity="0.25" />
            <path d="M0,160 C400,130 800,180 1200,150 L1440,170 L1440,180 L0,180 Z" fill="#0d7a4d" opacity="0.08" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d7efe2] border border-[#b8e4cd] rounded-full mb-6 shadow-sm">
            <Crown className="w-4 h-4 text-[#095738]" />
            <span className="text-[#095738] text-xs font-bold tracking-wider uppercase">START YOUR ELITE JOURNEY</span>
            <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07301f] tracking-tight leading-[1.15] mb-5 max-w-3xl mx-auto">
            Your <span className="text-[#097544]">Elite Education</span> Awaits
          </h2>

          <p className="text-base sm:text-lg text-[#09472e]/80 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Join thousands of successful students who have transformed their futures with our premium counselling services.
            Your journey to elite education starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-[#095738] hover:bg-[#07442b] text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl shadow-emerald-900/20 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5 border border-emerald-600/30"
            >
              <Globe className="w-5 h-5 text-emerald-300" />
              <span>Explore Elite Institutions</span>
            </Link>
            <Link
              href="/scholarships"
              className="bg-white hover:bg-[#e4f5ec] text-[#095738] font-bold text-base py-4 px-8 rounded-2xl border-2 border-[#095738] shadow-md hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2.5"
            >
              <Trophy className="w-5 h-5 text-[#095738]" />
              <span>View Premium Scholarships</span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-8 sm:mt-10">
            <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#097544] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#097544] rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}