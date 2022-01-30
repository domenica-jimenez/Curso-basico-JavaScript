// Hoisting en variables
console.log(miNombre); // undefined
var miNombre = "Doménica"; 

// Hoisting en funciones
hey();
function hey() {
    console.log("Hola" + otroNombre); // Hola undefined
}
var otroNombre = "Camila"; 
