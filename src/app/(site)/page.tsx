"use client";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import WhyAswanthSection from "../components/home/WhyAswanthSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center font-sans">
      <div className="grid-bg absolute inset-0 -z-10 pointer-events-none" />

      <div className="flex w-full flex-col gap-16 md:gap-24">
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
