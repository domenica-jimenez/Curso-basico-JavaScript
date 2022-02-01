var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    // Método de objeto
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.year}`);
    }
};

console.log(miAuto); // {marca: 'Toyota', modelo: 'Corolla', year: 2020}
console.log(miAuto.marca); // Toyota

console.log(miAuto.detalleDelAuto()); // Auto Corolla 2020

// Función constructora
function autoBase (marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

var autoNuevo = new autoBase("Chevrolet", "Spark", 2010);
var autoNuevo2 = new autoBase("Nissan", "Modelo X", 2008);
var autoNuevo3 = new autoBase("Toyota", "Corolla X", 2015);

// Reto
var autos = [];
for (var i = 0; i < 10; i++) {
    autos.push(new autoBase("Chevrolet " + (i+1), "Modelo " + i, 2000 + i));
}

console.log(autos);