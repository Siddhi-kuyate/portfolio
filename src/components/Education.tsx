import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "MCA (Pursuing)",
      institution: "KKWIEER",
      location: "Nashik",
      score: null,
      year: "Present"
    },
    {
      degree: "BBA (Computer Applications)",
      institution: "K.K. Wagh AC & CS College",
      location: "Nashik",
      score: "CGPA: 8.00",
      year: "Completed"
    },
    {
      degree: "HSC",
      institution: "SPPU Board",
      location: "Maharashtra",
      score: "78%",
      year: "Completed"
    },
    {
      degree: "SSC",
      institution: "SPPU Board",
      location: "Maharashtra",
      score: "80.40%",
      year: "Completed"
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-2 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{edu.institution}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {edu.location}</span>
                    {edu.score && <span className="text-primary font-medium">{edu.score}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
                  <Calendar className="w-4 h-4" />
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
