// if, else, else if
var valor = 2;

if (valor === 2) {
    console.log("Soy un dos"); 
} else {
    console.log("No soy un dos");
}

if (valor > 2) {
    console.log("Soy mayor a dos"); 
} else if (valor < 2) {
    console.log("No menor a un dos");
} else {
    console.log("No igual a un dos");
}

// Operador ternario
 var numero = valor === 2 ? "Soy un dos" : "No soy un dos";
 console.log(numero);

// Reto con if
var opciones = ["piedra", "papel", "tijera"];
var op_jugador = Number(
    prompt("Escoge un valor: Piedra = 1, Papel = 2, Tijera = 3", "")
);

while (op_jugador == null || op_jugador > 3 || op_jugador < 1 || op_jugador == NaN){
    alert("Seleccione una opcion valida");
    op_jugador = Number(
        prompt("Escoge un valor: Piedra = 1, Papel = 2, Tijera = 3", "")
    );
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

var resultado = function (jugador, computadora) {
    var mensaje = "JUGADOR VS COMPUTADORA\n" + 
    "Jugador eligio: " + jugador + "\nComputadora eligio: " + 
    computadora + "\nRESULTADO\n";
    if (jugador === computadora) {
        alert(mensaje + "Empate");
    } else if (jugador === "piedra" && computadora === "tijera" ||
    jugador === "papel" && computadora === "piedra" ||
    jugador === "tijera" && computadora === "papel") {
        alert(mensaje + "Ganó el jugador");
    } else {
        alert(mensaje + "Ganó la computadora");
    }
}

resultado(opciones[op_jugador-1], opciones.random());
