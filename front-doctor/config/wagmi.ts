import { createConfig, http } from 'wagmi';
import { sapphire, sapphireTestnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

// Determine network based on ENV
const isTestnet = process.env.NEXT_PUBLIC_NETWORK === 'testnet' || true;

export const config = createConfig({
  chains: isTestnet ? [sapphireTestnet] : [sapphire],
  connectors: [
    injected(), // MetaMask
  ],
  transports: isTestnet ? {
    [sapphireTestnet.id]: http('https://testnet.sapphire.oasis.io'),
  } : {
    [sapphire.id]: http('https://sapphire.oasis.io'),
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
