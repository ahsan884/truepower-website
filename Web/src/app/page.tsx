import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { ReliableEnergySection } from "@/components/sections/ReliableEnergySection";
import { SolutionsGlanceSection } from "@/components/sections/SolutionsGlanceSection";
import { WhyTruPowerSection } from "@/components/sections/WhyTruPowerSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureHighlights />
        <ReliableEnergySection />
        <SolutionsGlanceSection />
        <WhyTruPowerSection />
        <StatsBar />
        <CtaBanner />
      </main>
    </>
  );
}
