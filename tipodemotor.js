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


