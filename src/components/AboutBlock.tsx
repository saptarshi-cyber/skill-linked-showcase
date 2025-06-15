
export function AboutBlock() {
  return (
    <section id="about" className="my-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-lg border border-border p-5 flex flex-col md:flex-row items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">What do I bring to the table?</h3>
          <p className="text-base text-muted-foreground mb-1">
            ✔️ Translating "what if…" ideas into products people actually use (bonus points if it makes their job easier).
          </p>
          <p className="text-base text-muted-foreground mb-1">
            ✔️ I turn data confusion into clear insights—then help teams act on them with practical solutions.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            ✔️ Naturally empathetic, relentlessly curious, and comfortable building bridges between technical teams and business needs.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            If you're looking for someone who connects the dots between user needs and technical possibilities (and who believes product docs should never be boring), let's chat!
          </p>
          <a
            href="mailto:saptarshi1799@gmail.com"
            className="inline-block mt-1 px-6 py-2 rounded-full bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition"
          >
            Let's Connect!
          </a>
        </div>
      </div>
    </section>
  );
}
