
import { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsMap } from "../components/SkillsMap";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AboutBlock } from "../components/AboutBlock";
import { CertificationsSection } from "../components/CertificationsSection";
import { LinkedInPost } from "../components/LinkedInPost";
import { ALL_SKILLS } from "../components/ExperienceTimeline";

const sectionSpacing = "py-4 sm:py-6 lg:py-7";

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(ALL_SKILLS[0]);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-1 flex flex-col items-center">
        <HeroSection />
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <AboutBlock />
        </section>
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
          <CertificationsSection />
        </section>
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <LinkedInPost />
        </section>
      </main>
      <div className="text-center mt-4 sm:mt-5 text-xs text-muted-foreground pb-3">
        &copy; {new Date().getFullYear()} Saptarshi — Made with ❤️ for Product Careers
      </div>
    </div>
  );
};

export default Index;
