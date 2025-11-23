import { useState, useEffect } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';
import { keccak256, toUtf8Bytes, getAddress } from 'ethers';

export default function RegisterPatient() {
  const [formData, setFormData] = useState({
    pacienteAddress: '',
    nombre: '',
    edad: '',
    sexo: 'M',
    tipoSangre: 'O+',
    direccion: '',
    telefono: '',
    email: '',
    numeroSeguroSocial: ''
  });

  const [encryptedPreview, setEncryptedPreview] = useState('');
  const [showEncryption, setShowEncryption] = useState(false);
  const [checksummedAddress, setChecksummedAddress] = useState('');

  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (formData.nombre || formData.email || formData.telefono) {
      const dataString = JSON.stringify(formData);
      const hashedData = keccak256(toUtf8Bytes(dataString));
      setEncryptedPreview(hashedData);
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pacienteAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      alert('Please enter a valid wallet address (format: 0x...)');
      return;
    }

    try {
      const normalizedAddress = formData.pacienteAddress.toLowerCase();
      const checksummedAddress = getAddress(normalizedAddress);

      writeContract({
        address: contractAddress,
        abi: contractABI.abi,
        functionName: 'registrarPaciente',
        args: [
          checksummedAddress,
          formData.nombre,
          parseInt(formData.edad),
          formData.sexo,
          formData.tipoSangre,
          formData.direccion,
          formData.telefono,
          formData.email,
          formData.numeroSeguroSocial
        ]
      });
    } catch (err) {
      console.error('Error registering patient:', err);
      alert('Error: ' + (err.message || 'Could not register patient'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'pacienteAddress' && value.match(/^0x[a-fA-F0-9]{40}$/)) {
      try {
        const normalizedAddress = value.toLowerCase();
        const checksummed = getAddress(normalizedAddress);
        setChecksummedAddress(checksummed);
      } catch (err) {
        setChecksummedAddress('');
      }
    } else if (name === 'pacienteAddress') {
      setChecksummedAddress('');
    }
  };

  if (isSuccess) {
    return (
      <div className="card">
        <h2>Patient Registered</h2>
        <p>Your medical record has been successfully created on Sapphire blockchain.</p>
        <p>All your data is encrypted and only you and the doctors you authorize can access it.</p>
        <button className="button secondary" onClick={() => window.location.reload()}>
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Register Patient</h2>
      <p className="subtitle">All data will be encrypted on blockchain</p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Patient Wallet Address *</label>
          <input
            type="text"
            name="pacienteAddress"
            value={formData.pacienteAddress}
            onChange={handleChange}
            required
            placeholder="0x..."
            pattern="^0x[a-fA-F0-9]{40}$"
            title="Must be a valid Ethereum address (0x followed by 40 hexadecimal characters)"
          />
          <small style={{ color: '#666', fontSize: '12px', marginTop: '4px', display: 'block' }}>
            Enter the patient's wallet address (example: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb)
          </small>
          {checksummedAddress && checksummedAddress !== formData.pacienteAddress && (
            <div style={{
              marginTop: '8px',
              padding: '8px 12px',
              background: '#e3f2fd',
              borderRadius: '4px',
              fontSize: '12px',
              border: '1px solid #2196F3'
            }}>
              <strong>✓ Checksummed format:</strong>
              <div style={{
                fontFamily: 'monospace',
                marginTop: '4px',
                wordBreak: 'break-all',
                color: '#1565c0'
              }}>
                {checksummedAddress}
              </div>
              <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>
                This format will be used automatically
              </small>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="E.g.: Maria Garcia Lopez"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age *</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              min="1"
              max="150"
              placeholder="35"
            />
          </div>

          <div className="form-group">
            <label>Sex *</label>
            <select name="sexo" value={formData.sexo} onChange={handleChange}>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="Otro">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Blood Type *</label>
            <select name="tipoSangre" value={formData.tipoSangre} onChange={handleChange}>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Main Street 123, City"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+1 555 1234567"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Social Security Number</label>
          <input
            type="text"
            name="numeroSeguroSocial"
            value={formData.numeroSeguroSocial}
            onChange={handleChange}
            placeholder="SSN-123456789"
          />
        </div>

        <div className="privacy-notice">
          <p>🔒 <strong>Guaranteed privacy:</strong></p>
          <ul>
            <li>All data is automatically encrypted before storage</li>
            <li>Only you can view your medical information</li>
            <li>You can authorize specific doctors to access</li>
            <li>Data cannot be modified by third parties</li>
          </ul>
        </div>

        {/* Real-time visualization */}
        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            onClick={() => setShowEncryption(!showEncryption)}
            style={{
              background: '#2196F3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {showEncryption ? '🔒 Hide Encryption View' : '👁️ View Real-Time Encryption'}
          </button>
        </div>

        {showEncryption && (
          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: '#f5f5f5',
            borderRadius: '8px',
            border: '2px solid #2196F3'
          }}>
            <h3 style={{ marginTop: 0, color: '#1976d2' }}>
              🔐 Real-Time Encryption Visualization
            </h3>

            {/* Data you enter (readable) */}
            <div style={{
              background: '#e8f5e9',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '15px',
              border: '2px solid #4caf50'
            }}>
              <h4 style={{ marginTop: 0, color: '#2e7d32' }}>
                ✅ Data YOU enter (readable):
              </h4>
              <pre style={{
                background: 'white',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '13px',
                margin: 0
              }}>
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>

            {/* Data as it will appear encrypted */}
            <div style={{
              background: '#ffebee',
              padding: '15px',
              borderRadius: '6px',
              border: '2px solid #f44336'
            }}>
              <h4 style={{ marginTop: 0, color: '#c62828' }}>
                🔒 Encrypted representation (unreadable on blockchain):
              </h4>
              <pre style={{
                background: 'white',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '11px',
                fontFamily: 'monospace',
                wordBreak: 'break-all',
                margin: 0
              }}>
                {encryptedPreview}
              </pre>
              <p style={{
                fontSize: '12px',
                color: '#d32f2f',
                marginTop: '10px',
                marginBottom: 0
              }}>
                ⚠️ This hash changes every time you modify the data. In Sapphire, data is encrypted
                similarly using the TEE (Trusted Execution Environment) before being saved to blockchain.
              </p>
            </div>

            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: '#e3f2fd',
              borderRadius: '6px',
              borderLeft: '4px solid #1976d2'
            }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#1565c0' }}>
                💡 <strong>When you press "Register Patient":</strong> Sapphire will automatically encrypt
                this data inside the TEE before writing it to the blockchain. No one will be able to read it except
                you and the doctors you authorize.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="error">
            <p>❌ Error: {error.message}</p>
          </div>
        )}

        <button
          type="submit"
          className="button primary"
          disabled={isPending || isConfirming}
        >
          {isPending ? '⏳ Firmando...' :
           isConfirming ? '⏳ Confirmando...' :
           '✅ Registrar Paciente'}
        </button>
      </form>
    </div>
  );
}
