
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[220px] pt-4 pb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-100 opacity-70 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
        <img
          src="/lovable-uploads/5054563e-8f51-4e2d-b8df-22db7b1a8eda.png"
          className="w-28 h-28 object-cover rounded-full border-4 border-primary/70 shadow-md"
          alt="Portrait of Saptarshi Mukhopadhyay"
        />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-primary mb-1">
            Saptarshi Mukhopadhyay — Product Virtuoso Turning Curiosity Into Impact
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            Sometimes I build bridges between business and tech—other times, I just build really helpful spreadsheets. If you value clever, data-powered solutions and the occasional witty comment in your standups, well, my inbox awaits.
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
          </div>
        </div>
      </div>
    </section>
  );
}
