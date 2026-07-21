import { motion } from "framer-motion";
import { Languages as LangIcon } from "lucide-react";

export function Languages() {
  const languages = [
    { name: "English", proficiency: "Fluent", level: 90 },
    { name: "Hindi", proficiency: "Fluent", level: 95 },
    { name: "Marathi", proficiency: "Native", level: 100 }
  ];

  return (
    <section className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <LangIcon className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display font-bold">Languages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl text-center group hover:bg-secondary/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
                <p className="text-primary font-medium mb-4">{lang.proficiency}</p>
                <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
