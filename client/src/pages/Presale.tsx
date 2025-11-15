import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import {
  Wallet,
  ArrowLeft,
  Check,
  Clock,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useWallet } from "@/hooks/useWallet";
import { formatEther } from "viem";

export default function Presale() {
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("ETH");
  const { address, isConnected, chain, balance, connect, disconnect } =
    useWallet();

  const handleConnect = async () => {
    if (isConnected) {
      disconnect();
    } else {
      await connect();
    }
  };

  const handleContribute = () => {
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount!");
      return;
    }
    // TODO: Implement smart contract interaction
    alert(
      `Contributing ${amount} ${selectedToken} from ${address?.slice(0, 6)}...${address?.slice(-4)}\n\nSmart contract integration coming soon!`
    );
  };

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
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Pulse Presale</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Join the early adopters and secure your PULSE tokens at exclusive
              presale prices
            </p>
          </div>

          {/* Presale Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader className="pb-3">
                <CardDescription>Total Raised</CardDescription>
                <CardTitle className="text-3xl text-primary">$2.4M</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-secondary/30 bg-secondary/5">
              <CardHeader className="pb-3">
                <CardDescription>Tokens Sold</CardDescription>
                <CardTitle className="text-3xl text-secondary">48M</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-accent/30 bg-accent/5">
              <CardHeader className="pb-3">
                <CardDescription>Participants</CardDescription>
                <CardTitle className="text-3xl text-accent">1,247</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader className="pb-3">
                <CardDescription>Time Remaining</CardDescription>
                <CardTitle className="text-3xl text-primary">23d 14h</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Presale Form */}
            <div className="lg:col-span-2">
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contribute to Presale
                  </CardTitle>
                  <CardDescription>
                    Connect your wallet and choose your contribution amount
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Wallet Connect */}
                  <div>
                    {!isConnected ? (
                      <>
                        <Button
                          onClick={handleConnect}
                          className="w-full bg-gradient-pulse hover:opacity-90 glow-pulse text-lg py-6"
                        >
                          <Wallet className="mr-2 h-5 w-5" />
                          Connect Wallet
                        </Button>
                        <p className="text-sm text-foreground/60 mt-2 text-center">
                          Supports MetaMask, WalletConnect, Coinbase Wallet, and
                          more
                        </p>
                      </>
                    ) : (
                      <div className="space-y-3">
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-foreground/70">
                              Connected Wallet
                            </span>
                            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                              {chain?.name || "Unknown"}
                            </span>
                          </div>
                          <p className="font-mono text-sm text-primary mb-2">
                            {address?.slice(0, 6)}...{address?.slice(-4)}
                          </p>
                          {balance && (
                            <p className="text-sm text-foreground/70">
                              Balance:{" "}
                              {parseFloat(formatEther(balance.value)).toFixed(
                                4
                              )}{" "}
                              {balance.symbol}
                            </p>
                          )}
                        </div>
                        <Button
                          onClick={handleConnect}
                          variant="outline"
                          className="w-full"
                        >
                          Disconnect
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-6">
                    {/* Token Selection */}
                    <div className="mb-6">
                      <Label className="text-base mb-3 block">
                        Select Payment Token
                      </Label>
                      <div className="grid grid-cols-4 gap-3">
                        {["ETH", "USDC", "USDT", "SOL"].map(token => (
                          <Button
                            key={token}
                            variant={
                              selectedToken === token ? "default" : "outline"
                            }
                            className={
                              selectedToken === token ? "bg-primary" : ""
                            }
                            onClick={() => setSelectedToken(token)}
                          >
                            {token}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Amount Input */}
                    <div className="mb-6">
                      <Label htmlFor="amount" className="text-base mb-3 block">
                        Contribution Amount
                      </Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.0"
                          value={amount}
                          onChange={e => setAmount(e.target.value)}
                          className="text-2xl h-16 pr-20"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 font-bold">
                          {selectedToken}
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-foreground/60">
                        <span>Min: 0.1 {selectedToken}</span>
                        <span>Max: 10 {selectedToken}</span>
                      </div>
                    </div>

                    {/* You Receive */}
                    <div className="bg-card/50 p-4 rounded-lg mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/70">
                          You will receive:
                        </span>
                        <span className="text-2xl font-bold text-gradient">
                          {amount
                            ? (parseFloat(amount) * 1000).toLocaleString()
                            : "0"}{" "}
                          PULSE
                        </span>
                      </div>
                      <div className="text-sm text-foreground/60 mt-2">
                        Current rate: 1 {selectedToken} = 1,000 PULSE
                      </div>
                    </div>

                    {/* Contribute Button */}
                    <Button
                      onClick={handleContribute}
                      disabled={!amount || parseFloat(amount) <= 0}
                      className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6"
                    >
                      Contribute Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Vesting Schedule */}
              <Card className="mt-6 border-accent/30">
                <CardHeader>
                  <CardTitle>Vesting Schedule</CardTitle>
                  <CardDescription>
                    Token unlock schedule for presale participants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">
                          TGE (Token Generation Event)
                        </div>
                        <div className="text-sm text-foreground/60">
                          20% unlocked immediately
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">
                          Linear Vesting (6 months)
                        </div>
                        <div className="text-sm text-foreground/60">
                          80% unlocked gradually over 6 months
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Presale Benefits */}
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle>Presale Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Best Price</div>
                      <div className="text-sm text-foreground/60">
                        40% discount vs public sale
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <div className="font-semibold">Anti-Sniping</div>
                      <div className="text-sm text-foreground/60">
                        Fair launch mechanism
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold">Early Access</div>
                      <div className="text-sm text-foreground/60">
                        Priority features & governance
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accepted Tokens */}
              <Card className="border-secondary/30">
                <CardHeader>
                  <CardTitle>Accepted Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">ETH</span>
                      <span className="text-foreground/60">Ethereum</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">USDC</span>
                      <span className="text-foreground/60">USD Coin</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">USDT</span>
                      <span className="text-foreground/60">Tether</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">SOL</span>
                      <span className="text-foreground/60">Solana</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="border-accent/30 bg-accent/5">
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    All smart contracts have been audited by leading security
                    firms. Liquidity will be locked for 2 years post-TGE.
                  </p>
                </CardContent>
              </Card>

              {/* Need Help */}
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 mb-4">
                    Join our community for support and updates
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      Twitter
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      Discord
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
