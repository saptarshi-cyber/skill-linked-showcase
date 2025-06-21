
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[250px] sm:min-h-[280px] pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_50%)]" />
      
      {/* More floating elements with enhanced animations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 animate-pulse hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-40 animate-bounce hidden sm:block" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-35 animate-pulse hidden sm:block" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-20 w-14 h-14 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-25 animate-bounce hidden sm:block" style={{animationDelay: '2s'}} />
      
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 max-w-5xl w-full px-4 sm:px-6 opacity-0 animate-scale-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
        <div className="relative group">
          <img
            src="/lovable-uploads/5054563e-8f51-4e2d-b8df-22db7b1a8eda.png"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-2xl transform hover:scale-110 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)]"
            alt="Portrait of Saptarshi Mukhopadhyay"
          />
          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
        </div>
        
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 mb-3 sm:mb-4">
            Hey, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Saptarshi</span>
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 px-2">
            Turning Curiosity Into Impact. I build bridges between business needs and tech solutions—plus I actually enjoy the details.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/saptarshi--/"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
            >
              <span>Connect on LinkedIn</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>Request Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
