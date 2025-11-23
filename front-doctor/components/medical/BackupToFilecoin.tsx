'use client';

import { useState } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  Upload,
  Download,
  Shield,
  Database,
  CheckCircle2,
  XCircle,
  Loader2,
  Info,
  FileText,
  Lock
} from 'lucide-react';
import MedicalRecordsABI from '@/contracts/MedicalRecords.json';
import { contractAddress } from '@/config/wagmi';

interface UploadProgress {
  stage: 'encrypting' | 'uploading' | 'storing' | 'complete';
  percentage: number;
  message: string;
}

export default function BackupToFilecoin() {
  const { address } = useAccount();

  // Backup state
  const [patientAddress, setPatientAddress] = useState('');
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [resultCID, setResultCID] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Smart contract hooks
  const { writeContract, data: hash, isPending: isWritePending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  /**
   * Backup patient record to Filecoin
   * Uses the contract's encriptarRegistroPaciente function
   */
  const handleBackupToFilecoin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientAddress || !description) {
      setError('Please fill in all fields');
      return;
    }

    setIsUploading(true);
    setError(null);
    setResultCID(null);

    try {
      // Stage 1: Encrypt patient data using Sapphire
      setUploadProgress({
        stage: 'encrypting',
        percentage: 10,
        message: 'Encrypting patient record with Sapphire TEE...',
      });

      // Call smart contract to encrypt patient data
      // This happens on-chain in the TEE (Trusted Execution Environment)
      const encryptResponse = await fetch('/api/encrypt-patient-record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientAddress,
          contractAddress,
        }),
      });

      if (!encryptResponse.ok) {
        throw new Error('Failed to encrypt patient record');
      }

      const { encryptedData, dataHash } = await encryptResponse.json();

      setUploadProgress({
        stage: 'encrypting',
        percentage: 30,
        message: 'Patient record encrypted successfully',
      });

      // Stage 2: Upload to Filecoin
      setUploadProgress({
        stage: 'uploading',
        percentage: 40,
        message: 'Uploading encrypted data to Filecoin...',
      });

      // Upload encrypted data to Filecoin
      const cid = await uploadToFilecoin(encryptedData);

      setUploadProgress({
        stage: 'uploading',
        percentage: 70,
        message: `Uploaded to Filecoin. CID: ${cid}`,
      });

      // Stage 3: Store CID on blockchain
      setUploadProgress({
        stage: 'storing',
        percentage: 80,
        message: 'Storing CID on Sapphire blockchain...',
      });

      // Store CID in smart contract
      writeContract({
        address: contractAddress as `0x${string}`,
        abi: MedicalRecordsABI.abi,
        functionName: 'almacenarCIDFilecoin',
        args: [patientAddress, cid, dataHash, description],
      });

      setResultCID(cid);

      setUploadProgress({
        stage: 'complete',
        percentage: 100,
        message: 'Patient record backup completed successfully!',
      });

    } catch (err: any) {
      const errorMessage = err.message || 'Failed to backup patient record';
      setError(errorMessage);
      console.error('Backup error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Backup Patient Record to Filecoin
          </CardTitle>
          <CardDescription>
            Encrypt and store complete patient records on Filecoin using Sapphire TEE
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Information Alert */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>How it works</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>1. <strong>Sapphire Encryption:</strong> Patient data is encrypted in the TEE (Trusted Execution Environment)</p>
              <p>2. <strong>Filecoin Storage:</strong> Encrypted data is uploaded to decentralized storage</p>
              <p>3. <strong>Blockchain Record:</strong> CID and hash are stored on Sapphire for verification</p>
            </AlertDescription>
          </Alert>

          {/* Backup Form */}
          <form onSubmit={handleBackupToFilecoin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patient">Patient Address</Label>
              <Input
                id="patient"
                type="text"
                placeholder="0x..."
                value={patientAddress}
                onChange={(e) => setPatientAddress(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Address of the patient whose complete record will be backed up
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Backup Description</Label>
              <Textarea
                id="description"
                placeholder="e.g., Full medical record backup - November 2025"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                required
              />
              <p className="text-xs text-muted-foreground">
                Brief description of this backup (stored on-chain)
              </p>
            </div>

            {/* Progress */}
            {uploadProgress && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {uploadProgress.stage === 'complete' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                    {uploadProgress.message}
                  </span>
                  <span>{uploadProgress.percentage}%</span>
                </div>
                <Progress value={uploadProgress.percentage} />
              </div>
            )}

            {/* Result CID */}
            {resultCID && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Backup Successful!</AlertTitle>
                <AlertDescription>
                  <div className="mt-2 space-y-2">
                    <p className="font-mono text-xs break-all">
                      <strong>CID:</strong> {resultCID}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      This CID can be used to retrieve the encrypted patient record from Filecoin
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            )}

            {/* Error */}
            {error && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Confirmation */}
            {isConfirmed && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  CID stored on blockchain successfully!
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              disabled={isUploading || isWritePending || isConfirming}
              className="w-full"
            >
              {isUploading || isWritePending || isConfirming ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isUploading ? 'Backing up...' : 'Confirming transaction...'}
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Backup to Filecoin
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Technical Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
            <div>
              <p className="font-semibold">Sapphire Encryption</p>
              <p className="text-muted-foreground">
                Uses Sapphire.encrypt() in the TEE to encrypt all patient data including:
                affiliation, diseases, medical history
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Database className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-500" />
            <div>
              <p className="font-semibold">Filecoin Storage</p>
              <p className="text-muted-foreground">
                Encrypted data is stored on Filecoin, a decentralized storage network.
                Only the CID is stored on-chain.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Lock className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-500" />
            <div>
              <p className="font-semibold">Data Integrity</p>
              <p className="text-muted-foreground">
                SHA-256 hash is stored on-chain to verify data integrity when retrieving
                from Filecoin
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 mt-0.5 flex-shrink-0 text-orange-500" />
            <div>
              <p className="font-semibold">Smart Contract Functions</p>
              <p className="text-muted-foreground font-mono text-xs">
                encriptarRegistroPaciente() → almacenarCIDFilecoin()
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Upload encrypted data to Filecoin
 * In production, this would use Synapse SDK
 */
async function uploadToFilecoin(encryptedData: string): Promise<string> {
  // Development mode: use localStorage
  const useSynapse = process.env.NEXT_PUBLIC_USE_SYNAPSE === 'true';

  if (useSynapse) {
    // TODO: Implement real Synapse SDK upload
    throw new Error('Synapse SDK not yet configured. See /lib/synapse.ts');
  }

  // Simulate upload to Filecoin
  console.warn('Using localStorage for development. Set NEXT_PUBLIC_USE_SYNAPSE=true for production.');

  // Generate deterministic CID from hash
  const encoder = new TextEncoder();
  const data = encoder.encode(encryptedData);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const mockCID = `bafybei${hashHex.substring(0, 52)}`;

  // Store in localStorage for development
  localStorage.setItem(`filecoin_patient_${mockCID}`, encryptedData);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('Patient record uploaded to Filecoin (localStorage):', mockCID);
  return mockCID;
}
