import { motion } from "framer-motion";
import { Trophy, Star, Target } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Achievements & Leadership</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-[50px] rounded-full" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <h3 className="text-2xl font-bold font-display">Department Event "Ascend"</h3>
              </div>
              <h4 className="text-primary font-medium mb-4">Head, Design & Decoration Committee</h4>
              <p className="text-muted-foreground leading-relaxed">
                Led the design and decoration team for the major department event. Successfully managed stage setup, coordinated team members efficiently, and delivered a highly praised visual experience for attendees within tight deadlines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
