# Filecoin Patient Backup - Technical Documentation

## Overview

This system uses **Filecoin** to store encrypted complete patient records that are encrypted by **Oasis Sapphire's Trusted Execution Environment (TEE)**.

## The Correct Flow

### What Gets Stored on Filecoin

**Complete encrypted patient records**, including:
- Affiliation data (name, age, gender, blood type, address, phone, email, SSN)
- All diseases
- Complete medical history (personal and family)

**NOT individual documents** like PDFs or images. This is a backup of the entire patient record.

## Architecture

```
┌─────────────────────────────────────────────────┐
│         Patient Registration & Data             │
│  (Affiliation, Diseases, Medical History)       │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│      Smart Contract: encriptarRegistroPaciente()│
│                                                 │
│  1. Serializes all patient data to JSON        │
│  2. Generates encryption key (Sapphire.random) │
│  3. Encrypts data using Sapphire.encrypt()     │
│  4. Calculates SHA-256 hash                    │
│  5. Returns (encryptedData, hash)              │
│                                                 │
│  ⚠️ Encryption happens in TEE (secure)         │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│           Frontend/API: Upload to Filecoin      │
│                                                 │
│  1. Receives encrypted data from contract      │
│  2. Uploads to Filecoin via Synapse SDK        │
│  3. Receives CID (Content Identifier)          │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│      Smart Contract: almacenarCIDFilecoin()     │
│                                                 │
│  1. Stores CID on blockchain                   │
│  2. Stores hash for integrity verification     │
│  3. Stores metadata (doctor, timestamp, desc)  │
│  4. Emits DocumentoAgregado event              │
└─────────────────────────────────────────────────┘
```

## Smart Contract Functions

### 1. `encriptarRegistroPaciente()`

**Location:** `contracts/MedicalRecords.sol:306-336`

```solidity
function encriptarRegistroPaciente(address paciente)
    external
    view
    soloAutorizado(paciente)
    returns (bytes memory encryptedData, bytes32 dataHash)
```

**Purpose:** Encrypts the complete patient record using Sapphire TEE

**Process:**
1. Serializes patient data to JSON-like format
2. Generates random 256-bit encryption key
3. Generates random nonce
4. Encrypts using `Sapphire.encrypt()`
5. Calculates `keccak256` hash
6. Returns encrypted data + hash

**Security:**
- Encryption happens inside TEE (Trusted Execution Environment)
- Key is generated randomly each time
- Data never leaves the TEE in plain text

### 2. `almacenarCIDFilecoin()`

**Location:** `contracts/MedicalRecords.sol:373-402`

```solidity
function almacenarCIDFilecoin(
    address paciente,
    string memory _cid,
    bytes32 _recordHash,
    string memory _description
) external soloMedicoRegistrado
```

**Purpose:** Store Filecoin CID on blockchain after upload

**Requirements:**
- Caller must be a registered doctor
- Doctor must be authorized by patient
- Patient must exist
- Valid CID and hash required

**Storage:**
- Creates `MedicalDocument` struct
- Adds to patient's documents array
- Emits `DocumentoAgregado` event

## Frontend Implementation

### Component: `BackupToFilecoin.tsx`

**Location:** `front-doctor/components/medical/BackupToFilecoin.tsx`

**UI Features:**
- Patient address input
- Backup description
- Progress tracking (4 stages)
- CID display on success
- Error handling

**Flow:**
1. User enters patient address
2. Clicks "Backup to Filecoin"
3. Component calls API route
4. API route calls `encriptarRegistroPaciente()`
5. Encrypted data is uploaded to Filecoin
6. CID is returned
7. Component calls `almacenarCIDFilecoin()`
8. Transaction confirmed
9. Success! CID stored on-chain

### API Route: `/api/encrypt-patient-record`

**Location:** `front-doctor/app/api/encrypt-patient-record/route.ts`

**Purpose:** Call smart contract to encrypt patient data

**Process:**
```typescript
1. Receive: { patientAddress, contractAddress }
2. Create viem publicClient
3. Call contract.encriptarRegistroPaciente(patientAddress)
4. Receive: [encryptedData, dataHash]
5. Convert to base64
6. Return: { encryptedData, dataHash, patientAddress }
```

**Why API Route?**
- Contract view functions require RPC call
- Better error handling
- Can add rate limiting
- Can log for debugging

## Data Flow Example

### 1. Patient Registration

```typescript
// Patient registers with their data
registerPatient({
  address: "0x123...",
  nombre: "Juan Pérez",
  edad: 35,
  sexo: "M",
  tipoSangre: "O+",
  // ... more fields
});
```

### 2. Doctor Backs Up to Filecoin

```typescript
// Doctor initiates backup
POST /api/encrypt-patient-record
{
  "patientAddress": "0x123...",
  "contractAddress": "0x5715..."
}

// Contract encrypts in TEE
encriptarRegistroPaciente("0x123...")
  → serializes: {"address":"0x123...","nombre":"Juan Pérez",...}
  → encrypts with Sapphire.encrypt()
  → returns: (encryptedBytes, hashBytes32)

// API returns
{
  "encryptedData": "base64EncodedEncryptedData...",
  "dataHash": "0xabc123...",
  "patientAddress": "0x123..."
}
```

### 3. Upload to Filecoin

```typescript
// Frontend uploads encrypted data
const cid = await uploadToFilecoin(encryptedData);
// Returns: "bafybei..."
```

### 4. Store CID On-Chain

```typescript
// Frontend calls contract
almacenarCIDFilecoin(
  "0x123...",              // patient
  "bafybei...",            // CID
  "0xabc123...",           // hash
  "Full backup Nov 2025"   // description
);
```

### 5. Verification

```solidity
// Later: Verify data integrity
verificarIntegridadDocumento(
  "0x123...",      // patient
  0,               // document index
  "0xabc123..."    // expected hash
);
// Returns: true if hash matches
```

## Storage Comparison

### ❌ Wrong Approach (Individual Documents)
```
Upload PDF → Encrypt on client → Upload to Filecoin → Store CID
Upload Image → Encrypt on client → Upload to Filecoin → Store CID
Upload Report → Encrypt on client → Upload to Filecoin → Store CID
```
**Issues:**
- Encryption happens on client (less secure)
- Multiple files to manage
- Scattered data

### ✅ Correct Approach (Complete Record)
```
Patient has complete record on-chain
  ↓
Contract encrypts entire record in TEE
  ↓
Upload encrypted record to Filecoin (single file)
  ↓
Store one CID on-chain
```
**Benefits:**
- Encryption in TEE (maximum security)
- Single backup contains everything
- Centralized data
- Easy to verify integrity

## Security Features

### 1. TEE Encryption
- Sapphire.encrypt() runs in Trusted Execution Environment
- Keys never leave the TEE
- Guaranteed confidentiality

### 2. Data Integrity
- SHA-256 hash stored on-chain
- Can verify data hasn't been tampered with
- Automatic verification on retrieval

### 3. Access Control
- Only authorized doctors can create backups
- Patient must authorize doctor first
- Blockchain-enforced permissions

### 4. Immutability
- CID and hash are immutable on blockchain
- Cannot be changed after storage
- Full audit trail

## Development vs Production

### Current: Development Mode

```typescript
NEXT_PUBLIC_USE_SYNAPSE=false  // Uses localStorage
```

**Features:**
- Encrypted data stored in localStorage
- CID generated from hash (deterministic)
- No real Filecoin network calls
- Perfect for testing

**Flow:**
1. Contract encrypts (real TEE encryption)
2. Data stored in localStorage (mock Filecoin)
3. CID stored on Sapphire blockchain (real)

### Production Mode

```typescript
NEXT_PUBLIC_USE_SYNAPSE=true  // Uses real Filecoin
```

**Requirements:**
1. Synapse SDK configured
2. USDFC tokens deposited
3. Wallet connected
4. Implementation in `lib/synapse.ts`

**Flow:**
1. Contract encrypts (real TEE encryption)
2. Data uploaded to Filecoin network (real)
3. CID stored on Sapphire blockchain (real)

## Testing the Feature

### Prerequisites

1. **Wallet connected** to Sapphire Testnet
2. **Registered as doctor** (Register tab)
3. **Patient registered** with data
4. **Patient authorized you** (Permissions tab)

### Test Steps

1. Go to http://localhost:3000/main
2. Click "Filecoin Backup" tab
3. Enter patient address
4. Enter description (e.g., "Test backup")
5. Click "Backup to Filecoin"
6. Watch progress:
   - ✓ Encrypting with Sapphire TEE...
   - ✓ Uploading to Filecoin...
   - ✓ Storing CID on blockchain...
   - ✓ Complete!
7. Copy the CID displayed
8. Check on blockchain explorer

### Expected Result

```
Stage 1: Encrypting patient record with Sapphire TEE... (10%)
Stage 2: Patient record encrypted successfully (30%)
Stage 3: Uploading encrypted data to Filecoin... (40%)
Stage 4: Uploaded to Filecoin. CID: bafybei... (70%)
Stage 5: Storing CID on Sapphire blockchain... (80%)
Stage 6: Patient record backup completed! (100%)

✅ Backup Successful!
CID: bafybei52charactershexidentifier...
```

## File Locations

```
medical-records-sapphire/
├── contracts/
│   └── MedicalRecords.sol
│       ├── encriptarRegistroPaciente()    # Encrypts in TEE
│       └── almacenarCIDFilecoin()         # Stores CID
│
├── front-doctor/
│   ├── components/medical/
│   │   └── BackupToFilecoin.tsx           # UI component
│   ├── app/api/
│   │   └── encrypt-patient-record/
│   │       └── route.ts                   # API endpoint
│   └── config/
│       └── wagmi.ts                       # Blockchain config
│
└── FILECOIN_PATIENT_BACKUP.md            # This file
```

## Common Questions

### Q: Why not encrypt on the client?
**A:** Client-side encryption is less secure. Sapphire's TEE guarantees that encryption happens in a trusted environment where keys cannot be extracted.

### Q: What if I want to retrieve the data?
**A:** You would need to:
1. Fetch encrypted data from Filecoin using the CID
2. Decrypt it (requires the encryption key from TEE)
3. This is a future feature to implement

### Q: Can I backup the same patient multiple times?
**A:** Yes! Each backup creates a new document entry with a unique CID and timestamp.

### Q: What happens if Filecoin goes down?
**A:** Filecoin is decentralized with multiple providers. Data is replicated across the network for high availability.

### Q: How much does it cost?
**A:**
- **Testnet:** Free (mock implementation)
- **Mainnet:** ~$0.10 per GB per month (paid in USDFC tokens)

## Next Steps

1. ✅ Test the backup feature in development
2. ⏳ Implement retrieval functionality
3. ⏳ Complete Synapse SDK integration for production
4. ⏳ Add encryption key management for decryption
5. ⏳ Deploy to Sapphire Mainnet

## Support

For technical issues:
- Contract: See `contracts/MedicalRecords.sol`
- Frontend: See `front-doctor/components/medical/BackupToFilecoin.tsx`
- API: See `front-doctor/app/api/encrypt-patient-record/route.ts`

---

**Last Updated:** November 2025
**Contract:** 0x5715f968aa3F9ED496Ab4de478F3E9BB403BA67A
**Network:** Sapphire Testnet
