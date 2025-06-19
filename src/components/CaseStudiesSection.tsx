
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpenCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type CaseStudy = {
  title: string;
  problemStatement: React.ReactNode;
  solutionSummary: React.ReactNode;
  analysis: React.ReactNode;
};

type RelevelCaseStudy = {
  title: string;
  description: string;
};

const RELEVEL_CASE_STUDIES: RelevelCaseStudy[] = [
  {
    title: "Uber Ride Fare Split Feature",
    description: "Designed a comprehensive PRD for implementing fare splitting functionality in the Uber app, focusing on user experience and payment flow optimization."
  },
  {
    title: "Khatabook Onboarding Flow",
    description: "Built a detailed PRD for streamlining the user onboarding experience, reducing friction and improving user activation rates."
  },
  {
    title: "MPL App Upgrade Module",
    description: "Created a strategic PRD for implementing in-app upgrade triggers, balancing user experience with technical requirements."
  },
  {
    title: "E-commerce Shopping Cart Button",
    description: "Designed user-centric shopping cart functionality enabling multi-product review before checkout, enhancing conversion rates."
  },
  {
    title: "Grocery App Growth Strategy",
    description: "Developed comprehensive go-to-market strategy including feature identification, user targeting, and marketing planning for grocery app adoption."
  },
  {
    title: "Trade with Tribe - Stock Market Platform",
    description: "Conceptualized a verified expert-driven stock market platform with gamified learning elements and premium content strategy."
  },
  {
    title: "Organic Food Product Vision Board",
    description: "Created strategic product vision for premium organic ready-to-eat food brand, defining market positioning and brand identity."
  },
  {
    title: "E-commerce Roadmap Prioritization",
    description: "Analyzed and prioritized quarterly product requirements using strategic frameworks to optimize resource allocation and impact."
  },
  {
    title: "Flipkart Growth Analysis",
    description: "Conducted comprehensive research on Flipkart's growth journey, identifying key growth hacks and suggesting future growth strategies."
  }
];

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
  const [openStates, setOpenStates] = useState<boolean[]>(new Array(CASE_STUDIES.length).fill(false));

  const toggleCase = (index: number) => {
    setOpenStates(prev => prev.map((state, i) => i === index ? !state : state));
  };

  return (
    <section id="case-studies" className="max-w-5xl mx-auto py-4">
      <h2 className="text-3xl font-bold text-primary flex items-center gap-2 mb-2">
        <BookOpenCheck size={22} /> Case Studies
      </h2>
      <div className="grid md:grid-cols-1 gap-5 mb-6">
        {CASE_STUDIES.map((cs, idx) => (
          <Card key={idx} className="group transition hover:shadow-md">
            <Collapsible open={openStates[idx]} onOpenChange={() => toggleCase(idx)}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center gap-2 justify-between">
                    <CardTitle className="text-lg text-indigo-800">{cs.title}</CardTitle>
                    {openStates[idx] ? (
                      <ChevronUp className="text-indigo-400" />
                    ) : (
                      <ChevronDown className="text-indigo-400" />
                    )}
                  </div>
                  <CardDescription className="text-left">
                    {cs.problemStatement}
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0 border-t border-border">
                  <div className="mt-4">
                    <div>{cs.solutionSummary}</div>
                    <div className="mt-2">{cs.analysis}</div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      {/* Relevel Case Studies Section */}
      <div className="mt-8">
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-900 flex items-center gap-2">
              <BookOpenCheck size={20} />
              Relevel Case Studies - Foundation Building (2022)
            </CardTitle>
            <CardDescription className="text-indigo-700">
              During my time at Relevel, I solved numerous product management case studies that helped build my foundational understanding of PM principles, strategic thinking, and practical problem-solving approaches.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {RELEVEL_CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="bg-white/70 rounded-lg p-3 border border-indigo-100">
                  <h4 className="font-semibold text-sm text-indigo-800 mb-1">{study.title}</h4>
                  <p className="text-xs text-muted-foreground">{study.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-200">
              <p className="text-sm text-indigo-700 mb-2">
                <strong>Key Learnings:</strong> These case studies helped me develop core PM skills including PRD writing, user research, strategic prioritization, growth hacking, and cross-functional collaboration.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-700 text-white text-xs font-semibold hover:bg-indigo-800 transition"
              >
                View All Solutions <ChevronUp className="rotate-45" size={12} />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
