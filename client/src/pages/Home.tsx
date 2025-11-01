import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Wallet, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Lock,
  Rocket,
  Globe,
  Code,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/hero-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The Future of <span className="text-gradient">Web3</span> is Here
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Pulse is the next-generation blockchain ecosystem powering decentralized finance, 
                social platforms, and digital innovation. Join the revolution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/presale">
                  <Button size="lg" className="bg-gradient-pulse hover:opacity-90 glow-cyan">
                    Join Presale <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Read Whitepaper
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/robot-mascot-new.jpg" 
                alt="Pulse Robot Mascot" 
                className="w-full max-w-md animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for the <span className="text-gradient">Future</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Pulse combines cutting-edge blockchain technology with user-friendly design 
              to create the ultimate Web3 ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan">
              <CardHeader>
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Pulse Wallet</CardTitle>
                <CardDescription>
                  Secure, non-custodial wallet supporting multiple chains and tokens
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/50 transition-all hover:glow-magenta">
              <CardHeader>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Bank-Grade Security</CardTitle>
                <CardDescription>
                  Military-grade encryption and multi-signature protection for your assets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-all">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Sub-second transactions with minimal fees on our optimized network
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Social Integration</CardTitle>
                <CardDescription>
                  Connect with the community on Pulse Social - own your data, earn rewards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/50 transition-all hover:glow-magenta">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>DeFi Ecosystem</CardTitle>
                <CardDescription>
                  Stake, lend, and trade with our integrated decentralized exchange
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-all">
              <CardHeader>
                <Code className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Developer Friendly</CardTitle>
                <CardDescription>
                  Build on Pulse with comprehensive APIs and developer tools
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Tokenomics</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Fair distribution designed for long-term sustainability and community growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Total Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gradient mb-2">1,000,000,000</p>
                <p className="text-foreground/70">PULSE tokens</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Presale Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gradient mb-2">30%</p>
                <p className="text-foreground/70">300M tokens available</p>
              </CardContent>
            </Card>

            <Card className="border-accent/30">
              <CardHeader>
                <CardTitle className="text-2xl">Liquidity Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gradient mb-2">25%</p>
                <p className="text-foreground/70">Locked for 2 years</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Community & Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gradient mb-2">20%</p>
                <p className="text-foreground/70">Staking & ecosystem growth</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto border-secondary/30 bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl">Vesting Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-2">
                <p className="flex justify-between"><span>TGE (Token Generation Event):</span> <span className="text-primary font-bold">20%</span></p>
                <p className="flex justify-between"><span>Month 1-6:</span> <span className="text-secondary font-bold">80% linear unlock</span></p>
                <p className="flex justify-between"><span>Anti-sniping:</span> <span className="text-accent font-bold">Commit-reveal mechanism</span></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Presale CTA Section */}
      <section className="py-20 bg-gradient-pulse relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            Don't Miss the Presale
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Join early adopters and secure your PULSE tokens at the best price. 
            Limited slots available with exclusive bonuses.
          </p>
          <Link href="/presale">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6">
              <Rocket className="mr-2 h-6 w-6" />
              Join Presale Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our journey to revolutionize the Web3 ecosystem
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-background font-bold">Q1</div>
                  <div>
                    <CardTitle className="text-2xl">Foundation & Launch</CardTitle>
                    <CardDescription>2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li>✅ Smart contract development & audit</li>
                  <li>✅ Pulse Wallet beta release</li>
                  <li>🔄 Presale launch</li>
                  <li>🔄 Community building & partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/50 bg-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-background font-bold">Q2</div>
                  <div>
                    <CardTitle className="text-2xl">Ecosystem Expansion</CardTitle>
                    <CardDescription>2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li>🔜 Token generation event (TGE)</li>
                  <li>🔜 DEX integration & liquidity pools</li>
                  <li>🔜 Pulse Social platform alpha</li>
                  <li>🔜 Staking & rewards program launch</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/50 bg-accent/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-background font-bold">Q3</div>
                  <div>
                    <CardTitle className="text-2xl">DeFi & Governance</CardTitle>
                    <CardDescription>2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li>🔜 Lending & borrowing protocols</li>
                  <li>🔜 DAO governance implementation</li>
                  <li>🔜 Cross-chain bridge development</li>
                  <li>🔜 Mobile app release</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-background font-bold">Q4</div>
                  <div>
                    <CardTitle className="text-2xl">Global Adoption</CardTitle>
                    <CardDescription>2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li>🔜 Pulse Events & Music platforms</li>
                  <li>🔜 Major exchange listings</li>
                  <li>🔜 Enterprise partnerships</li>
                  <li>🔜 Global marketing campaign</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-20 w-20 text-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              Pulse is building a decentralized ecosystem where users truly own their data, 
              control their finances, and participate in a fair digital economy. We believe 
              in transparency, community governance, and the power of blockchain technology 
              to create a more equitable future for everyone.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-primary/30">
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle>Decentralized</CardTitle>
                  <CardDescription>
                    No single point of control or failure
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-secondary/30">
                <CardHeader>
                  <Users className="h-10 w-10 text-secondary mx-auto mb-2" />
                  <CardTitle>Community-Driven</CardTitle>
                  <CardDescription>
                    Governed by token holders through DAO
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-accent/30">
                <CardHeader>
                  <Shield className="h-10 w-10 text-accent mx-auto mb-2" />
                  <CardTitle>Secure & Transparent</CardTitle>
                  <CardDescription>
                    Open-source and audited smart contracts
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/pulse-logo.png" alt="Pulse Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gradient">PULSE</span>
              </div>
              <p className="text-foreground/70">
                The next generation Web3 blockchain ecosystem
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-foreground/70">
                <li><Link href="/presale" className="hover:text-primary transition-colors">Presale</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-foreground/70">
                <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="/docs" className="hover:text-primary transition-colors">Whitepaper</Link></li>
                <li><Link href="/docs" className="hover:text-primary transition-colors">Security</Link></li>
                <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-foreground/70">
            <p>&copy; 2025 Pulse. All rights reserved. Built on blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

