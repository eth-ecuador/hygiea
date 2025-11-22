import { useState } from 'react';
import { WagmiProvider, useAccount } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config, networkConfig } from './config/wagmi';
import ConnectWallet from './components/ConnectWallet';
import RegisterPatient from './components/RegisterPatient';
import RegisterDoctor from './components/RegisterDoctor';
import AddDisease from './components/AddDisease';
import AddHistory from './components/AddHistory';
import ViewRecords from './components/ViewRecords';
import ManagePermissions from './components/ManagePermissions';
import ViewEncryptedData from './components/ViewEncryptedData';
import './styles/App.css';

const queryClient = new QueryClient();

function MainApp() {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState('register');

  if (!isConnected) {
    return (
      <div className="container">
        <header className="header">
          <h1>🏥 Confidential Medical Records System</h1>
          <p className="subtitle">Powered by Oasis Sapphire - Encrypted data on blockchain</p>
        </header>
        <ConnectWallet />
        <div className="network-info">
          <p>Network: <strong>{networkConfig.name}</strong></p>
          <p>Explorer: <a href={networkConfig.explorer} target="_blank" rel="noopener noreferrer">
            {networkConfig.explorer}
          </a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🏥 Confidential Medical Records</h1>
        <p className="subtitle">Connected: {address}</p>
        <p className="network-badge">{networkConfig.name}</p>
      </header>

      <nav className="tabs">
        <button
          className={activeTab === 'register' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('register')}
        >
          📋 Register
        </button>
        <button
          className={activeTab === 'diseases' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('diseases')}
        >
          🩺 Diseases
        </button>
        <button
          className={activeTab === 'history' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('history')}
        >
          📚 History
        </button>
        <button
          className={activeTab === 'view' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('view')}
        >
          👁️ View Records
        </button>
        <button
          className={activeTab === 'permissions' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('permissions')}
        >
          🔐 Permissions
        </button>
        <button
          className={activeTab === 'encryption' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('encryption')}
        >
          🔍 View Encryption
        </button>
      </nav>

      <main className="content">
        {activeTab === 'register' && (
          <div>
            <RegisterPatient />
            <RegisterDoctor />
          </div>
        )}
        {activeTab === 'diseases' && <AddDisease />}
        {activeTab === 'history' && <AddHistory />}
        {activeTab === 'view' && <ViewRecords />}
        {activeTab === 'permissions' && <ManagePermissions />}
        {activeTab === 'encryption' && <ViewEncryptedData />}
      </main>

      <footer className="footer">
        <p>🔒 All data is encrypted on Sapphire blockchain</p>
        <p>⚠️ {networkConfig.name === 'Sapphire Testnet' ?
          'TESTNET - Confidentiality NOT guaranteed' :
          'Confidentiality ACTIVE'}</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MainApp />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
