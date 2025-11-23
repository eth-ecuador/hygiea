/**
 * @fileoverview AES-256-GCM encryption utilities for medical documents
 * @description Implements FR 1.1 encryption requirements using Web Crypto API
 *
 * Security Features:
 * - AES-256-GCM authenticated encryption
 * - Random IV generation for each encryption
 * - PBKDF2 key derivation from password
 * - SHA-256 hashing for integrity verification
 */

/**
 * Generate a cryptographic key from a password using PBKDF2
 * @param password Password to derive key from
 * @param salt Salt for key derivation (should be random per user)
 * @returns CryptoKey for AES-GCM encryption
 */
export async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  // Import password as key material
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  // Derive AES-256-GCM key using PBKDF2
  const key = await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000, // OWASP recommended minimum
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );

  return key;
}

/**
 * Generate a random salt for key derivation
 * @returns Random 16-byte salt
 */
export function generateSalt(): Uint8Array {
  return window.crypto.getRandomValues(new Uint8Array(16));
}

/**
 * Generate a random IV (Initialization Vector) for encryption
 * @returns Random 12-byte IV (recommended for AES-GCM)
 */
export function generateIV(): Uint8Array {
  return window.crypto.getRandomValues(new Uint8Array(12));
}

/**
 * Encrypt a file using AES-256-GCM
 * @param file File to encrypt
 * @param key CryptoKey for encryption
 * @returns Encrypted data with IV prepended
 */
export async function encryptFile(file: File, key: CryptoKey): Promise<ArrayBuffer> {
  const iv = generateIV();
  const fileData = await file.arrayBuffer();

  // Encrypt using AES-256-GCM
  const encryptedData = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    fileData
  );

  // Prepend IV to encrypted data (IV is not secret, needed for decryption)
  const result = new Uint8Array(iv.length + encryptedData.byteLength);
  result.set(iv, 0);
  result.set(new Uint8Array(encryptedData), iv.length);

  return result.buffer;
}

/**
 * Decrypt data using AES-256-GCM
 * @param encryptedData Encrypted data with IV prepended
 * @param key CryptoKey for decryption
 * @returns Decrypted data
 */
export async function decryptData(encryptedData: ArrayBuffer, key: CryptoKey): Promise<ArrayBuffer> {
  const data = new Uint8Array(encryptedData);

  // Extract IV (first 12 bytes)
  const iv = data.slice(0, 12);

  // Extract encrypted content
  const ciphertext = data.slice(12);

  // Decrypt using AES-256-GCM
  const decryptedData = await window.crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    ciphertext
  );

  return decryptedData;
}

/**
 * Calculate SHA-256 hash of data for integrity verification (Record_Hash in FR 1.1)
 * @param data Data to hash (can be File or ArrayBuffer)
 * @returns Hash as hex string
 */
export async function calculateHash(data: File | ArrayBuffer): Promise<string> {
  const buffer = data instanceof File ? await data.arrayBuffer() : data;
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Convert hash hex string to bytes32 format for Solidity
 * @param hashHex Hash as hex string
 * @returns Hash as bytes32 (0x-prefixed hex string)
 */
export function hashToBytes32(hashHex: string): string {
  return '0x' + hashHex;
}

/**
 * Encrypt a file and generate its hash (complete FR 1.1 flow)
 * @param file File to encrypt
 * @param password Password for encryption
 * @param salt Salt for key derivation
 * @returns Object containing encrypted data and original file hash
 */
export async function encryptFileWithHash(
  file: File,
  password: string,
  salt: Uint8Array
): Promise<{
  encryptedData: ArrayBuffer;
  recordHash: string; // bytes32 format for smart contract
  originalHash: string; // hex format for verification
}> {
  // Calculate hash of original file (before encryption)
  const originalHash = await calculateHash(file);
  const recordHash = hashToBytes32(originalHash);

  // Derive encryption key
  const key = await deriveKey(password, salt);

  // Encrypt file
  const encryptedData = await encryptFile(file, key);

  return {
    encryptedData,
    recordHash,
    originalHash,
  };
}

/**
 * Decrypt data and verify integrity
 * @param encryptedData Encrypted data to decrypt
 * @param password Password for decryption
 * @param salt Salt used for key derivation
 * @param expectedHash Expected hash for verification (optional)
 * @returns Decrypted data
 * @throws Error if hash verification fails
 */
export async function decryptAndVerify(
  encryptedData: ArrayBuffer,
  password: string,
  salt: Uint8Array,
  expectedHash?: string
): Promise<ArrayBuffer> {
  // Derive decryption key
  const key = await deriveKey(password, salt);

  // Decrypt data
  const decryptedData = await decryptData(encryptedData, key);

  // Verify hash if provided
  if (expectedHash) {
    const actualHash = await calculateHash(decryptedData);
    if (actualHash !== expectedHash.replace('0x', '')) {
      throw new Error('Hash verification failed: Data may be corrupted or tampered');
    }
  }

  return decryptedData;
}

/**
 * Create a Blob from decrypted data for download
 * @param decryptedData Decrypted data
 * @param mimeType MIME type of the file
 * @returns Blob ready for download
 */
export function createBlobFromDecrypted(decryptedData: ArrayBuffer, mimeType: string): Blob {
  return new Blob([decryptedData], { type: mimeType });
}

/**
 * Download a decrypted file
 * @param decryptedData Decrypted data
 * @param filename Filename for download
 * @param mimeType MIME type of the file
 */
export function downloadDecryptedFile(
  decryptedData: ArrayBuffer,
  filename: string,
  mimeType: string
): void {
  const blob = createBlobFromDecrypted(decryptedData, mimeType);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Export types for TypeScript
export interface EncryptionResult {
  encryptedData: ArrayBuffer;
  recordHash: string;
  originalHash: string;
}

export interface DecryptionOptions {
  password: string;
  salt: Uint8Array;
  expectedHash?: string;
}
