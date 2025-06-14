
import { FC } from "react";

interface SkillTagProps {
  skill: string;
  highlight?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SkillTag: FC<SkillTagProps> = ({ skill, highlight, onClick, className }) => (
  <span
    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium transition
      ${highlight ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-700"}
      hover:bg-indigo-700 hover:text-white cursor-pointer shadow-sm ${className || ""}`}
    onClick={onClick}
    tabIndex={0}
    role="button"
    aria-label={`Show work experience for ${skill}`}
  >
    {skill}
  </span>
);
