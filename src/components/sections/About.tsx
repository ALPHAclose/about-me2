import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

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
        <SectionHeading 
          title="About Me" 
          subtitle="A brief introduction to who I am and what drives my work."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello! I&apos;m a passionate Software Engineer with a deep interest in building digital experiences that combine beautiful design with robust, scalable engineering. My journey in web development started back in 2018 when I decided to try editing custom Tumblr themes—turns out hacking together HTML &amp; CSS taught me a lot about logic and structure.
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              When I&apos;m not at the computer, I&apos;m usually exploring the outdoors, reading about new technologies, or contributing to open-source projects.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                Verifiability note: All my work history and education can be verified via my <a href="#" className="text-primary hover:underline">LinkedIn profile</a> or official credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
