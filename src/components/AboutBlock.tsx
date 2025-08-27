
export function AboutBlock() {
  return (
    <section id="about" className="my-6 sm:my-8 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-30 -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 w-18 h-18 sm:w-24 sm:h-24 bg-gradient-to-tr from-blue-300 to-indigo-300 rounded-full opacity-30 translate-y-9 -translate-x-9 sm:translate-y-12 sm:-translate-x-12 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-base sm:text-lg shadow-lg">👋</span>
            Who Am I?
          </h3>
          
          <div className="space-y-3 sm:space-y-4 text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed">
              Aspiring Associate Product Manager with strong product analytics foundation. Holds experience with collaborating across
              teams to deliver impact. Worked in B2B SaaS while delivering high value solutions to multiple stakeholders, including direct
              collaboration with a founder to build product foundations. Adept at bridging technical & business needs, with skills in data &
              product analytics, and cross-functional tools. Eager to grow and support teams with practical, cross-functional experience.
            </p>
          </div>
          
          <a
            href="mailto:saptarshi1799@gmail.com"
            className="inline-flex items-center gap-2 mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
          >
            <span>Let's Connect!</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
