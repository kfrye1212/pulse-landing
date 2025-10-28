import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useState } from 'react';

export type WalletType = 'ethereum' | 'solana';

export function useUnifiedWallet() {
  const [selectedWalletType, setSelectedWalletType] = useState<WalletType>('ethereum');

  // Ethereum wallet hooks
  const { 
    address: ethAddress, 
    isConnected: ethIsConnected, 
    chain 
  } = useAccount();
  const { disconnect: ethDisconnect } = useDisconnect();
  const { open: openEthModal } = useWeb3Modal();
  const { data: ethBalance } = useBalance({ address: ethAddress });

  // Solana wallet hooks
  const {
    publicKey: solPublicKey,
    connected: solConnected,
    disconnect: solDisconnect,
    select: solSelect,
    wallet: solWallet,
  } = useSolanaWallet();

  const connectEthereum = async () => {
    setSelectedWalletType('ethereum');
    await openEthModal();
  };

  const connectSolana = async () => {
    setSelectedWalletType('solana');
    // Solana wallet connection is handled by WalletModalProvider
    // User needs to click the Solana wallet button in UI
  };

  const disconnect = () => {
    if (selectedWalletType === 'ethereum' && ethIsConnected) {
      ethDisconnect();
    } else if (selectedWalletType === 'solana' && solConnected) {
      solDisconnect();
    }
  };

  return {
    // Wallet type
    selectedWalletType,
    setSelectedWalletType,
    
    // Ethereum
    ethereum: {
      address: ethAddress,
      isConnected: ethIsConnected,
      chain,
      balance: ethBalance,
      connect: connectEthereum,
      disconnect: ethDisconnect,
    },
    
    // Solana
    solana: {
      address: solPublicKey?.toBase58(),
      isConnected: solConnected,
      wallet: solWallet,
      connect: connectSolana,
      disconnect: solDisconnect,
      select: solSelect,
    },
    
    // Unified interface
    isConnected: selectedWalletType === 'ethereum' ? ethIsConnected : solConnected,
    address: selectedWalletType === 'ethereum' ? ethAddress : solPublicKey?.toBase58(),
    disconnect,
  };
}

