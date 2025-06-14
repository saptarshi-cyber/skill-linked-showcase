
import { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { SkillsMap } from "../components/SkillsMap";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AboutBlock } from "../components/AboutBlock";

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(undefined);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <HeroSection />
        <div className="w-full flex flex-col gap-12">
          <SkillsMap selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          <ExperienceTimeline selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          <ProjectShowcase />
          <AboutBlock />
        </div>
      </main>
    </div>
  );
};

export default Index;
