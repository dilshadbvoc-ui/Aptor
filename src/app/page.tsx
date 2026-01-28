import { Hero } from "@/components/home/Hero";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { ValuesSection } from "@/components/home/ValuesSection";
import { CTASection } from "@/components/home/CTASection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="mobile-safe-area">
      <Hero />
      <FeaturesGrid />
      <ValuesSection />
      <CTASection />
      <WhatsAppButton />
    </div>
  );
}
