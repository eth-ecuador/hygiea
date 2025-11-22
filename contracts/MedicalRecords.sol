// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@oasisprotocol/sapphire-contracts/contracts/Sapphire.sol";

/**
 * @title MedicalRecords
 * @notice Confidential medical records system on Sapphire
 * @dev All data is encrypted in storage. Only accessible by the patient and authorized doctors.
 */
contract MedicalRecords {

    // ========== DATA STRUCTURES ==========

    /**
     * @notice Patient affiliation data
     */
    struct AffiliationData {
        string nombre;
        uint8 edad;
        string sexo; // "M", "F", "Other"
        string tipoSangre; // "A+", "O-", etc.
        string direccion;
        string telefono;
        string email;
        string numeroSeguroSocial;
        uint256 fechaRegistro;
    }

    /**
     * @notice Existing disease
     */
    struct Disease {
        string nombre;
        string descripcion;
        uint256 fechaDiagnostico;
        string gravedad; // "Mild", "Moderate", "Severe"
        bool activa;
        string tratamiento;
    }

    /**
     * @notice Medical history (personal or family)
     */
    struct MedicalHistory {
        string tipo; // "Personal" or "Family"
        string condicion;
        string descripcion;
        string relacionFamiliar; // "Father", "Mother", "Brother", etc. (if applicable)
        uint256 fecha;
    }

    /**
     * @notice Complete patient medical record
     */
    struct PatientRecord {
        address pacienteAddress;
        bool existe;
        AffiliationData afiliacion;
        Disease[] enfermedades;
        MedicalHistory[] antecedentes;
        mapping(address => bool) medicosAutorizados;
        address[] listaMedicos;
    }

    // ========== STORAGE (All automatically encrypted) ==========

    // Mapping from address => patient record
    mapping(address => PatientRecord) private registros;

    // Registry of verified doctors (for simplicity, anyone can register)
    mapping(address => bool) public medicosRegistrados;
    mapping(address => string) private nombresMedicos;

    // List of registered patients
    address[] private pacientesRegistrados;

    // ========== EVENTS (No sensitive information) ==========

    event PacienteRegistrado(address indexed paciente, uint256 timestamp);
    event MedicoRegistrado(address indexed medico, uint256 timestamp);
    event MedicoAutorizado(address indexed paciente, address indexed medico);
    event MedicoRevocado(address indexed paciente, address indexed medico);
    event EnfermedadAgregada(address indexed paciente, uint256 timestamp);
    event AntecedenteAgregado(address indexed paciente, uint256 timestamp);
    event DatosActualizados(address indexed paciente, uint256 timestamp);

    // ========== MODIFIERS ==========

    modifier soloMedicoRegistrado() {
        require(medicosRegistrados[msg.sender], "You are not a registered doctor");
        _;
    }

    modifier soloPaciente(address paciente) {
        require(msg.sender == paciente, "You are not the patient");
        _;
    }

    modifier soloAutorizado(address paciente) {
        require(
            msg.sender == paciente || registros[paciente].medicosAutorizados[msg.sender],
            "You do not have permission to access this data"
        );
        _;
    }

    // ========== REGISTRATION FUNCTIONS ==========

    /**
     * @notice Register a doctor in the system
     * @param nombre Doctor's name
     */
    function registrarMedico(string memory nombre) external {
        require(!medicosRegistrados[msg.sender], "You are already registered as a doctor");
        require(bytes(nombre).length > 0, "Invalid name");

        medicosRegistrados[msg.sender] = true;
        nombresMedicos[msg.sender] = nombre;

        emit MedicoRegistrado(msg.sender, block.timestamp);
    }

    /**
     * @notice Register new patient with affiliation data
     * @param _pacienteAddress Patient's wallet address
     */
    function registrarPaciente(
        address _pacienteAddress,
        string memory _nombre,
        uint8 _edad,
        string memory _sexo,
        string memory _tipoSangre,
        string memory _direccion,
        string memory _telefono,
        string memory _email,
        string memory _numeroSeguroSocial
    ) external {
        require(_pacienteAddress != address(0), "Invalid patient address");
        require(!registros[_pacienteAddress].existe, "Patient is already registered");
        require(bytes(_nombre).length > 0, "Name is required");
        require(_edad > 0 && _edad < 150, "Invalid age");

        PatientRecord storage record = registros[_pacienteAddress];

        record.pacienteAddress = _pacienteAddress;
        record.existe = true;

        record.afiliacion = AffiliationData({
            nombre: _nombre,
            edad: _edad,
            sexo: _sexo,
            tipoSangre: _tipoSangre,
            direccion: _direccion,
            telefono: _telefono,
            email: _email,
            numeroSeguroSocial: _numeroSeguroSocial,
            fechaRegistro: block.timestamp
        });

        pacientesRegistrados.push(_pacienteAddress);

        emit PacienteRegistrado(_pacienteAddress, block.timestamp);
    }

    // ========== PERMISSION MANAGEMENT ==========

    /**
     * @notice Authorize a doctor to access your data
     * @param medico Doctor's address
     */
    function autorizarMedico(address medico) external {
        require(registros[msg.sender].existe, "You are not registered");
        require(medicosRegistrados[medico], "The doctor is not registered");
        require(!registros[msg.sender].medicosAutorizados[medico], "Doctor already authorized");

        registros[msg.sender].medicosAutorizados[medico] = true;
        registros[msg.sender].listaMedicos.push(medico);

        emit MedicoAutorizado(msg.sender, medico);
    }

    /**
     * @notice Revoke access from a doctor
     * @param medico Doctor's address
     */
    function revocarMedico(address medico) external {
        require(registros[msg.sender].existe, "You are not registered");
        require(registros[msg.sender].medicosAutorizados[medico], "Doctor is not authorized");

        registros[msg.sender].medicosAutorizados[medico] = false;

        // Remove from list
        address[] storage lista = registros[msg.sender].listaMedicos;
        for (uint i = 0; i < lista.length; i++) {
            if (lista[i] == medico) {
                lista[i] = lista[lista.length - 1];
                lista.pop();
                break;
            }
        }

        emit MedicoRevocado(msg.sender, medico);
    }

    // ========== DISEASE MANAGEMENT ==========

    /**
     * @notice Add disease to the record
     * @dev Only the patient or authorized doctor can add
     */
    function agregarEnfermedad(
        address paciente,
        string memory nombre,
        string memory descripcion,
        string memory gravedad,
        string memory tratamiento
    ) external soloAutorizado(paciente) {
        require(registros[paciente].existe, "Patient not registered");

        Disease memory nuevaEnfermedad = Disease({
            nombre: nombre,
            descripcion: descripcion,
            fechaDiagnostico: block.timestamp,
            gravedad: gravedad,
            activa: true,
            tratamiento: tratamiento
        });

        registros[paciente].enfermedades.push(nuevaEnfermedad);

        emit EnfermedadAgregada(paciente, block.timestamp);
    }

    /**
     * @notice Mark disease as inactive
     */
    function marcarEnfermedadInactiva(address paciente, uint256 index)
        external
        soloAutorizado(paciente)
    {
        require(index < registros[paciente].enfermedades.length, "Invalid index");
        registros[paciente].enfermedades[index].activa = false;

        emit DatosActualizados(paciente, block.timestamp);
    }

    // ========== MEDICAL HISTORY MANAGEMENT ==========

    /**
     * @notice Add personal or family medical history
     */
    function agregarAntecedente(
        address paciente,
        string memory tipo,
        string memory condicion,
        string memory descripcion,
        string memory relacionFamiliar
    ) external soloAutorizado(paciente) {
        require(registros[paciente].existe, "Patient not registered");

        MedicalHistory memory nuevoAntecedente = MedicalHistory({
            tipo: tipo,
            condicion: condicion,
            descripcion: descripcion,
            relacionFamiliar: relacionFamiliar,
            fecha: block.timestamp
        });

        registros[paciente].antecedentes.push(nuevoAntecedente);

        emit AntecedenteAgregado(paciente, block.timestamp);
    }

    // ========== DATA UPDATE ==========

    /**
     * @notice Update affiliation data
     */
    function actualizarAfiliacion(
        string memory _nombre,
        uint8 _edad,
        string memory _direccion,
        string memory _telefono,
        string memory _email
    ) external {
        require(registros[msg.sender].existe, "You are not registered");

        AffiliationData storage afiliacion = registros[msg.sender].afiliacion;

        if (bytes(_nombre).length > 0) afiliacion.nombre = _nombre;
        if (_edad > 0) afiliacion.edad = _edad;
        if (bytes(_direccion).length > 0) afiliacion.direccion = _direccion;
        if (bytes(_telefono).length > 0) afiliacion.telefono = _telefono;
        if (bytes(_email).length > 0) afiliacion.email = _email;

        emit DatosActualizados(msg.sender, block.timestamp);
    }

    // ========== QUERIES (View Functions) ==========

    /**
     * @notice Get affiliation data
     */
    function obtenerAfiliacion(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (AffiliationData memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].afiliacion;
    }

    /**
     * @notice Get all diseases
     */
    function obtenerEnfermedades(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (Disease[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].enfermedades;
    }

    /**
     * @notice Get only active diseases
     */
    function obtenerEnfermedadesActivas(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (Disease[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");

        Disease[] memory todasEnfermedades = registros[paciente].enfermedades;

        // Count active ones
        uint count = 0;
        for (uint i = 0; i < todasEnfermedades.length; i++) {
            if (todasEnfermedades[i].activa) count++;
        }

        // Create array of active ones
        Disease[] memory activas = new Disease[](count);
        uint index = 0;
        for (uint i = 0; i < todasEnfermedades.length; i++) {
            if (todasEnfermedades[i].activa) {
                activas[index] = todasEnfermedades[i];
                index++;
            }
        }

        return activas;
    }

    /**
     * @notice Get medical history
     */
    function obtenerAntecedentes(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (MedicalHistory[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].antecedentes;
    }

    /**
     * @notice Verify if a doctor is authorized
     */
    function estaMedicoAutorizado(address paciente, address medico)
        external
        view
        returns (bool)
    {
        return registros[paciente].medicosAutorizados[medico];
    }

    /**
     * @notice Get list of authorized doctors
     */
    function obtenerMedicosAutorizados(address paciente)
        external
        view
        soloPaciente(paciente)
        returns (address[] memory)
    {
        return registros[paciente].listaMedicos;
    }

    /**
     * @notice Verify if the patient exists
     */
    function pacienteExiste(address paciente) external view returns (bool) {
        return registros[paciente].existe;
    }

    /**
     * @notice Get doctor's name
     */
    function obtenerNombreMedico(address medico)
        external
        view
        returns (string memory)
    {
        require(medicosRegistrados[medico], "Doctor not registered");
        return nombresMedicos[medico];
    }

    /**
     * @notice Get total number of registered patients
     */
    function totalPacientes() external view returns (uint256) {
        return pacientesRegistrados.length;
    }
}
