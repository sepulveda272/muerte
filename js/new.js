import { newEmpleado } from "../apiConnection/API.js";

const formulario = document.querySelector ('#re')
console.log(formulario);
formulario.addEventListener('click', validataEm)

function validataEm(e){
    
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const contraseña = document.querySelector('#password1').value
    const usuario = document.querySelector('#user1').value
    const email = document.querySelector('#email').value
    console.log(nombre,password,user,email);

    const empleado = {
        nombre,
        usuario,
        contraseña,
        email
    }

    console.log(empleado);

    if (validete(empleado)){
        alert('todos los campos son obligatorios')
        return
    }
    newEmpleado(empleado)
}
function validete(objeto){
    return !Object.values(objeto).every(element => element !== '')
}


