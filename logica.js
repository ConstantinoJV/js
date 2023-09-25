


class Nivel {
    constructor(id, descrip, precio, img, alt) {
        this.id = id
        this.descrip = descrip
        this.precio = precio
        this.img = img
        this.alt = alt
    }
    
}

class ControlNivel {
    constructor() {
        this.listaNiveles = []
    }
    agregar(nivel) {
        this.listaNiveles.push(nivel)
    }
    mostrarEnDOM() {
        let selectorNiveles = document.getElementById("selectorNiveles")
        this.listaNiveles.forEach(nivel => {
            selectorNiveles.innerHTML +=
                `<div class="card" style="width: 18rem;">
                <img src="${nivel.img}" class="card-img-top" alt="${nivel.alt}">
            <div class="card-body">
                <h5 class="card-title">nivel ${nivel.id}</h5>
                <p class="card-text">${nivel.descrip}</p>
                <p class="card-text">${nivel.precio}</p>
                <button class="btn btn-primary" id="an-${nivel.id}">Adquirir nivel</a>
            </div>
            </div>`
        })
        this.listaNiveles.forEach(nivel => {
            const btn_an = document.getElementById(`an-${nivel.id}`)
            
            btn_an.addEventListener("click",()=>{
                compra.agregar(nivel)
                compra.guardarCompra()
                compra.mostrarEnDOM()
            })
        })
    }
    buscar(id) {
        return this.listaNiveles.find(nivel => nivel.id == id)
    }
}

class Compra {
    constructor() {
        this.listaCompra = []
    }
    agregar(nivel) {
        this.listaCompra.push(nivel)
    }
    guardarCompra(){
        let listaCompraJSON = JSON.stringify(this.listaCompra)
        localStorage.setItem("listaCompra", listaCompraJSON) 
    }
    extraerCompra(){
        let listaCompraJSON = localStorage.getItem("listaCompra")
        let listaCompraEX = JSON.parse(listaCompraJSON)
        let listaExtraida = []
        listaCompraEX.forEach(nivel => {
            let nuevoNivel = new Nivel (nivel.id,nivel.descrip, nivel.precio, nivel.img, nivel.alt)
            listaExtraida.push(nuevoNivel)
        })
        this.listaCompra = listaExtraida
    }
    mostrarEnDOM() {
        let selectorCompra = document.getElementById("selectorCompra")
        selectorCompra.innerHTML = ""
        this.listaCompra.forEach(nivel => {
            selectorCompra.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${nivel.img}" class="img-fluid rounded-start" alt="${nivel.alt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Nivel ${nivel.id}</h5>
                        <p class="card-text">${nivel.precio}</p>
                    </div>
                </div>
                </div>
            </div>`
        })
    }

}

const controlN = new ControlNivel()
const compra = new Compra()

const n1 = new Nivel(1, "Optimizar tu sistema de admision, escape, y frenos", 5000, "https://www.tunerhouse.com/wp-content/uploads/2019/07/frenos-icono-2.jpg", "disco de freno competicion")
const n2 = new Nivel(2, "Optimizacion del sistema de suspension e inyeccion", 9000, "https://cdn-images.motor.es/image/m/720w.webp/fotos-diccionario/2021/11/inyeccion_1635939186.jpg", "sistema inyeccion e ignicion")
const n3 = new Nivel(3, "Mejora de la rigides del compacto, programacion de la ecu", 12000, "https://www.autoavance.co/wp-content/uploads/2020/02/j2534-reprogramacion-calibraciones-ecu.jpg", "programador ecu")
const n4 = new Nivel(4, "Implementacion de sistema de induccion forzada y mejora de la ignicion", 18000, "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_67cc81361b7949a0ba5aacc625dfef1d.jpg", "turbocompresor y supercargador")
const n5 = new Nivel(5, "Performanse de todos los sistemas", 20000, "https://image.made-in-china.com/202f0j00klDYeFRhlOqw/4WD-Dynamometer-Car-Chassis-Dynamometer-Manufacturer-China-Supplier.webp", "dimamometro automotriz")

controlN.agregar(n1)
controlN.agregar(n2)
controlN.agregar(n3)
controlN.agregar(n4)
controlN.agregar(n5)

compra.extraerCompra()
compra.mostrarEnDOM()


const btn_omitir = document.getElementById("Omitir")
btn_omitir.addEventListener("click", ()=>{
    compra.listaCompra = []
    compra.mostrarEnDOM()
    })

controlN.mostrarEnDOM()


