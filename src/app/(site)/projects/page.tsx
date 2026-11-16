"use client";

import { MotionConfig } from "framer-motion";
import { Container, SectionHeading } from "../../components/ui";
import {
  ProjectsHero,
  FeaturedProjectCard,
  CompactProjectCard,
  ProjectsCta,
} from "../../components/projects";
import { FEATURED, LIVE_SITES, DESIGN_WORK } from "../../data/projects";

export default function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip pb-12 pt-28 md:pb-16 md:pt-36">
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
          <ProjectsHero />

          {/* Featured case studies */}
          <section
            id="case-studies"
            aria-labelledby="featured-heading"
            className="mt-16 md:mt-24 scroll-mt-24"
          >
            <h2 id="featured-heading" className="sr-only">
              Featured case studies
            </h2>
            <div className="space-y-14 md:space-y-20">
              {FEATURED.map((p, i) => (
                <FeaturedProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* Client websites */}
          <section
            id="websites"
            aria-labelledby="websites-heading"
            className="mt-16 md:mt-24 scroll-mt-24"
          >
            <SectionHeading
              id="websites-heading"
              title="Client websites"
              highlight="& platforms"
              note="Production web applications & business sites"
              layout="split"
            />
            <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {LIVE_SITES.map((p) => (
                <CompactProjectCard key={p.slug} project={p} />
              ))}
            </ul>
          </section>

          {/* Design systems & visual craft */}
          <section
            id="design-work"
            aria-labelledby="design-heading"
            className="mt-16 md:mt-24 scroll-mt-24"
          >
            <SectionHeading
              id="design-heading"
              title="Visual craft"
              highlight="& systems"
              note="Icon systems, vectors & brand typography"
              layout="split"
            />
            <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {DESIGN_WORK.map((p) => (
                <CompactProjectCard key={p.slug} project={p} />
              ))}
            </ul>
          </section>

          {/* Closing CTA */}
          <ProjectsCta />
        </Container>
      </div>
    </MotionConfig>
  );
}
