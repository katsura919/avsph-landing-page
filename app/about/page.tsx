"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionVisionSection from "../../components/about/MissionVisionSection";
import OurStorySection from "../../components/about/OurStorySection";
import MilestonesSection from "../../components/about/MilestonesSection";
import WhatWeDoSection from "../../components/about/WhatWeDoSection";
import CTASection from "../../components/CTASection";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHeroSection />
        <OurStorySection />
        <MilestonesSection />
        <MissionVisionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
