// Coerción implicita
// Concatenación +
var prueba_1 = 4 + "7";
console.log(prueba_1 + " -> " + typeof prueba_1); // 47 -> string
// Operador numérico *
var prueba_2 = 4 * "7";
console.log(prueba_2 + " -> " + typeof prueba_2); // 28 -> number

// Coerción explícita
//Esto no es coerción explícita
var a = 20;
var b = a + "";
console.log(b + " -> " + typeof b); // 20 -> string

// Esto es una coerción explícita
var c = String(a);
console.log(c + " -> " + typeof c); // 20 -> string
var d = Number(a);
console.log(d + " -> " + typeof d); // 20 -> number

// Number vs ParseInt
var aux_1 = "123asda";
console.log("Number: ", Number(aux_1)); // NaN
console.log("ParseInt: ", parseInt(aux_1)); // 123

var aux_2 = "asda123";
console.log("Number: ", Number(aux_2)); // NaN
console.log("ParseInt: ", parseInt(aux_2)); // NaN