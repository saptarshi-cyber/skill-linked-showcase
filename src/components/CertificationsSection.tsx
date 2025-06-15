
import { ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold text-primary mb-3">Certifications</h2>
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow border p-4">
        <h3 className="text-lg font-semibold mb-2">
          Associate Product Management Training — Unacademy
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          This course helped me build the foundations of Product Management. I learned about the roles and responsibilities of a product manager through hands-on assignments: creating PRDs, designing websites using Balsamiq and Figma, and collaborating with UI/UX engineers. Key topics included product roadmaps, strategy, and vision; idea generation and prioritization; developing MVPs and MDPs; and conducting user interviews to inform business-focused user research.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-700 text-white text-sm font-semibold hover:bg-indigo-800 transition"
          >
            Certificate PDF <ExternalLink size={16} />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi"
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
