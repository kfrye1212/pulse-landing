import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { useMemo } from "react";

// Import Solana wallet styles
import "@solana/wallet-adapter-react-ui/styles.css";

// Treasury wallet address
export const TREASURY_WALLET = "GJUdwrWeFVBZkwVSwjzfnhJMPyGo3hUeQ7ZxmonaWMdH";

// Alchemy RPC endpoint
export const SOLANA_RPC_ENDPOINT =
  "https://solana-mainnet.g.alchemy.com/v2/UaMQspIS7yGvjnvQNIoaQ";

export function useSolanaWallets() {
  // Use mainnet-beta for production, devnet for testing
  const network = WalletAdapterNetwork.Mainnet;

  // Create connection to Solana using Alchemy RPC
  const endpoint = useMemo(() => SOLANA_RPC_ENDPOINT, []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [network]
  );

  return { endpoint, wallets };
}

// Create a connection instance for direct use
export const connection = new Connection(SOLANA_RPC_ENDPOINT, "confirmed");
