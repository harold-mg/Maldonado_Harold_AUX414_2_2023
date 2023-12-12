
//let flores = ['rosas', 'tulipanes', 'claveles', 'margaritas']

//console.log(flores[2])

// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i])
    
// }
// mostrar los numeros pares e impares del siguiente array
//[2, 6, 8, 14, 10]
let numeros = [2, 3, 6, 8, 9, 11, 14, 10]
let numPar = []
let numImpar = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 === 0 ) {
        //console.log(numeros[i], ' es par')
        numPar.push(numeros[i])

    }else{
        //console.log(numeros[i], ' es impar')
        numImpar.push(numeros[i])
    }
}
console.log(numPar)
console.log(numImpar)

// let miNumero = []
// miNumero.push(numeros[2])
// console.log(miNumero)