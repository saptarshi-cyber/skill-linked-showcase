
export function AboutBlock() {
  return (
    <section id="about" className="my-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-lg border border-border p-5 flex flex-col md:flex-row items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=facearea&facepad=2.5"
          className="w-24 h-24 object-cover rounded-full border-4 border-indigo-300 shadow hidden md:block"
          alt="Portrait placeholder"
        />
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">Who am I?</h3>
          <p className="text-base text-muted-foreground mb-1">
            I’m Saptarshi — a product aspirant passionate about solving business and user challenges through tech, data, and relentless curiosity.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            A empathizer with a knack of product development
          </p>
          <ul className="list-disc ml-8 text-sm text-muted-foreground mb-2">
            <li>Experience across SaaS analytics and growth teams</li>
            <li>Obsessed with user journeys, data, and measurable outcomes</li>
            <li>Lifelong learner and aspiring future product manager</li>
          </ul>
          <a
            href="mailto:saptarshi@example.com"
            className="inline-block mt-1 px-6 py-2 rounded-full bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition"
          >
            Let’s Connect!
          </a>
        </div>
      </div>
      {/* Footer moved to Index */}
    </section>
  );
}
