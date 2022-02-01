var estudiantes = ["María", "Sergio", "Rosa", "David"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// for
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// for of
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

// while
while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

// do while
do {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
} while (estudiantes.length > 0);