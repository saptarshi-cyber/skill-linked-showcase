
import { SkillTag } from "./SkillTag";
import { Briefcase } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: { text: string; skills: string[] }[];
};

// Updated with data from the user's resume and message
const EXPERIENCES: Experience[] = [
  {
    company: "Lifesight",
    role: "Product Analyst",
    period: "June 2023 – April 2025",
    description:
      "During my time at Lifesight, I spearheaded the end-to-end delivery of platform integrations and automated cloud operations, focusing on elevating both platform reliability and cost efficiency. I proactively collaborated with go-to-market and product teams to deliver impactful technical solutions and drive the adoption of new features. By streamlining internal reporting, optimizing big data pipelines, and leading testing initiatives, I significantly enhanced the value delivered to clients and empowered cross-functional teams to execute more effectively.",
    achievements: [
      {
        text: "Developed R/ETL workflows for major CRMs, E-commerce, and Ad platforms, contributing to 33% of platform integrations.",
        skills: ["ETL", "Integration", "Data Analytics"],
      },
      {
        text: "Implemented automated sanity checks, reducing cloud costs for repetitive tasks by 50%.",
        skills: ["Google Cloud", "Automation", "Python"],
      },
      {
        text: "Led dogfooding project for internal testing; surfaced issues and communicated actionable insights to marketing & sales.",
        skills: ["User Research", "Cross-Team Collaboration", "Communication"],
      },
      {
        text: "Launched Custom API feature, improving adoptability by 15% for bespoke data sources.",
        skills: ["API", "Product Development"],
      },
      {
        text: "Automated exception handling for integrations, reducing errors by 33%.",
        skills: ["Integration", "Automation", "Problem Solving"],
      },
      {
        text: "Created detailed PRDs and workflow demos, reducing dependency on engineering by 25%.",
        skills: ["PRD Writing", "Business Analysis", "Requirements Analysis"],
      },
      {
        text: "Deployed GTM containers with custom events, boosting platform trust by 20%.",
        skills: ["Product Analytics", "Data Analytics"],
      },
      {
        text: "Enhanced MMM models with Halo effect & Commute zones, improving prediction accuracy by 5%.",
        skills: ["Data Modeling", "Product Analytics"],
      },
      {
        text: "Wrote go-to SQL queries for dashboards, reducing monitoring time by 30%.",
        skills: ["SQL", "Dashboarding"],
      },
      {
        text: "Created internal knowledge base for resolving client errors, reducing response time by 40%.",
        skills: ["Process Improvement", "Communication"],
      },
      {
        text: "Led market research for product roadmap deliverables to enable effective decision making.",
        skills: ["Market Research", "Product Roadmap"],
      },
      {
        text: "Coordinated rollout of 10+ features with SPMs, designers, and developers in 1 year.",
        skills: ["Agile", "Stakeholder Management", "Team Collaboration"],
      },
      {
        text: "Used Meltano to build efficient ETL pipelines and completed Snowflake-to-BigQuery integration, unlocking cost-effective workflows.",
        skills: ["ETL", "Google Cloud", "Data Analytics"],
      },
      {
        text: "Built user segment insights to connect platform usage with key KPIs.",
        skills: ["KPI Analysis", "Data Analytics", "Product Analytics"],
      },
      {
        text: "Maintained strong client relationships for effective partnerships.",
        skills: ["Communication", "Stakeholder Management"],
      },
    ],
  },
  {
    company: "Gauge",
    role: "Product Intern",
    period: "November 2022 – June 2023",
    description:
      "At Gauge, I drove the complete product development lifecycle, building an MVP from scratch and collaborating closely on designing user journeys, requirements gathering, and sprint planning. My role involved running user interviews, translating feedback into actionable feature priorities, and working closely with designers to create a unified UI/UX vision. Managing the team's delivery alongside the founder, I ensured the timely completion of key milestones through effective communication and deep functional knowledge.",
    achievements: [
      {
        text: "Drove end-to-end product development from ideation to MVP (till testing phase).",
        skills: ["Product Development", "MVP"],
      },
      {
        text: "Mapped full user journey (order to inventory), defining API endpoints and requirements.",
        skills: ["User Journey", "API", "Requirements Analysis"],
      },
      {
        text: "Designed 100+ wireframes and user stories, covering application scenarios and edge cases.",
        skills: ["Wireframing", "User Stories"],
      },
      {
        text: "Collaborated with designers to create and finalize the app's first style guide.",
        skills: ["Cross-Team Collaboration", "Product Development"],
      },
      {
        text: "Prioritized features after in-depth user interviews and market research.",
        skills: ["User Research", "Market Research", "Feature Prioritization"],
      },
      {
        text: "Wrote clear user stories for developers and ran weekly sprint planning with the founder.",
        skills: ["Agile", "User Stories", "Team Collaboration"],
      },
      {
        text: "Led daily sync-ups to manage team tasks, clear blockers, and meet delivery timelines.",
        skills: ["Stakeholder Management", "Problem Solving"],
      },
      {
        text: "Formulated user flows to define API endpoints and improve requirement clarity using Postman for testing.",
        skills: ["User Journey", "API"],
      },
      {
        text: "Ensured deep functional understanding of the product before implementation.",
        skills: ["Product Understanding", "Requirements Analysis"],
      },
    ],
  },
];

// Optimized skills list - reduced from 67 to 33 high-demand skills for Product Analyst/APM roles
const ALL_SKILLS = [
  "SQL", "Product Analytics", "Data Analytics", "A/B Testing", "Agile", 
  "Stakeholder Management", "User Research", "Product Roadmap", "KPI Analysis", 
  "PRD Writing", "Python", "API", "User Journey", "Feature Prioritization", 
  "Market Research", "Cross-Team Collaboration", "Business Analysis", "Data Modeling", 
  "Product Development", "Communication", "ETL", "Google Cloud", "Dashboarding", 
  "User Stories", "Wireframing", "MVP", "Problem Solving", "Requirements Analysis", 
  "Process Improvement", "Automation", "Integration", "Product Understanding", 
  "Team Collaboration"
];

// Skills descriptions for the map - updated for optimized skills
const SKILL_DESCRIPTIONS: { [skill: string]: string } = {
  "A/B Testing": "Designing and analyzing controlled experiments to validate product hypotheses and optimize user experience",
  "API": "Designing, testing, and integrating RESTful APIs for seamless data exchange between systems",
  "Google Cloud": "Leveraging GCP services for scalable cloud infrastructure, data processing, and cost optimization",
  "Python": "Scripting for automation, data processing, and building analytical workflows",
  "SQL": "Querying databases to extract insights, build reports, and support data-driven decisions",
  "ETL": "Building data pipelines to extract, transform, and load data for analytics and reporting",
  "User Research": "Conducting user interviews, surveys, and usability testing to understand user needs and behaviors",
  "Product Analytics": "Using data to measure product performance, user engagement, and business impact",
  "Data Analytics": "Analyzing complex datasets to derive actionable insights for product and business decisions",
  "Stakeholder Management": "Building relationships and aligning diverse stakeholders around product vision and priorities",
  "PRD Writing": "Creating comprehensive product requirement documents that clearly communicate feature specifications",
  "Product Roadmap": "Strategic planning and prioritization of product features and initiatives over time"
};

export function ExperienceTimeline({
  selectedSkill,
  setSelectedSkill,
}: {
  selectedSkill?: string;
  setSelectedSkill?: (skill: string | undefined) => void;
}) {
  return (
    <section id="experience" className="my-4 sm:my-6 max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1 flex items-center gap-1">
        <Briefcase className="inline mr-1" size={20} />
        Experience
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
        Looking for a taste of my journey? Here's the highlight reel—the good, the great, and the "wait, how did I pull that off?" moments. For the full story, feel free to <a href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F" className="underline text-indigo-700 hover:opacity-80">request my resume</a>.
      </p>
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="bg-card/60 border border-border shadow-lg rounded-xl px-4 sm:px-6 py-4 sm:py-5 hover:scale-[1.01] transition">
          <div className="flex flex-col gap-2 pb-2 border-b mb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold text-base sm:text-lg text-primary">Product Analyst</span>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-sm sm:text-base">@</span>
                  <a 
                    href="https://lifesight.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-700 hover:underline ml-1 text-sm sm:text-base"
                  >
                    Lifesight
                  </a>
                </div>
              </div>
              <span className="text-xs text-indigo-400">June 2023 – April 2025</span>
            </div>
          </div>
          <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            I dived deep into platform integrations and automation at Lifesight—think of me as the backstage tech wizard who quietly slashed cloud costs, fast-tracked reporting, and made data pipelines behave. Whether it was helping new features find their audience (adoption is an art), revealing hidden bugs (cue internal testing adventures), or writing queries that make dashboards actually useful, I was in the thick of it. My superpower? Turning messy data situations into streamlined, client-delighting solutions that just work.
          </div>
        </div>
        <div className="bg-card/60 border border-border shadow-lg rounded-xl px-4 sm:px-6 py-4 sm:py-5 hover:scale-[1.01] transition">
          <div className="flex flex-col gap-2 pb-2 border-b mb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold text-base sm:text-lg text-primary">Product Intern</span>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-sm sm:text-base">@</span>
                  <a 
                    href="https://gauge.ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-700 hover:underline ml-1 text-sm sm:text-base"
                  >
                    Gauge
                  </a>
                </div>
              </div>
              <span className="text-xs text-indigo-400">November 2022 – June 2023</span>
            </div>
          </div>
          <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            At Gauge, I championed the "build a product from nothing but coffee and determination" approach. From sketching out 100+ wireframes (yes, my design tools got a workout), to translating user feedback into features that users actually wanted, I kept our scrappy project on-track. Every day was part strategy session, part creative problem-solving, and a lot of "how do we make this work with our constraints?"—the real product management experience.
          </div>
        </div>
      </div>
    </section>
  );
}

export { EXPERIENCES, ALL_SKILLS, SKILL_DESCRIPTIONS };
