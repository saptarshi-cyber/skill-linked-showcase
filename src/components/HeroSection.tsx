
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[250px] pt-6 pb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-100 opacity-70 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 max-w-5xl w-full">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&q=80"
          className="w-28 h-28 object-cover rounded-full border-4 border-primary/70 shadow-md"
          alt="Portrait of Saptarshi"
        />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-primary mb-1">
            Saptarshi — Product Aspirant Turning Curiosity Into Impact
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I combine analytical skills, a love for discovery, and technical know-how to help teams deliver products that matter.<br />
            Let’s connect if you’re hiring, collaborating, or want to chat product!
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
