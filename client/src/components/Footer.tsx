import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/pulse-logo.png"
                alt="Pulse Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gradient">PULSE</span>
            </div>
            <p className="text-foreground/70">
              The next generation Web3 blockchain ecosystem
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <Link
                  href="/presale"
                  className="hover:text-primary transition-colors"
                >
                  Presale
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#tokenomics"
                  className="hover:text-primary transition-colors"
                >
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="hover:text-primary transition-colors"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="hover:text-primary transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-primary transition-colors"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-foreground/70">
          <p>
            &copy; 2025 Pulse. All rights reserved. Built on blockchain
            technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
