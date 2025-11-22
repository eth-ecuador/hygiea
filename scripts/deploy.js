const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("=".repeat(60));
  console.log("  DEPLOY: Sistema de Registros Médicos Confidenciales");
  console.log("=".repeat(60));
  console.log();

  // Información de red
  console.log("📡 Red:", hre.network.name);
  console.log("⛓️  Chain ID:", hre.network.config.chainId);
  console.log();

  // Obtener signer
  const [deployer] = await hre.ethers.getSigners();
  console.log("🔑 Deploying con la cuenta:", deployer.address);

  // Verificar balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Balance:", hre.ethers.formatEther(balance), "ROSE/TEST");
  console.log();

  if (balance === 0n) {
    console.log("⚠️  ADVERTENCIA: Balance es 0");
    console.log("   Si estás en testnet, obtén tokens del faucet:");
    console.log("   https://faucet.testnet.oasis.io/");
    console.log();
    process.exit(1);
  }

  // Deploy contrato
  console.log("📝 Compilando contratos...");
  const MedicalRecords = await hre.ethers.getContractFactory("MedicalRecords");

  console.log("🚀 Desplegando MedicalRecords...");
  const medicalRecords = await MedicalRecords.deploy();

  console.log("⏳ Esperando confirmación...");
  await medicalRecords.waitForDeployment();

  const address = await medicalRecords.getAddress();
  console.log();
  console.log("✅ MedicalRecords desplegado en:", address);
  console.log();

  // Guardar deployment info
  const deploymentInfo = {
    network: hre.network.name,
    chainId: hre.network.config.chainId,
    contract: {
      name: "MedicalRecords",
      address: address
    },
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    blockNumber: await hre.ethers.provider.getBlockNumber()
  };

  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir);
  }

  const deploymentFile = path.join(deploymentsDir, `${hre.network.name}.json`);
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));

  console.log("💾 Deployment info guardado en:", deploymentFile);
  console.log();

  // Guardar ABI para frontend
  const artifactPath = path.join(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    "MedicalRecords.sol",
    "MedicalRecords.json"
  );

  if (fs.existsSync(artifactPath)) {
    const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

    const frontendDir = path.join(__dirname, "..", "frontend", "src", "contracts");
    if (!fs.existsSync(frontendDir)) {
      fs.mkdirSync(frontendDir, { recursive: true });
    }

    const abiFile = path.join(frontendDir, "MedicalRecords.json");
    fs.writeFileSync(
      abiFile,
      JSON.stringify({ abi: artifact.abi, address: address }, null, 2)
    );

    console.log("📄 ABI copiado para frontend:", abiFile);
    console.log();
  }

  // Información de red
  console.log("=".repeat(60));
  console.log("  INFORMACIÓN DE RED");
  console.log("=".repeat(60));
  console.log();

  if (hre.network.name === "sapphire-testnet") {
    console.log("🌐 RPC URL: https://testnet.sapphire.oasis.io");
    console.log("🔍 Explorer: https://explorer.oasis.io/testnet/sapphire");
    console.log("💧 Faucet: https://faucet.testnet.oasis.io/");
    console.log("⚠️  NOTA: Confidencialidad NO garantizada en testnet");
  } else if (hre.network.name === "sapphire") {
    console.log("🌐 RPC URL: https://sapphire.oasis.io");
    console.log("🔍 Explorer: https://explorer.oasis.io/mainnet/sapphire");
    console.log("🔒 Confidencialidad: ACTIVA");
  } else if (hre.network.name === "sapphire-localnet") {
    console.log("🌐 RPC URL: http://localhost:8545");
    console.log("🏠 Localnet para desarrollo");
  }

  console.log();
  console.log("=".repeat(60));
  console.log("  PRÓXIMOS PASOS");
  console.log("=".repeat(60));
  console.log();
  console.log("1. Actualiza frontend/.env con la dirección del contrato:");
  console.log(`   VITE_CONTRACT_ADDRESS=${address}`);
  console.log();
  console.log("2. Inicia el frontend:");
  console.log("   cd frontend && npm run dev");
  console.log();
  console.log("3. Conecta tu wallet a Sapphire", hre.network.name);
  console.log();

  // Esperar bloques adicionales en testnet/mainnet
  if (hre.network.name !== "sapphire-localnet") {
    console.log("⏳ Esperando confirmaciones adicionales...");
    const deployTx = medicalRecords.deploymentTransaction();
    if (deployTx) {
      await deployTx.wait(3);
      console.log("✅ 3 confirmaciones completadas");
    }
  }

  console.log();
  console.log("✅ Deploy completado exitosamente!");
  console.log();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error();
    console.error("❌ Error en deployment:");
    console.error(error);
    process.exit(1);
  });
