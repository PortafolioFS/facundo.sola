import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { TrainingSection } from "@/components/training-section";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-5 py-20 sm:px-8 sm:py-24 lg:gap-32 lg:px-10 lg:py-32">
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <TrainingSection />
        <ContactSection />
      </div>
    </main>
  );
}
