var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

// Todo el contenido
console.log(frutas); // ['Manzana', 'Plátano', 'Cereza', 'Fresa']
// Longitud
console.log(frutas.length); // 4
// Elementos individuales
console.log(frutas[0]); // Manzana

// Métodos de los arrays
// push -> Agregar elementos al final
frutas.push("Uvas"); // ['Manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']
// pop -> Elimina el último elemento
frutas.pop(); // ['Manzana', 'Plátano', 'Cereza', 'Fresa']
// unshift -> Agrega elementos al inicio
frutas.unshift("Durazno"); // ['Durazno', 'Manzana', 'Plátano', 'Cereza', 'Fresa']
// shift -> Eliminar el primer elemento
frutas.shift(); // ['Manzana', 'Plátano', 'Cereza', 'Fresa']
// indexOf -> La posicion de un elemento
frutas.indexOf("Cereza"); // 2

// Arrays complejos
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Televisión", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 }
];

// Filter -> Valida si existe con verdadero o falso y genera un nuevo array
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});

console.log(articulosFiltrados); // 0: {nombre: 'Libro', costo: 320}, 1: {nombre: 'Teclado', costo: 500}

// Map -> Genera un nuevo array
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

console.log(nombreArticulos); // ['Bici', 'Televisión', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audífonos']

// Find -> Nos ayuda a encontrar algo dentro del array y genera un nuevo array
var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Libro";
});

console.log(encuentraArticulo); // {nombre: 'Libro', costo: 320}

// ForEach -> No genera un nuevo array perop no modifica el original
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

// Some -> Devuelve verdadero o falso para la condicion y genera un nuevo array
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});

console.log(articulosBaratos); // true

// splice -> Edita el array para eliminar un elemento o editarlo
// Eliminar: el primer numero es el index del item, el segundo es la cantidad de elementos
articulos.splice(3, 1); // { nombre: "Celular", costo: 10000 }
console.log(articulos);
// Editar: se agrega un nuevo parametro al final que será el nuevo item
articulos.splice(0, 1, { nombre: "Moto", costo: 9000 }); // { nombre: "Bici", costo: 3000 }
console.log(articulos);