import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Target,
  Users,
  Globe,
  Shield,
  Zap,
  Heart
} from "lucide-react";

export default function About() {
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
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Pulse</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We're building the future of decentralized technology, one block at a time
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-12 w-12 text-primary" />
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Pulse is on a mission to democratize access to decentralized finance and create 
                a fair digital economy where users truly own their data, control their finances, 
                and participate in governance. We believe blockchain technology has the power to 
                create a more transparent, equitable, and accessible financial system for everyone, 
                regardless of their location or background.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Through innovative technology, community-driven governance, and a commitment to 
                security and transparency, we're building an ecosystem that empowers individuals 
                and challenges the status quo of traditional centralized platforms.
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/30 hover:border-primary/50 transition-all">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Security First</CardTitle>
                  <CardDescription className="text-base">
                    We prioritize the security of our users' assets above all else. Every smart 
                    contract is audited by leading security firms, and we implement industry best 
                    practices to protect your investments.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/30 hover:border-secondary/50 transition-all">
                <CardHeader>
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle className="text-2xl">Community Driven</CardTitle>
                  <CardDescription className="text-base">
                    Our community is at the heart of everything we do. Through DAO governance, 
                    token holders have a real say in the direction of the project and the 
                    allocation of treasury funds.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-accent/30 hover:border-accent/50 transition-all">
                <CardHeader>
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-2xl">Global Access</CardTitle>
                  <CardDescription className="text-base">
                    We're building for the world. Pulse is designed to be accessible to anyone 
                    with an internet connection, breaking down barriers and creating opportunities 
                    for financial inclusion.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/30 hover:border-primary/50 transition-all">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Innovation</CardTitle>
                  <CardDescription className="text-base">
                    We're constantly pushing the boundaries of what's possible with blockchain 
                    technology. From lightning-fast transactions to novel DeFi mechanisms, we're 
                    committed to staying at the cutting edge.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/30 hover:border-secondary/50 transition-all">
                <CardHeader>
                  <Heart className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle className="text-2xl">Transparency</CardTitle>
                  <CardDescription className="text-base">
                    We believe in radical transparency. Our code is open source, our governance 
                    is on-chain, and we regularly communicate with our community about progress, 
                    challenges, and future plans.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-accent/30 hover:border-accent/50 transition-all">
                <CardHeader>
                  <Target className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-2xl">Long-term Vision</CardTitle>
                  <CardDescription className="text-base">
                    We're not here for quick gains. Pulse is built for the long haul, with 
                    sustainable tokenomics, locked liquidity, and a roadmap that extends years 
                    into the future.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* The Team */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              The <span className="text-gradient">Team</span>
            </h2>
            <Card className="border-secondary/30">
              <CardContent className="pt-8">
                <p className="text-lg text-foreground/80 text-center leading-relaxed mb-8">
                  Pulse is built by a diverse team of blockchain developers, security experts, 
                  designers, and community managers from around the world. Our team has decades 
                  of combined experience in cryptocurrency, DeFi, and traditional finance.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="h-32 w-32 rounded-full bg-gradient-pulse mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-background" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Core Development</h3>
                    <p className="text-foreground/70">
                      Experienced blockchain engineers building secure, scalable infrastructure
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-32 w-32 rounded-full bg-gradient-pulse mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-16 w-16 text-background" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Security Team</h3>
                    <p className="text-foreground/70">
                      Dedicated security professionals ensuring the safety of user funds
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-32 w-32 rounded-full bg-gradient-pulse mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-background" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Community Team</h3>
                    <p className="text-foreground/70">
                      Passionate community managers supporting our global user base
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DAO Governance */}
          <Card className="border-accent/30 bg-accent/5">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-12 w-12 text-accent" />
                <CardTitle className="text-3xl">DAO Governance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Pulse is governed by a Decentralized Autonomous Organization (DAO), where PULSE 
                token holders can propose and vote on key decisions affecting the ecosystem. This 
                includes protocol upgrades, treasury allocation, partnership decisions, and more.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-xl mb-3 text-accent">Voting Power</h4>
                  <p className="text-foreground/70">
                    One PULSE token equals one vote. The more tokens you hold, the more influence 
                    you have on governance decisions. Voting is conducted on-chain for complete 
                    transparency.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3 text-accent">Proposal Process</h4>
                  <p className="text-foreground/70">
                    Any token holder can submit a proposal. Proposals that receive sufficient 
                    community support move to a formal vote. Approved proposals are automatically 
                    executed by smart contracts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join the <span className="text-gradient">Revolution</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Be part of building the future of decentralized finance and Web3
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/presale">
                <Button size="lg" className="bg-gradient-pulse hover:opacity-90 glow-pulse">
                  Join Presale
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

