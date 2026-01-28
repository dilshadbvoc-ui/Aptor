"use client";

import { Crown, Star, Diamond, Award, Users, Globe, Target, Heart, Sparkles, ArrowRight, Trophy, Shield, Phone, Mail, Calendar, CheckCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">ELITE COUNSELLING</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Premium</span>
              <br />
              <span className="text-white">Elite Counselling</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Confused about your elite educational path? Get personalized luxury guidance from our world-class consultants 
              and make strategic decisions about your premium educational future.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "1000+", label: "Elite Students" },
              { icon: Award, value: "98%", label: "Success Rate" },
              { icon: Globe, value: "50+", label: "Top Universities" },
              { icon: Trophy, value: "15+", label: "Years Excellence" }
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

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Diamond className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Elite Counselling</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-premium hover-lift-premium slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Target className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">ELITE PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Our <span className="gradient-text">Premium Process</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="card-premium p-6 text-center hover-lift-premium slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="text-yellow-400 font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counsellors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">ELITE CONSULTANTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="gradient-text">World-Class</span> Consultants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {counsellors.map((counsellor, index) => (
              <div
                key={index}
                className="card-premium hover-lift-premium slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-yellow-400/30">
                      <Image
                        src={counsellor.image}
                        alt={counsellor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{counsellor.name}</h3>
                  <p className="text-yellow-400 font-medium mb-2">{counsellor.designation}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(counsellor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">{counsellor.rating}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{counsellor.experience} Elite Experience</p>
                  <p className="text-sm text-gray-400 mb-3">{counsellor.specialization}</p>
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                    <p className="text-xs text-yellow-400 font-medium">{counsellor.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Elite Student</span> Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-premium hover-lift-premium slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-yellow-400/20 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.course}</p>
                    <p className="text-sm text-yellow-400 font-medium">{testimonial.college}</p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-2 mt-2">
                      <p className="text-xs text-yellow-400 font-medium">{testimonial.achievement}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="card-premium p-8 glow">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-xs font-medium">BOOK ELITE SESSION</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Premium Consultation Request</h3>
                <p className="text-gray-400">Get personalized guidance from our elite education consultants</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold"
                >
                  <Crown className="w-5 h-5" />
                  Request Elite Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your <span className="gradient-text">Educational Future?</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Book your premium consultation today and get personalized guidance from our world-class education consultants. 
                  Take the first step towards your elite educational journey.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 card-premium p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Elite Hotline</p>
                    <a href="tel:+919526797987" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      +91 95267 97987
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 card-premium p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Premium Support</p>
                    <a href="mailto:info@aptorstudies.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      info@aptorstudies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 card-premium p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Consultation Hours</p>
                    <p className="text-gray-400">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 text-center glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">START YOUR ELITE JOURNEY</span>
              <Diamond className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your <span className="gradient-text">Elite Education</span> Awaits
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their futures with our premium counselling services. 
              Your journey to elite education starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/universities-colleges"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
              >
                <Globe className="w-5 h-5" />
                Explore Elite Institutions
              </Link>
              <Link
                href="/scholarships"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
              >
                <Trophy className="w-5 h-5" />
                View Premium Scholarships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}