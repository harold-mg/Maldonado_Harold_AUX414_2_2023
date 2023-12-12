let flores = ['rosas', 'claveles', 'tulipanes', 'margaritas']
//console.log(flores[1])
/* for (let i = 0; i < flores.length; i++) {
    console.log(flores[i])
}
let miFlor = flores[1]
let arrayMiFlor = []
arrayMiFlor.push(flores[1])
console.log('mi flor es', miFlor);
console.log('mi flor array', arrayMiFlor); */
//mostrar los pares e impares de un array
let numeros = [4, 6, 1, 5, 7, 8, 12, 11]
//4, 6, 8, 12
//1, 5, 7, 11
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 === 0) {
        console.log('es par:', numeros[i])
    }else{
        console.log('es impar:', numeros[i])
    }
}
numPar = []
numImpar = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 === 0) {
        numPar.push(numeros[i])        
    }else{
        numImpar.push(numeros[i])
    }
}
console.log(numPar);
console.log(numImpar);
for (let i = 0; i < numPar.length; i++) {
    console.log(numPar[i])    
}
