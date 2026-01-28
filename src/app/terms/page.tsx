import { Metadata } from "next";
import { Crown, Shield, Diamond, Sparkles, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Excellence | Aptor Studies - Premium Service Agreement",
  description: "Read our premium terms of service and elite user agreement for Aptor Studies luxury educational services. Understand your rights and responsibilities.",
  keywords: "terms of service, user agreement, terms and conditions, Aptor Studies, premium educational services",
  openGraph: {
    title: "Terms of Excellence | Aptor Studies",
    description: "Read our premium terms of service and elite user agreement for Aptor Studies luxury educational services.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Scale className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">LEGAL TERMS</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Terms of</span>
              <br />
              <span className="text-white">Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our commitment to providing exceptional premium educational services and your agreement to use them responsibly.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12">
            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Acceptance of Premium Terms</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Aptor Studies premium services, you accept and agree to be bound by these elite terms and 
                  provisions. If you do not agree to abide by these premium standards, please do not use our luxury educational services.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Diamond className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Premium Services</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Aptor Studies provides elite educational services including:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Premium educational counseling and elite guidance services",
                    "Exclusive university and college admission assistance",
                    "Luxury course information and personalized recommendations",
                    "Elite career guidance and premium internship opportunities",
                    "Luxury accommodation assistance for discerning students",
                    "VIP scholarship matching and application support"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Elite User Responsibilities</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  As a valued user of our premium services, you agree to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Provide accurate and truthful information for premium service delivery",
                    "Use our elite services for lawful and educational purposes only",
                    "Respect all intellectual property rights and premium content",
                    "Not interfere with the proper functioning of our luxury platform",
                    "Maintain the confidentiality of your premium account credentials",
                    "Uphold the standards of excellence expected in our elite community"
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Premium Service Availability</h2>
                </div>
                <p className="text-gray-300">
                  While we strive to provide uninterrupted premium service, we do not guarantee that our elite services will be 
                  available at all times. We may temporarily suspend or restrict access for maintenance, luxury updates, 
                  or other operational enhancements to maintain our premium standards.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
                </div>
                <p className="text-gray-300">
                  Aptor Studies provides premium educational guidance and elite information services. While we maintain the highest 
                  standards of accuracy and excellence, we cannot guarantee admission to any institution or specific outcomes. 
                  Users are responsible for verifying information and making their own informed decisions with our premium guidance.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
                </div>
                <p className="text-gray-300">
                  All premium content on this platform, including text, graphics, logos, and proprietary software, is the exclusive 
                  property of Aptor Studies and is protected by copyright and other intellectual property laws. Our elite content 
                  represents significant investment in premium educational resources.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Modifications to Terms</h2>
                </div>
                <p className="text-gray-300">
                  We reserve the right to modify these premium terms at any time to maintain our standards of excellence. 
                  Changes will be effective immediately upon posting on our elite platform. Your continued use of our premium 
                  services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Elite Contact Information</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  For questions about these premium terms, please contact our elite legal team:
                </p>
                <div className="card-premium p-6 bg-yellow-400/5 border border-yellow-400/20">
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-yellow-400">Email:</strong> info@aptorstudies.com</p>
                    <p><strong className="text-yellow-400">Phone:</strong> +91 95267 97987</p>
                    <p><strong className="text-yellow-400">Address:</strong> Calicut, Kerala, India</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}