import { useState } from 'react';
import { useReadContract, useAccount } from 'wagmi';
import { contractAddress } from '../config/wagmi';
import contractABI from '../contracts/MedicalRecords.json';

export default function ViewRecords() {
  const { address } = useAccount();
  const [pacienteAddress, setPacienteAddress] = useState(address);

  const { data: afiliacion, isLoading: loadingAfiliacion } = useReadContract({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'obtenerAfiliacion',
    args: [pacienteAddress]
  });

  const { data: enfermedades, isLoading: loadingEnfermedades } = useReadContract({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'obtenerEnfermedades',
    args: [pacienteAddress]
  });

  const { data: antecedentes, isLoading: loadingAntecedentes } = useReadContract({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'obtenerAntecedentes',
    args: [pacienteAddress]
  });

  return (
    <div className="card">
      <h2>View Medical Records</h2>

      <div className="form-group">
        <label>Patient Address</label>
        <input
          type="text"
          value={pacienteAddress}
          onChange={(e) => setPacienteAddress(e.target.value)}
          placeholder="0x..."
        />
        <small>Leave your address to view your own record</small>
      </div>

      {loadingAfiliacion ? (
        <p>Loading data...</p>
      ) : afiliacion ? (
        <>
          <div className="record-section">
            <h3>Registration Data</h3>
            <div className="data-grid">
              <div><strong>Name:</strong> {afiliacion.nombre}</div>
              <div><strong>Age:</strong> {afiliacion.edad?.toString()}</div>
              <div><strong>Sex:</strong> {afiliacion.sexo}</div>
              <div><strong>Blood Type:</strong> {afiliacion.tipoSangre}</div>
              <div><strong>Address:</strong> {afiliacion.direccion}</div>
              <div><strong>Phone:</strong> {afiliacion.telefono}</div>
              <div><strong>Email:</strong> {afiliacion.email}</div>
              <div><strong>SSN:</strong> {afiliacion.numeroSeguroSocial}</div>
            </div>
          </div>

          <div className="record-section">
            <h3>Diseases</h3>
            {loadingEnfermedades ? (
              <p>Loading...</p>
            ) : enfermedades && enfermedades.length > 0 ? (
              enfermedades.map((enfermedad, index) => (
                <div key={index} className="record-item">
                  <h4>{enfermedad.nombre} {enfermedad.activa ? 'Active' : 'Inactive'}</h4>
                  <p><strong>Severity:</strong> {enfermedad.gravedad}</p>
                  <p><strong>Description:</strong> {enfermedad.descripcion}</p>
                  <p><strong>Treatment:</strong> {enfermedad.tratamiento}</p>
                  <small>Diagnosis: {new Date(Number(enfermedad.fechaDiagnostico) * 1000).toLocaleDateString()}</small>
                </div>
              ))
            ) : (
              <p>No registered diseases</p>
            )}
          </div>

          <div className="record-section">
            <h3>Medical History</h3>
            {loadingAntecedentes ? (
              <p>Loading...</p>
            ) : antecedentes && antecedentes.length > 0 ? (
              antecedentes.map((ant, index) => (
                <div key={index} className="record-item">
                  <h4>{ant.condicion} ({ant.tipo})</h4>
                  <p>{ant.descripcion}</p>
                  {ant.relacionFamiliar && <p><strong>Family Member:</strong> {ant.relacionFamiliar}</p>}
                </div>
              ))
            ) : (
              <p>No registered medical history</p>
            )}
          </div>
        </>
      ) : (
        <p>No record found or you don't have permission to view this data</p>
      )}
    </div>
  );
}
