
import { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsMap } from "../components/SkillsMap";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AboutBlock } from "../components/AboutBlock";
import { ALL_SKILLS } from "../components/ExperienceTimeline"; // For initial skill

const sectionSpacing = "py-6 sm:py-7"; // Use uniform vertical spacing per section

const Index = () => {
  // Default to the first skill
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(ALL_SKILLS[0]);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        {/* Hero section at the top */}
        <HeroSection />
        {/* AboutBlock (Who am I) second */}
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <AboutBlock />
        </section>
        {/* Skills Map */}
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <SkillsMap selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </section>
        {/* Experience */}
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <ExperienceTimeline selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </section>
        {/* Case Studies */}
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <CaseStudiesSection />
        </section>
        {/* Projects */}
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <ProjectShowcase />
        </section>
      </main>
      {/* Footer moved here */}
      <div className="text-center mt-5 text-xs text-muted-foreground pb-3">
        &copy; {new Date().getFullYear()} Saptarshi — Made with ❤️ for Product Careers
      </div>
    </div>
  );
};

export default Index;
