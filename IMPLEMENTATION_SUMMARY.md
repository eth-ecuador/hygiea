# Hygiea MedGuard - Implementation Summary

## 🎯 Project Overview

Sistema de registros médicos confidenciales que combina:
- **Oasis Sapphire** - Blockchain confidencial con TEE para encriptación
- **Filecoin** - Almacenamiento descentralizado de datos encriptados
- **Sincronización automática** - Auto-sync de datos a Filecoin sin intervención manual

## ✅ Features Implementadas

### 1. Smart Contract (Sapphire Testnet)
**Dirección:** `0xB6b8688E15Dd0d85cD5b7EeF9a09C7E926f6E0F1`

#### Funciones Principales:
- ✅ `registrarPaciente()` - Registro de pacientes
- ✅ `registrarDoctor()` - Registro de médicos
- ✅ `agregarEnfermedad()` - Agregar enfermedades
- ✅ `agregarAntecedente()` - Agregar antecedentes médicos
- ✅ `otorgarAcceso()` / `revocarAcceso()` - Control de permisos
- ✅ `encriptarRegistroPaciente()` - Encriptación con TEE (requiere autorización)
- ✅ **`encriptarRegistroPacienteAutoSync()`** - **Nueva:** Encriptación para auto-sync (sin autorización)
- ✅ `almacenarCIDFilecoin()` - Almacenar CID en blockchain

#### Eventos:
- `PacienteRegistrado` - Emitido al registrar paciente
- `EnfermedadAgregada` - Emitido al agregar enfermedad
- `AntecedenteAgregado` - Emitido al agregar antecedente

### 2. Frontend (Next.js 16.0.3 + TypeScript)

#### Componentes:
- ✅ `RegisterPatient` - Registro de pacientes
- ✅ `RegisterDoctor` - Registro de médicos
- ✅ `AddDisease` - Agregar enfermedades
- ✅ `AddHistory` - Agregar antecedentes
- ✅ `ViewRecords` - Visualizar registros
- ✅ `ManagePermissions` - Gestión de permisos
- ✅ `BackupToFilecoin` - Backup manual (legacy)

#### Hooks Personalizados:
- ✅ **`useAutoFilecoinSync`** - **Principal:** Auto-sync automático a Filecoin
- ✅ `useFilecoin` - Operaciones de Filecoin (legacy)

### 3. Auto-Sync a Filecoin

#### Arquitectura:
```
Usuario registra paciente
    ↓
Evento: PacienteRegistrado
    ↓
useAutoFilecoinSync detecta evento
    ↓
Llama: encriptarRegistroPacienteAutoSync()
    ↓
Sapphire TEE encripta datos
    ↓
Upload a Filecoin (Synapse SDK)
    ↓
Retorna: CID
    ↓
[TODO] Almacenar CID on-chain
```

#### Modos de Operación:

**Modo Mock (Desarrollo):**
```bash
NEXT_PUBLIC_USE_SYNAPSE=false
```
- Usa localStorage para simular Filecoin
- No requiere tokens ni configuración
- Perfecto para desarrollo y testing
- CIDs generados localmente

**Modo Real (Producción):**
```bash
NEXT_PUBLIC_USE_SYNAPSE=true
```
- Usa Synapse SDK real
- Sube a Filecoin Calibration Network
- Requiere tFIL y USDFC tokens
- CIDs reales de Filecoin
- Fallback automático a mock si falla

#### Implementación Técnica:

**Upload a Filecoin:**
```typescript
// Inicializar Synapse
const synapse = await Synapse.create({
  provider: window.ethereum,
  rpcURL: RPC_URLS.calibration.http,
});

// Convertir datos encriptados a bytes
const dataBytes = new Uint8Array(/* hex to bytes */);

// Upload con metadata
const result = await synapse.storage.upload(dataBytes, {
  context: await synapse.storage.createContext({
    metadata: {
      Application: 'Hygiea MedGuard',
      Type: 'Encrypted Patient Record',
      Blockchain: 'Sapphire Testnet',
    },
  }),
});

// Retornar CID
return result.pieceCid; // bafkzcib...
```

## 📊 Flujo Completo

### 1. Registro de Paciente
```
1. Usuario llena formulario
2. Clic en "Register Patient"
3. MetaMask solicita firma (Sapphire)
4. Smart contract registra paciente
5. Emite evento: PacienteRegistrado
```

### 2. Auto-Sync Automático
```
6. useAutoFilecoinSync detecta evento
7. Obtiene dirección del paciente
8. Llama: encriptarRegistroPacienteAutoSync()
9. Sapphire TEE encripta todos los datos
10. Retorna: (encryptedData, dataHash)
```

### 3. Upload a Filecoin
```
11. Convierte hex a Uint8Array
12. Inicializa Synapse SDK
13. Sube a Filecoin con metadata
14. Filecoin retorna: pieceCid
15. Log en consola: "✅ Uploaded successfully"
```

### 4. Almacenamiento (Pendiente)
```
16. [TODO] Llamar almacenarCIDFilecoin()
17. [TODO] Requiere firma de wallet
18. [TODO] Guardar CID on-chain
```

## 🔧 Stack Tecnológico

### Blockchain
- **Oasis Sapphire Testnet** - Chain ID: 23295
- **Contract:** 0xB6b8688E15Dd0d85cD5b7EeF9a09C7E926f6E0F1
- **Solidity:** ^0.8.20
- **Hardhat:** ^2.x

### Frontend
- **Next.js:** 16.0.3 (Turbopack)
- **React:** 19.2.0
- **TypeScript:** ^5
- **Wagmi:** ^3.0.1 (Web3 hooks)
- **Viem:** ^2.39.3 (Ethereum interactions)
- **@oasisprotocol/sapphire-wagmi-v2:** ^2.1.0

### Filecoin
- **@filoz/synapse-sdk:** ^0.36.0
- **@filoz/synapse-react:** ^0.1.3
- **Network:** Filecoin Calibration (Chain ID: 314159)
- **RPC:** https://api.calibration.node.glif.io/rpc/v1

### UI/UX
- **Tailwind CSS:** ^4.1.9
- **Radix UI:** Multiple components
- **Framer Motion:** Animaciones
- **Lucide React:** Iconos

## 📁 Estructura del Proyecto

```
medical-records-sapphire/
├── contracts/
│   └── MedicalRecords.sol          # Smart contract principal
├── scripts/
│   └── deploy.js                   # Script de deployment
├── front-doctor/
│   ├── app/
│   │   ├── main/page.tsx           # Dashboard principal
│   │   └── api/
│   │       └── encrypt-patient-record/
│   │           └── route.ts        # API para encriptación (legacy)
│   ├── components/
│   │   └── medical/
│   │       ├── RegisterPatient.tsx
│   │       ├── AddDisease.tsx
│   │       ├── AddHistory.tsx
│   │       ├── ViewRecords.tsx
│   │       ├── ManagePermissions.tsx
│   │       └── BackupToFilecoin.tsx
│   ├── hooks/
│   │   ├── useAutoFilecoinSync.ts  # ⭐ Hook principal auto-sync
│   │   └── useFilecoin.ts          # Hook legacy
│   ├── contracts/
│   │   └── MedicalRecords.json     # ABI del contrato
│   ├── config/
│   │   └── wagmi.ts                # Configuración Web3
│   ├── lib/
│   │   └── synapse.ts              # Utilidades Synapse
│   └── types/
│       └── window.d.ts             # Type definitions
├── FILECOIN_SETUP_GUIDE.md         # 📚 Guía de setup Filecoin
├── AUTO_FILECOIN_SYNC.md           # 📚 Documentación auto-sync
├── FILECOIN_PATIENT_BACKUP.md      # 📚 Doc backup manual
└── IMPLEMENTATION_SUMMARY.md       # 📚 Este archivo
```

## 🚀 Quick Start

### 1. Clonar y Setup
```bash
git clone <repo>
cd medical-records-sapphire/front-doctor
npm install
```

### 2. Configurar Environment
```bash
# Crear .env.local
NEXT_PUBLIC_CONTRACT_ADDRESS=0xB6b8688E15Dd0d85cD5b7EeF9a09C7E926f6E0F1
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_USE_SYNAPSE=false  # true para Filecoin real
```

### 3. Ejecutar
```bash
npm run dev
# Abre http://localhost:3000
```

### 4. Testing Auto-Sync
1. Conecta wallet a Sapphire Testnet
2. Registra un paciente
3. Abre consola del navegador (F12)
4. Observa logs del auto-sync:
   ```
   🔄 Auto-syncing patient to Filecoin: 0x...
   📤 Starting automatic Filecoin sync...
   ✅ Patient data encrypted by Sapphire TEE
   ✅ Uploaded to Filecoin, CID: bafybei...
   ```

## 🔐 Seguridad

### Encryption (Sapphire TEE)
- **Todos los datos** se encriptan en TEE antes de salir del blockchain
- **Claves aleatorias** generadas en cada encriptación
- **Hash SHA-256** para verificación de integridad

### Storage (Filecoin)
- **Datos encriptados** nunca se almacenan en plain text
- **Descentralizado** - múltiples storage providers
- **Inmutable** - CIDs permanentes

### Access Control (Smart Contract)
- **Permisos granulares** - paciente controla quién accede
- **On-chain** - permisos verificables en blockchain
- **Revocables** - paciente puede revocar acceso en cualquier momento

## 📊 Métricas y Logs

### Consola del Navegador
```javascript
// Auto-sync exitoso
✅ Automatic Filecoin sync successful: bafkzcib...

// Ver CIDs almacenados (mock)
Object.keys(localStorage).filter(k => k.startsWith('filecoin_auto_'))

// Ver registros del paciente
await publicClient.readContract({
  functionName: 'obtenerRegistroCompleto',
  args: ['0xPACIENTE_ADDRESS']
})
```

### Verificar en Blockchain
- **Sapphire Explorer:** https://explorer.oasis.io/testnet/sapphire
- **Buscar contrato:** 0xB6b8688E15Dd0d85cD5b7EeF9a09C7E926f6E0F1
- **Ver transacciones** y eventos emitidos

### Verificar en Filecoin (cuando uses real)
- **Calibration Explorer:** https://calibration.filfox.info/
- **Buscar por CID:** bafkzcib...
- **Ver data sets** en Synapse dashboard

## 💰 Costos

### Desarrollo (Actual)
- **Sapphire Testnet:** Gratis (faucet)
- **Filecoin Mock:** Gratis (localStorage)
- **Total:** $0

### Testnet Real (con Synapse)
- **tFIL (gas):** Gratis (faucet)
- **USDFC (storage):** Gratis (faucet)
- **Total:** $0

### Mainnet (Futuro)
- **Sapphire Mainnet:** ~$0.01 por transacción (ROSE)
- **Filecoin Mainnet:** ~$0.10 por GB/mes (FIL)
- **Ejemplo:** 100 pacientes × 1KB = ~$0.01/mes

## ⏳ Pendientes / TODOs

### High Priority
- [ ] Implementar transacción automática para `almacenarCIDFilecoin()`
  - Opciones: Hot wallet backend o solicitar firma al usuario
- [ ] Manejar múltiples uploads del mismo paciente (updates)
- [ ] Agregar retry logic para uploads fallidos

### Medium Priority
- [ ] Implementar descarga/recuperación de datos desde Filecoin
- [ ] Dashboard para visualizar CIDs y data sets
- [ ] Optimización: debounce para múltiples cambios rápidos
- [ ] Queue de uploads para mejor performance

### Low Priority
- [ ] Migrar a Mainnet (Sapphire + Filecoin)
- [ ] Implementar gasless transactions (meta-transactions)
- [ ] Analytics y métricas de uso
- [ ] Documentación de API completa

## 📚 Documentación

- **Setup Filecoin:** `FILECOIN_SETUP_GUIDE.md`
- **Auto-Sync:** `AUTO_FILECOIN_SYNC.md`
- **Backup Manual:** `FILECOIN_PATIENT_BACKUP.md`
- **Smart Contract:** `contracts/MedicalRecords.sol`
- **Synapse Docs:** https://docs.filecoin.cloud/

## 🆘 Support & Resources

### Faucets
- **Sapphire Testnet:** https://faucet.testnet.oasis.io/
- **Filecoin tFIL:** https://faucet.calibration.fildev.network/
- **USDFC:** https://docs.filecoin.cloud/getting-started/

### Explorers
- **Sapphire:** https://explorer.oasis.io/testnet/sapphire
- **Filecoin Calibration:** https://calibration.filfox.info/

### Documentation
- **Oasis Sapphire:** https://docs.oasis.io/build/sapphire/
- **Filecoin Cloud:** https://docs.filecoin.cloud/
- **Synapse SDK:** https://github.com/FilOzone/synapse-sdk

---

**Versión:** 1.0.0
**Última actualización:** Noviembre 2025
**Status:** ✅ Production Ready (Mock) / ⏳ Testnet Ready (Real Filecoin)
