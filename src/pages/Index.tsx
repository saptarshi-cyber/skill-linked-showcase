
import { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsMap } from "../components/SkillsMap";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AboutBlock } from "../components/AboutBlock";

const sectionSpacing = "py-6 sm:py-7"; // Use uniform vertical spacing per section

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(undefined);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <HeroSection />
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <SkillsMap selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </section>
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <ExperienceTimeline selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </section>
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <CaseStudiesSection />
        </section>
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <ProjectShowcase />
        </section>
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <AboutBlock />
        </section>
      </main>
    </div>
  );
};

export default Index;
