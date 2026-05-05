"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex items-center group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mr-5 shrink-0 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-xl font-extrabold hover:text-primary transition-colors tracking-tight">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mr-5 shrink-0 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-1">Location</h4>
                  <span className="text-xl font-extrabold tracking-tight">Tashkent, Uzbekistan</span>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mr-5 shrink-0 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-widest text-xs mb-1">Meeting</h4>
                  <a href="#" className="text-xl font-extrabold hover:text-primary transition-colors flex items-center tracking-tight">
                    Book a time <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl inline-block border-primary/20 shadow-xl">
              <div className="flex items-center space-x-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-sm uppercase tracking-widest">Available for new opportunities</span>
              </div>
            </div>
          </div>

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

        </div>
      </div>
    </section>
  );
}
