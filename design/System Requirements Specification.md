# **System Requirements Specification (SRS): Hygiea**

Project: Secure Patient Data Repository (Hygiea)  
Document Version: 1.3  
Date: November 21, 2025

## **1. Introduction**

This document details the complete requirements for the Hygiea system, which integrates **Oasis Confidential Compute (TEE)**, decentralized storage (Filecoin), and Web3 identity (Privy) to achieve patient-centric data security and utility.

## **2. Functional Requirements (FR)**

The system MUST fulfill the following core functions:

### **FR 1: Data Encryption and Storage**

The system MUST support data ingestion from the **Doctor Web App** as the primary and only method for filling patient medical information. The **Patient Mobile Web App** is used for viewing data and managing consent, but patients **MUST NOT** be able to fill their own medical information.

#### **FR 1.1: Doctor Web App - Doctor Adds Patient Information (Primary Data Entry)**

**Critical Requirement:** The Doctor is the **ONLY** person authorized to fill patient medical information in the system.

* **FR 1.1.1: Authentication:** The Doctor Web App MUST authenticate the doctor using Privy to obtain the Doctor_ID (wallet address).  
* **FR 1.1.2: Patient Identification:** The Doctor Web App MUST allow the doctor to identify the patient by entering or selecting the Patient_ID (wallet address). The system MUST verify that the Patient_ID exists or allow registration of new patients.  
* **FR 1.1.3: Data Entry:** The Doctor Web App MUST allow the doctor to enter patient medical information including: diagnoses, treatments, prescriptions, medical history, test results, and other clinical data. The doctor is the **ONLY** person authorized and responsible for filling patient information.  
* **FR 1.1.4: Data Hashing:** The Doctor Web App MUST hash the plaintext data to generate a Record_Hash for integrity verification.  
* **FR 1.1.5: Symmetric Encryption:** The Doctor Web App MUST encrypt the structured data using a strong symmetric key (e.g., AES-256) to generate the Symmetric Ciphertext ($C_{text{sym}}$). The symmetric key MUST be protected for TEE access via the Oasis mechanism.  
* **FR 1.1.6: Decentralized Storage:** The Doctor Web App MUST store the $C_{text{sym}}$ on Filecoin/IPFS via the Data Repository container and receive a verifiable Content ID (CID).  
* **FR 1.1.7: Metadata Registry:** The Doctor Web App MUST submit a cryptographically signed transaction to the Consent Registry Smart Contract (FVM) containing: Patient_ID, CID, Record_Hash, Doctor_ID (source identifier), and timestamp. The transaction MUST be signed using Privy before submission.  
* **FR 1.1.8: Audit Trail:** The FVM MUST maintain an immutable record mapping Patient_ID to all associated CIDs, Record_Hashes, and the Doctor_ID who added each record for complete auditability.

#### **FR 1.2: Patient Mobile Web App - Patient Views Data and Manages Consent**

**Critical Requirement:** Patients **MUST NOT** be able to fill their own medical information. The Patient Mobile Web App is used exclusively for viewing medical records (via consent grants) and managing access permissions.

* **FR 1.2.1: Authentication:** The Patient Mobile Web App MUST authenticate the patient using Privy to obtain the Patient_ID (wallet address).  
* **FR 1.2.2: Data Viewing:** The Patient Mobile Web App MUST allow the patient to view their own medical records by querying the FVM for all CIDs associated with their Patient_ID. The patient can then access the decrypted data through the Oasis Confidential Paratime with proper authentication.  
* **FR 1.2.3: Consent Management:** The Patient Mobile Web App MUST allow the patient to grant or revoke access to their medical data by specifying a Doctor_ID. The patient **MUST NOT** be able to add, modify, or delete medical records - only doctors can perform these operations.  
* **FR 1.2.4: Access Control:** The Patient Mobile Web App MUST prevent patients from submitting any data ingestion transactions to the FVM. Only authenticated doctors with valid Doctor_ID can submit patient medical information.

### **FR 2: Consent Management and Auditability**

* **FR 2.1: Client_ID Authentication:** All users (Patients, Doctors) MUST authenticate using their Privy-managed Client_ID (wallet address). Patients authenticate as Patient_ID, and Doctors authenticate as Doctor_ID.  
* **FR 2.2: Consent Granting:** The **Patient Mobile Web App** MUST allow the patient to cryptographically sign an **Access Token Request** message, granting a specific Doctor_ID access to all patient data for a defined, limited time period. The only identifier needed to grant access is the Doctor_ID. This signed transaction MUST be recorded on the FVM.  
* **FR 2.3: Consent Revocation:** The **Patient Mobile Web App** MUST allow the patient to instantly revoke any active consent grant by submitting a revocation transaction to the FVM.  
* **FR 2.4: Audit Trail:** The Smart Contract MUST maintain an immutable and publicly auditable record of all consent grants and revocations.

### **FR 3: Secure Retrieval and Processing**

* **FR 3.1: Request for Access:** The **Doctor Web App** MUST initiate an access request to the Oasis Confidential Paratime, providing the Patient_ID and the Doctor_ID.  
* **FR 3.2: Access Policy Enforcement:** The Oasis Confidential Paratime MUST contact the FVM to verify the active consent for the Doctor_ID to access the Patient_ID's data, and then use the KMS to obtain the necessary symmetric key material for data access.  
* **FR 3.3: Data Retrieval:** The Oasis Paratime MUST retrieve ALL $C_{text{sym}}$ associated with the Patient_ID from the Filecoin Data Repository. When a doctor is granted access, they MUST have access to all data related to that patient.  
* **FR 3.4: Confidential Processing:** The Oasis Paratime (within the TEE) MUST decrypt all $C_{text{sym}}$ using the symmetric key, perform the requested data processing (e.g., viewing, analytics), and ONLY release the **plaintext result** (or the viewable records) back to the authorized Doctor Web App.  
* **FR 3.5: Integrity Check:** The Paratime MUST verify the decrypted plaintext against the stored Record_Hash (FR 1.4) before processing or releasing the result.

### **FR 4: Confidential Computation**

* **FR 4.1: Encrypted Query:** The Oasis Confidential Paratime MUST accept $C_{text{sym}}$ and computation requests (e.g., aggregation, mean, comparison) from authorized research parties.  
* **FR 4.2: Computation:** The Paratime MUST execute the requested function securely within the TEE on the decrypted data, returning the aggregated, non-sensitive result ($R_{text{agg}}$).  
* **FR 4.3: Decryption of Result:** The Paratime releases only the final, aggregated, non-sensitive plaintext result ($R_{text{agg}}$). No decryption key is ever released.

## **3. Non-Functional Requirements (NFR)**

### **NFR 1: Security and Cryptography**

* **NFR 1.1: Confidentiality Guarantee:** Data processing MUST occur exclusively within the verifiable **Oasis Trusted Execution Environment (TEE)**, providing integrity and confidentiality assurances via hardware attestation.  
* **NFR 1.2: Key Protection:** Symmetric keys and TEE attestation keys MUST be managed by the KMS and Oasis key management primitives.  
* **NFR 1.3: Data Integrity:** Cryptographic proofs (e.g., Filecoin Proof-of-Spacetime) MUST be used to verify the storage of $C_{text{sym}}$, and the Record_Hash (FR 3.5) MUST verify data content.  
* **NFR 1.4: Access Control Expiry:** All consent grants recorded on the FVM MUST be time-bound (e.g., maximum 24 hours), strictly enforced by the Oasis Policy Engine.

### **NFR 2: Performance**

* **NFR 2.1: Retrieval Latency:** Processing time (from request submission to Plaintext result display) MUST not exceed 5 seconds for a standard record size, relying on TEE efficiency.  
* **NFR 2.2: Confidential Computation:** The Oasis Confidential Paratime MUST complete a standard aggregation (e.g., summing 1,000 records) efficiently, leveraging native CPU performance within the TEE.  
* **NFR 2.3: Storage Retrieval:** Data retrieval from Filecoin MUST use fast retrieval mechanisms (e.g., caching/hot storage) to minimize latency to under 3 seconds.

### **NFR 3: Compliance and Audit**

* **NFR 3.1: Regulatory Adherence:** The system architecture MUST adhere to the security and privacy principles of major medical data regulations (e.g., HIPAA, GDPR, focusing on patient control and auditability).  
* **NFR 3.2: Auditability:** Every data access request submitted to the Oasis Paratime, along with the FVM consent transaction, MUST be logged immutably.  
* **NFR 3.3: Platform Compatibility:** The **Patient Mobile Web App** MUST be compatible with major mobile browsers (iOS/Android), and the **Doctor Web App** MUST be compatible with major modern browsers.