"use client";

import { Home, MapPin, Wifi, Car, Utensils, Shield, Phone, Mail, CheckCircle, Crown, Star, Diamond, Sparkles, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export default function AccommodationPage() {
  const accommodationTypes = [
    {
      title: "Elite University Residences",
      description: "Premium on-campus accommodation with luxury amenities",
      features: ["24/7 Concierge", "Gourmet Dining", "High-Speed Wi-Fi", "Premium Study Lounges"],
      priceRange: "₹25,000 - ₹45,000/month",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Luxury Private Suites",
      description: "Exclusive paying guest accommodations with premium services",
      features: ["Furnished Suites", "Chef-Prepared Meals", "Housekeeping", "Concierge Service"],
      priceRange: "₹35,000 - ₹65,000/month",
      icon: Diamond,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Premium Apartments",
      description: "Independent luxury living with elite amenities",
      features: ["Modern Kitchen", "Private Balcony", "Gym Access", "Valet Parking"],
      priceRange: "₹45,000 - ₹85,000/month",
      icon: Star,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const amenities = [
    { name: "Ultra-Fast Wi-Fi", icon: Wifi },
    { name: "Elite Security", icon: Shield },
    { name: "Gourmet Dining", icon: Utensils },
    { name: "Valet Parking", icon: Car },
    { name: "Premium Service", icon: Home },
    { name: "Study Lounges", icon: CheckCircle }
  ];

  const cities = [
    "Bangalore Elite", "Mumbai Premium", "Delhi Luxury", "Chennai Elite", 
    "Hyderabad Premium", "Pune Luxury", "Kolkata Elite", "Ahmedabad Premium", 
    "Jaipur Luxury", "Lucknow Elite", "Kochi Premium", "Coimbatore Luxury"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Home className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">LUXURY LIVING</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Premium</span>
              <br />
              <span className="text-white">Student Accommodation</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience luxury living while pursuing your elite education. Our premium accommodations offer world-class amenities and unparalleled comfort for discerning students.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">ELITE OPTIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Luxury</span> Accommodation Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodationTypes.map((type, index) => (
              <div
                key={index}
                className="card-premium hover-lift-premium slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mr-4`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  
                  <div className="mb-6">
                    <p className="font-bold text-yellow-400 text-lg mb-3">{type.priceRange}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn-premium w-full text-center inline-flex items-center justify-center gap-2 text-black font-semibold">
                    <Crown className="w-4 h-4" />
                    View Elite Options
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Diamond className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">PREMIUM AMENITIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">World-Class</span> Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="card-premium p-6 text-center hover-lift-premium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <amenity.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <p className="text-sm font-medium text-white">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Cities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">ELITE LOCATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Premium</span> City Locations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="card-premium p-4 text-center hover-lift-premium cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="font-medium text-white group-hover:text-yellow-400 transition-colors">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">ELITE PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Our <span className="gradient-text">Premium Service</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Elite Search", description: "Browse premium accommodations in your preferred elite district", icon: Crown },
              { step: "02", title: "Luxury Compare", description: "Compare amenities, services, and reviews from elite students", icon: Diamond },
              { step: "03", title: "VIP Visit", description: "Schedule exclusive property tours with our premium concierge", icon: Star },
              { step: "04", title: "Secure Booking", description: "Reserve your luxury accommodation with our verified elite process", icon: Trophy }
            ].map((item, index) => (
              <div
                key={index}
                className="card-premium p-6 text-center hover-lift-premium"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="text-yellow-400 font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 text-center glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">PREMIUM ASSISTANCE</span>
              <Diamond className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Finding <span className="gradient-text">Elite Accommodation?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our luxury accommodation specialists provide personalized assistance and exclusive access to premium properties worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3 card-premium p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Elite Hotline</div>
                  <a href="tel:+919526797987" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                    +91 95267 97987
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 card-premium p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Premium Email</div>
                  <a href="mailto:info@aptorstudies.com" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                    info@aptorstudies.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/counselling"
                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
              >
                <Crown className="w-5 h-5" />
                Get Premium Assistance
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
              >
                <Home className="w-5 h-5" />
                Contact Elite Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
