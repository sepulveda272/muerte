const urlRegistro = "http://localhost:4000/empleados"

export const getEmpleado = async()=>{
    try {
        const result = await fetch(urlRegistro)
        const empleados= await result.json()
        return empleados
    } catch (error) {
        console.log(error);
    }
}

export const newEmpleado = async empleado =>{
    console.log(empleado);
    try {
        await fetch(urlRegistro,{
            method: 'POST',
            body: JSON.stringify(empleado),
            headers: {
                'Content-Type':'application/json'
            }
        })
        window.location.href='login.html'
    } catch (error) {
        console.log(error);
    }
}


//-------------------categorias

const url2 = "http://localhost:4000/categorias"

export const getcategorias = async () => {
    try {
        const resultado = await fetch(url2)
        const categorias = await resultado.json()
        return categorias
    } catch (error) {
        console.log(error);
    }
}

export const newCategoria = async categoria =>{
    console.log(categoria);
    try {
        await fetch(url2, {
            method: 'POST',
            body: JSON.stringify(categoria),
            headers: {
                'Content-Type':'application/json'
            }
        })
        window.location.href= 'index.html'
    } catch (error) {
        error = 'No sirvio ni mrd'
        console.log(error);
    }
}

export const deleteCategoria = async id =>{
    try {
        await fetch(`${url2}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}   

//------------PRODUCTOS*****

const url3 = "http://localhost:4000/productos"

export const getProductos = async ()=>{
    try {
        const respuestaP = await fetch (url3)
        const producto = await respuestaP.json();
        return producto
    } catch (error) {
        console.log(error);
    }
}

export const newProducto = async producto =>{
    try {
        await fetch (url3 , {
            method: 'POST',
            body: JSON.stringify(producto),
            headers:{
                "Content-Type": "application/json"
            } 
        })
        window.location.href = "../productos.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductos = async id =>{
    try {
        await fetch(`${url3}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//----------------cliente//////

const url4 = "http://localhost:4000/clientes"

export const getClientes = async()=>{
    try {
        const respuestaCliente = await fetch(url4)
        const datasss = await respuestaCliente.json();
        return datasss
    } catch (error) {
        console.log(error);
    }
}

export const newClientes = async cliente=>{
    try {
        await fetch (url4 , {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers:{
                "Content-Type": "application/json"
            } 
        })
        window.location.href = "clientes.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async id=>{
    try {
        await fetch(`${url4}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//-------------------------FACTURA

const url5 = "http://localhost:4000/factura"

export const getFactura = async()=>{
    try {
        const resultadoF = await fetch(url5);
        const datosF = await resultadoF.json();
        return datosF
    } catch (error) {
        console.log(error);
    }
}

export const newFactura = async(factura)=>{
    try {
        await fetch (url5 ,{
            method: 'POST',
            body: JSON.stringify(factura),
            headers:{
                "Content-Type": "application/json"
            }
        })
        window.location.href = "../ventas.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteVenta = async (id)=>{
    try {
        await fetch(`${url5}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}