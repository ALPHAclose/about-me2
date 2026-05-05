import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";

import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "A complete overhaul of a legacy e-commerce platform using Next.js and Stripe. Improved conversion rates by 25% and reduced page load times by 60%.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI-Powered Writing Assistant",
    description: "Developed a rich text editor integrated with OpenAI's API to help users generate, summarize, and translate content on the fly.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Node.js", "OpenAI API", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Financial Dashboard Analytics",
    description: "A real-time financial dashboard displaying metrics using websockets and D3.js. Features customizable widgets and dark mode.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["TypeScript", "React", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work. For more, check out my GitHub."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass-card overflow-hidden flex flex-col group rounded-[2.5rem]">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.githubUrl} className="p-3 bg-background rounded-full hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={project.liveUrl} className="p-3 bg-background rounded-full hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary glass-text px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-8 line-clamp-3 font-bold leading-relaxed">{project.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-primary/5 flex justify-between items-center">
                    <a href={project.liveUrl} className="text-sm font-black uppercase tracking-widest text-primary flex items-center group/link">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
