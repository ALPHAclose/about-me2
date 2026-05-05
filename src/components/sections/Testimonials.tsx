import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Working with them was a game-changer for our platform. The migration to Next.js was seamless and the performance improvements were immediately noticeable.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "TechNova Solutions",
    linkedin: "#"
  },
  {
    content: "Not only an exceptional developer but also a great communicator. They consistently delivered high-quality code ahead of schedule and brought innovative solutions to complex problems.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "Digital Frontier Agency",
    linkedin: "#"
  },
  {
    content: "Their attention to detail when it comes to accessibility and responsive design is unmatched. The web application they built for us looks and works beautifully on every device.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Startup Inc",
    linkedin: "#"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What people I&apos;ve worked with have to say."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative mt-8 group hover:border-primary/50 transition-colors">
              <div className="absolute -top-6 left-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              <CardContent className="pt-10 pb-6 px-6">
                <p className="text-muted-foreground italic mb-6">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center justify-between border-t border-border/50 pt-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                  <a href={testimonial.linkedin} className="text-primary hover:underline text-sm font-medium">
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
