# **Sequence Diagrams: Hygiea Core Flows (Oasis Architecture)**

Project: Secure Patient Data Repository (Hygiea)  
Document Version: 1.4  
Date: November 21, 2025

## **1. Flow 1: Data Ingestion and Storage (FR 1.x)**

This sequence details how sensitive patient data is symmetrically encrypted and immutably registered within the decentralized repository. The system supports two primary flows: (a) **Doctor Web App** - doctors adding patient information (primary and only method for filling patient data), and (b) **Patient Mobile Web App** - patients viewing their own data and managing consent (patients do NOT fill their own medical information).

### **1.1 Scenario A: Doctor Web App - Doctor Adds Patient Information (Primary Data Entry)**

**Note:** The Doctor is the **only** person authorized to fill patient medical information in the system.

```mermaid
sequenceDiagram  
    participant DOC as Doctor Web App  
    participant PRV as Privy (Authentication)  
    participant FVM as Consent Registry (FVM)  
    participant FIL as Filecoin Data Repository

    DOC->>PRV: 1. Authenticate with Wallet (Get Doctor_ID)  
    activate PRV  
    PRV-->>DOC: 2. Return Doctor_ID (Wallet Address)  
    deactivate PRV

    DOC->>DOC: 3. Doctor Enters or Selects Patient_ID  
    DOC->>FVM: 4. Verify Patient_ID Exists (Optional: Register New Patient)  
    activate FVM  
    FVM-->>DOC: 5. Return Patient Verification Status  
    deactivate FVM

    DOC->>DOC: 6. Doctor Enters Patient Medical Information<br/>(Diagnosis, Treatment, Prescriptions,<br/>Medical History, Test Results, etc.)  
    Note over DOC: Doctor is the ONLY person<br/>authorized to fill patient information

    DOC->>DOC: 7. Generate Record_Hash (Hash of Plaintext Data)  
    DOC->>DOC: 8. Symmetric Encryption ($C_{text{sym}}$) using AES-256  
    DOC->>FIL: 9. Store $C_{text{sym}}$  
    activate FIL  
    FIL-->>DOC: 10. Return CID (Content ID)  
    deactivate FIL

    DOC->>PRV: 11. Request Signature for Transaction  
    activate PRV  
    PRV-->>DOC: 12. Return Doctor Signature  
    deactivate PRV

    DOC->>FVM: 13. Register Metadata Transaction (Patient_ID, CID, Record_Hash, Doctor_ID, Timestamp, Signature)  
    activate FVM  
    FVM->>FVM: 14. Validate Signature & Doctor_ID  
    FVM->>FVM: 15. Store Mapping (Patient_ID → CID, Record_Hash, Source: Doctor_ID, Timestamp)  
    FVM->>FVM: 16. Log Transaction (Audit Trail)  
    FVM-->>DOC: 17. Transaction Receipt (Metadata Registered)  
    deactivate FVM
```

### **1.2 Scenario B: Patient Mobile Web App - Patient Views Data and Manages Consent**

**Note:** Patients use the mobile app to view their medical records (via consent grants) and manage access permissions. Patients **do NOT** fill their own medical information - only doctors can do that.

```mermaid
sequenceDiagram  
    participant PAT as Patient Mobile Web App  
    participant PRV as Privy (Authentication)  
    participant FVM as Consent Registry (FVM)  
    participant OASIS as Oasis Confidential Paratime (TEE)  
    participant KMS as KMS Policy Engine  
    participant FIL as Filecoin Data Repository

    PAT->>PRV: 1. Authenticate with Wallet (Get Patient_ID)  
    activate PRV  
    PRV-->>PAT: 2. Return Patient_ID (Wallet Address)  
    deactivate PRV

    Note over PAT: Patient can view their own data<br/>and manage consent grants<br/>but cannot add medical information

    PAT->>FVM: 3. Query Own Records (Patient_ID)  
    activate FVM  
    FVM-->>PAT: 4. Return List of CIDs & Metadata  
    deactivate FVM

    PAT->>PRV: 5. Request Signature (Access Token Request for Doctor)  
    activate PRV  
    PRV-->>PAT: 6. Return Patient Signature  
    deactivate PRV

    PAT->>FVM: 7. Grant Access Transaction (Doctor_ID, Patient_ID, Expiry, Signature)  
    activate FVM  
    FVM->>FVM: 8. Store Consent Grant (Doctor_ID → Patient_ID)  
    FVM-->>PAT: 9. Transaction Receipt (Consent Recorded)  
    deactivate FVM
```

## **2. Flow 2: Secure Confidential Retrieval and Processing (FR 3.x)**

This sequence details the zero-trust, TEE-backed process for a doctor to access and view a record, with processing occurring inside the Oasis Confidential Paratime.

```mermaid
sequenceDiagram  
    participant PAT as Patient Mobile Web App  
    participant DOC as Doctor Web App  
    participant PRV as Privy (Signing Utility)  
    participant FVM as Consent Registry (FVM)  
    participant KMS as KMS Policy Engine (Symmetric Keys)  
    participant FIL as Filecoin Data Repository  
    participant OASIS as Oasis Confidential Paratime (TEE)

    %% Consent Granting  
    PAT->>PRV: 1. Request Signature (Access Token Request)  
    PRV-->>PAT: 2. Return Patient Signature  
    PAT->>FVM: 3. Grant Access Transaction (Doctor_ID, Patient_ID, Expiry, Signature)  
    activate FVM  
    FVM-->>PAT: 4. Transaction Receipt (Consent Recorded)  
    deactivate FVM

    %% Access and Retrieval via TEE  
    DOC->>OASIS: 5. Request Data Access (Doctor_ID, Patient_ID, Patient Signature)  
    activate OASIS  
    OASIS->>OASIS: 6. Initiate TEE Attestation (Verify Integrity)

    OASIS->>FVM: 7. Policy Verification (CheckConsent function call)  
    activate FVM  
    FVM-->>OASIS: 8. Return Valid=True/False  
    deactivate FVM  
    Note over OASIS: If Valid=True...

    OASIS->>FVM: 9. Retrieve All CIDs for Patient_ID  
    activate FVM  
    FVM-->>OASIS: 10. Return All CIDs for Patient  
    deactivate FVM

    OASIS->>KMS: 11. Request Symmetric Key ($SK$) (TEE Attestation Proof)  
    activate KMS  
    KMS-->>OASIS: 12. Release $SK$ (Encrypted to TEE)  
    deactivate KMS

    loop For Each CID
        OASIS->>FIL: 13. Retrieve $C_{text{sym}}$ using CID  
        activate FIL  
        FIL-->>OASIS: 14. Return $C_{text{sym}}$  
        deactivate FIL
    end

    OASIS->>OASIS: 15. Decrypt All $C_{text{sym}}$ with $SK$ (Inside TEE)  
    OASIS->>OASIS: 16. Verify Integrity (Hash Check) & Process All Data  
      
    OASIS-->>DOC: 17. Return All Plaintext Results / Secure View  
    deactivate OASIS  
```
