import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageSquare, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      <div className="pt-32 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Join our community and stay connected
            </p>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/30 hover:border-primary/50 transition-all">
              <CardHeader>
                <Twitter className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Twitter</CardTitle>
                <CardDescription>
                  Follow us for the latest updates and announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Follow @PulseChain
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 hover:border-secondary/50 transition-all">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Discord</CardTitle>
                <CardDescription>
                  Join our community for discussions and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/30 hover:border-accent/50 transition-all">
              <CardHeader>
                <Mail className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Telegram</CardTitle>
                <CardDescription>
                  Connect with the community on Telegram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    Join Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Business Inquiries</CardTitle>
              <CardDescription>
                For partnerships, press, or business opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Email us at: <a href="mailto:contact@pulse.network" className="text-primary hover:underline">contact@pulse.network</a>
              </p>
              <p className="text-foreground/70 text-sm">
                We typically respond within 24-48 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

