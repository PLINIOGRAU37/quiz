function mostrarmensaje1() {
    var motor;
     
    motor = prompt ('Por favor intruduce el tipo de motor (solo valido valores 1, 2, 3, 4) : ');
    if (motor =="") {alert ('no has intruducido ningun tipo de motor');}
motor = Number (motor);
switch (motor) {
    case 0: alert ("No hay establecido un valor definido para el tipo de bomba"); break;
    case 1: alert ("La bomba es una bomba de agua"); break;
    case 2: alert ("La bomba es una bomba de gasolina"); break;
    case 3: alert ("La bomba es una bomba de hormigón"); break;
    case 4: alert ("La bomba es una bomba de pasta alimenticia"); break;
    default: alert ("No existe un valor válido para tipo de bomba"); break;
}


}

mostrarmensaje1();


function ejercicio1(){
    var precio = prompt ('Introduce el precio sin impuestos: ');
    var producto = prompt ('Introduce el tipo de producto (válido solo 1,2,3): ');
    precio = Number(precio);
    producto = Number(producto);
    if (isNaN (precio) || isNaN (producto)){
        alert ('Los parámetros introducidos no son numéricos');
    }
    else if (producto != 1 && producto !=2 && producto !=3){
        alert ('El tipo de producto introducido no es correcto. \nSolo son válidos los valores 1, 2 y 3.');
    }
    else {obtenerImporteConImpuestos(precio,producto);}
    }
    
    function ejercicio2(){
        var precio2 = prompt ('Introduce el precio sin impuestos: ');
        precio2 = Number(precio2);
        if (isNaN (precio2)){
            alert ('El precio introducido no es numérico');
        }
          else {
              obtenerImporteConImpuestos2(precio2);
           }
    }
    
    function obtenerImporteConImpuestos(precio2 ,producto) {
        switch (producto) {
            case 1:
            impuesto =precio2*21/100;
            break;
    
            case 2:
            impuesto = precio2*10/100;
            break;
    
            case 3:
            impuesto = precio2*5/100;
            break;
    
            default:
                break;
        }
    
        alert ('Para un importe sin impuestos de ' + precio2 +
    ' y tipo de producto ' + producto + ' el resultado del importe con impuestos es de ' + impuesto)
    valorTotal=precio2+impuesto;
    alert("El precio total con impuesto es "+valorTotal);
    
    
    }
    
    

    ejercicio1();
    obtenerImporteConImpuestos();