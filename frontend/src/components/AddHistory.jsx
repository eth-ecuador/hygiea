import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';

export default function AddHistory() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    paciente: address,
    tipo: 'Personal',
    condicion: '',
    descripcion: '',
    relacionFamiliar: ''
  });

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeContract({
      address: contractAddress,
      abi: contractABI.abi,
      functionName: 'agregarAntecedente',
      args: [
        formData.paciente,
        formData.tipo,
        formData.condicion,
        formData.descripcion,
        formData.relacionFamiliar
      ]
    });
  };

  if (isSuccess) {
    setFormData({
      paciente: address,
      tipo: 'Personal',
      condicion: '',
      descripcion: '',
      relacionFamiliar: ''
    });
  }

  return (
    <div className="card">
      <h2>Add Medical History</h2>
      {isSuccess && <div className="success">Medical history added</div>}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>History Type *</label>
          <select
            value={formData.tipo}
            onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
          >
            <option value="Personal">Personal</option>
            <option value="Familiar">Family</option>
          </select>
        </div>

        <div className="form-group">
          <label>Condition *</label>
          <input
            type="text"
            value={formData.condicion}
            onChange={(e) => setFormData({ ...formData, condicion: e.target.value })}
            required
            placeholder="E.g.: Diabetes, Hypertension, Surgery..."
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            placeholder="Additional details..."
            rows="3"
          />
        </div>

        {formData.tipo === 'Familiar' && (
          <div className="form-group">
            <label>Family Relationship</label>
            <select
              value={formData.relacionFamiliar}
              onChange={(e) => setFormData({ ...formData, relacionFamiliar: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="Padre">Father</option>
              <option value="Madre">Mother</option>
              <option value="Hermano">Sibling</option>
              <option value="Abuelo">Grandparent</option>
              <option value="Tio">Aunt/Uncle</option>
              <option value="Otro">Other</option>
            </select>
          </div>
        )}

        <button type="submit" className="button primary" disabled={isPending || isConfirming}>
          {isPending || isConfirming ? '⏳ Saving...' : '💾 Save History'}
        </button>
      </form>
    </div>
  );
}
