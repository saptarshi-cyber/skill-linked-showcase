import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsMap } from "../components/SkillsMap";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AboutBlock } from "../components/AboutBlock";
import { CertificationsSection } from "../components/CertificationsSection";
import { ALL_SKILLS } from "../components/ExperienceTimeline";
import { trackPageView, trackCustomEvent } from "../utils/mixpanel";

const sectionSpacing = "py-6 sm:py-8 lg:py-10";

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(ALL_SKILLS[0]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track page load and test Mixpanel connection
  useEffect(() => {
    console.log('Page loaded, tracking events...');
    trackPageView('Portfolio Home');
    trackCustomEvent('Portfolio Loaded', { 
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-background via-blue-50/20 to-indigo-50/30 min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20 animate-pulse" style={{transform: `translateY(${scrollY * 0.1}px)`}} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-15 animate-bounce" style={{animationDelay: '2s', transform: `translateY(${scrollY * -0.05}px)`}} />
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s', transform: `translateY(${scrollY * 0.08}px)`}} />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-20 animate-bounce" style={{animationDelay: '3s', transform: `translateY(${scrollY * -0.03}px)`}} />
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-30 animate-pulse" style={{animationDelay: '4s', transform: `translateY(${scrollY * 0.12}px)`}} />
      </div>
      
      <Header />
      <main className="w-full flex-1 flex flex-col items-center relative z-10">
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <AboutBlock />
          </div>
        </section>
        
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <SkillsMap selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          </div>
        </section>
        
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <ExperienceTimeline selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
          </div>
        </section>
        
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
            <CaseStudiesSection />
          </div>
        </section>
        
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <ProjectShowcase />
          </div>
        </section>
        
        <section className={sectionSpacing} style={{ width: "100%" }}>
          <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
            <CertificationsSection />
          </div>
        </section>
      </main>
      
      <div className="text-center mt-4 sm:mt-5 text-xs text-muted-foreground pb-3 relative z-10 animate-fade-in" style={{animationDelay: '0.8s'}}>
        &copy; {new Date().getFullYear()} Saptarshi — Made with ❤️ for Product Careers
      </div>
    </div>
  );
};

export default Index;
