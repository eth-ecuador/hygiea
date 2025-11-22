import { useConnect, useDisconnect } from 'wagmi';

export default function ConnectWallet() {
  const { connectors, connect, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="card">
      <h2>Connect Wallet</h2>
      <p>Connect your wallet to access the medical records system</p>

      <div className="button-group">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="button primary"
          >
            Connect {connector.name}
          </button>
        ))}
      </div>

      {error && (
        <div className="error">
          <p>❌ Error: {error.message}</p>
        </div>
      )}

      <div className="info-box">
        <h3>⚠️ Required Configuration</h3>
        <p>Make sure you have MetaMask configured with Sapphire Testnet:</p>
        <ul>
          <li><strong>Network Name:</strong> Sapphire Testnet</li>
          <li><strong>RPC URL:</strong> https://testnet.sapphire.oasis.io</li>
          <li><strong>Chain ID:</strong> 23295 (0x5aff)</li>
          <li><strong>Currency Symbol:</strong> TEST</li>
        </ul>
        <p>
          <a
            href="https://faucet.testnet.oasis.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚰 Get testnet tokens
          </a>
        </p>
      </div>
    </div>
  );
}
