// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@oasisprotocol/sapphire-contracts/contracts/Sapphire.sol";

contract MedicalRecords {

    struct AffiliationData {
        string nombre;
        uint8 edad;
        string sexo;
        string tipoSangre;
        string direccion;
        string telefono;
        string email;
        string numeroSeguroSocial;
        uint256 fechaRegistro;
    }

    struct Disease {
        string nombre;
        string descripcion;
        uint256 fechaDiagnostico;
        string gravedad;
        bool activa;
        string tratamiento;
    }

    struct MedicalHistory {
        string tipo;
        string condicion;
        string descripcion;
        string relacionFamiliar;
        uint256 fecha;
    }

    struct PatientRecord {
        address pacienteAddress;
        bool existe;
        AffiliationData afiliacion;
        Disease[] enfermedades;
        MedicalHistory[] antecedentes;
        mapping(address => bool) medicosAutorizados;
        address[] listaMedicos;
    }

    mapping(address => PatientRecord) private registros;

    mapping(address => bool) public medicosRegistrados;
    mapping(address => string) private nombresMedicos;

    address[] private pacientesRegistrados;

    event PacienteRegistrado(address indexed paciente, uint256 timestamp);
    event MedicoRegistrado(address indexed medico, uint256 timestamp);
    event MedicoAutorizado(address indexed paciente, address indexed medico);
    event MedicoRevocado(address indexed paciente, address indexed medico);
    event EnfermedadAgregada(address indexed paciente, uint256 timestamp);
    event AntecedenteAgregado(address indexed paciente, uint256 timestamp);
    event DatosActualizados(address indexed paciente, uint256 timestamp);

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

    function registrarMedico(string memory nombre) external {
        require(!medicosRegistrados[msg.sender], "You are already registered as a doctor");
        require(bytes(nombre).length > 0, "Invalid name");

        medicosRegistrados[msg.sender] = true;
        nombresMedicos[msg.sender] = nombre;

        emit MedicoRegistrado(msg.sender, block.timestamp);
    }

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

    function autorizarMedico(address medico) external {
        require(registros[msg.sender].existe, "You are not registered");
        require(medicosRegistrados[medico], "The doctor is not registered");
        require(!registros[msg.sender].medicosAutorizados[medico], "Doctor already authorized");

        registros[msg.sender].medicosAutorizados[medico] = true;
        registros[msg.sender].listaMedicos.push(medico);

        emit MedicoAutorizado(msg.sender, medico);
    }

    function revocarMedico(address medico) external {
        require(registros[msg.sender].existe, "You are not registered");
        require(registros[msg.sender].medicosAutorizados[medico], "Doctor is not authorized");

        registros[msg.sender].medicosAutorizados[medico] = false;

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

    function marcarEnfermedadInactiva(address paciente, uint256 index)
        external
        soloAutorizado(paciente)
    {
        require(index < registros[paciente].enfermedades.length, "Invalid index");
        registros[paciente].enfermedades[index].activa = false;

        emit DatosActualizados(paciente, block.timestamp);
    }

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

    function obtenerAfiliacion(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (AffiliationData memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].afiliacion;
    }

    function obtenerEnfermedades(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (Disease[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].enfermedades;
    }

    function obtenerEnfermedadesActivas(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (Disease[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");

        Disease[] memory todasEnfermedades = registros[paciente].enfermedades;

        uint count = 0;
        for (uint i = 0; i < todasEnfermedades.length; i++) {
            if (todasEnfermedades[i].activa) count++;
        }

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

    function obtenerAntecedentes(address paciente)
        external
        view
        soloAutorizado(paciente)
        returns (MedicalHistory[] memory)
    {
        require(registros[paciente].existe, "Patient not registered");
        return registros[paciente].antecedentes;
    }

    function estaMedicoAutorizado(address paciente, address medico)
        external
        view
        returns (bool)
    {
        return registros[paciente].medicosAutorizados[medico];
    }

    function obtenerMedicosAutorizados(address paciente)
        external
        view
        soloPaciente(paciente)
        returns (address[] memory)
    {
        return registros[paciente].listaMedicos;
    }

    function pacienteExiste(address paciente) external view returns (bool) {
        return registros[paciente].existe;
    }

    function obtenerNombreMedico(address medico)
        external
        view
        returns (string memory)
    {
        require(medicosRegistrados[medico], "Doctor not registered");
        return nombresMedicos[medico];
    }

    function totalPacientes() external view returns (uint256) {
        return pacientesRegistrados.length;
    }
}
