import { createConfig } from 'wagmi';
import { sapphire, sapphireTestnet } from 'wagmi/chains';
import { injectedWithSapphire, sapphireHttpTransport } from '@oasisprotocol/sapphire-wagmi-v2';

// Determine network based on ENV
const isTestnet = import.meta.env.VITE_NETWORK === 'testnet';

export const config = createConfig({
  chains: isTestnet ? [sapphireTestnet] : [sapphire],
  connectors: [
    injectedWithSapphire(), // MetaMask with Sapphire encryption
  ],
  transports: isTestnet ? {
    [sapphireTestnet.id]: sapphireHttpTransport(),
  } : {
    [sapphire.id]: sapphireHttpTransport(),
  },
  multiInjectedProviderDiscovery: false,
});

export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

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
