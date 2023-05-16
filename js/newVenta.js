import { newFactura } from "../ApiConnection/API.js";

(function(){
    const addCli = document.querySelector('#formularioF')
    addCli.addEventListener('submit' , añadirFactura)

    function añadirFactura() {
        const cliente = document.querySelector('#cliente').value;
        const empleado = document.querySelector('#empleado').value;
        const fecha = document.querySelector('#fecha').value;
        const producto = document.querySelector('#producto').value;
        const cantidad = document.querySelector('#cantidad').value;

        const factura = {
            cliente,
            empleado,
            fecha,
            producto,
            cantidad
        }

        if (validar(factura)) {
            alert('Todos los campos son necesarios')
        }
        else{
            newFactura(factura)
        } 
    }

    function validar(document) {
        return !Object.values(document).every(empleado => empleado !== "")
    }
})()