let persona = {
    nombre: 'Pepe',
    apellido: 'Cruz',
    edad: 25,
    ci: '11223344',
    soltero: true,
    info (){
        console.log('ni nombre es '+this.nombre+' y mi apellido es '+this.apellido+' y tengo '+this.edad)
    }
}

console.log(persona)
console.log(persona.apellido)
persona.info()
