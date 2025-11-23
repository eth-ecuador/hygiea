import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useReadContract, useAccount } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';

export default function ManagePermissions() {
  const { address } = useAccount();
  const [medicoAddress, setMedicoAddress] = useState('');

  const { writeContract: autorizar, data: hashAutorizar, isPending: isPendingAutorizar } = useWriteContract();
  const { writeContract: revocar, data: hashRevocar, isPending: isPendingRevocar } = useWriteContract();

  const { isSuccess: successAutorizar } = useWaitForTransactionReceipt({ hash: hashAutorizar });
  const { isSuccess: successRevocar } = useWaitForTransactionReceipt({ hash: hashRevocar });

  const { data: medicosAutorizados } = useReadContract({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'obtenerMedicosAutorizados',
    args: [address]
  });

  const handleAutorizar = () => {
    autorizar({
      address: contractAddress,
      abi: contractABI.abi,
      functionName: 'autorizarMedico',
      args: [medicoAddress]
    });
  };

  const handleRevocar = (medico) => {
    revocar({
      address: contractAddress,
      abi: contractABI.abi,
      functionName: 'revocarMedico',
      args: [medico]
    });
  };

  if (successAutorizar || successRevocar) {
    setMedicoAddress('');
  }

  return (
    <div className="card">
      <h2>Manage Permissions</h2>
      <p>Authorize or revoke doctor access to view your medical history</p>

      <div className="form-group">
        <label>Doctor Address</label>
        <input
          type="text"
          value={medicoAddress}
          onChange={(e) => setMedicoAddress(e.target.value)}
          placeholder="0x..."
        />
      </div>

      <button
        className="button primary"
        onClick={handleAutorizar}
        disabled={!medicoAddress || isPendingAutorizar}
      >
        {isPendingAutorizar ? 'Authorizing...' : 'Authorize Doctor'}
      </button>

      {successAutorizar && <div className="success">Doctor authorized successfully</div>}
      {successRevocar && <div className="success">Access revoked successfully</div>}

      <div className="record-section">
        <h3>Authorized Doctors</h3>
        {medicosAutorizados && medicosAutorizados.length > 0 ? (
          <div>
            {medicosAutorizados.map((medico, index) => (
              <div key={index} className="permission-item">
                <span className="address">{medico}</span>
                <button
                  className="button danger small"
                  onClick={() => handleRevocar(medico)}
                  disabled={isPendingRevocar}
                >
                  Revoke
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No authorized doctors</p>
        )}
      </div>
    </div>
  );
}
