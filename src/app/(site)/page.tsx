"use client";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import WhyAswanthSection from "../components/home/WhyAswanthSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex relative min-h-screen pt-24 flex-col items-center font-sans scroll-smooth">
      <div className="absolute inset-0 grid-bg -z-10" />

      <div className="flex flex-col gap-22 px-6">
        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <WhyAswanthSection />

        <TestimonialSection />

        <ContactSection />
      </div>
    </div>
  );
}
