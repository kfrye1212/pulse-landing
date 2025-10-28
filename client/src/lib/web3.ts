import { createWeb3Modal } from '@web3modal/wagmi/react'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygon, arbitrum, optimism } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'

// Get projectId from https://cloud.walletconnect.com
// For now using a demo project ID - replace with your own for production
const projectId = 'c4f79cc821944d9680842e34466bfbd'  // Demo ID, get yours at cloud.walletconnect.com

// Create wagmiConfig
export const config = createConfig({
  chains: [mainnet, sepolia, polygon, arbitrum, optimism],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/demo'),  // Replace with your Alchemy API key
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/demo'),
    [polygon.id]: http('https://polygon-mainnet.g.alchemy.com/v2/demo'),
    [arbitrum.id]: http('https://arb-mainnet.g.alchemy.com/v2/demo'),
    [optimism.id]: http('https://opt-mainnet.g.alchemy.com/v2/demo'),
  },
  connectors: [
    walletConnect({ projectId, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: 'Pulse',
      appLogoUrl: '/pulse-logo.png',
    }),
  ],
})

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-color-mix': '#00D9FF',
    '--w3m-accent': '#00D9FF',
    '--w3m-border-radius-master': '12px',
  },
})

