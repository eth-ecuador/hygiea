import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';

export default function RegisterDoctor() {
  const [nombreMedico, setNombreMedico] = useState('');
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeContract({
      address: contractAddress,
      abi: contractABI.abi,
      functionName: 'registrarMedico',
      args: [nombreMedico]
    });
  };

  if (isSuccess) {
    return (
      <div className="card">
        <h2>Doctor Registered</h2>
        <p>You can now be authorized by patients to access their records.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Register Doctor</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Doctor Name *</label>
          <input
            type="text"
            value={nombreMedico}
            onChange={(e) => setNombreMedico(e.target.value)}
            required
            placeholder="Dr. John Smith"
          />
        </div>
        <button type="submit" className="button secondary" disabled={isPending || isConfirming}>
          {isPending || isConfirming ? 'Processing...' : 'Register as Doctor'}
        </button>
      </form>
    </div>
  );
}
