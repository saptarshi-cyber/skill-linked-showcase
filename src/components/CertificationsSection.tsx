
import { ExternalLink, Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
        <Award size={24} className="sm:hidden text-indigo-600" />
        <Award size={28} className="hidden sm:block text-indigo-600" />
        Certifications
      </h2>
      <div className="grid gap-4 sm:gap-6">
        {/* Product Management Training */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-2xl font-bold text-orange-600">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Associate Product Management Training</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Unacademy</p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Built PM foundations through hands-on assignments: PRDs, wireframing with Balsamiq/Figma, roadmaps, user interviews, and MVP development.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Certificate <ExternalLink size={12} className="sm:hidden" /><ExternalLink size={14} className="hidden sm:block" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 text-xs sm:text-sm font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Projects <ExternalLink size={12} className="sm:hidden" /><ExternalLink size={14} className="hidden sm:block" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Programming with Python */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-2xl font-bold text-blue-600">CU</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Programming with Python</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Chandigarh University • Jun 2020 - Jul 2020</p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                6-week comprehensive training: Python basics, OOP, SQLite, GUI with PyQT, and applications across disciplines.
              </p>
              <a
                href="https://drive.google.com/file/d/1i6SdIWu3TBA_FpsXwPm112mkhTYcz8wj/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Certificate <ExternalLink size={12} className="sm:hidden" /><ExternalLink size={14} className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>

        {/* SQL for Data Science */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-2xl font-bold text-blue-600">UC</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">SQL for Data Science</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">UC Davis (Coursera)</p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Mastered SQL fundamentals: data retrieval, complex queries, joins, subqueries, and functions for data-driven product decisions.
              </p>
              <a
                href="https://drive.google.com/file/d/1Ez4zAdA5D2xiHO0pQexBNAE-8MsOA9se/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Certificate <ExternalLink size={12} className="sm:hidden" /><ExternalLink size={14} className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Data Analytics */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-2xl font-bold text-red-600">G</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Google Data Analytics Certificate</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Google • 3-Part Series</p>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                Comprehensive data analytics training: foundations, data-driven decision making, and data preparation for exploration.
              </p>
              <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 space-y-1">
                <div>• Foundations: Data, Data, Everywhere</div>
                <div>• Ask Questions to Make Data-Driven Decisions</div>
                <div>• Prepare Data for Exploration</div>
              </div>
              <a
                href="https://drive.google.com/drive/folders/10-KYVWhXrAYudac7IHh-DrOSXxzXWKJY?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                All Certificates <ExternalLink size={12} className="sm:hidden" /><ExternalLink size={14} className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
