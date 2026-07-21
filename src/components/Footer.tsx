import { Code2 } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-lg">Siddhi.</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {year} Siddhi Lankesh Kuyate. All rights reserved.
        </p>
        
        <div className="text-sm text-muted-foreground flex gap-4">
          <span>Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
