import { Metadata } from "next";
import { Crown, Shield, Diamond, Sparkles, Lock, Eye, FileText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Excellence | Aptor Studies - Premium Data Protection",
  description: "Learn how Aptor Studies protects your personal information with premium privacy standards. Our comprehensive privacy policy explains elite data collection, usage, and your rights.",
  keywords: "privacy policy, data protection, personal information, Aptor Studies, premium student privacy",
  openGraph: {
    title: "Privacy Excellence | Aptor Studies",
    description: "Learn how Aptor Studies protects your personal information with premium privacy standards.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">PRIVACY PROTECTION</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Privacy</span>
              <br />
              <span className="text-white">Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your privacy is paramount to us. This policy explains how we collect, use, and protect your information with the highest standards of data security.
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
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Premium Information We Collect</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us through our elite platform, such as when you:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Fill out premium contact forms or elite inquiry forms",
                    "Subscribe to our exclusive newsletters and premium content",
                    "Create an elite account on our luxury platform",
                    "Communicate with our premium consultants via email or phone",
                    "Apply for scholarships or premium educational opportunities",
                    "Book elite counselling sessions or luxury services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">How We Use Your Premium Information</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide you with elite services including:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Provide premium educational counseling and elite guidance services",
                    "Send you exclusive information about top universities and luxury courses",
                    "Respond to your inquiries with personalized premium customer support",
                    "Improve our elite services and luxury platform functionality",
                    "Send you premium updates about our services (with your explicit consent)",
                    "Match you with exclusive scholarship and internship opportunities"
                  ].map((use, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {use}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Elite Information Sharing</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "To premium universities and elite colleges when you express interest in their programs",
                    "To trusted service providers who assist us in operating our luxury platform",
                    "When required by law or to protect our rights and maintain service integrity",
                    "To scholarship providers when you apply for premium funding opportunities"
                  ].map((sharing, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {sharing}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Premium Data Security</h2>
                </div>
                <p className="text-gray-300">
                  We implement the highest standards of security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. Our premium security infrastructure includes advanced encryption, secure servers, 
                  and regular security audits. However, no method of transmission over the internet is 100% secure, and we continuously 
                  enhance our security protocols to maintain elite protection standards.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Diamond className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Your Elite Rights</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  As a valued member of our premium community, you have the right to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Access and update your personal information through our elite portal",
                    "Request deletion of your personal information with premium data removal",
                    "Opt-out of marketing communications while maintaining service access",
                    "Request a comprehensive copy of your data in premium format",
                    "Control how your information is used for premium service delivery",
                    "Receive transparent updates about any changes to our privacy practices"
                  ].map((right, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {right}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Premium Cookie Policy</h2>
                </div>
                <p className="text-gray-300">
                  Our luxury platform uses premium cookies and similar technologies to enhance your elite user experience, 
                  analyze platform performance, and provide personalized content. You can control cookie preferences through 
                  your browser settings, though some premium features may require cookies for optimal functionality.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Our Privacy Team</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Excellence policy, please contact our dedicated privacy team:
                </p>
                <div className="card-premium p-6 bg-yellow-400/5 border border-yellow-400/20">
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-yellow-400">Email:</strong> info@aptorstudies.com</p>
                    <p><strong className="text-yellow-400">Phone:</strong> +91 95267 97987</p>
                    <p><strong className="text-yellow-400">Address:</strong> Calicut, Kerala, India</p>
                    <p><strong className="text-yellow-400">Privacy Officer:</strong> Available 24/7 for premium support</p>
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