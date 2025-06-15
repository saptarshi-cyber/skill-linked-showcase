
import { FileText } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="projects" className="my-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary flex items-center gap-2 mb-1">
        <FileText size={22} /> Projects <span className="text-sm text-muted-foreground ml-3">— more coming soon</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-5">
        <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm group transition hover:scale-[1.02] relative min-h-[150px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=550&q=80"
            alt="AI agent development"
            className="object-cover w-full h-full opacity-40 absolute inset-0"
          />
          <div className="relative z-10 flex flex-col items-center py-5 w-full text-center">
            <h3 className="font-semibold text-xl mb-2 text-indigo-700">Personal Growth AI Agent</h3>
            <p className="text-base text-muted-foreground mb-2">
              Currently building an intelligent agent focused on personal development and growth tracking.
            </p>
            <span className="italic text-xs bg-indigo-50 rounded px-2 py-1">
              (In Development)
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50 flex items-center justify-center min-h-[150px]">
          <span className="text-indigo-400 font-semibold text-sm opacity-70">More projects coming soon…</span>
        </div>
      </div>
    </section>
  );
}
