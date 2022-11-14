// 2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:
/*Precio
Impuesto

$ 0.00 - $ 20.00
No genera impuesto.

$ 20.01 - $ 40.00
30 %

$ 40.01 - $ 500.00
40 %

$ 500.01 en adelante
50 %
*/


function impuesto( Precio){

    if (Precio >20 &&  Precio<=40 ){
        console.log("el impuesto del articulo es de el 30%");
    }else if( Precio>40 && Precio<=500 ){
        console.log("el impuesto del articulo es de el 40%");
    }else if( Precio>=500 ){
        console.log("el impuesto del articulo es de el 50%");
    }else {
    console.log("su articulo no genera impuesto")
    }
}

impuesto(40.01)









