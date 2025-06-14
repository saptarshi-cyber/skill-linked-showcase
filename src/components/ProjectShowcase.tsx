
import { FileText } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="projects" className="my-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary flex items-center gap-2 mb-2">
        <FileText size={22} /> Projects <span className="text-sm text-muted-foreground ml-3">— more coming soon</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm group transition hover:scale-[1.02] relative min-h-[210px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=550&q=80"
            alt="Project placeholder"
            className="object-cover w-full h-full opacity-40 absolute inset-0"
          />
          <div className="relative z-10 flex flex-col items-center py-10 w-full text-center">
            <h3 className="font-semibold text-xl mb-2 text-indigo-700">Your next project…</h3>
            <p className="text-base text-muted-foreground mb-2">
              Coming soon: Exciting additions to my product and mentoring journey. Watch this space!
            </p>
            <span className="italic text-xs bg-indigo-50 rounded px-2 py-1">
              (Future case studies will appear here!)
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50 flex items-center justify-center min-h-[210px]">
          <span className="text-indigo-400 font-semibold text-sm opacity-70">Your next project goes here…</span>
        </div>
      </div>
    </section>
  );
}
