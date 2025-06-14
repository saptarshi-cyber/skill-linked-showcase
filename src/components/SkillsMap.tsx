import { SkillTag } from "./SkillTag";
import { EXPERIENCES, ALL_SKILLS } from "./ExperienceTimeline";
import { useState } from "react";
import { Star } from "lucide-react";

export function SkillsMap({
  selectedSkill,
  setSelectedSkill,
}: {
  selectedSkill?: string;
  setSelectedSkill?: (skill: string | undefined) => void;
}) {
  // Map from skill to { exp idx, achievement idx }[]
  const skillMap: { [skill: string]: { expIdx: number; achIdx: number }[] } = {};

  EXPERIENCES.forEach((exp, expIdx) => {
    exp.achievements.forEach((ach, achIdx) => {
      ach.skills.forEach((sk) => {
        if (!skillMap[sk]) skillMap[sk] = [];
        skillMap[sk].push({ expIdx, achIdx });
      });
    });
  });

  return (
    <section id="skills" className="my-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-1 flex items-center gap-2 text-primary">
        <Star size={22} />
        Skills Map
      </h2>
      <p className="text-muted-foreground mb-2">
        Click any skill to spotlight where it made an impact in my work.
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {ALL_SKILLS.map((skill) => (
          <SkillTag
            key={skill}
            skill={skill}
            highlight={selectedSkill === skill}
            onClick={() => setSelectedSkill && setSelectedSkill(selectedSkill === skill ? undefined : skill)}
          />
        ))}
      </div>
      {selectedSkill && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 transition-all animate-fade-in">
          <div className="mb-2 text-indigo-700 font-bold">
            Skill: {selectedSkill}
          </div>
          <div className="text-sm text-muted-foreground">
            <ul className="ml-5 list-disc">
              {skillMap[selectedSkill]?.map(({ expIdx, achIdx }, n) => (
                <li key={n}>
                  <span className="font-medium text-primary">{EXPERIENCES[expIdx].role}</span>{" "}
                  @ {EXPERIENCES[expIdx].company}:
                  <span className="ml-1 italic">{EXPERIENCES[expIdx].achievements[achIdx].text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
