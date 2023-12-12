class Persona {
    constructor(nombre, apellido, edad, ci, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ci = ci;
        this.mascotas = mascotas;
    }
}
console.log(Persona)

ana = new Persona ('Ana', 'Coro', 28, '12345123', ['perro', 'gato', 'loro'])
console.log(ana.nombre)