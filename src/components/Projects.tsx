import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, Coffee, Store } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Cafe Coffee Day",
    role: "Front-End Developer",
    duration: "Jan 2025 – Mar 2025",
    description: "A full-featured responsive website for the Cafe Coffee Day brand. Includes an image carousel hero, a multi-category cafe menu (Food for Mood, Hot Classics, All-Time Chillers, Sweet Tooth), an E-Shop with cart functionality, online order & billing, and a contact/cafe-finder section.",
    features: ["Image Carousel", "E-Shop & Cart", "Online Ordering", "Multi-Category Menu", "Cafe Locator"],
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Swiper.js"],
    icon: Coffee,
    accent: "from-amber-500 to-orange-500",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/30",
    link: "#"
  },
  {
    number: "02",
    title: "One-Eight",
    role: "Front-End Developer",
    duration: "Feb 2025 – Apr 2025",
    description: "A Virat Kohli-themed lifestyle e-commerce web application featuring product categories for shoes, perfumes, and clothing. Includes interactive product pages, multiple browsable sections, and a fully responsive user interface.",
    features: ["Product Catalogue", "Multiple Pages", "Interactive UI", "Responsive Layout"],
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    icon: Store,
    accent: "from-violet-500 to-purple-500",
    accentBg: "bg-violet-500/10",
    accentText: "text-violet-400",
    accentBorder: "border-violet-500/30",
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Hands-on projects built from scratch using real-world front-end technologies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="group relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="pl-8 pr-6 py-8 md:py-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                    {/* Left: number + icon + meta */}
                    <div className="lg:w-56 shrink-0">
                      <div className="flex items-center gap-4 mb-6">
                        <span className={`text-5xl font-display font-black ${project.accentText} opacity-30 leading-none`}>
                          {project.number}
                        </span>
                        <div className={`w-10 h-10 rounded-xl ${project.accentBg} border ${project.accentBorder} flex items-center justify-center ${project.accentText}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        <p className={`font-semibold ${project.accentText}`}>{project.role}</p>
                        <p className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.duration}
                        </p>
                      </div>
                    </div>

                    {/* Right: description + features + tech */}
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.features.map(f => (
                          <span
                            key={f}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full ${project.accentBg} ${project.accentText} border ${project.accentBorder}`}
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/40">
                        <span className="text-xs text-muted-foreground font-medium mr-1">Built with:</span>
                        {project.techStack.map(tech => (
                          <span
                            key={tech}
                            className="text-xs font-mono font-medium px-2.5 py-1 bg-secondary/80 text-secondary-foreground rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                          >
                            View Live <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
