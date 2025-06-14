
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpenCheck } from "lucide-react";

type CaseStudy = {
  title: string;
  problemStatement: React.ReactNode;
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
            <b>Data Cleaning & Segmentation:</b> I mapped bookings by funnel, medical condition, and geography, then matched booking times to payment signals for measuring conversion windows.
          </li>
          <li>
            <b>Conversion Analysis:</b> I calculated 3/7-day conversion rates for each segment, and visualized hourly booking and conversion patterns.
          </li>
          <li>
            <b>Insights & Optimization:</b>
            <ul className="list-inside list-disc ml-3">
              <li>Bot funnel: High leads, but lower conversion rates. FT: Lower but much higher conversion. FT efficiency was 2-3x Bot funnel.</li>
              <li>Mapped peak sales hours (India: 5–7PM & 8–10PM) to optimize coach allocation by class.</li>
              <li>Formulated resource allocation model—assign best-selling coaches to peak/intense segments, scale FT lead quality, and test hybrid routing.</li>
            </ul>
          </li>
          <li>
            <b>Final Recommendations:</b>
            <ul className="list-inside list-disc ml-3">
              <li>Qualify Bot leads more strictly or reroute high-intent users to FT.</li>
              <li>Match the best coaches to peak slots and monitor underperforming slots real-time for rebalancing.</li>
              <li>I also detail real-time monitoring and rebalance strategies.</li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-wrap gap-4 text-xs mt-2">
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
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://docs.google.com/document/d/1GgYT1CzYBnm3r4il8F87Nvx1QwDsgors/edit?usp=sharing&ouid=112716720863127862961&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full writeup (Google Doc)
          </a>
        </div>
      </div>
    ),
    analysis: (
      <div>
        <strong>Reflection & Takeaways:</strong>
        <ul className="list-disc ml-6 text-sm mt-1">
          <li>
            <b>Analytical Depth:</b> I went beyond simple statistics and applied careful segmentation, time-windowed conversion analysis, and cohort breakdowns to understand what's really happening.
          </li>
          <li>
            <b>Product Thinking:</b> My recommendations focused on practical solutions—resource allocation models, peak-hour rebalancing, and evolving funnel design.
          </li>
          <li>
            <b>User-First Mindset:</b> I targeted my optimizations at minimizing friction and surfacing high-intent users for the team, rather than just maximizing numbers.
          </li>
          <li>
            <b>Strategic Impact:</b> This exercise highlights how I combine quantitative skill and product intuition to frame insights teams can actually build on.
          </li>
          <li>
            <span className="italic">
              If you have challenges like this—I'd love to explore them with you!
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
