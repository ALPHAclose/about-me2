import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-primary/10 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tighter mb-2">
              Portfolio<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Building scalable, high-performance web experiences. Available for freelance opportunities.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <FaXTwitter size={20} />
            </a>
            <a href="mailto:hello@example.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
          <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
        </div>
      </div>
    </footer>
  );
}
