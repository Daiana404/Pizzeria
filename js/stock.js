const productos = [
    ///////////////////////////Pizzas
    {
        nombre: "Pepperoni",
        id: "pepperoni",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Pepperoni', '', '', ''],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Agridulce",
        id: "agridulce",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Ananá', 'Cereza', '', ''],
        img: './scss/img/pizzas/agridulce.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "La de palmito",
        id: "la-de-palmito",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Jamón', 'Morrones', 'Salsa gol', 'Palmitos'],
        img: './scss/img/pizzas/la-de-palmito.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Caprese",
        id: "caprese",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Muzza', 'Tomates', 'Ajo', 'Albahaca', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Chuck Norris",
        id: "chuck-norris",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Bacón', 'Alioli', 'Perejil', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Fugazzeta",
        id: "fugazzeta",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Muzza', 'Cebolla morada', 'Morrón', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Pollo rojo",
        id: "pollo-rojo",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Salsa roja', 'Pollo', '', ''],
        img: './scss/img/pizzas/pollo-rojo.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Rúcula",
        id: "rucula",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'rúcula', 'Jamón crudo', 'Parmesano', 'Aceite de oliva'],
        img: './scss/img/pizzas/rucula.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Vellorita",
        id: "vellorita",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Muzza', 'Jamón', 'Huevo', 'Morrón', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Anchoas",
        id: "anchoas",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Anchoas', 'Aceitunas negras', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Cherry y pesto",
        id: "cherry-y-pesto",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Muzza', 'Tomates cherry', 'Pesto', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "4 Quesos",
        id: "4-quesos",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Cheddar', 'Queso azul', 'Provolone', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Giuliani",
        id: "giuliani",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Trozos de queso brie', 'Albahaca', '', '', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Napoli",
        id: "napoli",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Cheddar', 'Pollo', 'Salsa barbacoa', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Pollo blanco",
        id: "pollo-blanco",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Salsa de verdeo', 'Pollo', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Roque y ana",
        id: "roque-y-ana",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Roquefort', 'Ananá', 'Olivas', ''],
        img: './scss/img/pizzas/roque-y-ana.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    {
        nombre: "Texana",
        id: "texana",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Bacón', 'Salsa picante', 'Ají', ''],
        img: './scss/img/pizzas/texana.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    ///////////////////////////Pizzas veganas

    {
        nombre: "Común",
        id: "comun",
        precio1: 800,
        precio2: 3100,
        ingredientes: ['Queso vegano', '', '', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Cherry y pesto",
        id: "cherry-y-pesto",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Tomates cherry', 'Pesto', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Rúcula",
        id: "rucula",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Rúcula', 'Tomates cherry', 'Aceite de oliva', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Caprese",
        id: "caprese",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Tomates cherry', 'Pesto', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Fugazzeta",
        id: "fugazzeta",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Queso vegano', 'Cebolla morada', '', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Texana",
        id: "texana",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Salsa picante', 'Ají', '', ''],
        img: './scss/img/pizzas/pizza.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },

    ///////////////////////////Hamburguesas

    {
        nombre: "Agridulce",
        id: "agridulce",
        precio1: 1200,
        ingredientes: ['Bife', 'Ananá', 'Rúcula', 'Salsa Napoli golf', '', '', ''],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Chuck Norris",
        id: "chuck-norris",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Ketchup casero', 'Cheddar', 'Cebolla caramelizada', 'Bacón', '', ''],
        img: './scss/img/hamburguesas/chuck-norris.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Especial",
        id: "especial",
        precio1: 1100,
        ingredientes: ['Bife', 'Queso', 'Jamón', 'Huevo', 'Tomate', 'Lechuga', ''],
        img: './scss/img/hamburguesas/especial.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "La gourmet",
        id: "la-gourmet",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Colchón de rúcula', 'Bacón', 'Queso parmesano/muzza/azul', 'Salsa Napoli golf', 'Lechuga',''],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Simple cheddar",
        id: "simple-cheddar",
        precio1: 1100,
        ingredientes: ['Bife', 'Cheddar', '', '', '', '', ''],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Doble cheddar",
        id: "doble-cheddar",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Cheddar x 2', '', '', '', '', ''],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Tapa arterias",
        id: "tapa-arterias",
        precio1: 1500,
        ingredientes: ['Bife x 3', 'Cheddar x 3', 'Bacón x 3', 'ketchuo casero', '', '', ''],
        img: './scss/img/hamburguesas/tapa-arterias.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Big house",
        id: "big-house",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Cebolla caramelizada', 'Bacón', 'Cheddar', 'Pepinillos', 'Lechuga repollada', ''],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "La blanca",
        id: "la-blanca",
        precio1: 1200,
        ingredientes: ['Bife', 'Jamón', 'Cheddar', 'Salsa blanca', 'Verdeo', 'Salsa Napoli golf', ''],
        img: './scss/img/hamburguesas/la-blanca.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "La de napoli",
        id: "la-de-napoli",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Emental', 'Pepperoni', '', '', '', ''],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Smoke",
        id: "smoke",
        precio1: 1100,
        ingredientes: ['Bife', 'Cebolla caramelizada', 'Tomate', 'Emental', 'Bacón', 'Pepinillos', 'Salsa Napoli golf'],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Tradicional",
        id: "tradicional",
        precio1: 1000,
        ingredientes: ['Bife', 'Queso', 'Lechuga', 'Tomate', 'Aderezos', '', ''],
        img: './scss/img/hamburguesas/hamburguesa.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },

    ///////////////////////////Papas fritas
 
    {
        nombre: "Simples",
        id: "simples",
        precio1: 800,
        ingredientes: ['Las clásicas de siempre', '', '', '', '', '', ''],
        img: './scss/img/papas-fritas/simples.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Gratinadas",
        id: "gratinadas",
        precio1: 1000,
        ingredientes: ['Queso', '', '', '', '', '', ''],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Con cheddar",
        id: "con-cheddar",
        precio1: 1000,
        ingredientes: ['Cheddar', '', '', '', '', '', ''],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Con cheddar y panceta",
        id: "con-cheddar-y-panceta",
        precio1: 800,
        ingredientes: ['Cheddar', 'Panceta', '', '', '', '', ''],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "4 quesos",
        id: "4-quesos",
        precio1: 1200,
        ingredientes: ['Muzza', 'Cheddar', 'Queso azul', 'Provolone', '', '', ''],
        img: './scss/img/papas-fritas/4-quesos.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Azulada",
        id: "azulada",
        precio1: 1000,
        ingredientes: ['Queso azul', '', '', '', '', '', ''],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Al verdeo",
        id: "al-verdeo",
        precio1: 1000,
        ingredientes: ['Cebolla de verdeo', '', '', '', '', '', ''],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Texanas",
        id: "simples",
        precio1: 1000,
        ingredientes: ['Bacón', 'Salsa picante', 'Ají', '', '', '', ''],
        img: './scss/img/papas-fritas/texanas.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Alioli",
        id: "alioli",
        precio1: 900,
        ingredientes: ['Alioli', '', '', '', '', '', ''],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    ///////////////////////////Sandwiches
    
    {
        nombre: "Carlitos",
        id: "carlitos",
        precio1: 600,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso', '', '', '', ''],
        img: './scss/img/sandwiches/carlitos.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "A la mostaza",
        id: "a-la-mostaza",
        precio1: 1600,
        ingredientes: ['Pechuga de pollo a la mostaza', 'Tomate asado', 'Rúcula', 'Parmesano', '', '', ''],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Lomo cheddar",
        id: "lomo-cheddar",
        precio1: 1600,
        ingredientes: ['Lomito', 'Cheddar', 'Cebolla caramelizada', 'Rúcula', 'Tomate asado', '', ''],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Triple de pollo",
        id: "triple-de-pollo",
        precio1: 800,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso', 'Tomate', 'Lechuga', 'Pollo', ''],
        img: './scss/img/sandwiches/triple-de-pollo.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Tostado triple",
        id: "tostado-triple",
        precio1: 700,
        ingredientes: ['Manteca', 'Jamón', 'Queso','', '', '', '', ''],
        img: './scss/img/sandwiches/tostado-triple.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Napoli",
        id: "napoli",
        precio1: 1600,
        ingredientes: ['Pan de la casa', 'Pollo', 'Cebolla morada', 'Barbacoa', 'Cheddar', 'Tomate asado', ''],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Lomo especial",
        id: "lomo-especial",
        precio1: 1600,
        ingredientes: ['Lomito', 'Pan de la casa', 'Queso', 'Jamón', 'Lechuga', 'Tomate', ''],
        img: './scss/img/sandwiches/lomito.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Triple de verdura",
        id: "triple-de-verdura",
        precio1: 750,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso', 'Tomate', 'Lechuga', 'Huevo', ''],
        img: './scss/img/sandwiches/triple-de-verdura.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    

    ///////////////////////////Bebidas

]

const seccionProductos = document.getElementById('muestra-productos');
const contenedorProductos = document.getElementById('contenedor-productos');
const botonesCategorias = document.querySelectorAll('.contenedor');
const tituloCategoriaContenedor = document.getElementById('titulo-categoria');

let botonesAgregar = document.querySelectorAll('.casilla-add');
let botonesQuitar = document.querySelectorAll('.resta-btn');
const numerito = document.querySelector('#numerito');
let contadores = [];

//Guardo en un array, la lista de ingredientes

function agregarProductos(seleccionados) {

    contenedorProductos.innerHTML = '';

    seleccionados.forEach(producto => {
        const div = document.createElement("div");
        
        div.classList.add('box-producto');
        if(producto.categoria.id == 'pizzas' || producto.categoria.id == 'veganas'){
            div.innerHTML = `
                <img id="img-${producto.id}" class="img-articulo" src="${producto.img}" alt="${producto.nombre}">
                <div class="casilla-info">
                        <h2 class="nombre">${producto.nombre}</h2>
                        <p class="precio">$${producto.precio1} <span>$${producto.precio2}</span></p>
                        <div class="indicacion-pizzas"><p>2 Porc.</p> / <p>8 Porc.</p></div>
                        <ul class="ingredientes" id="lista-ingredientes">
                            <li>${producto.ingredientes[0]}</li>
                            <li>${producto.ingredientes[1]}</li>
                            <li>${producto.ingredientes[2]}</li>
                            <li>${producto.ingredientes[3]}</li>
                            <li>${producto.ingredientes[4]}</li>
                        </ul>
                </div>
                        
                <div class="contador" id="contador-${producto.id}">
                            <ion-icon class="resta-btn" id="resta-${producto.id}" name="remove-outline"></ion-icon>
                            <p class="txtCont" id="txt-${producto.id}"> 0 </p>
                </div>
                <div class="casilla-add" id="${producto.id}">
                            <ion-icon class="suma-btn" id="suma-${producto.id}" name="add-outline"></ion-icon>
                </div>
                `;
        }else {
                div.innerHTML = `
                <img id="img-${producto.id}" class="img-articulo" src="${producto.img}" alt="${producto.nombre}">
                <div class="casilla-info">
                        <h2 class="nombre">${producto.nombre}</h2>
                        <p class="precio"><span style="padding: 0">$${producto.precio1}</span></p>
                        <ul class="ingredientes" id="lista-ingredientes">
                            <li>${producto.ingredientes[0]}</li>
                            <li>${producto.ingredientes[1]}</li>
                            <li>${producto.ingredientes[2]}</li>
                            <li>${producto.ingredientes[3]}</li>
                            <li>${producto.ingredientes[4]}</li>
                            <li>${producto.ingredientes[5]}</li>
                            <li>${producto.ingredientes[6]}</li>
                        </ul>
                </div>
                    
            <div class="contador" id="contador-${producto.id}">
                        <ion-icon class="resta-btn" id="resta-${producto.id}" name="remove-outline"></ion-icon>
                        <p class="txtCont" id="txt-${producto.id}"> 0 </p>
            </div>
            <div class="casilla-add" id="${producto.id}">
                        <ion-icon class="suma-btn" id="suma-${producto.id}" name="add-outline"></ion-icon>
            </div>
            `;
        }

        contenedorProductos.appendChild(div);
    })

    actualizarBotones();
}
//Titulo de las categorias al apretar el botón
botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        seccionProductos.style.display = 'inherit';

        const productoCategoria = productos.find(producto => producto.categoria.id == e.currentTarget.id) //Trae el objeto que cumpla con esa condición

        tituloCategoriaContenedor.innerText = productoCategoria.categoria.nombre;

        const btnCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        agregarProductos(btnCategoria);

    })
}) 

//Actualizar botones: eso es para que se almacenen los respectivos botones de la categoría seleccionada, solo de esa categoría.
function actualizarBotones() {
    botonesAgregar = document.querySelectorAll('.casilla-add');
    botonesQuitar = document.querySelectorAll('.resta-btn');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })

    botonesQuitar.forEach(boton => {
        boton.addEventListener('click', quitarDelCarrito);
    })
    /* 
    actualizarCantidad(); */
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

/* let index = 0; */

function quitarDelCarrito(e) {
    //console.log(e.currentTarget)
    const boxContador = e.currentTarget.parentNode
    const boxAgregar = boxContador.nextSibling.nextSibling;
    const productoARemover = productos.find(producto => producto.id === boxAgregar.id);
    
    //Disminuir la cantidad
    if(productosEnCarrito.some(producto => producto.id === boxAgregar.id)) {
        productoARemover.cantidad--;
        boxContador.lastElementChild.innerText = productoARemover.cantidad;

        if(productoARemover.cantidad === 0){
            boxContador.style.display = 'none'
        }
    } 

    actualizarNumerito();
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;

    const productoAgregado = productos.find(producto => producto.id === idBoton);

    //Aumentar la cantidad
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        productoAgregado.cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    if(productoAgregado.cantidad > 0){
        const contador = e.currentTarget.previousSibling.previousSibling;
        contador.lastElementChild.innerText = productoAgregado.cantidad;
        contador.style.display = 'flex';
    } 
    //Actualizar el numerito
    actualizarNumerito();    
    //Hay que mandarlo al LocalStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let numeroCarro = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);

    if(numeroCarro === 0){
        numerito.style.display = 'none';
    } else {
        numerito.style.display = 'flex';
        numerito.innerText = numeroCarro;
    }
}

