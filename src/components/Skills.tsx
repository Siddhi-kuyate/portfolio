import { motion } from "framer-motion";
import {
  Code2, Palette, FileCode, LayoutTemplate, Monitor, GitBranch,
  Users, HeartHandshake, Lightbulb, Clock, Puzzle, Zap, FastForward
} from "lucide-react";

const technicalSkills = [
  { name: "HTML5", icon: FileCode, color: "from-orange-500/20 to-orange-500/5", iconColor: "text-orange-400" },
  { name: "CSS3", icon: Palette, color: "from-blue-500/20 to-blue-500/5", iconColor: "text-blue-400" },
  { name: "JavaScript", icon: Code2, color: "from-yellow-500/20 to-yellow-500/5", iconColor: "text-yellow-400" },
  { name: "Bootstrap", icon: LayoutTemplate, color: "from-purple-500/20 to-purple-500/5", iconColor: "text-purple-400" },
  { name: "Responsive Web Design", icon: Monitor, color: "from-green-500/20 to-green-500/5", iconColor: "text-green-400" },
  { name: "Python", icon: Code2, color: "from-sky-500/20 to-sky-500/5", iconColor: "text-sky-400" },
  { name: "GitHub", icon: GitBranch, color: "from-pink-500/20 to-pink-500/5", iconColor: "text-pink-400" },
];

const professionalSkills = [
  { name: "Communication", icon: Users },
  { name: "Teamwork", icon: HeartHandshake },
  { name: "Leadership", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Problem Solving", icon: Puzzle },
  { name: "Adaptability", icon: Zap },
  { name: "Quick Learning", icon: FastForward },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A toolkit built through hands-on projects, internships, and continuous self-learning.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-8 text-center tracking-wide uppercase text-primary/80">
            Technical Skills
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto"
          >
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className={`glass-panel rounded-2xl p-5 flex flex-col items-center gap-3 text-center group hover:-translate-y-2 transition-transform duration-300 bg-gradient-to-b ${skill.color} hover:border-primary/40`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-background/60 flex items-center justify-center ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold leading-tight">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-sm font-medium px-2">Professional Skills</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Professional Skills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto"
        >
          {professionalSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                className="glass-panel rounded-2xl p-5 flex flex-col items-center gap-3 text-center group hover:-translate-y-2 transition-transform duration-300 hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold leading-tight">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
