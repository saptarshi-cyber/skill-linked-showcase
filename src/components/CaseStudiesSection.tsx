
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
  {
    title: "Customer Feedback & Sentiment Analysis for Fashion E-Commerce",
    problemStatement: (
      <div>
        <strong>Problem Statement:</strong>
        <ul className="list-disc ml-6 text-sm mt-2">
          <li>
            Design and prototype a web platform that simulates collecting and analyzing customer feedback (reviews/ratings) from major Indian fashion e-commerce sites. Actual data collection should be simulated or mocked.
          </li>
          <li>
            Leverage AI to automatically categorize feedback sentiment (positive/neutral/negative) and extract actionable insights for brands and sellers.
          </li>
          <li>
            Deliverables included an interactive prototype with authentication, feedback collection, sentiment analysis, visualizations, and supporting documentation explaining design, assumptions, and challenges.
          </li>
        </ul>
      </div>
    ),
    solutionSummary: (
      <div>
        <strong>Solution Approach:</strong>
        <ul className="list-disc ml-6 text-sm mb-3">
          <li>
            <b>Framework & Mock Platform:</b> Researched typical e-commerce user journeys and built a mock web prototype simulating product discovery through review submission (<a href="https://kzmkha9x951b6l77bxhr.lite.vusercontent.net/products" className="underline text-indigo-700" target="_blank" rel="noopener noreferrer">Prototype</a>).
          </li>
          <li>
            <b>Synthetic Data Generation:</b> Used an LLM (GPT-3.5) to generate realistic order/review data for an Indian fashion retailer, simulating fields like product specs, customer profile, star ratings, review text, and image uploads (<a className="underline text-indigo-700" href="https://docs.google.com/spreadsheets/d/18aO-S0EvJeEognXCEJxXFySD36jAuJ99KA9E55QvK6I/edit?gid=276365533#gid=276365533" target="_blank" rel="noopener noreferrer">reviewData_fashion</a>).
          </li>
          <li>
            <b>AI/NLP Sentiment Analysis:</b> Used NLP techniques in a no-code environment to categorize sentiment and extract trends. Highlighted actionable insights using aspect-based sentiment (Fit, Quality, etc.) and keyword clustering. (See <a className="underline text-indigo-700" href="https://colab.research.google.com/drive/1Zt4RJAKEsvjm1GNIKeOPyf-CIJoy0W5E#scrollTo=_WkDLWF9RfqW" target="_blank" rel="noopener noreferrer">Analysis Notebook</a>).
          </li>
          <li>
            <b>Dashboard & Visualization:</b> Created dashboards and charts showing product KPIs, review trends, sentiment distribution, and actionable recommendations for brands/sellers (<a className="underline text-indigo-700" href="https://drive.google.com/drive/u/0/folders/1Sod--sETyP0cGdMQtZfQCSJrHsxnUznO" target="_blank" rel="noopener noreferrer">Visualizations</a>).
          </li>
          <li>
            <b>Additional Features:</b> Added review summaries for each product, "Discover your Style" suggestions, and crafted a UI closely aligned with real user journeys.
          </li>
        </ul>
        <div className="flex flex-wrap gap-4 text-xs mt-2">
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://kzmkha9x951b6l77bxhr.lite.vusercontent.net/products"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Prototype
          </a>
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://docs.google.com/spreadsheets/d/18aO-S0EvJeEognXCEJxXFySD36jAuJ99KA9E55QvK6I/edit?gid=276365533#gid=276365533"
            target="_blank"
            rel="noopener noreferrer"
          >
            Synthetic Data (CSV)
          </a>
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://colab.research.google.com/drive/1Zt4RJAKEsvjm1GNIKeOPyf-CIJoy0W5E#scrollTo=_WkDLWF9RfqW"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI/NLP Analysis
          </a>
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://drive.google.com/drive/u/0/folders/1Sod--sETyP0cGdMQtZfQCSJrHsxnUznO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizations
          </a>
          <a
            className="underline text-indigo-700 hover:opacity-80 transition"
            href="https://docs.google.com/document/d/1VoPkFATLqW58InuHzAl666O1vaMboZqhjMgodTcqJE0/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solution Doc (Google Doc)
          </a>
        </div>
      </div>
    ),
    analysis: (
      <div>
        <strong>Reflection & Takeaways:</strong>
        <ul className="list-disc ml-6 text-sm mt-1">
          <li>
            <b>Holistic Approach:</b> Combined AI-powered analytics with practical UX flows, simulating a real-world SaaS feedback solution—valuable for both users and business stakeholders.
          </li>
          <li>
            <b>User-Centric Design:</b> Prioritized clear review flows, minimal friction, and useful post-review experiences (thank you, rewards, recommendations).
          </li>
          <li>
            <b>Analytical Rigor:</b> Created in-depth metrics tracking product performance, customer sentiment, aspect-based trends, and key pain points/praises to inform brand decisions.
          </li>
          <li>
            <b>Key Learnings:</b> Mocking rich, multi-dimensional data using LLMs enabled rapid iteration. Simulated dashboards and NLP approaches proved effective for product storytelling, even in low-code/no-code contexts.
          </li>
          <li>
            <span className="italic">
              Explore the prototype and docs above for a complete experience — happy to discuss how this can be extended to real-world deployments!
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

// Only allow one open at a time, fix "multiple open" bug by using controlled index
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
