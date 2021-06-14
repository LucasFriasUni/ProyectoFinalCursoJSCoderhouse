alert ('TEST');
//Funciones

//Funcion para mostrar el array con productos cargados
function showProducts() {
    let validate = parseInt(prompt('Quieres ver los articulos cargados? 1 para si 0 para no'));
    if (validate === 1) {
        console.log(ArrayProductos);
    }
    else {
        alert ('Elegiste no ver los productos');
    }
}

//Funcion para cargar productos al array
function loadProducts () {
    let validate = parseInt(prompt('Quieres cargar articulos? 1 para si 0 para no'));
    let condicion = true;
    if (validate === 1) {
        do {
            let titulo = prompt ('Nombre del producto?');
            let descripcion = prompt ('Descripción del producto: ');
            let precio = prompt ('precio del producto');
            let stock = prompt('Cuantos items disponibles hay de este producto?');
            let disponible = true; //Por el momento true, luego por funcion mas adelante se puede cambiar para marcar fuera de stock
            let mueble = new Producto (titulo, descripcion, precio, stock, disponible);
        
            console.log(mueble.sumarIva);
            condicion = confirm('Seguir agregando muebles?')
            ArrayProductos.push(mueble);
        
        }while(condicion != false);
    }
    else {
        alert ('Elegiste no cargar productos');
    }
}


//Mi array y constructor de productos
const ArrayProductos = [];

class Producto {
    constructor (titulo, descripcion, precio, stock, disponible) {
        this.titulo = titulo.toLowerCase(),
        this.descripcion = descripcion,
        this.stock = parseInt(stock);
        this.disponible = disponible,
        this.precio = parseFloat(precio);
    }

    sumarIva(){
        return this.precio*1.21;
    }
}


//Llamadas de funciones
alert ('Proyecto JS Lucas Frias (1ra PreEntrega');
loadProducts();
showProducts();

/*Al ser mi primera entrega, en vez de generar multiples funciones
sin ningun uso debido a mi falta de conocimiento de DOM, prefiero
cubrir todos los puntos necesarios para obtener un puntaje optimo
sin necesidad de sobreextender el desarrollo de mi codigo js, en
ToDo.txt se vera lo planeado a entregas futuras a manera de roadmap*/
