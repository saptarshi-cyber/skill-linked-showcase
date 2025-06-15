
import { ExternalLink, Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <Award size={28} className="text-indigo-600" />
        Certifications
      </h2>
      <div className="grid gap-6">
        {/* Product Management Training */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-orange-600">U</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Associate Product Management Training</h3>
              <p className="text-sm text-gray-500 mb-3">Unacademy</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Built PM foundations through hands-on assignments: PRDs, wireframing with Balsamiq/Figma, roadmaps, user interviews, and MVP development.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Certificate <ExternalLink size={14} />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Projects <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Programming with Python */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">CU</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Programming with Python</h3>
              <p className="text-sm text-gray-500 mb-3">Chandigarh University • Jun 2020 - Jul 2020</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                6-week comprehensive training: Python basics, OOP, SQLite, GUI with PyQT, and applications across disciplines.
              </p>
              <a
                href="https://drive.google.com/file/d/1i6SdIWu3TBA_FpsXwPm112mkhTYcz8wj/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Certificate <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* SQL for Data Science */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">UC</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">SQL for Data Science</h3>
              <p className="text-sm text-gray-500 mb-3">UC Davis (Coursera)</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Mastered SQL fundamentals: data retrieval, complex queries, joins, subqueries, and functions for data-driven product decisions.
              </p>
              <a
                href="https://drive.google.com/file/d/1Ez4zAdA5D2xiHO0pQexBNAE-8MsOA9se/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Certificate <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Google Data Analytics */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-red-600">G</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Google Data Analytics Certificate</h3>
              <p className="text-sm text-gray-500 mb-3">Google • 3-Part Series</p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Comprehensive data analytics training: foundations, data-driven decision making, and data preparation for exploration.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• Foundations: Data, Data, Everywhere</div>
                <div>• Ask Questions to Make Data-Driven Decisions</div>
                <div>• Prepare Data for Exploration</div>
              </div>
              <a
                href="https://drive.google.com/drive/folders/10-KYVWhXrAYudac7IHh-DrOSXxzXWKJY?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                All Certificates <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
