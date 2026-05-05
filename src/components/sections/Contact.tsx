"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">Transmission //</h3>
                <p className="text-lg text-foreground/60 leading-relaxed font-bold">
                  Open for collaborations, interesting projects, or just a friendly chat. Send a signal and I&apos;ll get back to you soon.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Email //</p>
                    <p className="text-xl font-black uppercase tracking-tight">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Location //</p>
                    <p className="text-xl font-black uppercase tracking-tight">Tashkent, Uzbekistan</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Status //</p>
                    <p className="text-xl font-black uppercase tracking-tight">Available for Work</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="glass-card p-12 rounded-[2.5rem] border-primary/10 shadow-2xl">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/40">Name //</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-6 py-5 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-bold text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/40">Email //</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-6 py-5 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-bold text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label htmlFor="subject" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/40">Subject //</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-6 py-5 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-bold text-lg"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/40">Message //</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-6 py-5 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-bold text-lg resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-2xl h-16 text-xl font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,106,0,0.3)]">
                  Send Message
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
