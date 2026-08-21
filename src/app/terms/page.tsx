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
            <Scale className="w-4 h-4 text-[#106841]" />
            <span className="text-[#106841] text-xs font-bold tracking-wider uppercase">LEGAL TERMS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#106841]" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b1e] tracking-tight leading-[1.15] mb-4">
            <span className="text-[#1b7a4b]">Terms of</span> Service & Agreement
          </h1>
          <div className="w-14 h-1 bg-[#1b7a4b] rounded-full mx-auto mb-6" />

          {/* Description */}
          <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-3">
            Our commitment to providing exceptional premium educational services and your agreement to use them responsibly.
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
                <Crown className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Acceptance of Premium Terms</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              By accessing and using Aptor Studies premium services, you accept and agree to be bound by these elite terms and 
              provisions. If you do not agree to abide by these premium standards, please do not use our luxury educational services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Diamond className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Our Premium Services</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              Aptor Studies provides elite educational services including:
            </p>
            <ul className="space-y-3 text-[#475569]">
              {[
                "Premium educational counseling and elite guidance services",
                "Exclusive university and college admission assistance",
                "Luxury course information and personalized recommendations",
                "Elite career guidance and premium internship opportunities",
                "Luxury accommodation assistance for discerning students",
                "VIP scholarship matching and application support"
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#106841] rounded-full flex-shrink-0"></div>
                  <span className="font-normal">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Elite User Responsibilities</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              As a valued user of our premium services, you agree to:
            </p>
            <ul className="space-y-3 text-[#475569]">
              {[
                "Provide accurate and truthful information for premium service delivery",
                "Use our elite services for lawful and educational purposes only",
                "Respect all intellectual property rights and premium content",
                "Not interfere with the proper functioning of our luxury platform",
                "Maintain the confidentiality of your premium account credentials",
                "Uphold the standards of excellence expected in our elite community"
              ].map((responsibility, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#106841] rounded-full flex-shrink-0"></div>
                  <span className="font-normal">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Premium Service Availability</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              While we strive to provide uninterrupted premium service, we do not guarantee that our elite services will be 
              available at all times. We may temporarily suspend or restrict access for maintenance, luxury updates, 
              or other operational enhancements to maintain our premium standards.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Limitation of Liability</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              Aptor Studies provides premium educational guidance and elite information services. While we maintain the highest 
              standards of accuracy and excellence, we cannot guarantee admission to any institution or specific outcomes. 
              Users are responsible for verifying information and making their own informed decisions with our premium guidance.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Crown className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Intellectual Property</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              All premium content on this platform, including text, graphics, logos, and proprietary software, is the exclusive 
              property of Aptor Studies and is protected by copyright and other intellectual property laws. Our elite content 
              represents significant investment in premium educational resources.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Modifications to Terms</h2>
            </div>
            <p className="text-[#475569] leading-relaxed font-normal">
              We reserve the right to modify these premium terms at any time to maintain our standards of excellence. 
              Changes will be effective immediately upon posting on our elite platform. Your continued use of our premium 
              services constitutes acceptance of the modified terms.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e4f5ec] border border-[#a8e0c4] text-[#106841] rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0c2b1e]">Elite Contact Information</h2>
            </div>
            <p className="text-[#475569] mb-4 leading-relaxed font-normal">
              For questions about these premium terms, please contact our elite legal team:
            </p>
            <div className="p-6 bg-white/80 rounded-2xl border border-[#d5ebd9] shadow-sm space-y-2 text-[#475569]">
              <p><strong className="text-[#0c2b1e]">Email:</strong> info@aptorstudies.com</p>
              <p><strong className="text-[#0c2b1e]">Phone:</strong> +91 95267 97987</p>
              <p><strong className="text-[#0c2b1e]">Address:</strong> Calicut, Kerala, India</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}