import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowLeft,
  FileText,
  Shield,
  Code,
  BookOpen,
  Download,
} from "lucide-react";

export default function Docs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src="/pulse-logo.png"
                  alt="Pulse Logo"
                  className="h-10 w-auto"
                />
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
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Everything you need to know about the Pulse ecosystem
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-primary/30 hover:border-primary/50 transition-all cursor-pointer">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Whitepaper</CardTitle>
                <CardDescription>
                  Comprehensive overview of the Pulse ecosystem, technology, and
                  vision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 hover:border-secondary/50 transition-all cursor-pointer">
              <CardHeader>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Security Policy</CardTitle>
                <CardDescription>
                  Our approach to security, audits, and protecting user assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/30 hover:border-accent/50 transition-all cursor-pointer">
              <CardHeader>
                <Code className="h-12 w-12 text-accent mb-4" />
                <CardTitle>DAO Constitution</CardTitle>
                <CardDescription>
                  Governance framework and decision-making processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Whitepaper Content */}
          <Card className="mb-12 border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-4">
                <BookOpen className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-3xl">Pulse Whitepaper</CardTitle>
                  <CardDescription className="text-base">
                    Version 1.0 • Last updated: January 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gradient mb-4">
                Executive Summary
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Pulse is a next-generation blockchain ecosystem designed to
                address the key challenges facing decentralized finance and Web3
                adoption: scalability, security, and user experience. By
                combining innovative consensus mechanisms, layer-2 scaling
                solutions, and intuitive interfaces, Pulse creates a platform
                where anyone can participate in the decentralized economy.
              </p>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                1. Introduction
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The promise of blockchain technology has always been to create a
                more open, transparent, and equitable financial system. However,
                current blockchain platforms face significant challenges that
                limit mainstream adoption:
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
                <li>High transaction fees that price out everyday users</li>
                <li>
                  Slow confirmation times that make real-time applications
                  impractical
                </li>
                <li>
                  Complex user interfaces that intimidate non-technical users
                </li>
                <li>
                  Fragmented ecosystems that create silos and limit
                  interoperability
                </li>
                <li>Centralization risks in governance and infrastructure</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Pulse addresses these challenges through a holistic approach
                that combines technical innovation with user-centric design.
              </p>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                2. Technology Stack
              </h2>

              <h3 className="text-xl font-bold text-primary mb-3">
                2.1 Consensus Mechanism
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Pulse utilizes a hybrid Proof-of-Stake (PoS) consensus mechanism
                that combines the security of traditional PoS with the
                efficiency of delegated validation. This approach enables:
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
                <li>
                  Sub-second block times for near-instant transaction finality
                </li>
                <li>Energy efficiency with minimal environmental impact</li>
                <li>Democratic participation through staking and delegation</li>
                <li>Byzantine fault tolerance for maximum security</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mb-3">
                2.2 Scaling Solutions
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To achieve high throughput without compromising
                decentralization, Pulse implements multiple scaling strategies:
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
                <li>
                  <strong>Optimistic Rollups:</strong> Batch transactions
                  off-chain while maintaining security guarantees
                </li>
                <li>
                  <strong>State Channels:</strong> Enable instant, low-cost
                  microtransactions
                </li>
                <li>
                  <strong>Sharding:</strong> Parallel processing across multiple
                  chains
                </li>
                <li>
                  <strong>Data Availability Sampling:</strong> Efficient
                  verification without full node requirements
                </li>
              </ul>

              <h3 className="text-xl font-bold text-primary mb-3">
                2.3 Smart Contract Platform
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Pulse supports EVM-compatible smart contracts, allowing
                developers to deploy existing Ethereum applications with minimal
                modifications. Additionally, our native SDK provides enhanced
                features for building high-performance dApps.
              </p>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                3. Tokenomics
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The PULSE token serves multiple functions within the ecosystem:
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
                <li>
                  <strong>Governance:</strong> Vote on protocol upgrades and
                  treasury allocation
                </li>
                <li>
                  <strong>Staking:</strong> Secure the network and earn rewards
                </li>
                <li>
                  <strong>Transaction Fees:</strong> Pay for network operations
                </li>
                <li>
                  <strong>Collateral:</strong> Back synthetic assets and lending
                  protocols
                </li>
              </ul>

              <div className="bg-card p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-4">Token Distribution</h4>
                <div className="space-y-2 text-foreground/80">
                  <p className="flex justify-between">
                    <span>Presale (30%):</span>{" "}
                    <span className="text-primary font-bold">
                      300,000,000 PULSE
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Liquidity Pool (25%):</span>{" "}
                    <span className="text-secondary font-bold">
                      250,000,000 PULSE
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Community & Rewards (20%):</span>{" "}
                    <span className="text-accent font-bold">
                      200,000,000 PULSE
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Team & Advisors (15%):</span>{" "}
                    <span className="text-primary font-bold">
                      150,000,000 PULSE
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Treasury (10%):</span>{" "}
                    <span className="text-secondary font-bold">
                      100,000,000 PULSE
                    </span>
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                4. Ecosystem Components
              </h2>

              <h3 className="text-xl font-bold text-primary mb-3">
                4.1 Pulse Wallet
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                A non-custodial, multi-chain wallet with built-in DeFi features,
                social recovery, and hardware wallet support. Designed for both
                beginners and power users.
              </p>

              <h3 className="text-xl font-bold text-primary mb-3">
                4.2 Pulse DEX
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Decentralized exchange with automated market makers, limit
                orders, and cross-chain swaps. Features include concentrated
                liquidity, minimal slippage, and fair launch mechanisms for new
                tokens.
              </p>

              <h3 className="text-xl font-bold text-primary mb-3">
                4.3 Pulse Social
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                A decentralized social platform where users own their data and
                can monetize their content. Built on Pulse infrastructure with
                on-chain reputation and token-gated communities.
              </p>

              <h3 className="text-xl font-bold text-primary mb-3">
                4.4 Pulse Lending
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Peer-to-peer lending and borrowing with competitive rates,
                overcollateralized loans, and flash loan capabilities for
                arbitrage and liquidations.
              </p>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                5. Security
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Security is paramount in the Pulse ecosystem. Our multi-layered
                security approach includes:
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
                <li>Multiple independent audits by leading security firms</li>
                <li>Bug bounty program with rewards up to $1 million</li>
                <li>Formal verification of critical smart contracts</li>
                <li>Time-locked upgrades with community oversight</li>
                <li>Insurance fund for protocol failures</li>
              </ul>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                6. Governance
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Pulse is governed by a DAO where PULSE token holders can propose
                and vote on changes to the protocol. Governance decisions
                include protocol parameters, treasury spending, feature
                prioritization, and strategic partnerships. All votes are
                conducted on-chain for complete transparency.
              </p>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                7. Roadmap
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our development roadmap extends through 2026 and beyond:
              </p>
              <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
                <li>
                  <strong>Q1 2025:</strong> Presale, smart contract audits,
                  wallet beta
                </li>
                <li>
                  <strong>Q2 2025:</strong> TGE, DEX launch, staking program
                </li>
                <li>
                  <strong>Q3 2025:</strong> Lending protocol, DAO governance,
                  mobile apps
                </li>
                <li>
                  <strong>Q4 2025:</strong> Pulse Social, cross-chain bridges,
                  major partnerships
                </li>
                <li>
                  <strong>2026:</strong> Layer-2 scaling, enterprise solutions,
                  global expansion
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gradient mb-4">
                8. Conclusion
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Pulse represents a new paradigm in blockchain technology—one
                that prioritizes user experience without compromising on
                security or decentralization. By building a comprehensive
                ecosystem of tools and services, we're creating the
                infrastructure for the next billion Web3 users. Join us in
                building the future of decentralized finance.
              </p>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-secondary/30">
              <CardHeader>
                <CardTitle>Developer Documentation</CardTitle>
                <CardDescription>
                  Build on Pulse with our comprehensive API docs and tutorials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Developer Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/30">
              <CardHeader>
                <CardTitle>Community Resources</CardTitle>
                <CardDescription>
                  Join our Discord, Telegram, and Twitter for updates and
                  support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
