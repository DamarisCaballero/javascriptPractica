// 8.	Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: sumar, restar, multiplicar, dividir.


    function ejercicio(a,b, operaciones){
        switch (operaciones){
             case "suma":
             return console.log(a + b);

             case "resta":
             return console.log(a - b);

             case "multiplicacion":
             return console.log(a * b);

             case "divicion":
             return console.log(a / b);

}
}
        ejercicio(10 , 6, "divicion");