import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const highlights = [
    "5+ years of experience in full-stack development",
    "Specialized in React, Next.js, and Node.js ecosystems",
    "Strong focus on web performance and accessibility",
    "Based in Tashkent, Uzbekistan"
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading 
            title="About Me" 
            subtitle="A brief introduction to who I am and what drives my work."
          />
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal delay={0.3}>
            <div className="glass p-10 md:p-14 rounded-[2.5rem] space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed shadow-2xl border-white/20 dark:border-white/5 font-bold">
              <p>
                Hello! I&apos;m a passionate Software Engineer with a deep interest in building digital experiences that combine beautiful design with robust, scalable engineering.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I specialize in the Neural-X interface architecture.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="glass-card p-12 rounded-[2.5rem] border-primary/10 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
              <h3 className="text-3xl font-black mb-10 text-primary uppercase tracking-tighter italic">Technical Specs //</h3>
              <ul className="space-y-8">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="mr-6 p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-foreground/90 font-black uppercase tracking-tight text-sm md:text-base">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
