
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[350px] pt-8 pb-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-100 opacity-80 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-5xl w-full">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&q=80"
          className="w-32 h-32 object-cover rounded-full border-4 border-primary/70 shadow-md"
          alt="Portrait of Saptarshi"
        />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-primary mb-2">
            Hi, I’m Saptarshi — Product Enthusiast Ready to Make Impact.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I combine analytical rigour, technical appetite, and a user-first mindset to craft solutions that move the business forward.<br />
            Explore my portfolio — a story of ambition, growth, and real-world delivery across product roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <a
              href="https://www.linkedin.com/in/saptarshi--/"
              target="_blank"
              rel="noopener"
              className="inline-block px-6 py-2 rounded-full bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1-AzreiJmTk-nAZyfAavMv4zkuDETA4pN/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-block px-6 py-2 rounded-full border border-indigo-700 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
            >
              Download Resume
            </a>
            <a
              href="#blog"
              className="inline-block px-6 py-2 rounded-full bg-gray-200 text-gray-600 font-semibold opacity-60 cursor-not-allowed"
              tabIndex={-1}
              aria-disabled="true"
            >
              Blog (coming soon)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
