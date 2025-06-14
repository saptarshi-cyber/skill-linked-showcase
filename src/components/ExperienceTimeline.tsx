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
    period: "June 2023 – January 2024",
    description:
      "During my time at Lifesight, I spearheaded the end-to-end delivery of platform integrations and automated cloud operations, focusing on elevating both platform reliability and cost efficiency. I proactively collaborated with go-to-market and product teams to deliver impactful technical solutions and drive the adoption of new features. By streamlining internal reporting, optimizing big data pipelines, and leading testing initiatives, I significantly enhanced the value delivered to clients and empowered cross-functional teams to execute more effectively.",
    achievements: [
      {
        text: "Developed R/ETL workflows for major CRMs, E-commerce, and Ad platforms, contributing to 33% of platform integrations.",
        skills: ["ETL", "CRM", "E-commerce", "Ad Tech", "Integrations"],
      },
      {
        text: "Implemented automated sanity checks, reducing cloud costs for repetitive tasks by 50%.",
        skills: ["Cloud Automation", "Cost Optimization", "Python"],
      },
      {
        text: "Led dogfooding project for internal testing; surfaced issues and communicated actionable insights to marketing & sales.",
        skills: ["Internal Testing", "QA", "Cross-Team Collaboration"],
      },
      {
        text: "Launched Custom API feature, improving adoptability by 15% for bespoke data sources.",
        skills: ["API Design", "Product Adoption"],
      },
      {
        text: "Automated exception handling for integrations, reducing errors by 33%.",
        skills: ["Integration", "Automation", "Error Handling"],
      },
      {
        text: "Created detailed PRDs and workflow demos, reducing dependency on engineering by 25%.",
        skills: ["PRD Writing", "Business Analysis", "Documentation"],
      },
      {
        text: "Deployed GTM containers with custom events, boosting platform trust by 20%.",
        skills: ["Tag Management", "Event Tracking", "GTM"],
      },
      {
        text: "Enhanced MMM models with Halo effect & Commute zones, improving prediction accuracy by 5%.",
        skills: ["MMM", "Data Modeling", "Product Analytics"],
      },
      {
        text: "Wrote go-to SQL queries for dashboards, reducing monitoring time by 30%.",
        skills: ["SQL", "Dashboarding", "Data Monitoring"],
      },
      {
        text: "Created internal knowledge base for resolving client errors, reducing response time by 40%.",
        skills: ["Knowledge Base", "Client Support", "Process Improvement"],
      },
      {
        text: "Led market research for product roadmap deliverables to enable effective decision making.",
        skills: ["Market Research", "Product Roadmap"],
      },
      {
        text: "Coordinated rollout of 10+ features with SPMs, designers, and developers in 1 year.",
        skills: ["Feature Launch", "Stakeholder Management", "Agile"],
      },
      {
        text: "Used Meltano to build efficient ETL pipelines and completed Snowflake-to-BigQuery integration, unlocking cost-effective workflows.",
        skills: ["Meltano", "Snowflake", "BigQuery", "ETL"],
      },
      {
        text: "Built user segment insights to connect platform usage with key KPIs.",
        skills: ["Segmentation", "KPI Analysis", "Data Analytics"],
      },
      {
        text: "Maintained strong client relationships for effective partnerships.",
        skills: ["Client Relations", "Communication"],
      },
    ],
  },
  {
    company: "Gauge",
    role: "Product Intern",
    period: "January 2023 – May 2023",
    description:
      "At Gauge, I drove the complete product development lifecycle, building an MVP from scratch and collaborating closely on designing user journeys, requirements gathering, and sprint planning. My role involved running user interviews, translating feedback into actionable feature priorities, and working closely with designers to create a unified UI/UX vision. Managing the team’s delivery alongside the founder, I ensured the timely completion of key milestones through effective communication and deep functional knowledge.",
    achievements: [
      {
        text: "Drove end-to-end product development from ideation to MVP (till testing phase).",
        skills: ["Product Development", "MVP", "Lifecycle Management"],
      },
      {
        text: "Mapped full user journey (order to inventory), defining API endpoints and requirements.",
        skills: ["User Journey", "API Design", "Workflow Mapping"],
      },
      {
        text: "Designed 100+ wireframes and user stories, covering application scenarios and edge cases.",
        skills: ["Wireframing", "User Stories", "UX Design"],
      },
      {
        text: "Collaborated with designers to create and finalize the app’s first style guide.",
        skills: ["Design Collaboration", "Style Guides"],
      },
      {
        text: "Prioritized features after in-depth user interviews and market research.",
        skills: ["User Interviews", "Market Research", "Feature Prioritization"],
      },
      {
        text: "Wrote clear user stories for developers and ran weekly sprint planning with the founder.",
        skills: ["Sprint Planning", "Story Writing", "Team Collaboration"],
      },
      {
        text: "Led daily sync-ups to manage team tasks, clear blockers, and meet delivery timelines.",
        skills: ["Team Management", "Scrum", "Problem Solving"],
      },
      {
        text: "Formulated user flows to define API endpoints and improve requirement clarity.",
        skills: ["User Flows", "API Requirements"],
      },
      {
        text: "Ensured deep functional understanding of the product before implementation.",
        skills: ["Product Understanding", "Requirements Analysis"],
      },
    ],
  },
];

// Deduplicated and expanded ALL_SKILLS set manually for more control.
const ALL_SKILLS = [
  "API", "API Design", "Ad Tech", "Agile",
  "BigQuery", "Business Analysis", "Cloud Automation", "Client Relations",
  "Communication", "Cost Optimization", "CRM", "Cross-Team Collaboration",
  "Data Analytics", "Data Modeling", "Data Monitoring", "Dashboarding",
  "Documentation", "E-commerce", "ETL", "Event Tracking",
  "Feature Launch", "GTM", "Google Cloud", "Integration", "Internal Testing",
  "KPI Analysis", "Knowledge Base", "Market Research", "Meltano",
  "MMM", "MVP", "PRD Writing", "Postman", "Problem Solving",
  "Process Improvement", "Product Adoption", "Product Development", "Product Roadmap",
  "Product Understanding", "Python", "QA", "Requirements Analysis", "Scrum",
  "Segmentation", "Snowflake", "SQL", "Stakeholder Management", "Story Writing",
  "Style Guides", "Tag Management", "Team Collaboration", "Team Management",
  "User Flows", "User Interviews", "User Journey", "User Stories", "UX Design", 
  "Wireframing"
];

export function ExperienceTimeline({
  selectedSkill,
  setSelectedSkill,
}: {
  selectedSkill?: string;
  setSelectedSkill?: (skill: string | undefined) => void;
}) {
  return (
    <section id="experience" className="my-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-1 flex items-center gap-1">
        <Briefcase className="inline mr-1" size={24} />
        Experience
      </h2>
      <p className="text-muted-foreground mb-4">
        Looking for a taste of my journey? Here's the highlight reel—the good, the great, and the “wait, how did I pull that off?” moments. For the full binge-watch version, download my resume.
      </p>
      <div className="flex flex-col gap-5">
        <div
          className="bg-card/60 border border-border shadow-lg rounded-xl px-6 py-5 hover:scale-[1.01] transition"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-2 border-b mb-2">
            <div>
              <span className="font-semibold text-lg text-primary">
                Product Analyst
              </span>
              <span className="mx-2 text-muted-foreground">@</span>
              <span className="font-medium text-indigo-700">Lifesight</span>
            </div>
            <span className="text-xs text-indigo-400">June 2023 – January 2024</span>
          </div>
          <div className="text-muted-foreground mb-2">
            I dived deep into platform integrations and automation at Lifesight—think of me as the backstage tech wizard who quietly slashed cloud costs, fast-tracked reporting, and made data pipelines behave. Whether it was helping new features find friends (adoption), revealing hidden bugs (cue internal testing drama), or writing the kind of SQL that makes dashboards purr, I was in the thick of it. My superpower? Turning even the messiest data confusion into engineer-free, client-delighting, “wait, this actually works?” solutions. Warning: mentions of BigQuery, Meltano, and too many acronyms ahead.
          </div>
        </div>
        <div
          className="bg-card/60 border border-border shadow-lg rounded-xl px-6 py-5 hover:scale-[1.01] transition"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-2 border-b mb-2">
            <div>
              <span className="font-semibold text-lg text-primary">
                Product Intern
              </span>
              <span className="mx-2 text-muted-foreground">@</span>
              <span className="font-medium text-indigo-700">Gauge</span>
            </div>
            <span className="text-xs text-indigo-400">January 2023 – May 2023</span>
          </div>
          <div className="text-muted-foreground mb-2">
            At Gauge, I championed the “build a product from nothing but coffee and post-its” approach. From sketching out 100+ wireframes (yes, my Balsamiq subscription paid for itself), to translating cryptic user feedback into features that users actually wanted (and that the devs only low-key hated me for), I kept our scrappy project on-track. Every day was part scrum, part therapy, part bug hunt, and a lot of “why is QA emailing me at 2 AM?”—product life, am I right?
          </div>
        </div>
      </div>
    </section>
  );
}

export { EXPERIENCES, ALL_SKILLS };
