// Scope global
var miNombre = "Doménica";

// Scope local
function nombre() {
    var miApellido = "Jiménez";
    console.log(miNombre + "" + miApellido);
}

nombre(); // Doménica Jiménez

console.log(miNombre); // Doménica
console.log(miApellido); // Uncaught ReferenceError: miApellido is not defined