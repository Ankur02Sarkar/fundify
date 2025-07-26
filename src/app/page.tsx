import { Features } from "@/components/blocks/features-2";
import { Faqs } from "@/components/faqs-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Faqs />
      <FooterSection />
    </div>
  );
}
