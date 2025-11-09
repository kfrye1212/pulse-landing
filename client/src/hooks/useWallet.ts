import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export function useWallet() {
  const { address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const { data: balance } = useBalance({
    address: address,
  });

  const connect = async () => {
    await open();
  };

  return {
    address,
    isConnected,
    chain,
    balance,
    connect,
    disconnect,
  };
}
