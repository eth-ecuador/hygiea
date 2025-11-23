import { NextRequest, NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import { sapphireTestnet } from '@/config/wagmi';
import MedicalRecordsABI from '@/contracts/MedicalRecords.json';

/**
 * API Route to encrypt patient record using Sapphire smart contract
 *
 * This endpoint:
 * 1. Calls the smart contract's encriptarRegistroPaciente function
 * 2. The contract encrypts data in the TEE (Trusted Execution Environment)
 * 3. Returns encrypted data and hash for Filecoin upload
 */
export async function POST(request: NextRequest) {
  try {
    const { patientAddress, contractAddress, callerAddress } = await request.json();

    if (!patientAddress || !contractAddress || !callerAddress) {
      return NextResponse.json(
        { error: 'Missing required parameters (patientAddress, contractAddress, callerAddress)' },
        { status: 400 }
      );
    }

    // Create public client for reading from the contract
    const publicClient = createPublicClient({
      chain: sapphireTestnet,
      transport: http('https://testnet.sapphire.oasis.io'),
    });

    // Call the contract's encriptarRegistroPaciente function
    // This function encrypts patient data in the Sapphire TEE
    // We pass the caller's account to satisfy the soloAutorizado modifier
    const result = await publicClient.readContract({
      address: contractAddress as `0x${string}`,
      abi: MedicalRecordsABI.abi,
      functionName: 'encriptarRegistroPaciente',
      args: [patientAddress],
      account: callerAddress as `0x${string}`, // Simulate call from doctor's account
    }) as [string, string]; // Returns [encryptedData, dataHash]

    const [encryptedData, dataHash] = result;

    // Convert encryptedData from hex to base64 for easier handling
    const encryptedDataBase64 = Buffer.from(
      encryptedData.slice(2), // Remove '0x' prefix
      'hex'
    ).toString('base64');

    return NextResponse.json({
      encryptedData: encryptedDataBase64,
      dataHash,
      patientAddress,
    });

  } catch (error: any) {
    console.error('Error encrypting patient record:', error);

    return NextResponse.json(
      {
        error: 'Failed to encrypt patient record',
        details: error.message
      },
      { status: 500 }
    );
  }
}
