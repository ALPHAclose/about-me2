import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass-card relative mt-10 group rounded-[2.5rem] p-10 pt-14 shadow-2xl">
                <div className="absolute -top-8 left-8 bg-primary text-primary-foreground p-4 rounded-2xl shadow-[0_10px_30px_rgba(255,140,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <Quote className="w-6 h-6" />
                </div>
                
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 italic mb-8 text-lg font-bold leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-primary/5">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary uppercase tracking-tighter">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-foreground uppercase tracking-tight">{testimonial.author}</h4>
                    <p className="text-xs text-primary font-black uppercase tracking-widest">{testimonial.role}</p>
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
