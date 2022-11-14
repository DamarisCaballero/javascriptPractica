// 4.	Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.


function tabla (numero){
    var resultado =0
     for( let i=1 ; i <=10 ; i++){
        resultado= numero * i 
        console.log(numero + "*" + i + "=" + resultado)
     }
}
    tabla(2)

    tabla(3)