import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "../assets/profile.png";

const ROLES = ["MCA Student", "Front-End Developer", "Web Developer"];
const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 1800;

function useTypewriter(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
        );
      }, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}

export function Hero() {
  const typedRole = useTypewriter(ROLES);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 animate-spin-slow opacity-60 blur-md" />
            <div className="absolute inset-1 rounded-full overflow-hidden ring-2 ring-primary/40">
              <img
                src={profilePhoto}
                alt="Siddhi Lankesh Kuyate"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 max-w-3xl"
          >
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm md:text-base h-6 flex items-center justify-center gap-1">
              <span>{typedRole}</span>
              <span className="inline-block w-0.5 h-4 bg-primary animate-pulse rounded-full" />
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Siddhi Lankesh Kuyate</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
              Building Responsive and User-Friendly Web Applications. Turning ideas into elegant, interactive digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white"
              onClick={() => handleScroll("#projects")}
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 glass-panel border-primary/20 hover:bg-primary/10"
              onClick={() => handleScroll("#contact")}
            >
              Contact Me <Mail className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="rounded-full px-8"
              onClick={() => {
                const a = document.createElement("a");
                a.href = `${import.meta.env.BASE_URL}resume.pdf`;
                a.download = "Siddhi_Kuyate_Resume.pdf";
                a.click();
              }}
            >
              Download Resume <Download className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
