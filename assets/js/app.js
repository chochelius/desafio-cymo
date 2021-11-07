class Consultorio {
    constructor(nombre, paciente) {
        this.nombre = nombre;
        this.paciente = paciente || [];
    }
    //setter pacientes
    set setPaciente(paciente){
        this.paciente.push(paciente)
    }
    //getter pacientes
    get getPaciente(){
        console.log(this.paciente);
    }
    //método buscar
    buscarPorPaciente(nombre){ 
        return this.paciente.find((paciente) => paciente.nombre === nombre);
    }
}

class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
    //setters de elementos dentro de paciente
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    set seteEdad(edad) {
        this.edad = edad;
    }
    set setRut(rut) {
        this.rut = rut;
    }
    set setDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
    }
}

const consultorio1 = new Consultorio("Consultorio Ñuñoa")

const paciente1 = new Paciente("FRANCISCA ROJAS", 55, "9878782-1", "Hipertensión")
const paciente2 = new Paciente("PAMELA ESTRADA", 38, "15345241-3", "Diabetes")
const paciente3 = new Paciente("ARMANDO LUNA", 30, "17666419-0", "Sano")
const paciente4 = new Paciente("MANUEL GODOY", 39, "14989389-K", "Hipertensión")

consultorio1.setPaciente = [paciente1, paciente2, paciente3, paciente4]

console.log(consultorio1);
//buscar paciente por nombre
const pacienteEncontrado = consultorio1.buscarPorPaciente("PAMELA ESTRADA");
console.log(pacienteEncontrado);
//encontrar todos los pacientes
const todosLosPacientes = consultorio1.getPaciente
