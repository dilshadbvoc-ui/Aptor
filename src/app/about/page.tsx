"use client";

import { Crown, Star, Diamond, Award, Users, Globe, Target, Heart, Sparkles, ArrowRight, Trophy, Shield, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
    { icon: Users, value: "50K+", label: "Elite Students" },
    { icon: Globe, value: "100+", label: "Partner Universities" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Trophy, value: "25+", label: "Years Experience" }
];

const values = [
    {
        icon: Crown,
        title: "Excellence",
        description: "We maintain the highest standards in everything we do, ensuring our students receive world-class education and support.",
        color: "from-yellow-400 to-yellow-600"
    },
    {
        icon: Shield,
        title: "Trust",
        description: "Built on integrity and transparency, we've earned the trust of thousands of students and prestigious institutions worldwide.",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: Heart,
        title: "Care",
        description: "Every student's journey is unique. We provide personalized attention and support to help you achieve your dreams.",
        color: "from-red-400 to-red-600"
    },
    {
        icon: Target,
        title: "Innovation",
        description: "We continuously evolve our services and technology to provide cutting-edge solutions for modern education needs.",
        color: "from-green-400 to-green-600"
    }
];

const team = [
    {
        name: "Jamsheer Backer",
        role: "MANAGING DIRECTOR",
        image: "/jamsheer-backer.jpeg",
        description: "Visionary leader with 20+ years in elite education consulting, committed to connecting students with world-class opportunities.",
        quote: "Excellence isn't just a goal at APTOR—it's our standard. We go to great lengths to vet and select premier universities with state-of-the-art facilities, ensuring our students have access to the best possible learning environments."
    },
    {
        name: "Adv. Arif Wafy",
        role: "LEGAL ADVISOR",
        image: "/arif-wafy.jpeg",
        description: "Legal expert ensuring highest standards of compliance and ethical practice in all our operations.",
        quote: "Our focus on student satisfaction has helped us win the respect of both students and parents. Because of how well we have served them, parents have become our strongest advocates."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">ABOUT APTOR STUDIES</span>
                            <Sparkles className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Transforming</span>
                            <br />
                            <span className="text-green-900">Education</span>
                        </h1>
                        
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            For over 25 years, Aptor Studies has been the world's premier education consultancy, connecting exceptional students with the most prestigious institutions globally.
                        </p>
                        
                        <p className="text-lg text-gray-600 mt-4">
                            Running under <span className="text-green-600 font-semibold">Connected Management Solution</span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                                <Target className="w-4 h-4 text-green-600" />
                                <span className="text-green-700 text-sm font-medium">OUR MISSION</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                                Empowering <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Global Leaders</span>
                            </h2>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Facilitating best educational opportunities in both national and prestigious universities abroad. We rightly set the academic goals for aspiring students.
                            </p>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Complementing the aptitudes of students, we recommend nothing less than the best in their academic pursuit.
                            </p>
                            
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Relieving you of uncertainties and confusion regarding career options, we serve you by providing the best counselling and guidance to help you make the right decision.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Personalized education consulting for every student",
                                    "Access to exclusive scholarship opportunities",
                                    "Direct partnerships with top-tier institutions",
                                    "Comprehensive career guidance and mentorship"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <Star className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative fade-in">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/campus.png"
                                    alt="Aptor Studies campus"
                                    width={600}
                                    height={400}
                                    className="w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-green-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">25+ Years</div>
                                        <div className="text-sm text-gray-600">Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Heart className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">OUR VALUES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            What <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Drives Us</span>
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Our core values guide everything we do and shape the exceptional experience we provide to our students.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-green-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Users className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">LEADERSHIP TEAM</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            Meet Our <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Visionary Leaders</span>
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Our leadership team brings decades of experience from the world's most prestigious institutions.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="md:flex">
                                    <div className="md:w-1/3 bg-gradient-to-br from-green-50 to-green-100 p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-200">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold text-green-900 mb-2">{member.name}</h3>
                                            <p className="text-green-600 font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                                            "{member.quote}"
                                        </blockquote>
                                        <div className="border-l-4 border-green-200 pl-6">
                                            <p className="text-gray-600 leading-relaxed">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branches Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Globe className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">OUR BRANCHES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Global Presence</span> & Local Support
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            With branches across Kerala and UAE, we provide personalized education consulting services closer to you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { name: "Vadakara", region: "Kerala, India", type: "Main Branch" },
                            { name: "Tirur", region: "Kerala, India", type: "Branch Office" },
                            { name: "Nadhapuram", region: "Kerala, India", type: "Branch Office" },
                            { name: "Kalpetta", region: "Kerala, India", type: "Branch Office" },
                            { name: "Calicut", region: "Kerala, India", type: "Regional Office" },
                            { name: "Kochi", region: "Kerala, India", type: "Regional Office" },
                            { name: "UAE", region: "United Arab Emirates", type: "International Office" }
                        ].map((branch, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-green-900 mb-2">{branch.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{branch.region}</p>
                                <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 border border-green-200 rounded-full">
                                    <span className="text-green-700 text-xs font-medium">{branch.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 inline-block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-gray-600">Contact All Branches</div>
                                    <a href="tel:+919526797987" className="text-green-600 hover:text-green-700 transition-colors font-medium text-lg">
                                        +91 95267 97987
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8 md:p-12 text-center">
                        <blockquote className="text-2xl md:text-3xl font-medium text-green-900 italic mb-6">
                            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">"Education is the passport to the future, and Aptor Studies is your first-class ticket."</span>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl border border-green-100 p-8 md:p-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 text-sm font-medium">JOIN US</span>
                            <Diamond className="w-4 h-4 text-green-600" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                            Ready to Transform Your <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Educational Journey?</span>
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful students who have achieved their dreams with Aptor Studies. 
                            Let us help you unlock your potential and secure your place at the world's most prestigious institutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                <Crown className="w-5 h-5" />
                                Start Your Journey
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/universities-colleges"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-500 hover:text-white transition-all duration-300"
                            >
                                <Globe className="w-5 h-5" />
                                Explore Institutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}