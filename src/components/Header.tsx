
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, BookOpenCheck, BadgeCheck } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between py-8 px-4 border-b bg-white/90 sticky top-0 z-20">
      <div className="flex flex-col">
        <span className="text-lg font-semibold tracking-wide text-primary">Saptarshi Mukhopadhyay</span>
        <span className="text-xs text-muted-foreground">
          Product Virtuoso & Growth-Oriented Portfolio
        </span>
      </div>
      <nav className="flex gap-4">
        <Button variant="ghost" asChild>
          <a href="#experience" className="font-medium hover:underline">Experience</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#skills" className="font-medium hover:underline">Skills Map</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects" className="font-medium hover:underline">Projects</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#about" className="font-medium hover:underline">About</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#case-studies" className="font-medium hover:underline flex items-center gap-1">
            <BookOpenCheck size={16} /> Case Studies
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#certifications" className="font-medium hover:underline flex items-center gap-1">
            <BadgeCheck size={16}/> Certifications
          </a>
        </Button>
        <Button size="icon" variant="outline" asChild>
          <a 
            aria-label="LinkedIn" 
            href="https://www.linkedin.com/in/saptarshi--/"
            target="_blank"
            rel="noopener"
          >
            <Linkedin size={20} />
          </a>
        </Button>
        <Button size="icon" variant="outline" asChild>
          <a 
            aria-label="Request Resume" 
            href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
          >
            <FileText size={20} />
          </a>
        </Button>
      </nav>
    </header>
  );
}
