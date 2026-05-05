import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CoinFlip } from "@/components/ui/CoinFlip";

export function About() {
  const techSpecs = [
    { category: "ANALYTICS ENGINE", techs: "Python (NumPy, Pandas), Advanced SQL" },
    { category: "VISUALIZATION LAYER", techs: "Power BI, Matplotlib, Seaborn" },
    { category: "BACKEND SYSTEMS", techs: "Next.js, FastAPI, Django" },
    { category: "INTERFACE LAYER", techs: "HTML, CSS (JavaScript-ready)" },
    { category: "WORKFLOW STACK", techs: "Git, GitHub, Jupyter, VS Code" },
    { category: "COMMUNICATION PROTOCOLS", techs: "EN / RU / UZ" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading 
            title="About Me" 
            subtitle="A brief introduction to who I am and what drives my work."
          />
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo/Coin Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <Reveal delay={0.3}>
              <CoinFlip />
            </Reveal>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-8">
            <Reveal delay={0.5}>
              <div className="glass p-10 md:p-14 rounded-[2.5rem] space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed shadow-2xl border-white/20 dark:border-white/5 font-bold">
                <p>
                  I&apos;m a Data Analyst who enjoys working with data and building things around it.
                  I analyze data to find insights, and I create clean, functional tools to make those insights useful.
                </p>
                <p>
                  I combine analytical thinking with a practical approach to development — focusing on clarity, usability, and real impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Specs Row */}
        <div className="mt-12">
          <Reveal delay={0.7}>
            <div className="glass-card p-12 rounded-[2.5rem] border-primary/10 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
              <h3 className="text-3xl font-black mb-10 text-primary uppercase tracking-tighter italic">SYSTEM MODULES // ALPHA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                {techSpecs.map((spec, index) => (
                  <div key={index} className="space-y-2 group">
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 group-hover:text-primary transition-colors">
                        {spec.category}
                      </h4>
                    </div>
                    <p className="text-foreground/90 font-bold tracking-tight text-base md:text-lg pl-3.5 border-l border-primary/20 group-hover:border-primary transition-all duration-500">
                      {spec.techs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
