// Declarativas (function declaration / function statement)
function miFuncionDec(a) {
    return a;
}

miFuncionDec(3); // 3

// Expresión o anónimas (function expression / funciones anónimas)
var miFuncionExp = function(a, b) {
    return a + b;
}

miFuncionExp(2, 2); // 4


// Ejemplo
function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Dome"); // Hola Dome