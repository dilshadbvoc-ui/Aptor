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
    <div className="min-h-screen bg-white">
      {/* Hero Header Section (Blogs Page Background Theme) */}
      <section className="relative py-20 lg:py-24 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden">
        {/* Decorative Top Right Leaf Vector */}
        <div className="absolute right-0 top-0 pointer-events-none opacity-40 z-0 transform rotate-180">
          <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
            <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Mint Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e4f5ec] border border-[#a8e0c4] rounded-full mb-6 shadow-sm">
            <Shield className="w-4 h-4 text-[#106841]" />
            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">PRIVACY PROTECTION</span>
            <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
            <span className="text-[#1b7a4b]">Privacy</span> Policy & Protection
          </h1>
          <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

          {/* Description */}
          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-3">
            Your privacy is paramount to us. This policy explains how we collect, use, and protect your information with the highest standards of data security.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content Section (Blogs Page Background Theme without card containers) */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f2f8f4] via-[#eaf4ed] to-[#f4f9f5] bg-light-green-dots overflow-hidden border-t border-[#d5ebd9]/60">
        {/* Decorative Bottom Left Leaf Vector */}
        <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 z-0">
          <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C50 150 70 80 180 50C100 120 40 180 0 200Z" fill="#1b7a4b" opacity="0.15" />
            <path d="M20 200C70 170 110 120 200 100C130 150 70 190 20 200Z" fill="#22c55e" opacity="0.2" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Premium Information We Collect</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              We collect information you provide directly to us through our elite platform, such as when you:
            </p>
            <ul className="space-y-3 text-[#475569]">
              {[
                "Fill out premium contact forms or elite inquiry forms",
                "Subscribe to our exclusive newsletters and premium content",
                "Create an elite account on our luxury platform",
                "Communicate with our premium consultants via email or phone",
                "Apply for scholarships or premium educational opportunities",
                "Book elite counselling sessions or luxury services"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#106841] rounded-full flex-shrink-0"></div>
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Crown className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">How We Use Your Premium Information</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              We use the information we collect to provide you with elite services including:
            </p>
            <ul className="space-y-3 text-[#475569]">
              {[
                "Provide premium educational counseling and elite guidance services",
                "Send you exclusive information about top universities and luxury courses",
                "Respond to your inquiries with personalized premium customer support",
                "Improve our elite services and luxury platform functionality",
                "Send you premium updates about our services (with your explicit consent)",
                "Match you with exclusive scholarship and internship opportunities"
              ].map((use, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#106841] rounded-full flex-shrink-0"></div>
                  <span className="font-normal">{use}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Elite Information Sharing</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except:
            </p>
            <ul className="space-y-3 text-[#475569]">
              {[
                "To premium universities and elite colleges when you express interest in their programs",
                "To trusted service providers who assist us in operating our luxury platform",
                "When required by law or to protect our rights and maintain service integrity",
                "To scholarship providers when you apply for premium funding opportunities"
              ].map((sharing, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#106841] rounded-full flex-shrink-0"></div>
                  <span className="font-normal">{sharing}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Premium Data Security</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              We implement the highest standards of security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. Our premium security infrastructure includes advanced encryption, secure servers, 
              and regular security audits. However, no method of transmission over the internet is 100% secure, and we continuously 
              enhance our security protocols to maintain elite protection standards.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Diamond className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Your Elite Rights</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              As a valued member of our premium community, you have the right to:
            </p>
            <ul className="space-y-3 text-[#475569]">
              {[
                "Access and update your personal information through our elite portal",
                "Request deletion of your personal information with premium data removal",
                "Opt-out of marketing communications while maintaining service access",
                "Request a comprehensive copy of your data in premium format",
                "Control how your information is used for premium service delivery",
                "Receive transparent updates about any changes to our privacy practices"
              ].map((right, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#106841] rounded-full flex-shrink-0"></div>
                  <span className="font-normal">{right}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Premium Cookie Policy</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              Our luxury platform uses premium cookies and similar technologies to enhance your elite user experience, 
              analyze platform performance, and provide personalized content. You can control cookie preferences through 
              your browser settings, though some premium features may require cookies for optimal functionality.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Contact Our Privacy Team</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              If you have any questions about this Privacy Excellence policy, please contact our dedicated privacy team:
            </p>
            <div className="p-6 bg-white/80 rounded-2xl border border-[#d5ebd9] shadow-sm space-y-2 text-[#475569]">
              <p><strong className="text-[#0c2b1e]">Email:</strong> info@aptorstudies.com</p>
              <p><strong className="text-[#0c2b1e]">Phone:</strong> +91 95267 97987</p>
              <p><strong className="text-[#0c2b1e]">Address:</strong> Calicut, Kerala, India</p>
              <p><strong className="text-[#0c2b1e]">Privacy Officer:</strong> Available 24/7 for premium support</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}