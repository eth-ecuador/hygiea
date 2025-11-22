# 🏥 Confidential Medical Records System

Blockchain medical records system with end-to-end encryption using **Oasis Sapphire**.

## 🎯 Features

✅ **Automatic Encryption**: All data is encrypted on blockchain
✅ **Access Control**: Patients authorize which doctors can view their data
✅ **Guaranteed Privacy**: Data inaccessible without permissions
✅ **Immutable**: Permanent and verifiable medical history
✅ **Easy to Use**: Intuitive web interface

---

## 📊 Stored Data (Encrypted)

### 1. Affiliation Data
- Full name
- Age
- Gender
- Blood type
- Address
- Phone
- Email
- Social Security Number

### 2. Existing Diseases
- Disease name
- Diagnosis description
- Diagnosis date
- Severity (Mild, Moderate, Severe)
- Status (Active/Inactive)
- Treatment

### 3. Medical History
- **Personal**: Surgeries, past illnesses, allergies
- **Family**: Hereditary conditions, family history

---

## 🚀 Installation and Setup

### Prerequisites

- Node.js v18+
- npm or yarn
- MetaMask installed
- TEST tokens from Sapphire Testnet

### 1. Clone and Install Backend

```bash
cd medical-records-sapphire
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your private key:
```
PRIVATE_KEY=0xtu_clave_privada_aqui
```

⚠️ **NEVER** share your private key or upload it to git.

### 3. Get Testnet Tokens

1. Go to https://faucet.testnet.oasis.io/
2. Select "Sapphire"
3. Enter your address
4. Get 100 TEST tokens

### 4. Compile Contracts

```bash
npx hardhat compile
```

### 5. Run Tests (Optional)

```bash
# Option 1: Tests on Hardhat Network
npx hardhat test

# Option 2: Tests on Sapphire Localnet (more realistic)
# Terminal 1: Start localnet
docker run -it -p 8545:8545 ghcr.io/oasisprotocol/sapphire-localnet

# Terminal 2: Run tests
npx hardhat test --network sapphire-localnet
```

### 6. Deploy to Testnet

```bash
npx hardhat run scripts/deploy.js --network sapphire-testnet
```

Save the contract address that appears in the console.

### 7. Configure Frontend

```bash
cd frontend
npm install
```

Create the `.env` file:
```bash
cp .env.example .env
```

Edit `frontend/.env`:
```
VITE_CONTRACT_ADDRESS=0xDireccion_Del_Contrato_Desplegado
VITE_NETWORK=testnet
```

### 8. Start Frontend

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🔧 Configure MetaMask

Add Sapphire Testnet manually:

1. Open MetaMask
2. Click on the network selector
3. "Add Network" → "Add Network Manually"
4. Enter:

```
Network Name: Sapphire Testnet
RPC URL: https://testnet.sapphire.oasis.io
Chain ID: 23295
Currency Symbol: TEST
Block Explorer: https://explorer.oasis.io/testnet/sapphire
```

---

## 📖 User Guide

### As a Patient

#### 1. Register
1. Connect your wallet
2. Go to the "📋 Registro" tab
3. Fill out the form with your data
4. Click "Registrar Paciente"
5. Confirm the transaction in MetaMask

#### 2. Add Diseases
1. Go to "🩺 Enfermedades"
2. Fill in the disease data
3. Save (encrypted transaction)

#### 3. Add Medical History
1. Go to "📚 Antecedentes"
2. Select type (Personal/Family)
3. Add the condition and details

#### 4. View Your Records
1. Go to "👁️ Ver Registros"
2. Leave your address (appears automatically)
3. You will see all your encrypted data

#### 5. Authorize Doctors
1. Go to "🔐 Permisos"
2. Enter the doctor's address
3. Click "Autorizar Médico"
4. The doctor can now view your history

### As a Doctor

#### 1. Register as a Doctor
1. Connect your wallet
2. Go to "📋 Registro"
3. Enter your name in "Registrar Médico"

#### 2. Access Patient Records
1. The patient must authorize you first
2. Go to "👁️ Ver Registros"
3. Enter the patient's address
4. You will see their complete history

#### 3. Add Diagnoses
1. Go to "🩺 Enfermedades"
2. Enter the patient's address (who authorized you)
3. Add the disease and treatment

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────┐
│         FRONTEND (React)            │
│   - Medical forms                   │
│   - Data visualization              │
│   - Permission management           │
└──────────────┬──────────────────────┘
               │ Wagmi + Sapphire Wrapper
               │ (Automatic encryption)
               ▼
┌─────────────────────────────────────┐
│   SAPPHIRE BLOCKCHAIN (Testnet)     │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Smart Contract               │ │
│  │  MedicalRecords.sol           │ │
│  │                               │ │
│  │  - Encrypted data in storage  │ │
│  │  - Access control             │ │
│  │  - Granular permissions       │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 🔒 Security and Privacy

### How Encryption Works

1. **Encrypted Storage**: All contract storage is encrypted by default in Sapphire
2. **Encrypted Transactions**: Wagmi wrapper automatically encrypts transactions
3. **TEE (Trusted Execution Environment)**: Data is only decrypted inside the TEE
4. **Access Control**: Solidity modifiers prevent unauthorized access

### What is NOT Encrypted

⚠️ **Events** are NOT encrypted. That's why the contract only emits:
- User addresses
- Timestamps
- Action confirmations

Sensitive data like names, diagnoses, etc. are **NEVER** emitted.

### Immutable/Constant Variables

⚠️ **IMPORTANT**: `immutable` and `constant` variables are NOT encrypted because they are stored in the bytecode.

```solidity
// ❌ BAD - Visible data
bytes32 private constant SECRET = "mi_secreto";

// ✅ GOOD - Encrypted data
bytes32 private secret;
```

### Testnet vs Mainnet

| Feature | Testnet | Mainnet |
|---------|---------|---------|
| Confidentiality | ⚠️ NOT guaranteed | ✅ Guaranteed |
| Cost | 🆓 Free | 💰 ROSE tokens |
| Data | 🧪 Testing only | 🔒 Real data |

---

## 🧪 Testing

### Unit Tests

```bash
npx hardhat test
```

### Tests with Coverage

```bash
npx hardhat coverage
```

### Tests on Sapphire Localnet

```bash
# Terminal 1
docker run -it -p 8545:8545 ghcr.io/oasisprotocol/sapphire-localnet

# Terminal 2
npx hardhat test --network sapphire-localnet
```

---

## 📂 Project Structure

```
medical-records-sapphire/
├── contracts/
│   └── MedicalRecords.sol        # Main contract
├── scripts/
│   └── deploy.js                  # Deployment script
├── test/
│   └── MedicalRecords.test.js     # Tests
├── frontend/
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── config/
│   │   │   └── wagmi.js           # Wagmi configuration
│   │   ├── contracts/             # ABIs (generated)
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── hardhat.config.js
├── package.json
└── README.md
```

---

## 🎨 Screenshots

### Patient Registration
Form with all encrypted affiliation fields.

### Disease Management
Add diagnoses with severity and treatment.

### Permission Control
Authorize/Revoke access to specific doctors.

### Records View
Complete encrypted history accessible only with permissions.

---

## 🚨 Troubleshooting

### Error: "Already registered"
- You can only register once per address
- Use another wallet to create another patient

### Error: "No tienes permiso"
- Verify that the patient has authorized you
- Confirm that you are registered as a doctor

### Transactions fail
- Verify that you have TEST tokens
- Confirm that you are on Sapphire Testnet
- Check MetaMask configuration

### Deployed contract not visible
- Copy the correct address to `frontend/.env`
- Restart the frontend server (`npm run dev`)

---

## 🔮 Upcoming Features

Ideas to expand the system:

- [ ] **Medical Prescriptions**: Issue encrypted prescriptions
- [ ] **Medical Appointments**: Scheduling system
- [ ] **Notifications**: Alerts for new diagnoses
- [ ] **Export PDF**: Generate medical reports
- [ ] **Medical Images**: Store X-rays, MRIs (IPFS + encryption)
- [ ] **Laboratories**: Integrate test results
- [ ] **Pharmacies**: Prescription verification
- [ ] **Insurance**: Controlled access for insurers
- [ ] **Data Update**: Modify existing diseases
- [ ] **Search**: Filter by disease type, date, etc.
- [ ] **Multi-language**: Support for multiple languages
- [ ] **Audit**: Log of who accessed what data

---

## 📚 Additional Documentation

### Sapphire
- Docs: https://docs.oasis.io/build/sapphire/
- Quickstart: https://docs.oasis.io/build/sapphire/quickstart/
- Examples: https://github.com/oasisprotocol/sapphire-paratime/tree/main/examples

### Wagmi
- Docs: https://wagmi.sh/
- React Hooks: https://wagmi.sh/react/api/hooks

### Hardhat
- Docs: https://hardhat.org/docs

---

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚖️ License

MIT License - Free to use for educational and commercial projects.

---

## ⚠️ Disclaimer

This project is an **educational demonstration**. For production use with real medical data:

1. ✅ Audit the smart contract
2. ✅ Deploy to Sapphire Mainnet (NOT testnet)
3. ✅ Comply with regulations (HIPAA, GDPR, etc.)
4. ✅ Implement robust authentication
5. ✅ Add additional encryption on the frontend
6. ✅ Backups and disaster recovery
7. ✅ Consult with legal and medical experts

---

## 📞 Support

Questions or problems?

- Oasis Discord: https://oasis.io/discord
- GitHub Issues: [Your repo here]
- Documentation: README.md

---

## 🎓 Built With

- **Oasis Sapphire** - Confidential blockchain
- **Solidity** - Smart contracts
- **Hardhat** - Development framework
- **React** - Frontend
- **Wagmi** - Ethereum library for React
- **Viem** - TypeScript Ethereum interface
- **Vite** - Build tool

---

**Made with ❤️ to improve privacy in digital health**
