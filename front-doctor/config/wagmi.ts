import { createConfig } from 'wagmi';
import { sapphire, sapphireTestnet } from 'wagmi/chains';
import { injectedWithSapphire, sapphireHttpTransport } from '@oasisprotocol/sapphire-wagmi-v2';

// Determine network based on ENV
const isTestnet = process.env.NEXT_PUBLIC_NETWORK === 'testnet' || true;

export const config = createConfig({
  chains: isTestnet ? [sapphireTestnet] : [sapphire],
  connectors: [
    injectedWithSapphire({
      target: {
        id: 'rabby',
        name: 'Rabby Wallet',
        provider: (window: any) => window.rabby,
      },
    }), // Rabby Wallet with Sapphire encryption
    injectedWithSapphire({
      target: {
        id: 'metamask',
        name: 'MetaMask',
        provider: (window: any) => window.ethereum?.isMetaMask ? window.ethereum : undefined,
      },
    }), // MetaMask with Sapphire encryption
    injectedWithSapphire(), // Other injected wallets with Sapphire encryption
  ],
  transports: isTestnet ? {
    [sapphireTestnet.id]: sapphireHttpTransport(),
  } : {
    [sapphire.id]: sapphireHttpTransport(),
  },
});

export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x...';

export const networkConfig = isTestnet ? {
  name: 'Sapphire Testnet',
  chainId: 0x5aff,
  explorer: 'https://explorer.oasis.io/testnet/sapphire',
  rpc: 'https://testnet.sapphire.oasis.io'
} : {
  name: 'Sapphire Mainnet',
  chainId: 0x5afe,
  explorer: 'https://explorer.oasis.io/mainnet/sapphire',
  rpc: 'https://sapphire.oasis.io'
};
