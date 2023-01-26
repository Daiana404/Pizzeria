const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorTicket = document.querySelector('.contenedor-ticket');
const msgSinPedido = document.querySelector('.sin-pedido');
const tablaBody = document.querySelector('#tabla-body');

if (productosEnCarrito){
    contenedorTicket.style.display = 'flex';
    msgSinPedido.style.display = 'none';

    tablaBody.innerHTML = '';

    productosEnCarrito.forEach(producto => {
        const tr = document.createElement('tr');
        console.log(producto.categoria.id)
        switch (producto.categoria.id) {
            case 'pizzas':
                tr.innerHTML = `
                    <td class="iz" >
                    <img class="pedido-iconos" src="./scss/ico/porcion-de-pizza.svg" alt=""> ${producto.nombre}
                    </td>
                    <td>${producto.cantidad}</td>
                    <td class="dr" >$ ${producto.cantidad * producto.precio1} </td>
                `;
                break;
            case 'veganas':
                tr.innerHTML = `
                    <td class="iz" >
                    <img class="pedido-iconos" src="./scss/ico/hoja.svg" alt=""> ${producto.nombre}
                    </td>
                    <td>${producto.cantidad}</td>
                    <td class="dr" >$ ${producto.cantidad * producto.precio1} </td>
                `;
                break;
            case 'hamburguesas':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/hamburger.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ ${producto.cantidad * producto.precio1} </td>
                    `;
                break;
            case 'papas-fritas':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/papas-fritas.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ ${producto.cantidad * producto.precio1} </td>
                    `;
                break;
            case 'sandwiches':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/sandwich.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ ${producto.cantidad * producto.precio1} </td>
                    `;
                break;
            case 'bebidas':
                    tr.innerHTML = `
                        <td class="iz" >
                        <img class="pedido-iconos" src="./scss/ico/drink-alt.svg" alt=""> ${producto.nombre}
                        </td>
                        <td>${producto.cantidad}</td>
                        <td class="dr" >$ ${producto.cantidad * producto.precio1} </td>
                    `;
                break;
        }

        
        tablaBody.appendChild(tr);
    })
} else {
    contenedorTicket.style.display = 'none';
    msgSinPedido.style.display = 'inherit';
}