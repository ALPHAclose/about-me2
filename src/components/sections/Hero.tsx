"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="glass-text inline-block w-max mb-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">DATA CORE // ONLINE</span>
            </div>
            
            <div className="glass p-8 md:p-14 rounded-[2.5rem] space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-white/20 dark:border-white/5">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                DATA ANALYST <br className="hidden md:block" />
                <span className="text-primary">&</span> <span className="text-foreground/90">VIBE CODER.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed font-bold tracking-tight">
                I turn complex data into clear insights — <br className="hidden md:block" />
                and build clean, functional tools to bring them to life.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Resume (PDF)
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-8 border-t border-border/50">
              <span className="text-sm font-medium text-muted-foreground">Find me on:</span>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><FaGithub size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaLinkedin size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-[#E4405F] transition-colors"><FaInstagram size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-[#24A1DE] transition-colors"><FaTelegram size={20}/></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Abstract visual or placeholder for a profile image */}
            <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-tr from-primary via-primary/20 to-transparent border border-primary/20 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden shadow-[0_0_150px_rgba(255,106,0,0.4)] group">
                <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
                <div className="text-center text-primary-foreground font-black text-4xl uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity duration-1000">DATA</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
