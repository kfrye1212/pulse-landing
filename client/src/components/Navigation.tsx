import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface NavigationProps {
  variant?: "home" | "back";
}

export default function Navigation({ variant = "home" }: NavigationProps) {
  if (variant === "back") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src="/pulse-logo.png" alt="Pulse Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-gradient">PULSE</span>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/digital-pulse-logo.jpg" alt="Digital Pulse Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
            <a href="#tokenomics" className="text-foreground/80 hover:text-primary transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-foreground/80 hover:text-primary transition-colors">Roadmap</a>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
            <Link href="/docs" className="text-foreground/80 hover:text-primary transition-colors">Docs</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/presale">
              <Button className="bg-gradient-pulse hover:opacity-90 glow-pulse">
                Join Presale
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
