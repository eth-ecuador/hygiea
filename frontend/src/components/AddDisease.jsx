import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';

export default function AddDisease() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    paciente: address,
    nombre: '',
    descripcion: '',
    gravedad: 'Leve',
    tratamiento: ''
  });

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeContract({
      address: contractAddress,
      abi: contractABI.abi,
      functionName: 'agregarEnfermedad',
      args: [
        formData.paciente,
        formData.nombre,
        formData.descripcion,
        formData.gravedad,
        formData.tratamiento
      ]
    });
  };

  if (isSuccess) {
    setFormData({ paciente: address, nombre: '', descripcion: '', gravedad: 'Leve', tratamiento: '' });
  }

  return (
    <div className="card">
      <h2>🩺 Add Disease</h2>
      {isSuccess && <div className="success">✅ Disease added successfully</div>}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Patient Address</label>
          <input
            type="text"
            value={formData.paciente}
            onChange={(e) => setFormData({ ...formData, paciente: e.target.value })}
            placeholder="0x..."
          />
          <small>Leave your address to add to your own record</small>
        </div>

        <div className="form-group">
          <label>Disease Name *</label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
            placeholder="E.g.: Type 2 Diabetes"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            placeholder="Diagnosis details..."
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Severity</label>
          <select
            value={formData.gravedad}
            onChange={(e) => setFormData({ ...formData, gravedad: e.target.value })}
          >
            <option value="Leve">Mild</option>
            <option value="Moderada">Moderate</option>
            <option value="Grave">Severe</option>
          </select>
        </div>

        <div className="form-group">
          <label>Treatment</label>
          <textarea
            value={formData.tratamiento}
            onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
            placeholder="Medications, dosages, instructions..."
            rows="3"
          />
        </div>

        <button type="submit" className="button primary" disabled={isPending || isConfirming}>
          {isPending || isConfirming ? '⏳ Saving...' : '💾 Save Disease'}
        </button>
      </form>
    </div>
  );
}
