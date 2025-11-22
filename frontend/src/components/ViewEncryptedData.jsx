import { useState } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';
import * as sapphire from '@oasisprotocol/sapphire-paratime';

export default function ViewEncryptedData() {
  const { address } = useAccount();
  const [showRawData, setShowRawData] = useState(false);
  const [rawStorageData, setRawStorageData] = useState(null);

  // Read decrypted data (normal)
  const { data: decryptedData } = useReadContract({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'obtenerAfiliacion',
    args: [address],
    enabled: !!address,
  });

  // Function to get RAW storage data (encrypted)
  const fetchRawStorage = async () => {
    if (!address) return;

    try {
      // Get the provider without the Sapphire wrapper
      const provider = new sapphire.wrap.ethers.providers.JsonRpcProvider(
        'https://testnet.sapphire.oasis.io'
      );

      // Read storage slots directly (these will be encrypted)
      // Slot 0: patient mapping
      const patientSlot = sapphire.keccak256(
        sapphire.concat([
          sapphire.zeroPadValue(address, 32),
          sapphire.zeroPadValue('0x00', 32)
        ])
      );

      const rawData = await provider.getStorageAt(contractAddress, patientSlot);

      setRawStorageData({
        slot: patientSlot,
        encryptedValue: rawData,
        note: 'This is the RAW storage value - it is encrypted by Sapphire TEE'
      });
    } catch (error) {
      console.error('Error fetching raw storage:', error);
      setRawStorageData({
        error: 'Could not get raw storage',
        details: error.message
      });
    }
  };

  if (!address) {
    return (
      <div className="card">
        <h2>🔍 View Encrypted Data</h2>
        <p>Connect your wallet to see the comparison between encrypted and decrypted data.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>🔍 Encryption Verification</h2>
      <p className="info-text">
        Sapphire automatically encrypts all data in the contract storage using TEE (Trusted Execution Environment).
        Here you can see the difference between encrypted and decrypted data.
      </p>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setShowRawData(!showRawData)}
          style={{ marginRight: '10px' }}
        >
          {showRawData ? '🔒 Hide Comparison' : '🔓 Show Encryption Comparison'}
        </button>

        {showRawData && (
          <button onClick={fetchRawStorage}>
            🔄 Refresh Raw Storage
          </button>
        )}
      </div>

      {showRawData && (
        <div style={{ marginTop: '20px' }}>
          {/* Decrypted Data */}
          <div className="data-section" style={{
            background: '#e8f5e9',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
              ✅ Decrypted Data (what YOU see)
            </h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              Sapphire automatically decrypts when YOU (the owner) access your data:
            </p>
            {decryptedData ? (
              <pre style={{
                background: '#fff',
                padding: '10px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '13px'
              }}>
                {JSON.stringify({
                  nombre: decryptedData.nombre || 'Not registered',
                  edad: decryptedData.edad?.toString() || '0',
                  sexo: decryptedData.sexo || 'Not specified',
                  tipoSangre: decryptedData.tipoSangre || 'Not specified',
                  email: decryptedData.email || 'Not specified',
                  telefono: decryptedData.telefono || 'Not specified',
                }, null, 2)}
              </pre>
            ) : (
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                No data registered yet
              </p>
            )}
          </div>

          {/* Encrypted Data */}
          <div className="data-section" style={{
            background: '#ffebee',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#c62828', marginTop: 0 }}>
              🔒 Encrypted Data (what's on blockchain)
            </h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              This is how your data looks stored on the blockchain (unreadable without authorization):
            </p>
            {rawStorageData ? (
              <div>
                <pre style={{
                  background: '#fff',
                  padding: '10px',
                  borderRadius: '4px',
                  overflow: 'auto',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all'
                }}>
                  {JSON.stringify(rawStorageData, null, 2)}
                </pre>
                <p style={{
                  fontSize: '12px',
                  color: '#d32f2f',
                  marginTop: '10px',
                  fontWeight: 'bold'
                }}>
                  ⚠️ These hexadecimal values are completely encrypted.
                  Without access to Sapphire's TEE, they are impossible to decrypt.
                </p>
              </div>
            ) : (
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                Click "Refresh Raw Storage" to see the encrypted data
              </p>
            )}
          </div>

          {/* Explanation */}
          <div style={{
            marginTop: '15px',
            padding: '15px',
            background: '#e3f2fd',
            borderRadius: '8px',
            borderLeft: '4px solid #1976d2'
          }}>
            <h4 style={{ marginTop: 0, color: '#1565c0' }}>
              💡 How does encryption work?
            </h4>
            <ul style={{ fontSize: '14px', color: '#333', lineHeight: '1.6' }}>
              <li>
                <strong>TEE (Trusted Execution Environment):</strong> Sapphire executes the contract
                inside a secure isolated environment (Intel SGX).
              </li>
              <li>
                <strong>Automatic encryption:</strong> Everything written to the contract's storage
                is automatically encrypted before being saved to the blockchain.
              </li>
              <li>
                <strong>Controlled decryption:</strong> Only the TEE can decrypt the data,
                and only when the contract determines you have permission (you are the patient or authorized doctor).
              </li>
              <li>
                <strong>Guaranteed privacy:</strong> No one can read your medical data directly
                from the blockchain, not even the network validators.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
