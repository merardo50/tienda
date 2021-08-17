import { dbTienda } from './db/db.js';


$(document).ready(() => {

    let plantilla1 = '';

    dbTienda.clientes.forEach((cliente) => {
        plantilla1 += `<tr  style="background-color:grey;"><td>${cliente.cedula}</td><td>${cliente.nombre}</td><td>${cliente.apellido1}</td><td>${cliente.apellido2}</td><td>${cliente.cel}</td><td>${cliente.email}</td><td>${cliente.direccion}</td></tr>`;
    });

    $("#cuerpoTabla1").append(plantilla1);


    let plantilla2 = '';

    dbTienda.proveedores.forEach((proveedor) => {
        plantilla2 += `<tr style="background-color: grey;"><td>${proveedor.nombre}</td> <td>${proveedor.nit}</td><td>${proveedor.nombreContacto}</td><td>${proveedor.cel}</td><td>${proveedor.email}</td><td>${proveedor.direccion}</td><td>${proveedor.pCodigoInterno}</td></tr>`;
    });

    $("#cuerpoTabla2").append(plantilla2);


    let plantilla3 = '';

    dbTienda.productos.forEach((producto) => {
        plantilla3 += `<tr style="background-color: grey;"><td>${producto.nombre}</td><td>${producto.referencia}</td><td>${producto.marca}</td><td>${producto.precio}</td><td>${producto.existencia}</td><td>${producto.codigoInterno}</td></tr>`;
    });

    $("#cuerpoTabla3").append(plantilla3);


});