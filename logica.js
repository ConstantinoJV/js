

let nombre = prompt ("Bienvenido, cual desea que sea su Nombre de usuario?");



class Nivel{
    constructor(id,descrip,precio){
        this.id = id
        this.descrip = descrip
        this.precio = precio
    }
    descripcion(){
        return "Nivel: "+this.id+"=>  "+this.descrip+", con un costo de "+this.precio+"$\n" 
    }
}

class ControlNivel{
    constructor(){
        this.listaNiveles = []
    }
    agregar(nivel){
        this.listaNiveles.push(nivel)
    }
    mostrar(){
        let acumuladora = "Listado de niveles\n\n "
        this.listaNiveles.forEach(nivel => {
            acumuladora = acumuladora + nivel.descripcion()
        })
        return acumuladora
    }
}

const n1 = new Nivel(1,"Optimizar tu sistema de admision, escape, y frenos",5000)
const n2 = new Nivel(2,"Optimizacion del sistema de suspension e inyeccion",9000)
const n3 = new Nivel(3,"Mejora de la rigides del compacto, programacion de la ecu",12000)
const n4 = new Nivel(4,"Implementacion de sistema de induccion forzada y mejora de la ignicion",18000)
const n5 = new Nivel(5,"Performanse de todos los sistemas",20000)

const controlN = new ControlNivel

controlN.agregar(n1)
controlN.agregar(n2)
controlN.agregar(n3)
controlN.agregar(n4)
controlN.agregar(n5)

alert (controlN.mostrar())



function nivel() {
    return  prompt (nombre + ", del 1 al 5 selecciona que modificacion quieres para tu vehiculo ?");   
}
let id = nivel();

while (id<1 || id>5){
    alert ("modificacion invalida, intente denuevo");
    nivel();
    break;
}


function seleccion(id){

    if (id==1){
        alert ( "Seleccionastes optimizar tu sistema de admision, escape, y frenos con un costo de 5000$");
    }
    else if(id==2){
        alert ("Seleccionastes optimizacion del sistema de suspension e inyeccion con un costo de 9000$");
    }
    else if(id==3){
        alert ("Seleccionastes mejora de la rigides del compacto, programacion de la ecu, con un costo de 12000$");
    }
    else if(id==4){
        alert ("Seleccionastes implementacion de sistema de induccion forzada y mejora de la ignicion con un costo de 18000$");
    }
    else if(id==5){
        alert ("Seleccionastes performanse de todos los sistemas con un costo base de 20000$");
    }
}

seleccion(id);















    



