
import { BookOpen, ExternalLink, ArrowRight, Lightbulb, Target, TrendingUp, Users, Zap, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CaseStudyCard({ study, idx }: { study: any; idx: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`group bg-gradient-to-br from-purple-50 via-white to-indigo-50/30 rounded-2xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden ${
        isVisible ? 'card-slide-in' : 'opacity-0'
      }`}
      style={{animationDelay: `${idx * 0.15}s`}}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,69,19,0.1),transparent_50%)]" />
      
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{study.title}</h3>
            <div className="flex items-center gap-2 text-purple-600 mb-3">
              <span className="text-sm font-medium">{study.company} • {study.period}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {study.description}
        </p>
        
        <div className="space-y-4 mb-6">
          {study.highlights.map((highlight: any, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                {highlight.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {study.skills.map((skill: string) => (
            <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
              {skill}
            </span>
          ))}
        </div>
        
        <a
          href="mailto:saptarshi1799@gmail.com?subject=Case%20Study%20Discussion&body=Hi%20Saptarshi%2C%0A%0AI%27d%20love%20to%20discuss%20your%20case%20studies%20in%20detail.%20When%20would%20be%20a%20good%20time%20to%20chat%3F%0A%0AThanks%21"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <span>Let's discuss this case study</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

const CASE_STUDIES = [
  {
    title: "Platform Integration & Automation",
    company: "Lifesight",
    period: "2023-2025",
    description: "Led comprehensive platform integration strategy that contributed to 33% of total integrations while reducing operational costs through intelligent automation.",
    highlights: [
      {
        icon: <Lightbulb className="w-3 h-3 text-white" />,
        title: "Smart Integration Strategy",
        description: "Developed R/ETL workflows for major CRMs, E-commerce platforms, and Ad networks"
      },
      {
        icon: <Target className="w-3 h-3 text-white" />,
        title: "Cost Optimization",
        description: "Implemented automated sanity checks reducing cloud costs by 50% for repetitive tasks"
      },
      {
        icon: <TrendingUp className="w-3 h-3 text-white" />,
        title: "Enhanced Adoption",
        description: "Launched Custom API feature improving adoptability by 15% for bespoke data sources"
      }
    ],
    skills: ["ETL", "Integration", "Google Cloud", "Automation", "API Development", "Cost Optimization"]
  },
  {
    title: "Consumer Engagement & Retention",
    company: "Healthify",
    period: "2022-2023",
    description: "Spearheaded consumer engagement initiatives that significantly improved user retention and platform stickiness through data-driven product strategies.",
    highlights: [
      {
        icon: <Users className="w-3 h-3 text-white" />,
        title: "User Retention Strategy",
        description: "Developed comprehensive engagement frameworks that increased user retention by 25%"
      },
      {
        icon: <Zap className="w-3 h-3 text-white" />,
        title: "Feature Development",
        description: "Led cross-functional teams to launch key features improving user experience"
      },
      {
        icon: <TrendingUp className="w-3 h-3 text-white" />,
        title: "Data-Driven Insights",
        description: "Implemented analytics frameworks to track user behavior and optimize product features"
      }
    ],
    skills: ["Product Strategy", "User Engagement", "Data Analytics", "Cross-functional Leadership", "Feature Development"]
  },
  {
    title: "Educational Platform Enhancement",
    company: "Relevel by Unacademy",
    period: "2021-2022",
    description: "Enhanced educational platform capabilities focusing on learner experience optimization and scalable feature development for improved learning outcomes.",
    highlights: [
      {
        icon: <Award className="w-3 h-3 text-white" />,
        title: "Learning Experience",
        description: "Optimized learner journey resulting in improved completion rates and satisfaction"
      },
      {
        icon: <Target className="w-3 h-3 text-white" />,
        title: "Platform Scalability",
        description: "Developed scalable solutions to handle growing user base and content delivery"
      },
      {
        icon: <Lightbulb className="w-3 h-3 text-white" />,
        title: "Innovation Focus",
        description: "Introduced innovative features that enhanced the overall educational experience"
      }
    ],
    skills: ["EdTech", "Product Development", "User Experience", "Scalability", "Platform Optimization"]
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="max-w-6xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <BookOpen size={24} className="sm:hidden text-purple-600" />
        <BookOpen size={28} className="hidden sm:block text-purple-600" />
        Case Studies
        <span className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-3">— detailed insights</span>
      </h2>
      
      <div className="grid gap-6 sm:gap-8">
        {CASE_STUDIES.map((study, idx) => (
          <CaseStudyCard key={idx} study={study} idx={idx} />
        ))}
      </div>
    </section>
  );
}
