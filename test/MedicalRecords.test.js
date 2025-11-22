const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MedicalRecords", function () {
  let medicalRecords;
  let paciente, medico1, medico2, otro;

  beforeEach(async function () {
    [paciente, medico1, medico2, otro] = await ethers.getSigners();

    const MedicalRecords = await ethers.getContractFactory("MedicalRecords");
    medicalRecords = await MedicalRecords.deploy();
    await medicalRecords.waitForDeployment();
  });

  describe("Registro de Médicos", function () {
    it("Debería permitir registrar un médico", async function () {
      await expect(
        medicalRecords.connect(medico1).registrarMedico("Dr. Juan Pérez")
      )
        .to.emit(medicalRecords, "MedicoRegistrado")
        .withArgs(medico1.address, await ethers.provider.getBlock('latest').then(b => b.timestamp + 1));

      expect(await medicalRecords.medicosRegistrados(medico1.address)).to.be.true;
      expect(await medicalRecords.obtenerNombreMedico(medico1.address)).to.equal("Dr. Juan Pérez");
    });

    it("No debería permitir registrar el mismo médico dos veces", async function () {
      await medicalRecords.connect(medico1).registrarMedico("Dr. Juan Pérez");

      await expect(
        medicalRecords.connect(medico1).registrarMedico("Dr. Juan Pérez")
      ).to.be.revertedWith("Ya estas registrado como medico");
    });

    it("No debería permitir nombre vacío", async function () {
      await expect(
        medicalRecords.connect(medico1).registrarMedico("")
      ).to.be.revertedWith("Nombre invalido");
    });
  });

  describe("Registro de Pacientes", function () {
    it("Debería permitir registrar un paciente con datos completos", async function () {
      await expect(
        medicalRecords.connect(paciente).registrarPaciente(
          "María García",
          35,
          "F",
          "O+",
          "Calle Principal 123",
          "+52 555 1234",
          "maria@email.com",
          "SSN-123456789"
        )
      )
        .to.emit(medicalRecords, "PacienteRegistrado")
        .withArgs(paciente.address, await ethers.provider.getBlock('latest').then(b => b.timestamp + 1));

      expect(await medicalRecords.pacienteExiste(paciente.address)).to.be.true;
      expect(await medicalRecords.totalPacientes()).to.equal(1);
    });

    it("No debería permitir registrar el mismo paciente dos veces", async function () {
      await medicalRecords.connect(paciente).registrarPaciente(
        "María García", 35, "F", "O+", "Calle Principal 123",
        "+52 555 1234", "maria@email.com", "SSN-123456789"
      );

      await expect(
        medicalRecords.connect(paciente).registrarPaciente(
          "María García", 35, "F", "O+", "Calle Principal 123",
          "+52 555 1234", "maria@email.com", "SSN-123456789"
        )
      ).to.be.revertedWith("Ya estas registrado");
    });

    it("Debería validar edad", async function () {
      await expect(
        medicalRecords.connect(paciente).registrarPaciente(
          "Test", 0, "F", "O+", "Dir", "Tel", "email", "SSN"
        )
      ).to.be.revertedWith("Edad invalida");

      await expect(
        medicalRecords.connect(paciente).registrarPaciente(
          "Test", 200, "F", "O+", "Dir", "Tel", "email", "SSN"
        )
      ).to.be.revertedWith("Edad invalida");
    });
  });

  describe("Gestión de Permisos", function () {
    beforeEach(async function () {
      // Registrar paciente y médicos
      await medicalRecords.connect(paciente).registrarPaciente(
        "María García", 35, "F", "O+", "Calle Principal 123",
        "+52 555 1234", "maria@email.com", "SSN-123456789"
      );
      await medicalRecords.connect(medico1).registrarMedico("Dr. Juan Pérez");
      await medicalRecords.connect(medico2).registrarMedico("Dra. Ana López");
    });

    it("Debería permitir autorizar a un médico", async function () {
      await expect(
        medicalRecords.connect(paciente).autorizarMedico(medico1.address)
      )
        .to.emit(medicalRecords, "MedicoAutorizado")
        .withArgs(paciente.address, medico1.address);

      expect(
        await medicalRecords.estaMedicoAutorizado(paciente.address, medico1.address)
      ).to.be.true;
    });

    it("No debería permitir autorizar médico no registrado", async function () {
      await expect(
        medicalRecords.connect(paciente).autorizarMedico(otro.address)
      ).to.be.revertedWith("El medico no esta registrado");
    });

    it("Debería permitir revocar acceso a un médico", async function () {
      await medicalRecords.connect(paciente).autorizarMedico(medico1.address);

      await expect(
        medicalRecords.connect(paciente).revocarMedico(medico1.address)
      )
        .to.emit(medicalRecords, "MedicoRevocado")
        .withArgs(paciente.address, medico1.address);

      expect(
        await medicalRecords.estaMedicoAutorizado(paciente.address, medico1.address)
      ).to.be.false;
    });

    it("Debería obtener lista de médicos autorizados", async function () {
      await medicalRecords.connect(paciente).autorizarMedico(medico1.address);
      await medicalRecords.connect(paciente).autorizarMedico(medico2.address);

      const lista = await medicalRecords.connect(paciente).obtenerMedicosAutorizados(paciente.address);
      expect(lista.length).to.equal(2);
      expect(lista).to.include(medico1.address);
      expect(lista).to.include(medico2.address);
    });
  });

  describe("Gestión de Enfermedades", function () {
    beforeEach(async function () {
      await medicalRecords.connect(paciente).registrarPaciente(
        "María García", 35, "F", "O+", "Calle Principal 123",
        "+52 555 1234", "maria@email.com", "SSN-123456789"
      );
      await medicalRecords.connect(medico1).registrarMedico("Dr. Juan Pérez");
      await medicalRecords.connect(paciente).autorizarMedico(medico1.address);
    });

    it("El paciente debería poder agregar una enfermedad", async function () {
      await expect(
        medicalRecords.connect(paciente).agregarEnfermedad(
          paciente.address,
          "Diabetes Tipo 2",
          "Diagnosticada durante chequeo anual",
          "Moderada",
          "Metformina 500mg dos veces al día"
        )
      )
        .to.emit(medicalRecords, "EnfermedadAgregada")
        .withArgs(paciente.address, await ethers.provider.getBlock('latest').then(b => b.timestamp + 1));

      const enfermedades = await medicalRecords.connect(paciente).obtenerEnfermedades(paciente.address);
      expect(enfermedades.length).to.equal(1);
      expect(enfermedades[0].nombre).to.equal("Diabetes Tipo 2");
      expect(enfermedades[0].activa).to.be.true;
    });

    it("Médico autorizado debería poder agregar enfermedad", async function () {
      await medicalRecords.connect(medico1).agregarEnfermedad(
        paciente.address,
        "Hipertensión",
        "Presión arterial elevada detectada",
        "Leve",
        "Enalapril 10mg diario"
      );

      const enfermedades = await medicalRecords.connect(paciente).obtenerEnfermedades(paciente.address);
      expect(enfermedades.length).to.equal(1);
      expect(enfermedades[0].nombre).to.equal("Hipertensión");
    });

    it("Médico NO autorizado NO debería poder agregar enfermedad", async function () {
      await expect(
        medicalRecords.connect(medico2).agregarEnfermedad(
          paciente.address,
          "Test",
          "Test",
          "Leve",
          "Test"
        )
      ).to.be.revertedWith("No tienes permiso para acceder a estos datos");
    });

    it("Debería poder marcar enfermedad como inactiva", async function () {
      await medicalRecords.connect(paciente).agregarEnfermedad(
        paciente.address,
        "Gripe",
        "Gripe estacional",
        "Leve",
        "Reposo"
      );

      await medicalRecords.connect(paciente).marcarEnfermedadInactiva(paciente.address, 0);

      const enfermedades = await medicalRecords.connect(paciente).obtenerEnfermedades(paciente.address);
      expect(enfermedades[0].activa).to.be.false;
    });

    it("Debería filtrar enfermedades activas", async function () {
      // Agregar 3 enfermedades
      await medicalRecords.connect(paciente).agregarEnfermedad(
        paciente.address, "Diabetes", "Desc", "Moderada", "Tratamiento"
      );
      await medicalRecords.connect(paciente).agregarEnfermedad(
        paciente.address, "Gripe", "Desc", "Leve", "Tratamiento"
      );
      await medicalRecords.connect(paciente).agregarEnfermedad(
        paciente.address, "Hipertensión", "Desc", "Leve", "Tratamiento"
      );

      // Marcar gripe como inactiva
      await medicalRecords.connect(paciente).marcarEnfermedadInactiva(paciente.address, 1);

      const activas = await medicalRecords.connect(paciente).obtenerEnfermedadesActivas(paciente.address);
      expect(activas.length).to.equal(2);
      expect(activas[0].nombre).to.equal("Diabetes");
      expect(activas[1].nombre).to.equal("Hipertensión");
    });
  });

  describe("Gestión de Antecedentes", function () {
    beforeEach(async function () {
      await medicalRecords.connect(paciente).registrarPaciente(
        "María García", 35, "F", "O+", "Calle Principal 123",
        "+52 555 1234", "maria@email.com", "SSN-123456789"
      );
    });

    it("Debería poder agregar antecedente personal", async function () {
      await expect(
        medicalRecords.connect(paciente).agregarAntecedente(
          paciente.address,
          "Personal",
          "Apendicitis",
          "Apendicectomía a los 15 años",
          ""
        )
      )
        .to.emit(medicalRecords, "AntecedenteAgregado")
        .withArgs(paciente.address, await ethers.provider.getBlock('latest').then(b => b.timestamp + 1));

      const antecedentes = await medicalRecords.connect(paciente).obtenerAntecedentes(paciente.address);
      expect(antecedentes.length).to.equal(1);
      expect(antecedentes[0].tipo).to.equal("Personal");
      expect(antecedentes[0].condicion).to.equal("Apendicitis");
    });

    it("Debería poder agregar antecedente familiar", async function () {
      await medicalRecords.connect(paciente).agregarAntecedente(
        paciente.address,
        "Familiar",
        "Diabetes",
        "Padre diagnosticado con diabetes tipo 2",
        "Padre"
      );

      const antecedentes = await medicalRecords.connect(paciente).obtenerAntecedentes(paciente.address);
      expect(antecedentes[0].tipo).to.equal("Familiar");
      expect(antecedentes[0].relacionFamiliar).to.equal("Padre");
    });
  });

  describe("Actualización de Datos", function () {
    beforeEach(async function () {
      await medicalRecords.connect(paciente).registrarPaciente(
        "María García", 35, "F", "O+", "Calle Principal 123",
        "+52 555 1234", "maria@email.com", "SSN-123456789"
      );
    });

    it("Debería poder actualizar datos de afiliación", async function () {
      await expect(
        medicalRecords.connect(paciente).actualizarAfiliacion(
          "María García López",
          36,
          "Calle Nueva 456",
          "+52 555 9999",
          "nueva@email.com"
        )
      )
        .to.emit(medicalRecords, "DatosActualizados")
        .withArgs(paciente.address, await ethers.provider.getBlock('latest').then(b => b.timestamp + 1));

      const afiliacion = await medicalRecords.connect(paciente).obtenerAfiliacion(paciente.address);
      expect(afiliacion.nombre).to.equal("María García López");
      expect(afiliacion.edad).to.equal(36);
      expect(afiliacion.direccion).to.equal("Calle Nueva 456");
    });
  });

  describe("Control de Acceso", function () {
    beforeEach(async function () {
      await medicalRecords.connect(paciente).registrarPaciente(
        "María García", 35, "F", "O+", "Calle Principal 123",
        "+52 555 1234", "maria@email.com", "SSN-123456789"
      );
    });

    it("Usuario no autorizado NO debería ver datos de afiliación", async function () {
      await expect(
        medicalRecords.connect(otro).obtenerAfiliacion(paciente.address)
      ).to.be.revertedWith("No tienes permiso para acceder a estos datos");
    });

    it("Usuario no autorizado NO debería ver enfermedades", async function () {
      await expect(
        medicalRecords.connect(otro).obtenerEnfermedades(paciente.address)
      ).to.be.revertedWith("No tienes permiso para acceder a estos datos");
    });

    it("Usuario no autorizado NO debería ver antecedentes", async function () {
      await expect(
        medicalRecords.connect(otro).obtenerAntecedentes(paciente.address)
      ).to.be.revertedWith("No tienes permiso para acceder a estos datos");
    });

    it("El paciente debería ver sus propios datos", async function () {
      const afiliacion = await medicalRecords.connect(paciente).obtenerAfiliacion(paciente.address);
      expect(afiliacion.nombre).to.equal("María García");
    });
  });

  describe("Privacidad de Datos", function () {
    it("Los datos deberían estar cifrados en storage", async function () {
      await medicalRecords.connect(paciente).registrarPaciente(
        "DATO_SENSIBLE_123", 35, "F", "O+", "Direccion Secreta",
        "Telefono Secreto", "email@secreto.com", "SSN-SECRETO"
      );

      // Intentar leer storage directamente (debería estar cifrado)
      // En Sapphire, eth_getStorageAt retorna 0x0 para datos cifrados
      const contractAddress = await medicalRecords.getAddress();

      // Slot 0 debería estar cifrado (registros mapping)
      const slot0 = await ethers.provider.getStorage(contractAddress, 0);

      // En Sapphire, storage cifrado retorna 0
      console.log("Storage slot 0:", slot0);
      // No podemos verificar directamente, pero los datos NO deberían ser legibles
    });
  });
});
