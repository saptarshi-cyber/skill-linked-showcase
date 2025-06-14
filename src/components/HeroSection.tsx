
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[350px] pt-8 pb-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-100 opacity-80 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-5xl w-full">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&q=80"
          className="w-32 h-32 object-cover rounded-full border-4 border-primary/70 shadow-md"
          alt="Portrait of Pranav Raj"
        />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-primary mb-2">
            Hi, I’m Pranav, Product Specialist & Mentor for Job-Cracking Aspirants.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I help ambitious professionals break into Product by sharing real, industry-tested insights, frameworks, and career strategies.<br />
            This portfolio is both my journey and your launching pad.
          </p>
          <a href="#about" className="text-primary underline underline-offset-4 hover:opacity-80 transition">
            Learn more about my mission
          </a>
        </div>
      </div>
    </section>
  );
}
