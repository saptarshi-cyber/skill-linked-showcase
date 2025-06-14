
import { ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Certifications</h2>
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow border p-5">
        <h3 className="text-lg font-semibold mb-1">
          Associate Product Management Training — Unacademy
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          This course helped me build the foundations of Product Management.  
          I learned the roles and responsibilities of a product manager with assignments on PRDs, designing websites using Balsamiq and Figma, and collaborating with UI/UX engineers. <br />
          It covered concepts such as product roadmap, product strategy &amp; vision, idea generation &amp; prioritization, developing MVP &amp; MDP, and user research including interviews relevant to business and PM day-to-day work.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-2">
          <a
            href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-700 text-white text-sm font-semibold hover:bg-indigo-800 transition"
          >
            Certificate PDF <ExternalLink size={16} />
          </a>
          <a
            href="https://drive.google.com/file/d/1ejMK-5lIsHKvBJm43tcUaTmi-WHphEOy/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-indigo-700 text-indigo-700 text-sm font-semibold hover:bg-indigo-50 transition"
          >
            Training Projects <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
