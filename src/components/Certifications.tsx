import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, Sparkles, Calendar, Eye, X } from "lucide-react";

import googleCloudCert from "../assets/certificate1.jpg";
import kaggleCert from "../assets/certificate2.jpg";
import deloitte from "../assets/certificate3.jpg";

const certs = [
  {
    title: "Technology Job Simulation (Coding & Development)",
    issuer: "Deloitte via Forage",
    date: "Jul 2026",
    skills: ["Coding", "Development", "Problem Solving"],
    accent: "from-purple-500 to-pink-400",
    bg: "from-purple-500/10 to-pink-400/5",
    border: "border-purple-500/30",
    initial: "D",
    initialsColor: "text-purple-400",
    image: deloitte
  },
  {
    title: "Python Coder",
    issuer: "Kaggle",
    date: "Feb 2026",
    skills: ["Python Programming", "Data Handling"],
    accent: "from-sky-500 to-indigo-400",
    bg: "from-sky-500/10 to-indigo-400/5",
    border: "border-sky-500/30",
    initial: "KG",
    initialsColor: "text-sky-400",
    image: kaggleCert
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud",
    date: "Jan 2026",
    skills: ["AI Basics", "Prompt Engineering"],
    accent: "from-blue-500 to-cyan-400",
    bg: "from-blue-500/10 to-cyan-400/5",
    border: "border-blue-500/30",
    initial: "GC",
    initialsColor: "text-cyan-400",
    image: googleCloudCert
  },
  {
    title: "Front-End Development",
    issuer: "GeeksforGeeks",
    date: "Dec 2024",
    skills: ["HTML", "CSS", "JavaScript"],
    accent: "from-green-500 to-emerald-400",
    bg: "from-green-500/10 to-emerald-400/5",
    border: "border-green-500/30",
    initial: "GG",
    initialsColor: "text-green-400",
    image: null
  }
];

export function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeCert = certs.find(c => c.title === selected);

  return (
    <section
      className="py-24 relative overflow-hidden"
      id="certifications"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Certifications
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Verified credentials earned through online platforms and professional programs.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.5
              }}
              className={`relative rounded-2xl border ${cert.border} bg-gradient-to-br ${cert.bg} backdrop-blur-sm overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
            >

              {/* Top Accent Bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${cert.accent}`}
              />

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Sparkles className="w-16 h-16 text-white" />
              </div>

              <div className="p-6">

                {/* Issuer Badge */}
                <div className="flex items-center gap-3 mb-5">

                  <div
                    className={`w-10 h-10 rounded-xl bg-background/60 border ${cert.border} flex items-center justify-center font-bold text-sm ${cert.initialsColor}`}
                  >
                    {cert.initial}
                  </div>

                  <div>
                    <p
                      className={`text-sm font-bold ${cert.initialsColor}`}
                    >
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </p>
                  </div>

                  <div className="ml-auto">
                    <BadgeCheck
                      className={`w-5 h-5 ${cert.initialsColor}`}
                    />
                  </div>

                </div>

                {/* Certificate Title */}
                <h3 className="text-base font-bold font-display text-foreground leading-snug mb-5">
                  {cert.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map(skill => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-background/50 border ${cert.border} ${cert.initialsColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button */}
                {cert.image && (
                  <button
                    onClick={() => setSelected(cert.title)}
                    className={`w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-background/50 border ${cert.border} ${cert.initialsColor} hover:bg-background/80 transition-colors`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Certificate
                  </button>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && activeCert?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.85,
                opacity: 0
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22
              }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate Image */}
              <img
                src={activeCert.image}
                alt={`${activeCert.title} certificate`}
                className="w-full h-auto block"
              />

              {/* Certificate Info */}
              <div className="bg-background/95 px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">
                    {activeCert.title}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {activeCert.issuer} · {activeCert.date}
                  </p>
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
