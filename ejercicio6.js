/* 6.	Elaborar un algoritmo para leer las notas de 1 estudiantes.
Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%) */


var nota1 = 7;
var nota2 = 10;
var nota3 = 8;

var notaAcumulada = nota1 + nota2 + nota3;

var promedio = (nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5);

function nota(){
    
    if (notaAcumulada >= 25){ 
        console.log("EXCELENTE " + "El promedio es: " + promedio.toFixed(2));

    }else if (notaAcumulada >= 20) {
        console.log("BIEN " + "El promedio es: " + promedio.toFixed(2));

    }else if (notaAcumulada >= 15) {
        console.log("SUFICIENTE " + "El promedio es: " + promedio.toFixed(2));

    }else {
        console.log("INSUFICIENTE " + "El promedio es: " + promedio.toFixed(2));
    }
}

nota();