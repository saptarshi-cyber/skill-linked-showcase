
export function AboutBlock() {
  return (
    <section id="about" className="my-8 max-w-5xl mx-auto px-4">
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl shadow-xl border border-gray-200 p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full opacity-20 translate-y-12 -translate-x-12" />
        
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-lg">👋</span>
            Who Am I?
          </h3>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              I turn <span className="font-semibold text-indigo-600">"what if…"</span> ideas into products people actually use (bonus points if it makes their job easier).
            </p>
            <p className="text-lg leading-relaxed">
              I transform data confusion into clear insights—then help teams act on them with practical solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Naturally empathetic, relentlessly curious, and comfortable building bridges between technical teams and business needs.
            </p>
            <p className="text-lg leading-relaxed font-medium text-gray-800">
              Looking for someone who connects user needs with technical possibilities? Let's chat!
            </p>
          </div>
          
          <a
            href="mailto:saptarshi1799@gmail.com"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Let's Connect!</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
