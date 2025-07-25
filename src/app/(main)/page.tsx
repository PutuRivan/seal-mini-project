import AdsSection from "@/components/sections/home/ads-section";
import HeroSection from "@/components/sections/home/hero-section";
import PopularSection from "@/components/sections/home/popular-section";
import RecomendationSection from "@/components/sections/home/recomendation-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 p-10 px-16">
      <HeroSection />
      <PopularSection />
      <RecomendationSection />
      <AdsSection />
    </main>
  );
}