// 5.	Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad.


function calcular_mayor(areglo){
        var contador=0
        for ( let i =0 ; i<areglo.length; i++){
            
            if(areglo[i]>=18){
                contador++
            }
        }   console.log("personas mayores de edad son:" + contador);
}
    calcular_mayor([7,6,9,10,37,18,54,33,22,12])