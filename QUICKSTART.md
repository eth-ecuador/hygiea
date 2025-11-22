# 🚀 INICIO RÁPIDO

## Paso 1: Instalar Dependencias Backend

```bash
cd medical-records-sapphire
npm install
```

## Paso 2: Configurar Clave Privada

```bash
cp .env.example .env
```

Edita `.env` y agrega tu clave privada (sin el prefijo 0x si quieres):
```
PRIVATE_KEY=tu_clave_privada_de_metamask
```

## Paso 3: Obtener Tokens de Testnet

1. Ve a: https://faucet.testnet.oasis.io/
2. Selecciona "Sapphire"
3. Pega tu dirección de wallet
4. Obtén 100 TEST tokens

## Paso 4: Compilar Contratos

```bash
npx hardhat compile
```

## Paso 5: (Opcional) Ejecutar Tests

```bash
npx hardhat test
```

## Paso 6: Deploy a Testnet

```bash
npx hardhat run scripts/deploy.js --network sapphire-testnet
```

**¡IMPORTANTE!** Copia la dirección del contrato que aparece:
```
✅ MedicalRecords desplegado en: 0xABC123...
```

## Paso 7: Configurar Frontend

```bash
cd frontend
npm install
cp .env.example .env
```

Edita `frontend/.env`:
```
VITE_CONTRACT_ADDRESS=0xABC123... # La dirección del paso 6
VITE_NETWORK=testnet
```

## Paso 8: Copiar ABI al Frontend

El script de deploy lo hace automáticamente, pero si no funcionó:

```bash
# Desde la raíz del proyecto
cp artifacts/contracts/MedicalRecords.sol/MedicalRecords.json frontend/src/contracts/
```

## Paso 9: Iniciar Frontend

```bash
cd frontend
npm run dev
```

Abre http://localhost:3000

## Paso 10: Configurar MetaMask

1. Abrir MetaMask
2. Agregar Red Manualmente:
   - **Network Name**: Sapphire Testnet
   - **RPC URL**: https://testnet.sapphire.oasis.io
   - **Chain ID**: 23295
   - **Currency Symbol**: TEST
   - **Block Explorer**: https://explorer.oasis.io/testnet/sapphire

## Paso 11: Usar la Aplicación

1. **Conectar Wallet** en la web
2. **Registrarte como Paciente**
3. **Agregar tus datos médicos**
4. **Ver tus registros cifrados**
5. **(Opcional)** Registrarte como médico con otra wallet y probar permisos

---

## 🔧 Troubleshooting

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Insufficient funds"
Ve al faucet y obtén más TEST tokens

### "Invalid address"
Verifica que copiaste correctamente el `VITE_CONTRACT_ADDRESS`

### Frontend no carga
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📝 Comandos Útiles

```bash
# Compilar
npx hardhat compile

# Tests
npx hardhat test

# Deploy testnet
npx hardhat run scripts/deploy.js --network sapphire-testnet

# Deploy mainnet (CUIDADO)
npx hardhat run scripts/deploy.js --network sapphire

# Frontend dev
cd frontend && npm run dev

# Frontend build
cd frontend && npm run build
```

---

¡Listo! Tu sistema de registros médicos cifrados está funcionando 🎉
