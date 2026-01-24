import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ChallengeSection from "../components/ChallengeSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
