import { FileText, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ProjectCard({ children, idx }: { children: React.ReactNode; idx: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`${isVisible ? 'card-slide-in' : 'opacity-0'}`}
      style={{animationDelay: `${idx * 0.1}s`}}
    >
      {children}
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <section id="projects" className="my-4 sm:my-6 max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2 mb-1">
        <FileText size={18} className="sm:hidden text-indigo-600" />
        <FileText size={22} className="hidden sm:block text-indigo-600" />
        Projects 
        <span className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-3">— more coming soon</span>
      </h2>
      <div className="grid gap-4 sm:gap-6 mt-4 sm:mt-5 sm:grid-cols-2">
        <ProjectCard idx={0}>
          <div className="group rounded-xl border border-border bg-gradient-to-br from-orange-50 via-white to-orange-50/30 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative min-h-[140px] sm:min-h-[150px] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=550&q=80"
              alt="AI agent development"
              className="object-cover w-full h-full opacity-40 absolute inset-0 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center py-4 sm:py-5 w-full text-center px-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-lg sm:text-xl text-indigo-700">Personal Growth AI Agent</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Currently building an intelligent agent focused on personal development and growth tracking.
              </p>
              <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full px-3 py-1 text-xs font-semibold border border-indigo-200">
                In Development
              </span>
            </div>
          </div>
        </ProjectCard>
        
        <ProjectCard idx={1}>
          <div className="rounded-xl border-2 border-dashed border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center min-h-[140px] sm:min-h-[150px] hover:bg-gradient-to-br hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 group">
            <div className="text-center px-4">
              <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-indigo-500 font-semibold text-xs sm:text-sm opacity-70 mb-4 block">More exciting projects coming soon…</span>
              <a
                href="mailto:saptarshi1799@gmail.com?subject=Let's%20Build%20Together&body=Hi%20Saptarshi%2C%0A%0AI%27m%20interested%20in%20collaborating%20on%20a%20project%20with%20you.%20Let%27s%20discuss%21%0A%0AThanks%21"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm"
              >
                <span>I'm interested, let's build together!</span>
              </a>
            </div>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
