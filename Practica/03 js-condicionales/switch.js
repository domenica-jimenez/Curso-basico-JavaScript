var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    default:
        console.log("Soy default");
}

// Reto con switch
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
    switch (true){
        case jugador === "piedra" && computadora === "tijera":
        case jugador === "papel" && computadora === "piedra":
        case jugador === "tijera" && computadora === "papel":
            alert(mensaje + "Ganó el jugador");
            break;
        case jugador === computadora:
            alert(mensaje + "Empate");
            break;    
        default:
            alert(mensaje + "Ganó la computadora");    
    }
}

resultado(opciones[op_jugador-1], opciones.random());