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
            <div key={index} className="glass-card relative mt-10 group rounded-[2.5rem] p-10 pt-14 shadow-2xl">
              <div className="absolute -top-8 left-8 bg-primary text-primary-foreground p-4 rounded-2xl shadow-[0_10px_30px_rgba(255,140,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                <Quote className="w-6 h-6" />
              </div>
              <p className="text-foreground/80 italic mb-10 text-lg leading-relaxed font-medium">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center justify-between border-t border-primary/10 pt-6">
                <div>
                  <h4 className="font-bold text-foreground text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/50 font-bold uppercase tracking-widest">{testimonial.role}, {testimonial.company}</p>
                </div>
                <a href={testimonial.linkedin} className="text-primary font-extrabold hover:underline text-sm uppercase tracking-tighter">
                  Verifiable
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
