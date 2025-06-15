
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[280px] pt-6 pb-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full px-4">
        <div className="relative">
          <img
            src="/lovable-uploads/5054563e-8f51-4e2d-b8df-22db7b1a8eda.png"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300"
            alt="Portrait of Saptarshi Mukhopadhyay"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-md" />
        </div>
        
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Hey, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Saptarshi</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Turning Curiosity Into Impact. I build bridges between business needs and tech solutions—plus I actually enjoy the details.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/saptarshi--/"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Connect on LinkedIn</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all duration-300"
            >
              <span>Request Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
