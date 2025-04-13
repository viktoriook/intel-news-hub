
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import InsightSection from "@/components/InsightSection";
import AIIntelligence from "@/components/AIIntelligence";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LatestNews />
      <InsightSection />
      <AIIntelligence />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
