import { clientes } from './table/dbClientes.js';

import { productos } from './table/dbProductos.js';

import { proveedores } from './table/dbProveedores.js';

let dbTienda = {
    clientes,
    productos,
    proveedores
};




/*dbTienda.productos.forEach((producto) => {
    let precio = producto.precio;
    if (precio == '2000') {
        console.log(`este ${producto.mombre} tienel el precio de ${precio}`);
    }
});*/



/*  let dbTienda={};
    
 dbTienda.clientes={};
 dbTienda.proveedores={};
 dbTienda.productos={}; */

export { dbTienda };