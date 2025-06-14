
export function AboutBlock() {
  return (
    <section id="about" className="my-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-lg border border-border p-5 flex flex-col md:flex-row items-center gap-4">
        {/* Removed image per user request */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">Who am I?</h3>
          <p className="text-base text-muted-foreground mb-1">
            I’m Saptarshi — a product enthusiast passionate about leveraging technology, data, and curiosity to solve business and user challenges.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            A natural empathizer with a knack for product development.
          </p>
          <ul className="list-disc ml-8 text-sm text-muted-foreground mb-2">
            <li>Experienced in SaaS analytics and cross-functional growth teams</li>
            <li>Obsessed with user journeys, actionable data, and impactful outcomes</li>
            <li>Lifelong learner and an aspiring product manager</li>
          </ul>
          <a
            href="mailto:saptarshi@example.com"
            className="inline-block mt-1 px-6 py-2 rounded-full bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition"
          >
            Let’s Connect!
          </a>
        </div>
      </div>
      {/* Footer is handled in Index */}
    </section>
  );
}
