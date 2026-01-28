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
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">ABOUT APTOR STUDIES</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="gradient-text">Transforming</span>
                            <br />
                            <span className="text-white">Elite Education</span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            For over 25 years, Aptor Studies has been the world's premier education consultancy, connecting exceptional students with the most prestigious institutions globally.
                        </p>
                        
                        <p className="text-lg text-gray-500 mt-4">
                            Running under <span className="text-yellow-400 font-semibold">Connected Management Solution</span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
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

            {/* Mission & Vision */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                                <Target className="w-4 h-4 text-yellow-400" />
                                <span className="text-yellow-400 text-sm font-medium">OUR MISSION</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Empowering <span className="gradient-text">Global Leaders</span>
                            </h2>
                            
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Facilitating best educational opportunities in both national and prestigious universities abroad. We rightly set the academic goals for aspiring students.
                            </p>
                            
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Complementing the aptitudes of students, we recommend nothing less than the best in their academic pursuit.
                            </p>
                            
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
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
                                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <Star className="w-3 h-3 text-black" />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
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
                            <div className="absolute -bottom-6 -left-6 card-premium p-6 hover-lift-premium glow">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                                        <Award className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold gradient-text">25+ Years</div>
                                        <div className="text-sm text-gray-400">Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Heart className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">OUR VALUES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            What <span className="gradient-text">Drives Us</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our core values guide everything we do and shape the exceptional experience we provide to our students.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="card-premium p-6 text-center hover-lift-premium slide-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Users className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">LEADERSHIP TEAM</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Meet Our <span className="gradient-text">Visionary Leaders</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our leadership team brings decades of experience from the world's most prestigious institutions.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="card-premium hover-lift-premium slide-up overflow-hidden"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="md:flex">
                                    <div className="md:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-400/30">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                            <p className="text-yellow-400 font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic mb-6">
                                            "{member.quote}"
                                        </blockquote>
                                        <div className="border-l-4 border-yellow-400/30 pl-6">
                                            <p className="text-gray-400 leading-relaxed">
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
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Globe className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">OUR BRANCHES</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="gradient-text">Global Presence</span> & Local Support
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
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
                                className="card-premium p-6 text-center hover-lift-premium slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <Globe className="w-6 h-6 text-black" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{branch.name}</h3>
                                <p className="text-gray-400 text-sm mb-2">{branch.region}</p>
                                <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                                    <span className="text-yellow-400 text-xs font-medium">{branch.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="card-premium p-6 inline-block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-black" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-gray-400">Contact All Branches</div>
                                    <a href="tel:+919526797987" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium text-lg">
                                        +91 95267 97987
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <blockquote className="text-2xl md:text-3xl font-medium text-white italic mb-6">
                            <span className="gradient-text">"Education is the passport to the future, and Aptor Studies is your first-class ticket."</span>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="card-premium p-8 md:p-12 text-center glow">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-medium">JOIN THE ELITE</span>
                            <Diamond className="w-4 h-4 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Transform Your <span className="gradient-text">Educational Journey?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful students who have achieved their dreams with Aptor Studies. 
                            Let us help you unlock your potential and secure your place at the world's most prestigious institutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/counselling"
                                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                            >
                                <Crown className="w-5 h-5" />
                                Start Your Journey
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/universities-colleges"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
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