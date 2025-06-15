
import { FileText } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="projects" className="my-4 sm:my-6 max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2 mb-1">
        <FileText size={18} className="sm:hidden" />
        <FileText size={22} className="hidden sm:block" />
        Projects 
        <span className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-3">— more coming soon</span>
      </h2>
      <div className="grid gap-4 sm:gap-6 mt-4 sm:mt-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm group transition hover:scale-[1.02] relative min-h-[140px] sm:min-h-[150px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=550&q=80"
            alt="AI agent development"
            className="object-cover w-full h-full opacity-40 absolute inset-0"
          />
          <div className="relative z-10 flex flex-col items-center py-4 sm:py-5 w-full text-center px-4">
            <h3 className="font-semibold text-lg sm:text-xl mb-2 text-indigo-700">Personal Growth AI Agent</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-2 leading-relaxed">
              Currently building an intelligent agent focused on personal development and growth tracking.
            </p>
            <span className="italic text-xs bg-indigo-50 rounded px-2 py-1">
              (In Development)
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50 flex items-center justify-center min-h-[140px] sm:min-h-[150px]">
          <span className="text-indigo-400 font-semibold text-xs sm:text-sm opacity-70 text-center px-4">More projects coming soon…</span>
        </div>
      </div>
    </section>
  );
}
