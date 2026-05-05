import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { GraduationCap, Award, Code, PenTool, Terminal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const education = [
  {
    degree: "B.S. in Computer Science",
    school: "Tashkent University of Information Technologies",
    year: "2015 - 2019",
    details: "Focus on Software Engineering and Algorithms. Graduated with Honors."
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#"
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2022",
    link: "#"
  }
];

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-5 h-5 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    title: "Backend & Database",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Tools & Design",
    icon: <PenTool className="w-5 h-5 text-primary" />,
    skills: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"]
  }
];

export function EducationSkills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education & Certs */}
          <Reveal>
            <div>
              <SectionHeading title="Education & Certifications" />
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold flex items-center mb-4">
                    <GraduationCap className="mr-2 text-primary" />
                    Academic Background
                  </h3>
                  {education.map((edu, index) => (
                    <div key={index} className="glass-card p-10 rounded-[2rem] mb-6 shadow-xl">
                      <div className="flex justify-between items-start mb-6">
                        <h4 className="font-black text-2xl tracking-tighter uppercase">{edu.degree}</h4>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary glass-text px-4 py-2">{edu.year}</span>
                      </div>
                      <p className="font-black text-foreground mb-4 text-lg italic opacity-80">{edu.school}</p>
                      <p className="text-base text-foreground/60 font-bold leading-relaxed">{edu.details}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold flex items-center mb-6 uppercase tracking-tighter">
                    <Award className="mr-3 text-primary" />
                    Certifications
                  </h3>
                  <div className="grid gap-4">
                    {certifications.map((cert, index) => (
                      <a key={index} href={cert.link} className="block group">
                        <div className="glass-card p-6 rounded-2xl transition-all duration-300 group-hover:scale-[1.02] border-primary/5">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">{cert.name}</h4>
                              <p className="text-sm text-foreground/60 font-medium">{cert.issuer}</p>
                            </div>
                            <span className="text-xs font-bold text-primary glass-text px-3 py-1">{cert.date}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Skills */}
          <Reveal delay={0.4}>
            <div>
              <SectionHeading title="Technical Skills" />
              
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="glass-card p-10 rounded-[2.5rem] border-primary/5 shadow-2xl">
                    <h3 className="text-xl font-bold flex items-center mb-6 text-primary uppercase tracking-tight">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      <span>{category.title}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 glass-text border border-primary/10 text-xs font-bold uppercase tracking-widest text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
