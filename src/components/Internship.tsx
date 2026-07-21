import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight, Award, Download, Eye, X, BadgeCheck } from "lucide-react";
import cognifyzCert from "../assets/internship.jpg";

const experiences = [
  {
    role: "Front-End Development Intern",
    company: "SachiTech",
    location: "Nashik",
    duration: "January 2026 – February 2026",
    badge: "Certified",
    certificate: "sachitech-certificate.pdf",
    certImage: null as string | null,
    responsibilities: [
      "Participated in front-end development project activities under the guidance of the Director.",
      "Demonstrated dedication and willingness to learn new technologies and concepts.",
      "Showcased strong technical skills, teamwork, and communication abilities.",
      "Received recognition for performance and commitment throughout the program."
    ]
  },
  {
    role: "Front-End Development Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    duration: "January 2026 – February 2026",
    badge: "Certified",
    certificate: null as string | null,
    certImage: cognifyzCert,
    responsibilities: [
      "Developed responsive web pages to enhance user experience across devices.",
      "Built reusable UI components to streamline future development processes.",
      "Improved UI design for better accessibility and visual appeal.",
      "Worked on various front-end projects, collaborating with team members."
    ]
  }
];

export function Internship() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = experiences.find(e => e.company === selected);

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                {/* Left column */}
                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-border/50 pb-6 md:pb-0 md:pr-8">
                  <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary shrink-0" />
                    {exp.role}
                  </h3>

                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2 font-medium text-foreground">
                      <Building2 className="w-4 h-4 shrink-0" />
                      {exp.company}
                      {exp.location && (
                        <span className="text-muted-foreground font-normal text-sm">· {exp.location}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 shrink-0" />
                      {exp.duration}
                    </div>

                    {/* Badges & actions */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.badge && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full">
                          <Award className="w-3.5 h-3.5" />
                          {exp.badge}
                        </div>
                      )}
                      {exp.certificate && (
                        <button
                          onClick={() => {
                            const a = document.createElement("a");
                            a.href = `${import.meta.env.BASE_URL}${exp.certificate}`;
                            a.download = `${exp.company}_Internship_Certificate.pdf`;
                            a.click();
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </button>
                      )}
                      {exp.certImage && (
                        <button
                          onClick={() => setSelected(exp.company)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="md:w-2/3">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate lightbox */}
      <AnimatePresence>
        {selected && active?.certImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={active.certImage}
                alt={`${active.company} Internship Certificate`}
                className="w-full h-auto block"
              />
              <div className="bg-background/95 px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{active.company} — Internship Completion Certificate</p>
                  <p className="text-xs text-muted-foreground">{active.duration}</p>
                </div>
                <BadgeCheck className="w-5 h-5 text-green-400" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
