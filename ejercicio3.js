

function costos(clave, tiempo_en_minuto){
    let costo_de_la_llamada, descuento, costo_del_minuto;
    switch (clave) {


        case 12:
            costo_de_la_llamada = 2
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10%: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 15:
            costo_de_la_llamada = 2.20
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
           
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 18:
            costo_de_la_llamada = 4.50
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 19:
            costo_de_la_llamada = 3.50
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 23:
            costo_de_la_llamada = 6
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
           
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_de_la_llamada);
            break;
        case 25:
            costo_de_la_llamada = 6
            costo_del_minuto = tiempo_en_minuto * costo_de_la_llamada;
            descuento = costo_del_minuto - (costo_del_minuto * 0.10);
            
            tiempo_en_minuto <= 30 ? console.log("Se le aplicara un descueno del 10: " + descuento) : console.log("El costo de la llamada sera: " + costo_del_minuto);
            break;
        default:
            console.log("La clave que usted ingreso es invalida, intente nuevamente");
            break;
    }

}

        costos(12,40)