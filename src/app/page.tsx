import { Features } from "@/components/blocks/features-2";
import { Faqs } from "@/components/faqs-4";
import FinanceDashboardImage from "@/components/FinanceDashboardImage";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FinanceDashboardImage />
      <LogoCloud/>
      <Features />
      <Faqs />
      <FooterSection />
    </div>
  );
}
