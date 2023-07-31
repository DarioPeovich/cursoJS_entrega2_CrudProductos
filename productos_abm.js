let menuOpcion;
let bMostrarIdProdListados = false; //Var.booleanas que se utilizaran para decir si se ve el Id.del Producto en los Listados
let bMostrarRubroListados = false;  //Idem bMostrarIdProdListados, pero para Rubro

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


    let productoNew = new producto("Tomate en lata x 200 grs", 200, 40, 21, 1, 2);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Yerba Playadito 500 grs.", 700, 40, 21, 1, 0);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Pan frances x 1 kgs", 800, 40, 21, 3, 1);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Pan Felipe x 1 kgs", 750, 40, 21, 3, 3);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Corte Nalga x 1 kgs.", 2500, 40, 21, 2, 40);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Corte Lomo x 1 kgs.", 3000, 40, 21, 2, 5);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Servilletas x 50 u.", 200, 40, 21, 4, 10);
    par_arrProductos.push(productoNew);

    productoNew = new producto("Lampara Led 7w", 1500, 40, 21, 4, 20);
    par_arrProductos.push(productoNew);

    console.log("PRODUCTOS PRECARGADOS");
    console.log(...par_arrProductos);
    console.log("CANTIDAD DE PRODUCTOS PRECARGADOS: " + par_arrProductos.length);

}



//--Menu de Opciones
function getOpcionMenu() {

    while (true) {

        menuOpcion = prompt(
            "Bienvenido!. Sistema CRUD de Productos.  \n Seleccione una Opcion: \n 1: Agregar \n 2: Borrar \n 3: Modificar \n 4: Visualizar Productos \n 5: Ordenar \n 6: Configuraciones \n Fin: Boton Cancelar"
        );

        if (menuOpcion == null) {
            return -1;
        } else {
            menuOpcion = parseInt(menuOpcion);  //Si hago antes el ParseInt no puedo validar el Boton Cancel

            if (menuOpcion >= 1 && menuOpcion <= 6) {
                return menuOpcion;
            } else {
                alert("Indique una Opcion valida. \n Para salir presione en Cancelar")
            }

        }


    }

}

function get_TodosLosProducto(arrProductos) {
    let resultado;
    let productosPrompt = "";
    arrProductos.forEach((producto, index) => {
        //  productosPrompt = productosPrompt + index + ". " + producto.descripcion  + "  [ Id.: " + producto.id + ". Rubro:" + producto.rubro + "]"  + "\n";
        productosPrompt = productosPrompt + index + ". " + producto.descripcion
        if (bMostrarIdProdListados || bMostrarRubroListados) {
            productosPrompt = productosPrompt + "[ "
        }
        if (bMostrarIdProdListados) {
            productosPrompt = productosPrompt + " Id.: " + producto.id;
        }
        if (bMostrarRubroListados) {
            productosPrompt = productosPrompt + ". Rubro: " + producto.rubro;
        }
        if (bMostrarIdProdListados || bMostrarRubroListados) {
            productosPrompt = productosPrompt + " ]"
        }
        productosPrompt = productosPrompt + "\n"

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

function filtradoXdescripcion(par_arrProductos) {

    let productoBuscar = prompt("Ingrese el nombre de un producto. \n Se buscara en toda su descripcion. \n");
    if (productoBuscar == null) {
        return [];
    }

    let arrResultado = (par_arrProductos.filter((producto) => {
        //return producto.descripcion.toLowerCase().includes(productoBuscar.toLowerCase());
        return producto.descripcion.toLowerCase().includes(productoBuscar.toLowerCase());

    }));
    if (arrResultado.length == 0) {
        alert("No se hallo ningun producto con la descripcion ingresada")
    }
    return arrResultado;
}

function filtradoXRubro(par_arrProductos) {
    let resultado = false;
    let productoBuscar;
    do {
        productoBuscar = prompt("Ingrese el Id. del rubro a Buscar \n 1: Almacen \n 2: Carniceria \n 3:Panaderia \n 4:General");

        if (productoBuscar == null) {
            return [];
        }
        productoBuscar = parseInt(productoBuscar);
        if (productoBuscar >= 1 && productoBuscar <= 4) {
            resultado = true;
        } else {
            alert("El Id. de Rubro debe ser unos de los indicados.")
        }
    } while (resultado === false);


    let arrResultado = (par_arrProductos.filter((producto) => {
        return producto.rubro === productoBuscar;

    }));
    if (arrResultado.length == 0) {
        alert("No se hallo ningun producto con el Rubro ingresado")
    }
    return arrResultado;
}

function filtradoXPrecios(par_arrProductos) {
    let resultado = false;
    let precioInferior = 0;
    let precioSuperior = 0;
    //Ingreso Precio 1
    do {
        precioInferior = prompt("Filtrado x Rango de Precios \n Ingrese ell Rango Inferior");

        if (precioInferior == null) {
            return [];
        }
        precioInferior = parseFloat(precioInferior);
        if (precioInferior > 0) {
            resultado = true;
        } else {
            alert("El Precio debe ser Mayor que cero")
        }
    } while (resultado === false)

    //Ingreso Precio 2
    do {
        precioSuperior = prompt("Filtrado x Rango de Precios \n Ingrese el Rango Superior");

        if (precioSuperior == null) {
            return [];
        }
        precioSuperior = parseFloat(precioSuperior);
        if (precioSuperior > 0) {
            resultado = true;
        } else {
            alert("El Precio debe ser Mayor que cero")
        }
    } while (resultado === false)


    let arrResultado = (par_arrProductos.filter((producto) => {
        return (producto.precioFinal >= precioInferior && producto.precioFinal <= precioSuperior);

    }));
    if (arrResultado.length == 0) {
        alert("No se hallo ningun producto en el Rango de Precios Ingresado")
    }
    return arrResultado;
}


function filtradoXStock(par_arrProductos) {
    let resultado = false;
    let productoBuscar = prompt("Ingrese el Stock minimo de los productos a buscar");

    if (productoBuscar == null) {
        return [];
    }
    productoBuscar = parseInt(productoBuscar);


    let arrResultado = (par_arrProductos.filter((producto) => {
        return producto.stock <= productoBuscar;

    }));
    if (arrResultado.length == 0) {
        alert("No se hallo ningun producto con Stock por debajo del indicado")
    }
    return arrResultado;
}


function get_ProductoXFiltrado(arrProductos, funcioFiltrado) {
    let resultado;
    let productosPrompt = "";

    //Funcion de orden superior
    let arrProductosInclude = funcioFiltrado(arrProductos);

    if (arrProductosInclude.length === 0) {     //Sale de la Funcion cuando se cancela
        return (-1);
    }

    //a continuacion se carga el String Prompt para que el usuario seleccione por un numero
    arrProductosInclude.forEach((producto, index) => {
        productosPrompt = productosPrompt + index + ". " + producto.descripcion
        if (bMostrarIdProdListados || bMostrarRubroListados) {
            productosPrompt = productosPrompt + "[ "
        }
        if (bMostrarIdProdListados) {
            productosPrompt = productosPrompt + " Id.: " + producto.id;
        }
        if (bMostrarRubroListados) {
            productosPrompt = productosPrompt + ". Rubro:" + producto.rubro;
        }
        if (bMostrarIdProdListados || bMostrarRubroListados) {
            productosPrompt = productosPrompt + " ]"
        }
        productosPrompt = productosPrompt + "\n"

        //productosPrompt = productosPrompt + index + ". " + producto.descripcion + "  [ Id.: " + producto.id + ". Rubro:" + producto.rubro + "]" + "\n";

    }
    );

    let indexInclude = prompt(`Seleccione el Producto \n ${productosPrompt}`);  //Se selecciona una producto que se hallo por el filtro

    if (indexInclude == null || indexInclude == "") {
        return (-1);
    } else {
        //Se busca el producto selecionado en el array Principal Productos, y se devuelve la posicion, para su tratamiento posterior.
        let index = arrProductos.findIndex((producto => producto.id === arrProductosInclude[indexInclude].id))
        return index;
    }
}




function busquedaMultipleEnProductos(arrProductos) {
    while (true) {
        let resultado;
        menuOpcion = prompt(
            "Seleccione una forma de Busqueda de Producto\n 1: Ver todos \n 2: Por una Descripcion \n 3: Por el Rubro \n 4: Por Rango de Precios \n 5: Por Stock debajo de un minimo \n Fin: Boton Cancelar"
        );

        if (menuOpcion == null) {
            return -1;
        } else {
            menuOpcion = parseInt(menuOpcion);  //Si hago antes el ParseInt no puedo validar el Boton Cancel

            if (menuOpcion >= 1 && menuOpcion <= 5) {
                switch (menuOpcion) {
                    case 1:     //Se listan todos los Productos
                        return resultado = get_TodosLosProducto(arrProductos);
                    case 2:     //Se busca un producto por su Descripcion
                        return resultado = get_ProductoXFiltrado(arrProductos, filtradoXdescripcion);
                    case 3: //Filtrado x Rubros
                        return resultado = get_ProductoXFiltrado(arrProductos, filtradoXRubro);
                    case 4: //Filtrado x Rango de Precios
                        return resultado = get_ProductoXFiltrado(arrProductos, filtradoXPrecios);
                    case 5:     //Segun su Stock
                        return resultado = get_ProductoXFiltrado(arrProductos, filtradoXStock);
                }
                return menuOpcion;
            } else {
                alert("Indique una Opcion valida. \n Para salir presione en Cancelar")
            }

        }

    }
}

function sortArray(par_arrProductos) {
    let resultado = false;
    do {


        menuOpcion = prompt(
            "Selecione como desea ordenar los Productos \n 1: Descripcion \n 2: Rubro \n 3: Id.delProducto \n Fin: Boton Cancelar"
        );

        if (menuOpcion == null) {
            return -1;
        } else {
            menuOpcion = parseInt(menuOpcion);  //Si hago antes el ParseInt no puedo validar el Boton Cancel

            if (menuOpcion >= 1 && menuOpcion <= 3) {
                switch (menuOpcion) {
                    case 1:
                        par_arrProductos.sort((a, b) => {
                            if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()) {

                                return 1;
                            }
                            if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()) {
                                return -1;
                            }
                            // a es igual a b
                            return 0;
                        })
                        resultado = true;
                        break;
                    case 2:
                        par_arrProductos.sort((a, b) => {
                            if (a.rubro > b.rubro) {

                                return 1;
                            }
                            if (a.rubro < b.rubro) {
                                return -1;
                            }
                            // a es igual a b
                            return 0;
                        })
                        bMostrarRubroListados = true;
                        resultado = true;
                        break;

                    case 3:
                        par_arrProductos.sort((a, b) => {
                            if (a.id > b.id) {

                                return 1;
                            }
                            if (a.id < b.id) {
                                return -1;
                            }
                            // a es igual a b
                            return 0;
                        })
                        bMostrarIdProdListados = true;
                        resultado = true;
                        break;

                }
            } else {
                alert("Indique una Opcion valida. \n Para salir presione en Cancelar")
            }

        }

    } while (resultado === false)

    if (resultado) { return 1 };

}

function configuraciones() {

    bMostrarIdProdListados = confirm("Configuracion modo visualizacion Lista de Producto. \n ¿Desea que se visualice el  ID. del Producto? \n Si: Boton Aceptar  No: Boton Cancelar");

    bMostrarRubroListados = confirm("Configuracion modo visualizacion Lista de Producto. \n ¿Desea que se visualice el  RUBRO del Producto? \n Si: Boton Aceptar  No: Boton Cancelar");


}
//******** Codigo Principal **************/
//************************************** */
let arrProductos = [];

preCargarProductos(arrProductos);      //Inicializa "arrProductos" con algunos objetos
let i;
while (getOpcionMenu() != -1) {
    switch (menuOpcion) {
        case 1:     //Alta
            newProducto(arrProductos);

            break;
        case 2:     //Eliminar
            i = busquedaMultipleEnProductos(arrProductos);
            if (i >= 0) {
                if (confirm(`¿Esta Seguro de eliminar a: ${arrProductos[i].descripcion.toUpperCase()}?`)) {
                    alert("Producto Eliminado con exito");
                    arrProductos.splice(i, 1);
                }
            }
            break;
        case 3:     //Modificaciones
            i = busquedaMultipleEnProductos(arrProductos);
            if (i >= 0) {

                const objProductoModif = Object.assign({}, arrProductos[i]);
                if (getProducto(objProductoModif)) {
                    arrProductos[i] = objProductoModif;
                }
            }

            break;
        case 4:
            busquedaMultipleEnProductos(arrProductos);
            break;

        case 5:     //Sort
            if (sortArray(arrProductos) === 1) {
                get_TodosLosProducto(arrProductos);
            }
            break;
        case 6:
            configuraciones();
            break
        default:
            alert("Opcion desconocida");
            break;
    }
}
