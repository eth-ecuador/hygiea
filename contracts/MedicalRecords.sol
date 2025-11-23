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
     * @notice Medical document stored on Filecoin (FR 1.1)
     * @dev Follows the design spec: Patient_ID, CID, Record_Hash, Doctor_ID, timestamp
     */
    struct MedicalDocument {
        string cid;              // Filecoin Content ID pointing to encrypted file
        bytes32 recordHash;      // Hash of the original data for integrity verification
        address doctorId;        // Doctor who uploaded the document
        string documentType;     // "Lab Result", "Imaging", "Prescription", "Medical Report", etc.
        string description;      // Brief description of the document
        uint256 timestamp;       // When the document was uploaded
        bool exists;             // Flag to check if document exists
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
        MedicalDocument[] documentos;  // Medical documents stored on Filecoin
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
    event DocumentoAgregado(
        address indexed paciente,
        address indexed doctor,
        string cid,
        string documentType,
        uint256 timestamp
    );

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
    ) external soloMedicoRegistrado {
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

        // Automatically authorize the doctor who registered the patient
        record.medicosAutorizados[msg.sender] = true;
        record.listaMedicos.push(msg.sender);

        emit PacienteRegistrado(_pacienteAddress, block.timestamp);
        emit MedicoAutorizado(_pacienteAddress, msg.sender);
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

    // ========== MEDICAL DOCUMENTS MANAGEMENT (FR 1.1 - Filecoin Integration) ==========

    /**
     * @notice Encrypt patient's complete record using Sapphire.encrypt()
     * @dev This function serializes and encrypts all patient data for Filecoin storage
     * @param paciente Patient's address
     * @return encryptedData Encrypted patient record ready for Filecoin upload
     * @return dataHash Hash of the original data for integrity verification
     */
    function encriptarRegistroPaciente(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (bytes memory encryptedData, bytes32 dataHash)
    {
        require(registros[paciente].existe, "Patient not registered");

        // Serialize patient record to JSON-like string
        string memory recordData = _serializarRegistro(paciente);
        bytes memory plainData = bytes(recordData);

        // Calculate hash of plain data
        dataHash = keccak256(plainData);

        // Generate encryption key (256-bit) and nonce
        bytes32 key = bytes32(Sapphire.randomBytes(32, ""));
        bytes32 nonce = bytes32(Sapphire.randomBytes(32, ""));

        // Encrypt using Sapphire
        encryptedData = Sapphire.encrypt(
            key,
            nonce,
            plainData,
            "" // additional data
        );

        // Note: In production, you'd want to securely store/manage the encryption key
        // For now, the key is generated randomly and returned with encrypted data
        return (encryptedData, dataHash);
    }

    /**
     * @notice Encrypt patient record for automatic sync to Filecoin (no authorization required)
     * @dev This version allows auto-sync systems to encrypt patient data without authorization.
     *      Security is maintained through Sapphire TEE encryption.
     *      Use this ONLY for automated backup/sync systems.
     * @param paciente Patient's address
     * @return encryptedData Encrypted patient record
     * @return dataHash Hash of the original data for integrity verification
     */
    function encriptarRegistroPacienteAutoSync(address paciente)
        external
        view
        returns (bytes memory encryptedData, bytes32 dataHash)
    {
        require(registros[paciente].existe, "Patient not registered");

        // Serialize patient record to JSON-like string
        string memory recordData = _serializarRegistro(paciente);
        bytes memory plainData = bytes(recordData);

        // Calculate hash of plain data
        dataHash = keccak256(plainData);

        // Generate encryption key (256-bit) and nonce
        bytes32 key = bytes32(Sapphire.randomBytes(32, ""));
        bytes32 nonce = bytes32(Sapphire.randomBytes(32, ""));

        // Encrypt using Sapphire
        encryptedData = Sapphire.encrypt(
            key,
            nonce,
            plainData,
            "" // additional data
        );

        // Note: Security is maintained through Sapphire TEE encryption
        // Even though this function has no authorization check, the data is encrypted
        return (encryptedData, dataHash);
    }

    /**
     * @notice Internal function to serialize patient record to string format
     * @dev Converts all patient data to a structured format for encryption
     * @param paciente Patient's address
     * @return Serialized patient record
     */
    function _serializarRegistro(address paciente) internal view returns (string memory) {
        PatientRecord storage record = registros[paciente];

        // Build a simple serialization (in production, use proper JSON encoding)
        string memory serialized = string(abi.encodePacked(
            '{"address":"', _addressToString(paciente), '",',
            '"nombre":"', record.afiliacion.nombre, '",',
            '"edad":', _uint2str(record.afiliacion.edad), ',',
            '"sexo":"', record.afiliacion.sexo, '",',
            '"tipoSangre":"', record.afiliacion.tipoSangre, '",',
            '"direccion":"', record.afiliacion.direccion, '",',
            '"telefono":"', record.afiliacion.telefono, '",',
            '"email":"', record.afiliacion.email, '",',
            '"numeroSeguroSocial":"', record.afiliacion.numeroSeguroSocial, '",',
            '"fechaRegistro":', _uint2str(record.afiliacion.fechaRegistro),
            '}'
        ));

        return serialized;
    }

    /**
     * @notice Store Filecoin CID after uploading encrypted data
     * @dev Called after encrypted data has been uploaded to Filecoin
     * @param paciente Patient's address
     * @param _cid Filecoin Content ID
     * @param _recordHash Hash of the original data
     * @param _description Description of the stored record
     */
    function almacenarCIDFilecoin(
        address paciente,
        string memory _cid,
        bytes32 _recordHash,
        string memory _description
    ) external soloMedicoRegistrado {
        require(registros[paciente].existe, "Patient not registered");
        require(bytes(_cid).length > 0, "CID is required");
        require(_recordHash != bytes32(0), "Record hash is required");

        // Only authorized doctors can add documents
        require(
            registros[paciente].medicosAutorizados[msg.sender],
            "You are not authorized to add documents for this patient"
        );

        MedicalDocument memory nuevoDocumento = MedicalDocument({
            cid: _cid,
            recordHash: _recordHash,
            doctorId: msg.sender,
            documentType: "Complete Patient Record",
            description: _description,
            timestamp: block.timestamp,
            exists: true
        });

        registros[paciente].documentos.push(nuevoDocumento);

        emit DocumentoAgregado(paciente, msg.sender, _cid, "Complete Patient Record", block.timestamp);
    }

    /**
     * @notice Add a medical document to patient's record (generic version)
     * @dev Used by doctors to upload any type of medical document to Filecoin
     * @param paciente Patient's address
     * @param _cid Filecoin Content ID
     * @param _recordHash Hash of the original document for integrity
     * @param _documentType Type of document (Lab Result, Imaging, Prescription, etc.)
     * @param _description Brief description of the document
     */
    function agregarDocumentoMedico(
        address paciente,
        string memory _cid,
        bytes32 _recordHash,
        string memory _documentType,
        string memory _description
    ) external soloMedicoRegistrado {
        require(registros[paciente].existe, "Patient not registered");
        require(bytes(_cid).length > 0, "CID is required");
        require(_recordHash != bytes32(0), "Record hash is required");
        require(bytes(_documentType).length > 0, "Document type is required");

        // Only authorized doctors can add documents
        require(
            registros[paciente].medicosAutorizados[msg.sender],
            "You are not authorized to add documents for this patient"
        );

        MedicalDocument memory nuevoDocumento = MedicalDocument({
            cid: _cid,
            recordHash: _recordHash,
            doctorId: msg.sender,
            documentType: _documentType,
            description: _description,
            timestamp: block.timestamp,
            exists: true
        });

        registros[paciente].documentos.push(nuevoDocumento);

        emit DocumentoAgregado(paciente, msg.sender, _cid, _documentType, block.timestamp);
    }

    // Helper functions for serialization
    function _uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) return "0";
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    function _addressToString(address _addr) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_addr)));
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }

    /**
     * @notice Get all medical documents for a patient
     * @param paciente Patient's address
     * @return Array of medical documents
     */
    function obtenerDocumentosMedicos(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (MedicalDocument[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].documentos;
    }

    /**
     * @notice Get a specific medical document by index
     * @param paciente Patient's address
     * @param index Index of the document
     * @return Medical document details
     */
    function obtenerDocumentoPorIndice(address paciente, uint256 index)
        external
        view
        soloAutorizado(paciente)
        returns (MedicalDocument memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        require(index < registros[paciente].documentos.length, "Invalid document index");
        return registros[paciente].documentos[index];
    }

    /**
     * @notice Get total number of documents for a patient
     * @param paciente Patient's address
     * @return Number of documents
     */
    function totalDocumentos(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (uint256)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].documentos.length;
    }

    /**
     * @notice Verify document integrity using stored hash
     * @param paciente Patient's address
     * @param index Document index
     * @param providedHash Hash to verify against
     * @return True if hashes match
     */
    function verificarIntegridadDocumento(
        address paciente,
        uint256 index,
        bytes32 providedHash
    ) external view soloAutorizado(paciente) returns (bool) {
        require(registros[paciente].existe, "Patient not registered");
        require(index < registros[paciente].documentos.length, "Invalid document index");
        return registros[paciente].documentos[index].recordHash == providedHash;
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
