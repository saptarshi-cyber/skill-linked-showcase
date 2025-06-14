export function AboutBlock() {
  return (
    <section id="about" className="my-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 rounded-2xl shadow-lg border border-border p-5 flex flex-col md:flex-row items-center gap-4">
        {/* Image intentionally removed per user instruction */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">What do I bring to your team?</h3>
          <p className="text-base text-muted-foreground mb-1">
            ✔️ Translating “what if…” ideas into products people actually use (bonus points if it makes their job easier).
          </p>
          <p className="text-base text-muted-foreground mb-1">
            ✔️ I turn data confetti into insight confetti—then help teams act on it.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            ✔️ Naturally empathetic, relentlessly curious, and equally at home with SQL as with sticky notes.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            If you’re looking for someone who bridges the gap between nerd-speak and customer needs (and who believes product docs should never be boring), let’s chat!
          </p>
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
