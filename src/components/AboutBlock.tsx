
export function AboutBlock() {
  return (
    <section id="about" className="my-14 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-lg border border-border p-6 flex flex-col md:flex-row items-center gap-5">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=240&q=80"
          className="w-24 h-24 object-cover rounded-full border-4 border-indigo-300 shadow hidden md:block"
          alt="Portrait of Saptarshi"
        />
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">Who am I?</h3>
          <p className="text-base text-muted-foreground mb-1">
            I’m Saptarshi — a product aspirant passionate about solving business and user challenges through tech, data, and relentless curiosity.
          </p>
          <p className="text-base text-muted-foreground mb-3">
            My mission: Learn fast, contribute meaningfully, and turn ambiguity into product momentum. 
          </p>
          <ul className="list-disc ml-8 text-sm text-muted-foreground mb-3">
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
      <div className="text-center mt-8 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Saptarshi — Made with ❤️ for Product Careers
      </div>
    </section>
  );
}
