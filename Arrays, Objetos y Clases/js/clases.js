class Auto {
    constructor(marca, color, modelo, placa, puertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.placa = placa;
        this.puertas = puertas;
    }
    informacion() {
        console.log('mi auto es: '+ this.marca+' y tiene '+ this.puertas+' puertas');
    }
}

let miAuto = new Auto('toyota', 'negro', 2008, 'thg-876', 4);
let auto2 = new Auto('nissan', 'azul', 2020, 'tyui-567', 2);
console.log(miAuto);
miAuto.informacion();
