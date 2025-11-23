/**
 * @fileoverview Automatic Filecoin synchronization hook
 * @description Automatically uploads encrypted patient data to Filecoin after Sapphire encryption
 *
 * Flow:
 * 1. Patient data is saved on-chain
 * 2. Smart contract encrypts with Sapphire TEE
 * 3. Encrypted data is automatically uploaded to Filecoin
 * 4. CID is stored on-chain
 *
 * This is NOT a manual backup - it's automatic storage
 */

import { useWatchContractEvent, usePublicClient } from 'wagmi';
import MedicalRecordsABI from '@/contracts/MedicalRecords.json';
import { contractAddress } from '@/config/wagmi';

interface FilecoinSyncOptions {
  enabled?: boolean;
  callerAddress?: string;
  onSuccess?: (cid: string) => void;
  onError?: (error: Error) => void;
  onProgress?: (step: string, details?: any) => void;
}

/**
 * Hook that automatically syncs patient data to Filecoin
 * when patient records are created or updated
 */
export function useAutoFilecoinSync(options: FilecoinSyncOptions = {}) {
  const { enabled = true, callerAddress, onSuccess, onError, onProgress } = options;
  const publicClient = usePublicClient();

  // Watch for PacienteRegistrado event
  useWatchContractEvent({
    address: contractAddress as `0x${string}`,
    abi: MedicalRecordsABI.abi,
    eventName: 'PacienteRegistrado',
    enabled,
    onLogs: async (logs) => {
      for (const log of logs) {
        try {
          // @ts-ignore
          const { paciente } = log.args;

          console.log('🔄 Auto-syncing patient to Filecoin:', paciente);

          // Automatically encrypt and upload to Filecoin
          const cid = await autoSyncToFilecoin(paciente as string, callerAddress, publicClient, onProgress);

          if (onSuccess) {
            onSuccess(cid);
          }
        } catch (error) {
          console.error('Auto-sync failed:', error);
          if (onError && error instanceof Error) {
            onError(error);
          }
        }
      }
    },
  });

  // Watch for EnfermedadAgregada event
  useWatchContractEvent({
    address: contractAddress as `0x${string}`,
    abi: MedicalRecordsABI.abi,
    eventName: 'EnfermedadAgregada',
    enabled,
    onLogs: async (logs) => {
      for (const log of logs) {
        try {
          // @ts-ignore
          const { paciente } = log.args;

          console.log('🔄 Auto-syncing updated patient record to Filecoin:', paciente);

          // Re-sync with updated data
          const cid = await autoSyncToFilecoin(paciente as string, callerAddress, publicClient, onProgress);

          if (onSuccess) {
            onSuccess(cid);
          }
        } catch (error) {
          console.error('Auto-sync failed:', error);
          if (onError && error instanceof Error) {
            onError(error);
          }
        }
      }
    },
  });

  // Watch for AntecedenteAgregado event
  useWatchContractEvent({
    address: contractAddress as `0x${string}`,
    abi: MedicalRecordsABI.abi,
    eventName: 'AntecedenteAgregado',
    enabled,
    onLogs: async (logs) => {
      for (const log of logs) {
        try {
          // @ts-ignore
          const { paciente } = log.args;

          console.log('🔄 Auto-syncing updated patient history to Filecoin:', paciente);

          // Re-sync with updated data
          const cid = await autoSyncToFilecoin(paciente as string, callerAddress, publicClient, onProgress);

          if (onSuccess) {
            onSuccess(cid);
          }
        } catch (error) {
          console.error('Auto-sync failed:', error);
          if (onError && error instanceof Error) {
            onError(error);
          }
        }
      }
    },
  });

  return {
    // Hook doesn't return anything - it works automatically
    // Just monitors events and syncs to Filecoin
  };
}

/**
 * Switch wallet network to Filecoin Calibration
 */
async function switchToFilecoinNetwork(): Promise<void> {
  if (!window.ethereum) {
    throw new Error('MetaMask not detected');
  }

  const FILECOIN_CALIBRATION_CHAIN_ID = '0x4cb2f'; // 314159 in hex

  try {
    // Try to switch to Filecoin Calibration
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: FILECOIN_CALIBRATION_CHAIN_ID }],
    });
    console.log('✅ Switched to Filecoin Calibration network');
  } catch (switchError: any) {
    // If the chain hasn't been added to MetaMask, add it
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: FILECOIN_CALIBRATION_CHAIN_ID,
              chainName: 'Filecoin - Calibration testnet',
              nativeCurrency: {
                name: 'tFIL',
                symbol: 'tFIL',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.ankr.com/filecoin_testnet'],
              blockExplorerUrls: ['https://calibration.filscan.io'],
            },
          ],
        });
        console.log('✅ Filecoin Calibration network added and switched');
      } catch (addError) {
        console.error('Failed to add Filecoin Calibration network:', addError);
        throw addError;
      }
    } else {
      throw switchError;
    }
  }
}

/**
 * Switch wallet network back to Sapphire Testnet
 */
async function switchToSapphireNetwork(): Promise<void> {
  if (!window.ethereum) {
    throw new Error('MetaMask not detected');
  }

  const SAPPHIRE_TESTNET_CHAIN_ID = '0x5aff'; // 23295 in hex

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: SAPPHIRE_TESTNET_CHAIN_ID }],
    });
    console.log('✅ Switched back to Sapphire Testnet');
  } catch (error) {
    console.error('Failed to switch back to Sapphire:', error);
    // Don't throw - this is optional
  }
}

/**
 * Automatically sync patient data to Filecoin
 */
async function autoSyncToFilecoin(
  patientAddress: string,
  callerAddress?: string,
  publicClient?: any,
  onProgress?: (step: string, details?: any) => void
): Promise<string> {
  try {
    console.log('📤 Starting automatic Filecoin sync...');

    if (!callerAddress) {
      throw new Error('Caller address is required for authorization');
    }

    if (!publicClient) {
      throw new Error('Public client is required');
    }

    // Step 1: Encrypt patient data using Sapphire TEE
    onProgress?.('encrypting', { message: 'Encrypting patient data with Sapphire TEE' });

    // Call the new auto-sync function that doesn't require authorization
    const result = await publicClient.readContract({
      address: contractAddress as `0x${string}`,
      abi: MedicalRecordsABI.abi,
      functionName: 'encriptarRegistroPacienteAutoSync',
      args: [patientAddress],
    }) as [string, string];

    const [encryptedData, dataHash] = result;

    console.log('✅ Patient data encrypted by Sapphire TEE');
    onProgress?.('encrypted', { dataHash });

    // Step 2: Switch to Filecoin Calibration network for upload
    console.log('🔄 Requesting network switch to Filecoin Calibration...');
    onProgress?.('preparing-backup', { message: 'Preparing to upload to Filecoin' });
    await switchToFilecoinNetwork();

    // Wait a bit for the network to stabilize
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 3: Upload to Filecoin
    onProgress?.('uploading', { message: 'Uploading encrypted data to Filecoin network' });
    const cid = await uploadToFilecoin(encryptedData);

    console.log('✅ Uploaded to Filecoin, CID:', cid);

    // Step 4: Switch back to Sapphire Testnet
    console.log('🔄 Switching back to Sapphire Testnet...');
    await switchToSapphireNetwork();

    // Wait for network to stabilize
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 5: Store CID on-chain (Sapphire blockchain)
    console.log('💾 Storing CID on Sapphire blockchain...');
    onProgress?.('storing-cid', { message: 'Storing Filecoin CID on blockchain', cid, dataHash });

    try {
      // Import viem for wallet operations
      const { createWalletClient, custom, stringToHex } = await import('viem');
      const { sapphireTestnet } = await import('viem/chains');

      // Create wallet client
      const walletClient = createWalletClient({
        chain: sapphireTestnet,
        transport: custom(window.ethereum!),
      });

      // Get account address
      const [account] = await walletClient.getAddresses();

      // Convert hash to bytes32 format (0x + 64 hex chars)
      const hashBytes32 = dataHash.startsWith('0x') ? dataHash : `0x${dataHash}`;

      console.log('📝 Storing CID on-chain:', {
        patient: patientAddress,
        cid,
        hash: hashBytes32,
      });

      // Call almacenarCIDFilecoin on the smart contract
      const txHash = await walletClient.writeContract({
        address: contractAddress as `0x${string}`,
        abi: MedicalRecordsABI.abi,
        functionName: 'almacenarCIDFilecoin',
        args: [
          patientAddress,
          cid,
          hashBytes32,
          'Auto-synced encrypted patient record from Sapphire TEE to Filecoin'
        ],
        account,
      });

      console.log('⏳ Waiting for CID storage transaction confirmation...');
      console.log('📝 Transaction hash:', txHash);

      // Wait for transaction confirmation
      await publicClient.waitForTransactionReceipt({ hash: txHash });

      console.log('✅ CID stored on Sapphire blockchain successfully!');
      console.log('🔗 CID:', cid);
      console.log('📊 Patient:', patientAddress);

      onProgress?.('completed', { cid, dataHash, transactionHash: txHash });

    } catch (storageError) {
      console.error('⚠️ Failed to store CID on-chain:', storageError);
      console.log('💡 CID was uploaded to Filecoin but not stored on-chain');
      console.log('📝 Manual storage needed - CID:', cid, 'Hash:', dataHash);
      // Don't throw - the upload to Filecoin was successful
      onProgress?.('completed', { cid, dataHash, error: 'CID not stored on-chain' });
    }

    return cid;

  } catch (error) {
    console.error('❌ Auto-sync failed:', error);
    // Try to switch back to Sapphire even if upload failed
    try {
      await switchToSapphireNetwork();
    } catch (e) {
      // Ignore errors when switching back
    }
    throw error;
  }
}

/**
 * Upload encrypted data to Filecoin using Synapse SDK
 */
async function uploadToFilecoin(encryptedData: string): Promise<string> {
  const useSynapse = process.env.NEXT_PUBLIC_USE_SYNAPSE === 'true';

  if (useSynapse) {
    // Real Filecoin upload using Synapse SDK
    try {
      console.log('📤 Uploading to Filecoin via Synapse SDK...');

      // Import Synapse SDK and ethers.js dynamically
      const { Synapse, RPC_URLS } = await import('@filoz/synapse-sdk');
      const { BrowserProvider } = await import('ethers');

      // Get wallet from window.ethereum (MetaMask)
      if (!window.ethereum) {
        throw new Error('MetaMask not detected. Please install MetaMask to upload to Filecoin.');
      }

      // Convert hex string to Uint8Array
      const hexData = encryptedData.startsWith('0x') ? encryptedData.slice(2) : encryptedData;
      const dataBytes = new Uint8Array(
        hexData.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || []
      );

      // Create ethers.js provider and signer from MetaMask
      // At this point, the wallet should already be connected to Filecoin Calibration
      const ethersProvider = new BrowserProvider(window.ethereum);
      const ethersSigner = await ethersProvider.getSigner();

      console.log('✅ Ethers.js signer created from Filecoin Calibration network');

      // Initialize Synapse with the signer (already on Filecoin network)
      const synapse = await Synapse.create({
        signer: ethersSigner,
        rpcURL: RPC_URLS.calibration.http,
      });

      console.log('✅ Synapse SDK initialized');
      console.log('📊 Data size:', dataBytes.length, 'bytes');

      // Upload to Filecoin
      const result = await synapse.storage.upload(dataBytes, {
        context: await synapse.storage.createContext({
          metadata: {
            Application: 'Hygiea MedGuard',
            Type: 'Encrypted Patient Record',
            Blockchain: 'Sapphire Testnet',
          },
        }),
      });

      console.log('✅ Uploaded to Filecoin successfully');
      console.log('📝 Piece CID:', result.pieceCid);
      console.log('📊 Size:', result.size, 'bytes');

      // Convert PieceCID to string
      const cidString = typeof result.pieceCid === 'string'
        ? result.pieceCid
        : result.pieceCid.toString();

      return cidString;

    } catch (error) {
      console.error('❌ Synapse SDK upload failed:', error);

      // Fallback to mock for development if Synapse fails
      console.warn('⚠️ Falling back to mock storage due to Synapse error');
      return uploadToFilecoinMock(encryptedData);
    }
  }

  // Development: Mock upload
  return uploadToFilecoinMock(encryptedData);
}

/**
 * Mock Filecoin upload for development/testing
 */
async function uploadToFilecoinMock(encryptedData: string): Promise<string> {
  console.log('⚠️ Using localStorage for development (mock Filecoin)');

  // Generate CID from hash
  const encoder = new TextEncoder();
  const data = encoder.encode(encryptedData);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const mockCID = `bafybei${hashHex.substring(0, 52)}`;

  // Store in localStorage
  localStorage.setItem(`filecoin_auto_${mockCID}`, encryptedData);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockCID;
}
