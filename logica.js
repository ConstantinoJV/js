

let nombre = prompt ("Bienvenido, cual desea que sea su Nombre de usuario?");



function nivel() {
    let n  = prompt (nombre + ", del 1 al 5 a que nivel deseas modificar tu coche ?");
    return n;
}
let a = nivel();



while (a<1 || a>5){
    alert ("opcion invalida, intente denuevo");
    nivel();
    break;
}

function seleccion(a){

    if (a==1){
        alert ("Puedes optimizar tu sistema de admision, escape, y frenos con un costo de 5000$");
    }
    else if(a==2){
        alert ("Optimizacion del sistema de suspension, inyeccion con un costo de 9000$");
    }
    else if(a==3){
        alert ("Mejora de la rigides del compacto, programacion de la ecu, con un costo de 12000$");
    }
    else if(a==4){
        alert ("implementacion de sistema de induccion forzada y mejora de la ignicion con un costo de 18000$");
    }
    else if(a==5){
        alert ("Performanse de todos los sistemas con un costo base de 20000$");
    }
}

seleccion(a);















    



