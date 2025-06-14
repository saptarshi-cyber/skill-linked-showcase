
import { SkillTag } from "./SkillTag";
import { Briefcase } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: { text: string; skills: string[] }[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Lifesight",
    role: "Product Analyst",
    period: "June 2023 – January 2024",
    description: "Analysed user journeys and product data to drive actionable insights for product feature decisions and business outcomes.",
    achievements: [
      {
        text: "Spearheaded rollout of reporting features for APAC clients, increasing NPS by 18%.",
        skills: ["SQL", "Data Analysis", "User Interviews", "Feature Launch"],
      },
      {
        text: "Developed data dashboards for GTM teams, reducing reporting time by 40%.",
        skills: ["Dashboarding", "Business Analysis", "Cross-functional Work"],
      },
      {
        text: "Led end-to-end design and testing for onboarding experience optimization.",
        skills: ["Onboarding", "Usability Testing", "Design Thinking"],
      },
    ],
  },
  {
    company: "Gauge",
    role: "Product Intern",
    period: "January 2023 – May 2023",
    description:
      "Assisted in building product features for SaaS analytics platform. Supported roadmap planning and requirement detailing.",
    achievements: [
      {
        text: "Conducted competitive benchmarking to inform MVP feature set.",
        skills: ["Benchmarking", "MVP", "Market Research"],
      },
      {
        text: "Mapped customer feedback from 20+ interviews to product improvements.",
        skills: ["Customer Interviews", "Feedback Analysis"],
      },
    ],
  },
];

const ALL_SKILLS = Array.from(
  new Set(
    EXPERIENCES.flatMap((exp) => exp.achievements.flatMap((a) => a.skills))
  )
).sort();

export function ExperienceTimeline({
  selectedSkill,
  setSelectedSkill,
}: {
  selectedSkill?: string;
  setSelectedSkill?: (skill: string | undefined) => void;
}) {
  return (
    <section id="experience" className="my-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-1 flex items-center gap-1">
        <Briefcase className="inline mr-1" size={24} />
        Experience
      </h2>
      <p className="text-muted-foreground mb-5">
        Click any skill to see how it mapped to real impact.
      </p>
      <div className="flex flex-col gap-5">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.company + idx}
            className="bg-card/60 border border-border shadow-lg rounded-xl px-6 py-5 hover:scale-[1.01] transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-2 border-b mb-2">
              <div>
                <span className="font-semibold text-lg text-primary">
                  {exp.role}
                </span>
                <span className="mx-2 text-muted-foreground">@</span>
                <span className="font-medium text-indigo-700">{exp.company}</span>
              </div>
              <span className="text-xs text-indigo-400">{exp.period}</span>
            </div>
            <div className="text-muted-foreground mb-2">{exp.description}</div>
            <ul className="list-disc ml-6 space-y-2">
              {exp.achievements.map((item, achvIdx) => (
                <li
                  key={item.text + achvIdx}
                  className="text-base"
                >
                  {item.text}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.skills.map((sk) => (
                      <SkillTag
                        key={sk}
                        skill={sk}
                        highlight={selectedSkill === sk}
                        onClick={() =>
                          setSelectedSkill &&
                          setSelectedSkill(selectedSkill === sk ? undefined : sk)
                        }
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export { EXPERIENCES, ALL_SKILLS };
