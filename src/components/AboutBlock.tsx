
export function AboutBlock() {
  return (
    <section id="about" className="my-24 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-lg border border-border p-8 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=240&q=80"
          className="w-28 h-28 object-cover rounded-full border-4 border-indigo-300 shadow hidden md:block"
          alt="Pranav Raj working on a laptop"
        />
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">About Me & My Mission</h3>
          <p className="text-base text-muted-foreground mb-2">
            Passionate about building impactful products and helping others break into Product roles, I’ve spent years developing, iterating, and sharing what works.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            I actively mentor and guide people on:
            <ul className="list-disc ml-8">
              <li>Building product sense that hiring managers love</li>
              <li>Real storytelling from personal achievement</li>
              <li>Mapping your experience to job-ready skills</li>
            </ul>
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block mt-3 px-6 py-2 rounded-full bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition"
          >
            Let’s Connect & Collaborate
          </a>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Pranav Raj — Made with ❤️ for Product Aspirants
      </div>
    </section>
  );
}
