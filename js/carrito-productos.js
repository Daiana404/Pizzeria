const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorTicket = document.querySelector('.contenedor-ticket');
const msgSinPedido = document.querySelector('.sin-pedido');
const tablaBody = document.querySelector('#tabla-body');
let preciosArray = document.querySelectorAll('.precios');
const total = document.getElementById('num-precio');

const eliminarPedido = document.getElementById('eliminar-pedido');

eliminarPedido.addEventListener('click', () => {

    localStorage.removeItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    eliminarPedido.style.display = 'none';
    msgSinPedido.style.display = 'inherit';
    contenedorTicket.style.display = 'none';
})

if (productosEnCarrito){
    eliminarPedido.style.display = 'flex';
    contenedorTicket.style.display = 'flex';
    msgSinPedido.style.display = 'none';

    tablaBody.innerHTML = '';

    productosEnCarrito.forEach(producto => {
        const tr = document.createElement('tr');
        switch (producto.categoria.id) {
            case 'pizzas':
                tr.innerHTML = `
                    <td class="iz" >
                    <img class="pedido-iconos" src="./scss/ico/porcion-de-pizza.svg" alt=""> ${producto.nombre}
                    </td>
                    <td>${producto.cantidad}</td>
                    <td class="dr" >$ <span class=" precios"> ${precioPizzas(producto)}</span> </td>
                `;
                break;
            case 'veganas':
                tr.innerHTML = `
                    <td class="iz" >
                    <img class="pedido-iconos" src="./scss/ico/hoja.svg" alt=""> ${producto.nombre}
                    </td>
                    <td>${producto.cantidad}</td>
                    <td class="dr" >$ <span class=" precios"> ${precioPizzas(producto)}</span> </td>
                `;
                break;
            case 'hamburguesas':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/hamburger.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ <span class="precios">${producto.cantidad * producto.precio1}</span> </td>
                    `;
                break;
            case 'papas-fritas':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/papas-fritas.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ <span class="precios">${producto.cantidad * producto.precio1}</span> </td>
                    `;
                break;
            case 'sandwiches':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/sandwich.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ <span class="precios">${producto.cantidad * producto.precio1}</span> </td>
                    `;
                break;
            case 'bebidas':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/drink-alt.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ <span class="precios">${producto.cantidad * producto.precio1}</span> </td>
                    `;
                break;
        }
        tablaBody.appendChild(tr);
    })
} else {
    contenedorTicket.style.display = 'none';
    msgSinPedido.style.display = 'inherit';
}


function precioPizzas(pizza){
    let accPizzaCompleta = 0;
    let accPizzaPorcion = 0;

    let aux = 0;
    while( aux < pizza.cantidad) {
        aux++;
        
        if(aux%4 === 0) {
            accPizzaCompleta++;
        } 
        //Porciones restantes
        accPizzaPorcion = Math.abs(accPizzaCompleta * 4 - aux);
    }

    const precio = pizza.precio2*accPizzaCompleta + pizza.precio1*accPizzaPorcion;
    return precio;
}

function precioTotal () {
    preciosArray = document.querySelectorAll('.precios');
    let acumulador = 0;
    preciosArray.forEach(precio => {
        acumulador = acumulador + parseFloat(precio.innerText);
    })
    return acumulador;
}

window.addEventListener('load', function() {
    total.innerText = precioTotal();
});