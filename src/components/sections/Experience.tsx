import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechNova Solutions",
    companyUrl: "#",
    location: "Remote",
    period: "Jan 2022 - Present",
    achievements: [
      "Led the migration of a legacy monolithic application to a microservices architecture using Node.js and React, improving load times by 40%.",
      "Mentored a team of 5 junior developers, improving code quality scores by 25% across the engineering department.",
      "Implemented a comprehensive CI/CD pipeline using GitHub Actions, reducing deployment time from 45 minutes to under 10 minutes."
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Frontier Agency",
    companyUrl: "#",
    location: "Tashkent, Uzbekistan",
    period: "Mar 2019 - Dec 2021",
    achievements: [
      "Developed and maintained over 15 client websites using Next.js and Tailwind CSS, generating $200k+ in client revenue.",
      "Integrated third-party APIs including Stripe for payments and SendGrid for automated email marketing.",
      "Optimized database queries in PostgreSQL, reducing average API response times by 30%."
    ]
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Creative Web Studio",
    companyUrl: "#",
    location: "Tashkent, Uzbekistan",
    period: "Jun 2018 - Feb 2019",
    achievements: [
      "Assisted in the development of responsive user interfaces using HTML, CSS, and Vanilla JavaScript.",
      "Participated in daily stand-ups and agile sprint planning sessions.",
      "Wrote comprehensive documentation for internal UI component libraries."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and key achievements in the tech industry."
        />
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-10 rounded-[2.5rem] shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary glass-text px-3 py-1">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-base mb-6">
                  <a href={exp.companyUrl} className="font-bold text-foreground hover:text-primary transition-colors inline-flex items-center">
                    {exp.company}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <span className="hidden sm:inline text-foreground/30">•</span>
                  <span className="flex items-center text-foreground/60 font-medium">
                    <MapPin className="w-3 h-3 mr-1" />
                    {exp.location}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm leading-relaxed text-foreground/80 flex items-start group">
                      <span className="mr-2 text-primary group-hover:scale-125 transition-transform">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
