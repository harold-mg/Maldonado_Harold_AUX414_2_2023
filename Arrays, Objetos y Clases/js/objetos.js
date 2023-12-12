let persona = {
    nombre: 'Pepe',
    apellido: 'Cruz',
    edad: 72,
    casado: false,
    mascotas: ['pero', 'gato', 'loro'],
    informacion(){
        console.log('mi nombre es '+ this.nombre + ' y mi apellido es ' + this.apellido)
    }
}

persona.informacion()
console.log(persona.nombre)