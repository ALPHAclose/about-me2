import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

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
            <div key={index} className="glass-card overflow-hidden flex flex-col group rounded-[2.5rem]">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 line-clamp-3 mt-2 text-sm font-medium leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 glass-text text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 flex gap-4 mt-auto">
                <Button variant="default" size="sm" asChild className="flex-1 rounded-xl font-bold">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1 rounded-xl font-bold border-primary/20">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4 mr-2" /> Source
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
