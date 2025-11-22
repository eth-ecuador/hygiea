# **Component Design Specification (CDS): Oasis Access & Consent Layers**

Project: Secure Patient Data Repository (Hygiea)  
Document Version: 1.4  
Date: November 21, 2025

## **1\. Introduction**

This document provides the detailed design for the two most critical control components of the Hygiea system: the Consent Registry Smart Contract (FVM) and the Key Management Service (KMS) supporting the **Oasis Confidential Paratime** access model.

## **2\. Oasis Confidential Paratime Integration**

The Oasis Paratime is an off-chain TEE environment that hosts the application logic and sensitive data processing. It replaces complex cryptographic computation layers.

### **2.1 Confidential Compute Flow**

1. **Request Initiation:** Doctor Web App submits a request to the Paratime, including the Patient_ID and Doctor_ID (wallet addresses handled by Privy).  
2. **Attestation:** The Paratime service provides remote attestation to the client and KMS to prove it is running the correct, secure code within a TEE.  
3. **Policy Check:** The Paratime calls the FVM to verify consent (Section 3\) for the Doctor_ID to access all data for the Patient_ID, and interacts with the KMS (Section 4\) to securely obtain the symmetric data key.  
4. **Data Retrieval:** The Paratime retrieves all CIDs associated with the Patient_ID and fetches all corresponding $C\_{\\text{sym}}$ from storage.  
5. **Decryption/Processing:** Decryption and processing of all $C\_{\\text{sym}}$ happen *entirely* within the TEE.  
6. **Output:** Only the final, non-sensitive, or authorized plaintext output (all patient data) is returned to the Doctor Web App.

## **3\. Data Ingestion and Storage**

### **3.1 Data Entry Authorization**

**Critical Design Principle:** Only authenticated Doctors (with valid Doctor_ID) are authorized to submit patient medical information to the system. Patients can view their data and manage consent, but **MUST NOT** be able to add, modify, or delete medical records.

### **3.2 Data Ingestion Flow**

The data ingestion process follows two primary flows (see Sequence Diagrams Section 1 for detailed flows):

1. **Doctor Web App Flow (FR 1.1):** Doctors authenticate via Privy, select/enter Patient_ID, enter medical information, encrypt data, store on Filecoin, and register metadata on FVM with Doctor_ID as the source identifier.

2. **Patient Mobile Web App Flow (FR 1.2):** Patients authenticate via Privy, view their own records, and manage consent grants. Patients **cannot** submit data ingestion transactions.

### **3.3 Metadata Storage**

The FVM maintains mappings of:
* Patient_ID → List of CIDs (all medical records for the patient)
* Patient_ID → Record_Hash (for each CID, for integrity verification)
* Patient_ID → Doctor_ID (source identifier for each record, for auditability)
* Patient_ID → Timestamp (for each record)

## **4\. Consent Registry Smart Contract Design (FVM)**

### **4.1 Technology Stack**

* **Language:** Solidity (Version 0.8.x)  
* **Deployment:** Filecoin Virtual Machine (FVM) or EVM-compatible chain.  
* **State:** Immutable and auditable data storage.

### **4.2 State Variables**

| Variable | Type | Visibility | Description |
| :---- | :---- | :---- | :---- |
| consentGrants | mapping(bytes32 \=\> Grant) | public | Maps a unique grant hash (e.g., SHA256(Patient_ID \+ Doctor_ID)) to the Grant struct. Client_ID is the wallet address handled by Privy. |
| patientRecords | mapping(address \=\> Record[]) | public | Maps Patient_ID to an array of Record structs containing CID, Record_Hash, Doctor_ID, and Timestamp. |

