
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, BookOpenCheck, BadgeCheck, Menu } from "lucide-react";
import { useState } from "react";
import { trackButtonClick } from "@/utils/analytics";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    trackButtonClick(`Nav-${section}`, 'Header');
  };

  const handleExternalClick = (platform: string) => {
    trackButtonClick(platform, 'Header');
  };

  return (
    <header className="flex items-center justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 border-b bg-white/90 sticky top-0 z-20">
      <div className="flex flex-col">
        <span className="text-sm sm:text-lg font-semibold tracking-wide text-primary">Saptarshi Mukhopadhyay</span>
        <span className="text-xs text-muted-foreground hidden sm:block">
          Product Virtuoso & Growth-Oriented Portfolio
        </span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-2 xl:gap-4">
        <Button variant="ghost" size="sm" asChild>
          <a href="#experience" className="font-medium hover:underline text-sm" onClick={() => handleNavClick('Experience')}>Experience</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#skills" className="font-medium hover:underline text-sm" onClick={() => handleNavClick('Skills')}>Skills Map</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#projects" className="font-medium hover:underline text-sm" onClick={() => handleNavClick('Projects')}>Projects</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#about" className="font-medium hover:underline text-sm" onClick={() => handleNavClick('About')}>About</a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#case-studies" className="font-medium hover:underline flex items-center gap-1 text-sm" onClick={() => handleNavClick('Case Studies')}>
            <BookOpenCheck size={14} /> Case Studies
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href="#certifications" className="font-medium hover:underline flex items-center gap-1 text-sm" onClick={() => handleNavClick('Certifications')}>
            <BadgeCheck size={14}/> Certifications
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a 
            aria-label="LinkedIn" 
            href="https://www.linkedin.com/in/saptarshi--/"
            target="_blank"
            rel="noopener"
            onClick={() => handleExternalClick('LinkedIn')}
          >
            <Linkedin size={16} />
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a 
            aria-label="Request Resume" 
            href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
            onClick={() => handleExternalClick('Resume Request')}
          >
            <FileText size={16} />
          </a>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
        >
          <Menu size={20} />
        </Button>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 space-y-2">
            <a href="#experience" className="block py-2 text-sm font-medium hover:text-indigo-600" onClick={() => { setIsMenuOpen(false); handleNavClick('Experience'); }}>Experience</a>
            <a href="#skills" className="block py-2 text-sm font-medium hover:text-indigo-600" onClick={() => { setIsMenuOpen(false); handleNavClick('Skills'); }}>Skills Map</a>
            <a href="#projects" className="block py-2 text-sm font-medium hover:text-indigo-600" onClick={() => { setIsMenuOpen(false); handleNavClick('Projects'); }}>Projects</a>
            <a href="#about" className="block py-2 text-sm font-medium hover:text-indigo-600" onClick={() => { setIsMenuOpen(false); handleNavClick('About'); }}>About</a>
            <a href="#case-studies" className="block py-2 text-sm font-medium hover:text-indigo-600" onClick={() => { setIsMenuOpen(false); handleNavClick('Case Studies'); }}>Case Studies</a>
            <a href="#certifications" className="block py-2 text-sm font-medium hover:text-indigo-600" onClick={() => { setIsMenuOpen(false); handleNavClick('Certifications'); }}>Certifications</a>
            <div className="flex gap-2 pt-2 border-t">
              <Button size="sm" variant="outline" asChild>
                <a 
                  aria-label="LinkedIn" 
                  href="https://www.linkedin.com/in/saptarshi--/"
                  target="_blank"
                  rel="noopener"
                  onClick={() => handleExternalClick('LinkedIn')}
                >
                  <Linkedin size={16} />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a 
                  aria-label="Request Resume" 
                  href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
                  onClick={() => handleExternalClick('Resume Request')}
                >
                  <FileText size={16} />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
