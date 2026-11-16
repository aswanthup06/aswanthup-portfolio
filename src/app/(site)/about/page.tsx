"use client";

import { MotionConfig } from "framer-motion";
import { Container } from "../../components/ui";
import {
  AboutHero,
  AboutMarquee,
  AboutStats,
  AboutJourney,
  AboutPrinciples,
  AboutWorkbench,
  AboutBeyondCode,
  AboutCta,
} from "../../components/about";

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex flex-col items-center overflow-x-clip pb-12 md:pb-16 pt-28 md:pt-36 w-full">
        <div
          className="grid-bg absolute inset-x-0 top-0 h-[650px] -z-10 pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
          }}
        />

        <Container>
          <AboutHero />
          <AboutMarquee />
          <AboutStats />
          <AboutJourney />
          <AboutPrinciples />
          <AboutWorkbench />
          <AboutBeyondCode />
          <AboutCta />
        </Container>
      </div>
    </MotionConfig>
  );
}
