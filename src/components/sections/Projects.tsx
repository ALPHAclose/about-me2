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
            <Card key={index} className="overflow-hidden flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 mt-2 text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 pt-4 border-t border-border/50">
                <Button variant="default" size="sm" asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4 mr-2" /> Source
                  </a>
                </Button>

              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
