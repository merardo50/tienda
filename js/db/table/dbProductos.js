//buscar = "";
let productos = [{
    nombre: 'circuitoIntegrado',
    referencia: 'Ha1338',
    marca: 'hitachi',
    precio: '3900',
    existencia: '10',
    codigoInterno: '001',
},{
    nombre: 'circuitoIntegrado',
    referencia: 'stk431',
    marca: 'sanyo',
    precio: '120',
    existencia: '1000',
    codigoInterno: '002',

},{
    nombre: 'circuitoIntegrado',
    referencia: 'stk3456',
    marca: 'hitachi',
    precio: '120',
    existencia: '1000',
    codigoInterno: '003',

},{
    nombre: 'circuitoIntegrado',
    referencia: 'lm335',
    marca: 'snyo',
    precio: '3000',
    existencia: '300',
    codigoInterno: '004',

},{
    nombre: 'circuitoIntegrado',
    referencia: 'lm317',
    marca: 'tompsom',
    precio: '3000',
    existencia: '200',
    codigoInterno: '005',
},{
    nombre: 'circuitoIntegrado',
    referencia: 'lm347',
    marca: 'tompsom',
    precio: '2500',
    existencia: '200',
    codigoInterno: '006',

},{
    nombre: 'circuitoIntegrado',
    referencia: 'sh45',
    marca: 'sanyo',
    precio: '2900',
    existencia: '134',
    codigoInterno: '007',

},{
    nombre: 'circuitoIntegrado',
    referencia: 'lm339',
    marca: 'sanyo',
    precio: '2400',
    existencia: '140',
    codigoInterno: '008',

},{
    nombre: 'transistor',
    referencia: '2n2904',
    marca: 'sanyo',
    precio: '200',
    existencia: '1000',
    codigoInterno: '009',
},{
    nombre: 'transistor',
    referencia: '2n2906',
    marca: 'sanyo',
    precio: '300',
    existencia: '200',
    codigoInterno: '010',

},{
    nombre: 'transistor',
    referencia: '2n2222',
    marca: 'sanyo',
    precio: '230',
    existencia: '150',
    codigoInterno: '011',
},{
    nombre: 'transistor',
    referencia: '2n3454',
    marca: 'sanyo',
    precio: '289',
    existencia: '29',
    codigoInterno: '012',
},{
    nombre: 'transistor',
    referencia: '2n3055',
    marca: 'toshiba',
    precio: '9000',
    existencia: '30',
    codigoInterno: '013',
},{
    nombre:'resistencia',
    referencia: '30homios',
    marca: 'thomsom',
    precio: '100',
    existencia: '500',
    codigoInterno: 'resistor',
},{
    nombre: 'resistencia',
    referencia: '30homios',
    marca: 'thomsom',
    precio: '100',
    existencia: '500',
    codigoInterno: 'resistor',
},{
    nombre: 'resistencia',
    referencia: '30homios',
    marca: 'thomsom',
    precio: '100',
    existencia: '500',
    codigoInterno: 'resistor',
},{
    nombre: 'resistencia',
    referencia: '30homios',
    marca: 'thomsom',
    precio: '100',
    existencia: '500',
    codigoInterno: 'resistor',
},{
    nombre: 'resistencia',
    referencia: '30homios',
    marca: 'thomsom',
    precio: '100',
    existencia: '500',
    codigoInterno: 'resistor',
},{
    nombre: 'resistencia',
    referencia: '30homios',
    marca: 'thomsom',
    precio: '100',
    existencia: '500',
    codigoInterno: 'resistor',
},{
    nombre: 'parlante',
    referencia: 'blackwidow15pulgadas',
    marca: 'peavey',
    precio: '500.000',
    existencia: '6',
    codigoInterno: '014',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'parlante',
    referencia: 'jb500',
    marca: 'jbl',
    precio: '200.000',
    existencia: '10',
    codigoInterno: 'prl1',
},{
    nombre: 'cautil',
    referencia: 'Wll25w',
    marca: 'tech',
    precio: '50.000',
    existencia: '40',
    codigoInterno: '015',
    descripcion: 'varios',
    vatiaje: '30W',
    voltaje: '110v',
    amperaje: '4A',
},{
    nombre: 'cautil',
    referencia: 'Wll25w',
    marca: 'weller',
    precio: '100.000',
    existencia: '40',
    codigoInterno: '016',
    descripcion: 'varios',
    vatiaje: '60W',
    voltaje: '110v',
    amperaje: '8A',
},{
    nombre: 'cautil',
    referencia: 'AICO35w',
    marca: 'AICO',
    precio: '80.000',
    existencia: '40',
    codigoInterno: '017',
    descripcion: 'varios',
    vatiaje: '35W',
    voltaje: '110v',
    amperaje: '8A',
},{
    nombre: 'cable',
    referencia: 'stereo-st34',
    marca: 'belden',
    precio: '2000',
    existencia: '500',
    codigoInterno: '16',
}];

$(document).ready(() => {



    function buscarPrecio(productos) {
        let busqueda = [];
        productos.forEach((producto) => {
            if (producto.nombre === $("#display3").val()) {
                busqueda.push(producto);
            }
        });

        if (busqueda.length != 0) {
            let plantilla = '';
            busqueda.forEach((producto) => {
                plantilla += `<tr style="background-color:rgb(202, 214, 31)" class="border-dark"><td>${producto.nombre}</td><td>${producto.referencia}</td><td>${producto.marca}</td><td>${producto.precio}</td><td>${producto.existencia}</td><td>${producto.codigoInterno}</td></tr>`;
            });
            $("#vistaProductos").css('display', 'block')
            $("#consultaProductos").html(plantilla);

            return
        }
        alert('el producto no se ha encontrado en la base de datos');
    }
    $("#buscar3").click(() => { buscarPrecio(productos); });
});




export { productos };