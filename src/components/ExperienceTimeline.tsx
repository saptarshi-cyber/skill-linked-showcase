
import { useState } from "react";
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
    company: "Acme Inc.",
    role: "Product Specialist",
    period: "2022 – Present",
    description: "Driving customer-centric feature delivery for SaaS workflow tools.",
    achievements: [
      {
        text: "Launched new onboarding flows increasing user activation by 40%.",
        skills: ["User Research", "A/B Testing", "UX", "Product Strategy"],
      },
      {
        text: "Mentored 10+ aspiring PMs through cohort-based sessions.",
        skills: ["Mentorship", "Public Speaking"],
      },
      {
        text: "Coordinated with cross-functional teams to reduce bug rate by 20%.",
        skills: ["Collaboration", "Agile", "QA"],
      },
    ],
  },
  {
    company: "BetaHub",
    role: "Associate Product Manager",
    period: "2020 – 2022",
    description:
      "Shipped features and supported launch of early-stage B2B products.",
    achievements: [
      {
        text: "Designed & executed Product Feedback loop for 3 core features.",
        skills: ["Customer Interviews", "MVP", "Product Roadmapping"],
      },
      {
        text: "Built knowledge base & onboarding decks for new teams.",
        skills: ["Documentation", "Training"],
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
    <section id="experience" className="my-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-2 flex items-center gap-1">
        <Briefcase className="inline mr-1" size={24} />
        Experience
      </h2>
      <p className="text-muted-foreground mb-8">
        Each skill, each story. Click on any skill to highlight its journey.
      </p>
      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.company + idx}
            className="bg-card/60 border border-border shadow-lg rounded-xl px-8 py-6 hover:scale-[1.01] transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-2 border-b mb-3">
              <div>
                <span className="font-semibold text-lg text-primary">
                  {exp.role}
                </span>
                <span className="mx-2 text-muted-foreground">@</span>
                <span className="font-medium text-indigo-700">{exp.company}</span>
              </div>
              <span className="text-xs text-indigo-400">{exp.period}</span>
            </div>
            <div className="text-muted-foreground mb-3">{exp.description}</div>
            <ul className="list-disc ml-6 space-y-3">
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

// Also export EXPERIENCES and ALL_SKILLS for SkillsMap and future pages
export { EXPERIENCES, ALL_SKILLS };
