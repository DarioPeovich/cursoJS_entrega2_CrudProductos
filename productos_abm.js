let menuOpcion;

class producto {
    constructor(descripcion = "", precioCosto = 0, utilidad = 0, iva = 0, rubro = 0, stock = 0) {
        this.id = this.generarIdUnico();
        this.descripcion = descripcion;
        this.precioCosto = precioCosto;
        this.utilidad = utilidad;
        this.iva = iva;
        this.rubro = rubro;
        this.stock = stock;
        this.precioFinal = this.precioVta();
    }

    precioVta() {
        let auxPrecioFinal;
        auxPrecioFinal = this.precioCosto * (1 + this.utilidad / 100);
        auxPrecioFinal = auxPrecioFinal * (1 + this.iva / 100);
        return (auxPrecioFinal)
    }
    generarIdUnico() {
        const parteAleatoria = Math.random().toString(36).substr(2, 9); // Genera una cadena aleatoria de 9 caracteres
        const marcaDeTiempo = Date.now().toString(36); // Convierte la marca de tiempo a una cadena hexadecimal
        const idUnico = parteAleatoria + marcaDeTiempo; // Combina la parte aleatoria con la marca de tiempo
        return idUnico;
    }
}


function newProducto(par_arrProductos) {

    let productoNew = new producto();

    if (getProducto(productoNew)) {
        par_arrProductos.push(productoNew);
    }


}

function getProducto(objProducto) {
    let bResultado;

    do {
        bResultado = true;

        //Artic.Descrip
        if (bResultado) {
            objProducto.descripcion = prompt("Ingrese la Descripcion del Articulo", objProducto.descripcion);
            if (objProducto.descripcion == null) {      //Se valida boton cancelar
                return (false);
            } else {
                if (objProducto.descripcion == undefined || objProducto.descripcion == "") {
                    bResultado = false;
                } else { bResultado = true; }
            }
        }
    } while (bResultado == false)
    //Artic.Precio Costo

    if (bResultado) {
        do {
            objProducto.precioCosto = prompt("Ingrese el Precio de Costo del Articulo", objProducto.precioCosto);
            if (objProducto.precioCosto == null) {      //Se valida boton cancelar
                return (false);
            } else {
                objProducto.precioCosto = parseFloat(objProducto.precioCosto);
                if (objProducto.precioCosto == undefined || isNaN(objProducto.precioCosto) || objProducto.precioCosto == 0) {
                    bResultado = false;
                } else { bResultado = true; }
            }
        } while (bResultado == false)
    }

    //Artic.Utilidad
    if (bResultado) {
        do {
            objProducto.utilidad = prompt("Ingrese la Utilidad del Articulo", objProducto.utilidad);
            if (objProducto.utilidad == null) {      //Se valida boton cancelar
                return (false);
            } else {
                objProducto.utilidad = parseFloat(objProducto.utilidad);
                if (objProducto.utilidad == undefined || isNaN(objProducto.utilidad) || objProducto.utilidad == 0) {
                    bResultado = false;
                } else { bResultado = true; }
            }
        } while (bResultado == false)
    }

    //*--Iva %
    if (bResultado) {
        do {
            objProducto.iva = prompt("Ingrese el % de Iva del Articulo", objProducto.iva);
            if (objProducto.iva == null) {      //Se valida boton cancelar
                return (false);
            } else {
                objProducto.iva = parseFloat(objProducto.iva);
                if (objProducto.iva == undefined || isNaN(objProducto.iva)) {
                    bResultado = false;
                } else { bResultado = true; }
            }
        } while (bResultado == false)
    }
    //*--Rubro Id.
    if (bResultado) {
        do {
            objProducto.rubro = prompt("Ingrese el Id. del rubro segun tabla a continuacion \n 1: Almacen \n 2: Carniceria \n 3:Panaderia \n 4:General", objProducto.rubro);
            if (objProducto.rubro == null) {      //Se valida boton cancelar

                return (false);
            } else {
                objProducto.rubro = parseInt(objProducto.rubro);
                if (objProducto.rubro == undefined || isNaN(objProducto.rubro)) {
                    bResultado = false;

                } else {
                    if (objProducto.rubro < 1 || objProducto.rubro > 4) {
                        bResultado = false;
                    } else { bResultado = true; }
                }
            }
        } while (bResultado == false)
    }

    //--Cantidad en Stock
    if (bResultado) {
        do {
            objProducto.stock = prompt("Ingrese la Existencia del Articulo", objProducto.stock);
            if (objProducto.stock === null) {      //Se valida boton cancelar
                return (false);
            } else {
                objProducto.stock = parseFloat(objProducto.stock);
                if (objProducto.stock === undefined || isNaN(objProducto.stock)) {
                    bResultado = false;
                } else if (objProducto.stock > 0) {
                    bResultado = true;
                }
            }
        } while (bResultado == false)
    }

    return (bResultado);

}


const preCargarProductos = (par_arrProductos) => {
    //Rubro 1: Almacen \n 2: Carniceria \n 3:Panaderia \n 4:General


    let productoNew = new producto("Tomate en lata x 200 grs", 200, 40, 21, 1, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Yerba Playadito 500 grs.", 700, 40, 21, 1, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Pan frances x 1 kgs", 800, 40, 21, 3, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Pan Felipe x 1 kgs", 750, 40, 21, 3, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Corte Nalga x 1 kgs.", 2500, 40, 21, 2, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Corte Lomo x 1 kgs.", 3000, 40, 21, 2, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Servilletas x 50 u.", 200, 40, 21, 4, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Lampara Led 7w", 1500, 40, 21, 4, 0);
    par_arrProductos.push(productoNew);


    console.log("Lenght array Productos" + par_arrProductos.length);

}



//--Menu de Opciones
function getOpcionMenu() {

    while (true) {

        menuOpcion = prompt(
            "Bienvenido a Altas, Bajas y Modificaciones de Productos.\n 1: Alta \n 2: Baja \n 3: Modificacion \n 4: Ver todos los Productos \n 5: Ordenar \n Fin: Boton Cancelar"
        );

        if (menuOpcion == null) {
            return -1;
        } else {
            menuOpcion = parseInt(menuOpcion);  //Si hago antes el ParseInt no puedo validar el Boton Cancel

            if (menuOpcion >= 1 && menuOpcion <= 4) {
                return menuOpcion;
            } else {
                alert("Indique una Opcion valida1. \n Para salir presione en Cancelar")
            }

        }


    }

}

function getProductoList() {
    let resultado;
    let productosPrompt = "";
    productos.forEach((producto, index) => {
        productosPrompt = productosPrompt + index + ". " + producto.descripcion + "\n";
    }
    )
    console.log(productosPrompt);
    resultado = prompt(`Seleccione el Produco \n ${productosPrompt}`);
    if (resultado == null) {
        return (-1);
    } else {
        return resultado;
    }
}
//**Codigo Principal **/
let productos = [];

preCargarProductos(productos);      //Inicializa con algunos objetos
let i;
while (getOpcionMenu() != -1) {
    switch (menuOpcion) {
        case 1:     //Alta
            newProducto(productos);
            console.log(...productos);
            break;
        case 2:
            i = getProductoList();
            if (i >= 0) {
                if (confirm(`¿Esta Seguro de eliminar a: ${productos[i].descripcion.toUpperCase()}?`)) {
                    alert("Producto Eliminado con exito");
                    productos.splice(i,1);
                }
            }
            break;
        case 3:     //Modificaciones
            i = getProductoList();
            if (i >= 0) {

                const objProductoModif = Object.assign({}, productos[i]);
                // console.log(productos[i]);
                // console.log(objProductoModif);
                if (getProducto(objProductoModif)) {
                    productos[i] = objProductoModif;
                }
            }

            break;
        case 4:
            break;
        default:
            alert("Opcion desconocida");
            break;
    }
}


// console.log(productos);
