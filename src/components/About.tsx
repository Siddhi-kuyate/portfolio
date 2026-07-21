import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const traits = [
    "Strong Communicator",
    "Team Player",
    "Quick Learner",
    "Problem Solver",
    "Adaptable"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10 mb-10">
              Motivated MCA student with strong web development skills and a passion for creating modern, responsive applications. Experienced in front-end development with expertise in HTML, CSS, JavaScript, and Bootstrap. Eager to contribute to innovative technology solutions and build products that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 relative z-10">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-secondary/50 dark:bg-secondary border border-border/50 rounded-full px-4 py-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{trait}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
