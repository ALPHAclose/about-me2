import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { GraduationCap, Award, Code, PenTool, Terminal } from "lucide-react";

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
          <div>
            <SectionHeading title="Education & Certifications" />
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <GraduationCap className="mr-2 text-primary" />
                  Academic Background
                </h3>
                {education.map((edu, index) => (
                  <Card key={index} className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{edu.year}</span>
                      </div>
                      <p className="font-medium text-foreground mb-2">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <Award className="mr-2 text-primary" />
                  Certifications
                </h3>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <a key={index} href={cert.link} className="block group">
                      <Card className="transition-colors group-hover:border-primary/50 group-hover:bg-muted/50">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.name}</h4>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{cert.date}</span>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <SectionHeading title="Technical Skills" />
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-card p-6 rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold flex items-center mb-4">
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-background border border-border text-sm font-medium rounded-full text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
