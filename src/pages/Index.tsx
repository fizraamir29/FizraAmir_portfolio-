import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import AboutSkills from "@/components/AboutSkills";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PushingBoundaries from "@/components/PushingBoundaries";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SelectedWorks />
      <AboutSkills />
      <HowItWorks />
      <Testimonials />
      <PushingBoundaries />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
