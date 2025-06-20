
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Award size={24} className="sm:hidden text-indigo-600" />
        <Award size={28} className="hidden sm:block text-indigo-600" />
        Certifications
      </h2>
      
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Featured Certification - Product Management */}
        <div className="lg:col-span-2 group">
          <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50/30 rounded-2xl shadow-lg border border-orange-100 p-6 sm:p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full transform translate-x-8 -translate-y-8" />
            
            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl font-bold text-white">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Associate Product Management Training</h3>
                    <div className="flex items-center gap-2 text-orange-600 mb-3">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">Unacademy • 2022</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <CheckCircle size={14} />
                    Featured
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Built PM foundations through hands-on assignments: PRDs, wireframing with Balsamiq/Figma, roadmaps, user interviews, and MVP development.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Award size={16} />
                    Certificate <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-orange-200 text-orange-700 text-sm font-semibold hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Projects <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Certifications Grid */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 rounded-2xl shadow-lg border border-blue-100 p-6 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">CU</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 text-gray-900">Programming with Python</h3>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={14} />
                  <span className="text-xs font-medium">Chandigarh University • Jun-Jul 2020</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              6-week comprehensive training: Python basics, OOP, SQLite, GUI with PyQT, and applications across disciplines.
            </p>
            <a
              href="https://drive.google.com/file/d/1i6SdIWu3TBA_FpsXwPm112mkhTYcz8wj/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Award size={14} />
              Certificate <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50/30 rounded-2xl shadow-lg border border-indigo-100 p-6 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">UC</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 text-gray-900">SQL for Data Science</h3>
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                  <Calendar size={14} />
                  <span className="text-xs font-medium">UC Davis (Coursera)</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Mastered SQL fundamentals: data retrieval, complex queries, joins, subqueries, and functions for data-driven product decisions.
            </p>
            <a
              href="https://drive.google.com/file/d/1Ez4zAdA5D2xiHO0pQexBNAE-8MsOA9se/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Award size={14} />
              Certificate <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Google Analytics - Spanning full width */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-red-50 via-white to-red-50/30 rounded-2xl shadow-lg border border-red-100 p-6 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <span className="text-2xl font-bold text-white">G</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Google Data Analytics Certificate</h3>
                    <div className="flex items-center gap-2 text-red-600 mb-3">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">Google • 3-Part Series</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <CheckCircle size={14} />
                    Series
                  </div>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  Comprehensive data analytics training: foundations, data-driven decision making, and data preparation for exploration.
                </p>
                <div className="grid sm:grid-cols-3 gap-2 text-xs text-gray-600 mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-500" />
                    <span>Foundations: Data, Data, Everywhere</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-500" />
                    <span>Ask Questions to Make Data-Driven Decisions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-500" />
                    <span>Prepare Data for Exploration</span>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/10-KYVWhXrAYudac7IHh-DrOSXxzXWKJY?usp=sharing"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Award size={16} />
                  All Certificates <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
