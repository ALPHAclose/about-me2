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
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <CardDescription className="flex flex-col sm:flex-row gap-2 sm:items-center text-base">
                    <a href={exp.companyUrl} className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center">
                      {exp.company}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <span className="flex items-center text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
