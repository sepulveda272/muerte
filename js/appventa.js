import { getFactura ,  getEmpleado , getProductos , getClientes, deleteVenta} from "../ApiConnection/API.js";

(function(){

    const listaVenta = document.querySelector('.listarVenta')
    document.addEventListener('DOMContentLoaded' , obtenerCliente)
    listaVenta.addEventListener('click' , borrarVenta)

    async function obtenerCliente() {
        const factura1 = await getFactura();
        const empleado1 = await getEmpleado();
        const producto1 = await getProductos();
        const clientes1 = await getClientes();
        console.log(empleado1);//Empleados
        console.log(producto1);//Productos
        console.log(clientes1);//clientes
        empleado1.forEach(empleados => {
            const {nombre} = empleados
            const cuerpo = document.querySelector('#empleado')
            const option = document.createElement('option')
            option.classList.add('butto')
            option.textContent= nombre
            cuerpo.appendChild(option)
        });
        
        clientes1.forEach(clientes =>{
            const {nombre} = clientes
            const cuerpa = document.querySelector('#cliente')
            const optt = document.createElement('option')
            optt.textContent = nombre;
            cuerpa.appendChild(optt)   
        })

        producto1.forEach(productos=>{
            const {nombre} = productos;
            const cuerpe = document.querySelector('#producto')
            const optts = document.createElement('option')
            optts.textContent = nombre;
            cuerpe.appendChild(optts)
        })
        
        factura1.forEach((factura)=>{
            const {id,  cliente , empleado , fecha , producto , cantidad} = factura
            const contenedorVenta = document.querySelector('.listarVenta')
            const rowVenta = document.createElement('tr')
            rowVenta.innerHTML = `
            <td>${id}</td>
            <td>${cliente}</td>
            <td>${empleado}</td>
            <td>${fecha}</td>
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">
            Detalles
            </button></td>
            <td><button type="button" data-venta="${id}" class="delete btn btn-danger" >Borrar</button></td>
            <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2>Factura</h2>
                    <p>El señor ${cliente}</p>
                    <p>${producto}: ${cantidad}</p>
                    <p></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
                        `
            contenedorVenta.appendChild(rowVenta)
        })
    }

    function borrarVenta(e) {
        if (e.target.classList.contains('delete')) {
            const ventaId = Number(e.target.dataset.venta)
            const confirmar = confirm('¿Estas seguro que quieres eliminar a este cliente?')
            if (confirmar) {
                deleteVenta(ventaId)
            }
        }
    }

})()