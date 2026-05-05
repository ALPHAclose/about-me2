"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium w-max">
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Building <span className="text-primary">digital</span> <br className="hidden md:block" />
              experiences that matter.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Senior Software Engineer & AI Specialist. I specialize in building scalable web applications and intuitive interfaces.
            </p>
            
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
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-50 mix-blend-overlay"></div>
                <div className="text-center text-muted-foreground/50 font-medium">Profile Image Placeholder</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
