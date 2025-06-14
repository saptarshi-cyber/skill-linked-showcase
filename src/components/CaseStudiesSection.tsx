
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpenCheck } from "lucide-react";

type CaseStudy = {
  title: string;
  problemStatement: string;
  solutionSummary: React.ReactNode;
  analysis: React.ReactNode;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "HealthifyMe Funnel & Slot Optimization",
    problemStatement: (
      <div>
        <strong>Problem Statement:</strong>
        <ul className="list-disc ml-6 text-sm mt-2">
          <li>
            Dataset: Free user bookings with coaches, with funnel (Bot/Free-Trial), lead type (Medical/NRI), sales ability (Target Class A-D), booking and payment times.
          </li>
          <li>
            Tasks included: 
            <ul className="list-inside list-disc ml-3">
              <li>Analyze 3 & 7-day conversions by lead type and funnel.</li>
              <li>Identify best hours for connectivity and sales.</li>
              <li>Share actionable insights to optimize slots, coach allocation, and funnel for max conversion.</li>
              <li>Draw any other useful data-driven conclusions.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
    solutionSummary: (
      <div>
        <strong>Solution Approach:</strong>
        <ul className="list-disc ml-6 text-sm mb-3">
          <li>
            <b>Data Cleaning & Segmentation:</b> Carefully mapped user bookings by funnel, medical condition, geography, and matched booking times to payment signals for conversion windows.
          </li>
          <li>
            <b>Conversion Analysis:</b> Calculated 3/7-day conversion rates for each segment; visualized hourly booking vs. conversion patterns.
          </li>
          <li>
            <b>Insights & Optimization:</b>
            <ul className="list-inside list-disc ml-3">
              <li>Bot funnel: High leads, low conversion; FT: Lower volume, much higher conversion. FT efficiency is 2-3x Bot funnel.</li>
              <li>Mapped peak conversion/sales hours (India: 5–7PM & 8–10PM) to optimize coach allocation by class.</li>
              <li>Formulated resource allocation model—assign best-selling coaches to peak/intense segments, scale FT lead quality, test hybrid routing.</li>
            </ul>
          </li>
          <li>
            <b>Final Recommendations:</b>
            <ul className="list-inside list-disc ml-3">
              <li>Ruthlessly qualify Bot leads or reroute best-intent into FT.</li>
              <li>Match high-quality coaches to high-intent slots during peaks.</li>
              <li>Real-time monitor underperforming slots/coaches and rebalance on-the-fly.</li>
            </ul>
          </li>
        </ul>
        <div className="flex gap-4 text-xs">
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://docs.google.com/spreadsheets/d/1P-PvipHVrNEgHWLxkJvxMJEvFVvWAddb/edit?gid=2134676910#gid=2134676910"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSV with detailed analysis
          </a>
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://colab.research.google.com/drive/1uEkeRNHO-E_G5dklpjZ7ZT5huj8ot6nB?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notebook (sample)
          </a>
        </div>
      </div>
    ),
    analysis: (
      <div>
        <strong>Product Aspirant Analysis — Why this showcases Saptarshi’s strengths:</strong>
        <ul className="list-disc ml-6 text-sm mt-1">
          <li><b>Analytical Depth:</b> Applied segment-mapping, time-windowed conversion metrics, and cohort analysis—beyond superficial stats.</li>
          <li><b>Commercial Mindset:</b> Keen focus on optimizing resource allocation, peak sales timing, and funnel efficiency for real business outcomes.</li>
          <li><b>Strategic Impact:</b> Proposed frameworks (hybrid routing, real-time monitoring) that are actionable and scalable.</li>
          <li><b>User & Data-Driven:</b> Insights highlight user journey pain points (long time-to-convert, inefficient bot-funnel) and suggest fixes centered on user intent.</li>
          <li>
            <span className="italic">
              Saptarshi’s approach demonstrates both quantitative skill and strategic vision—the DNA of a great Product Manager.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

export function CaseStudiesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="case-studies" className="max-w-5xl mx-auto py-4">
      <h2 className="text-3xl font-bold text-primary flex items-center gap-2 mb-2">
        <BookOpenCheck size={22} /> Case Studies
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {CASE_STUDIES.map((cs, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-border shadow-sm relative p-5 group transition hover:shadow-md"
          >
            <button
              className="w-full text-left"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`case-study-content-${idx}`}
            >
              <div className="flex items-center gap-2 justify-between">
                <span className="font-semibold text-lg text-indigo-800">{cs.title}</span>
                {openIdx === idx ? (
                  <ChevronUp className="text-indigo-400" />
                ) : (
                  <ChevronDown className="text-indigo-400" />
                )}
              </div>
              <div className="mt-3">{cs.problemStatement}</div>
            </button>
            {openIdx === idx &&
              <div
                id={`case-study-content-${idx}`}
                className="animate-fade-in mt-4 border-t border-border pt-3"
              >
                <div>{cs.solutionSummary}</div>
                <div className="mt-2">{cs.analysis}</div>
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}
