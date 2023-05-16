import { getEmpleado } from "../apiConnection/API.js"

(function(){
    
    const evaluo = {
        usuario: "",
        contraseña: ""
    }
    
    
    const usuario = document.querySelector('#user')
    const contraseña = document.querySelector('#password')
    const buscar = document.querySelector('#iniciar1')
    buscar.addEventListener('click', buscador)
    
    usuario.addEventListener('input', e => {
        evaluo.usuario = e.target.value;
        console.log(evaluo);
    })
    contraseña.addEventListener('input', e => {
        evaluo.contraseña = e.target.value;
        console.log(evaluo);
    })
    
    
    async function buscador() {
        const usuarios = await getEmpleado()
        console.log(usuarios);
        if (evaluo.usuario && evaluo.contraseña) {
            usuarios.forEach(element => {
                if (element.usuario === evaluo.usuario && element.contraseña === evaluo.contraseña) {
                    alert('correcto')
                    window.location.replace("../index.html")
                }else if(element.usuario === evaluo.usuario && element.contraseña !== evaluo.contraseña){
                    alert("contraseña incorrecta")
                }
                else if(element.usuario !== evaluo.usuario && element.contraseña === evaluo.contraseña){
                    alert("Usuario no encontrado")
                }
            });
    
        }else{
            alert("campos vacios")
        }
    
    }

    
})()