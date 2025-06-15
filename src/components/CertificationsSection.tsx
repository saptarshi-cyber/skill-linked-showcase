
import { ExternalLink, Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
        <Award size={22} />
        Certifications
      </h2>
      <div className="space-y-4">
        {/* Product Management Training */}
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow border p-4">
          <h3 className="text-lg font-semibold mb-2">
            Associate Product Management Training — Unacademy
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            This course helped me build the foundations of Product Management. I learned about the roles and responsibilities of a product manager through hands-on assignments: creating PRDs, designing websites using Balsamiq and Figma, and collaborating with UI/UX engineers. Key topics included product roadmaps, strategy, and vision; idea generation and prioritization; developing MVPs and MDPs; and conducting user interviews to inform business-focused user research.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-700 text-white text-sm font-semibold hover:bg-indigo-800 transition"
            >
              Certificate PDF <ExternalLink size={16} />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-indigo-700 text-indigo-700 text-sm font-semibold hover:bg-indigo-50 transition"
            >
              Training Projects <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Programming with Python */}
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow border p-4">
          <h3 className="text-lg font-semibold mb-2">
            Programming with Python — Chandigarh University
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Completed a comprehensive 6-week online training covering Introduction to Python, Variables and Programming Basics, Object-oriented Programming (OOP), SQLite Database connectivity, GUI development with PyQT, and Python applications across various disciplines. This foundation strengthened my technical understanding crucial for product management.
          </p>
          <div className="text-xs text-muted-foreground mb-2">June 2020 - July 2020</div>
          <a
            href="https://drive.google.com/file/d/1i6SdIWu3TBA_FpsXwPm112mkhTYcz8wj/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-700 text-white text-sm font-semibold hover:bg-indigo-800 transition"
          >
            Certificate PDF <ExternalLink size={16} />
          </a>
        </div>

        {/* SQL for Data Science */}
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow border p-4">
          <h3 className="text-lg font-semibold mb-2">
            SQL for Data Science — UC Davis (Coursera)
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Mastered SQL fundamentals for data analysis including data retrieval, filtering, sorting, and joining tables. Learned to write complex queries, work with subqueries, and apply SQL functions for data manipulation. This course provided essential skills for data-driven product decisions and analytics interpretation.
          </p>
          <a
            href="https://drive.google.com/file/d/1Ez4zAdA5D2xiHO0pQexBNAE-8MsOA9se/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-700 text-white text-sm font-semibold hover:bg-indigo-800 transition"
          >
            Certificate PDF <ExternalLink size={16} />
          </a>
        </div>

        {/* Google Data Analytics */}
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow border p-4">
          <h3 className="text-lg font-semibold mb-2">
            Google Data Analytics Certificate Program
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Completed comprehensive data analytics training covering data fundamentals, asking the right questions for data-driven decisions, and data preparation for exploration. This program enhanced my ability to transform data into actionable insights for product strategy and user behavior analysis.
          </p>
          <div className="text-xs text-muted-foreground mb-2">3-Part Certificate Series:</div>
          <ul className="text-xs text-muted-foreground mb-3 ml-4">
            <li>• Foundations: Data, Data, Everywhere</li>
            <li>• Ask Questions to Make Data-Driven Decisions</li>
            <li>• Prepare Data for Exploration</li>
          </ul>
          <a
            href="https://drive.google.com/drive/folders/10-KYVWhXrAYudac7IHh-DrOSXxzXWKJY?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-700 text-white text-sm font-semibold hover:bg-indigo-800 transition"
          >
            All Certificates <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
