const productos = [
    ///////////////////////////Pizzas
    {
        nombre: "Pepperoni",
        id: "pepperoni",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Muzza', 'Pepperoni'],
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
        ingredientes: ['Muzza', 'Ananá', 'Cereza'],
        img: './scss/img/pizzas/pepperoni.png',
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
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Tomates', 'Ajo', 'Albahaca'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Bacón', 'Alioli', 'Perejil'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Cebolla morada', 'Morrón'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Salsa roja', 'Pollo'],
        img: './scss/img/pizzas/pepperoni.png',
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
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Jamón', 'Huevo', 'Morrón'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Anchoas', 'Aceitunas negras'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Tomates cherry', 'Pesto'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Cheddar', 'Queso azul', 'Provolone'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Trozos de queso brie', 'Albahaca'],
        img: './scss/img/pizzas/pepperoni.png',
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
        ingredientes: ['Muzza', 'Cheddar', 'Pollo', 'Salsa barbacoa'],
        img: './scss/img/pizzas/pepperoni.png',
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
        img: './scss/img/pizzas/pepperoni.png',
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
        img: './scss/img/pizzas/pepperoni.png',
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
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    ///////////////////////////Pizzas veganas

    {
        nombre: "Común",
        id: "comun-vegan",
        precio1: 800,
        precio2: 3100,
        ingredientes: ['Queso vegano'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Cherry y pesto",
        id: "cherry-y-pesto-vegan",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Tomates cherry', 'Pesto'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Rúcula",
        id: "rucula-vegan",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Rúcula', 'Tomates cherry', 'Aceite de oliva'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Caprese",
        id: "caprese-vegan",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Tomates cherry', 'Pesto'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Fugazzeta",
        id: "fugazzeta-vegan",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Queso vegano', 'Cebolla morada'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },
    {
        nombre: "Texana",
        id: "texana-vegan",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Queso vegano', 'Salsa picante', 'Ají'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },

    ///////////////////////////Hamburguesas

    {
        nombre: "Agridulce",
        id: "agridulce-hamburguesa",
        precio1: 1200,
        ingredientes: ['Bife', 'Ananá', 'Rúcula', 'Salsa Napoli golf'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Chuck Norris",
        id: "chuck-norris-hamburguesa",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Ketchup casero', 'Cheddar', 'Cebolla caramelizada', 'Bacón'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Especial",
        id: "especial-hamburguesa",
        precio1: 1100,
        ingredientes: ['Bife', 'Queso', 'Jamón', 'Huevo', 'Tomate', 'Lechuga'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "La gourmet",
        id: "la-gourmet-hamburguesa",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Colchón de rúcula', 'Bacón', 'Queso parmesano/muzza/azul', 'Salsa Napoli golf', 'Lechuga'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Simple cheddar",
        id: "simple-cheddar-hamburguesa",
        precio1: 1100,
        ingredientes: ['Bife', 'Cheddar'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Doble cheddar",
        id: "doble-cheddar-hamburguesa",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Cheddar x 2'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Tapa arterias",
        id: "tapa-arterias-hamburguesa",
        precio1: 1500,
        ingredientes: ['Bife x 3', 'Cheddar x 3', 'Bacón x 3', 'ketchuo casero'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Big house",
        id: "big-house-hamburguesa",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Cebolla caramelizada', 'Bacón', 'Cheddar', 'Pepinillos', 'Lechuga repollada'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "La blanca",
        id: "la-blanca-hamburguesa",
        precio1: 1200,
        ingredientes: ['Bife', 'Jamón', 'Cheddar', 'Salsa blanca', 'Verdeo', 'Salsa Napoli golf'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "La de napoli",
        id: "la-de-napoli-hamburguesa",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Emental', 'Pepperoni'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Smoke",
        id: "smoke-hamburguesa",
        precio1: 1100,
        ingredientes: ['Bife', 'Cebolla caramelizada', 'Tomate', 'Emental', 'Bacón', 'Pepinillos', 'Salsa Napoli golf'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Tradicional",
        id: "tradicional-hamburguesa",
        precio1: 1000,
        ingredientes: ['Bife', 'Queso', 'Lechuga', 'Tomate', 'Aderezos'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },

    ///////////////////////////Papas fritas
 
    {
        nombre: "Simples",
        id: "simples-papas",
        precio1: 800,
        ingredientes: ['Las clásicas de siempre'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Gratinadas",
        id: "gratinadas-papas",
        precio1: 1000,
        ingredientes: ['Queso'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Con cheddar",
        id: "con-cheddar-papas",
        precio1: 1000,
        ingredientes: ['Cheddar'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Con cheddar y panceta",
        id: "con-cheddar-y-panceta-papas",
        precio1: 800,
        ingredientes: ['Cheddar', 'Panceta'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "4 quesos",
        id: "4-quesos-papas",
        precio1: 1200,
        ingredientes: ['Muzza', 'Cheddar', 'Queso azul', 'Provolone'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Azulada",
        id: "azulada-papas",
        precio1: 1000,
        ingredientes: ['Queso azul'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Al verdeo",
        id: "al-verdeo-papas",
        precio1: 1000,
        ingredientes: ['Cebolla de verdeo'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Texanas",
        id: "texanas-papas",
        precio1: 1000,
        ingredientes: ['Bacón', 'Salsa picante', 'Ají'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Alioli",
        id: "alioli-papas",
        precio1: 900,
        ingredientes: ['Alioli'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    ///////////////////////////Sandwiches
    
    {
        nombre: "Carlitos",
        id: "carlitos-sandwich",
        precio1: 600,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "A la mostaza",
        id: "a-la-mostaza-sandwich",
        precio1: 1600,
        ingredientes: ['Pechuga de pollo a la mostaza', 'Tomate asado', 'Rúcula', 'Parmesano'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Lomo cheddar",
        id: "lomo-cheddar-sandwich",
        precio1: 1600,
        ingredientes: ['Lomito', 'Cheddar', 'Cebolla caramelizada', 'Rúcula', 'Tomate asado'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Triple de pollo",
        id: "triple-de-pollo-sandwich",
        precio1: 800,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso', 'Tomate', 'Lechuga', 'Pollo'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Tostado triple",
        id: "tostado-triple-sandwich",
        precio1: 700,
        ingredientes: ['Manteca', 'Jamón', 'Queso'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Napoli",
        id: "napoli-sandwich",
        precio1: 1600,
        ingredientes: ['Pan de la casa', 'Pollo', 'Cebolla morada', 'Barbacoa', 'Cheddar', 'Tomate asado'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Lomo especial",
        id: "lomo-especial-sandwich",
        precio1: 1600,
        ingredientes: ['Lomito', 'Pan de la casa', 'Queso', 'Jamón', 'Lechuga', 'Tomate'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Triple de verdura",
        id: "triple-de-verdura-sandwich",
        precio1: 750,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso', 'Tomate', 'Lechuga', 'Huevo'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    

    ///////////////////////////Bebidas

    {
        nombre: "Martini",
        id: "martini",
        precio1: 550,
        ingredientes: ['Martini', 'Jugo de un limón'],
        img: './scss/img/bebidas/bebida-04.png',
        categoria: {
            nombre: 'Bebidas',
            id: 'bebidas'
        }
    },
    {
        nombre: "Gin tonic rojo",
        id: "gin-tonic",
        precio1: 850,
        ingredientes: ['Gin', 'Tónica', 'Frutos rojos'],
        img: './scss/img/bebidas/bebida-05.png',
        categoria: {
            nombre: 'Bebidas',
            id: 'bebidas'
        }
    },
    {
        nombre: "Coca-cola",
        id: "coca-cola",
        precio1: 550,
        ingredientes: ['Coquita'],
        img: './scss/img/bebidas/bebida-02.png',
        categoria: {
            nombre: 'Bebidas',
            id: 'bebidas'
        }
    },
    {
        nombre: "Trago sorpresa",
        id: "trago-sorpresa",
        precio1: 850,
        ingredientes: ['Ingredientes sorprendentes'],
        img: './scss/img/bebidas/bebida-01.png',
        categoria: {
            nombre: 'Bebidas',
            id: 'bebidas'
        }
    },
    {
        nombre: "Cerveza",
        id: "cerveza",
        precio1: 550,
        ingredientes: ['Andes', 'Quilmes', 'Corona'],
        img: './scss/img/bebidas/bebida-03.png',
        categoria: {
            nombre: 'Bebidas',
            id: 'bebidas'
        }
    },

]

//Mostrar productos
const seccionProductos = document.getElementById('muestra-productos');
const contenedorProductos = document.getElementById('contenedor-productos');
const botonesCategorias = document.querySelectorAll('.contenedor');
const tituloCategoriaContenedor = document.getElementById('titulo-categoria');
//Agregar al carro
let restaBotones = document.querySelectorAll('.resta-btn');
let botonesAgregar = document.querySelectorAll('.casilla-add');
const numerito = document.querySelector('#numerito');
//Animación
let imagenes = document.querySelectorAll('.img-articulo');

let productosEnCarro = [];

const productosEnCarroLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarroLS) {
    productosEnCarro = productosEnCarroLS;
    actualizarNumerito();
} else {
    productosEnCarro = [];
}

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        seccionProductos.style.display = 'inherit';
        //Creo el array con los productos seleccionados
        const productosSeleccionados = productos.filter(producto => producto.categoria.id === boton.id);

        mostrarProductos(productosSeleccionados);

        //Agrego el nombre de la categoria
        tituloCategoriaContenedor.innerText = productosSeleccionados[0].categoria.nombre;

        if(productosEnCarro.some(producto => producto.categoria.id === boton.id)){/* 
            console.log('hay producto')
            console.log(e.currentTarget.id) */
        }
    });
})

function mostrarProductos(seleccionados) {
    contenedorProductos.innerHTML = '';
    
    seleccionados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('box-producto');
        div.setAttribute("id", `box-${producto.id}`);

        if(producto.categoria.id === 'pizzas' || producto.categoria.id === 'veganas') {
            div.innerHTML = `
            <img id="img-${producto.id}" class="img-articulo" src="${producto.img}" alt="${producto.nombre}">
            <div class="casilla-info">
                    <h2 class="nombre">${producto.nombre}</h2>
                    <p class="precio">$${producto.precio1} <span>$${producto.precio2}</span></p>
                    <div class="indicacion-pizzas"><p>2 Porc.</p> / <p>8 Porc.</p></div>
                    <ul class="ingredientes" id="lista-${producto.id}">
                    </ul>
            </div>
                    
            <div class="casilla-contador" id="contador-${producto.id}">
                        <ion-icon class="resta-btn" id="resta-${producto.id}" name="remove-outline"></ion-icon>
                        <p class="txtCont" id="txt-${producto.id}"> 0 </p>
            </div>

            <div class="casilla-add" id="suma-${producto.id}">
                        <ion-icon class="suma-btn" name="add-outline"></ion-icon>
            </div>
            `;
        } else {
            div.innerHTML = `
                <img id="img-${producto.id}" class="img-articulo" src="${producto.img}" alt="${producto.nombre}">
                <div class="casilla-info">
                        <h2 class="nombre">${producto.nombre}</h2>
                        <p class="precio"><span style="padding: 0">$${producto.precio1}</span></p>
                        <ul class="ingredientes" id="lista-${producto.id}">
                        </ul>
                </div>
                    
            <div class="casilla-contador" id="contador-${producto.id}">
                        <ion-icon class="resta-btn" id="resta-${producto.id}" name="remove-outline"></ion-icon>
                        <p class="txtCont" id="txt-${producto.id}"> 0 </p>
            </div>
            <div class="casilla-add" id="suma-${producto.id}">
                        <ion-icon class="suma-btn" name="add-outline"></ion-icon>
            </div>
            `;

        }
        contenedorProductos.appendChild(div);

        cargarIngredientes(producto);
    })
    boxProductos = document.querySelectorAll('.box-producto');
    recargarBotones();
    imagenes = document.querySelectorAll('.img-articulo');
        moveImg()
}

function recargarBotones() {
    botonesAgregar = document.querySelectorAll('.casilla-add');
    restaBotones = document.querySelectorAll('.resta-btn');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
    restaBotones.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarro);
    })
    
    actualizarContadores()
}

function cargarIngredientes(producto) {
    const lista = document.getElementById(`lista-${producto.id}`);
    producto.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.innerText = ingrediente;
        lista.appendChild(li);
    })
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    let productoSumado = productos.find(producto => `suma-${producto.id}` === idBoton);
    if(productosEnCarro.some(producto => producto.id === productoSumado.id)){
        productoSumado = productosEnCarro.find(producto => `suma-${producto.id}` === idBoton);
    }

    const contador = e.currentTarget.previousSibling.previousSibling;
    contador.style.display = 'flex';
    const txt = contador.lastElementChild;

    if(productosEnCarro.some(producto => producto.id === productoSumado.id)) {
        productoSumado.cantidad++;
    } else {
        productoSumado.cantidad = 1;
        productosEnCarro.push(productoSumado);
    }
    
    txt.innerText = productoSumado.cantidad;
    actualizarNumerito()
    //Al localstorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarro));
}

function eliminarDelCarro(e) {
    const restaBoton = e.currentTarget;
    const productoRestado = productosEnCarro.find(producto => `resta-${producto.id}` === restaBoton.id);
    const txt = restaBoton.nextSibling.nextSibling;
    const boxContador = restaBoton.parentNode;
    
    const index = productosEnCarro.findIndex(producto => producto.id === productoRestado.id)
    
    if(productosEnCarro.some(producto => producto.id === productoRestado.id)){
        productoRestado.cantidad--;
    }
    
    if( productoRestado.cantidad === 0) {
        boxContador.style.display = 'none';
        productosEnCarro.splice(index, 1);
    }
    txt.innerText = productoRestado.cantidad; 

    //Me imagino que sobreescribe los datos...
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarro));

    actualizarNumerito();
}

function actualizarNumerito() {
    let numeroCarro = productosEnCarro.reduce((acc, producto) => acc + producto.cantidad, 0);

    if(numeroCarro <= 0){
        numerito.style.display = 'none';
        numerito.innerText = 0;
    } else {
        numerito.style.display = 'flex';
        numerito.innerText = numeroCarro;
    }
}

function actualizarContadores() {
    const boxProductos = document.querySelectorAll('.box-producto');
    

    boxProductos.forEach(caja => {
        if(productosEnCarro.find(producto => `box-${producto.id}` === caja.id)) {
            const producto = productosEnCarro.find(producto => `box-${producto.id}` === caja.id)
            const contador = caja.lastElementChild.previousElementSibling;
            const txt = contador.lastElementChild;

            //Mostrar el contador
            contador.style.display = 'flex';
            //Escribir la cantidad
            txt.innerHTML = producto.cantidad;
        }
    })  
}

//Animación de las imágenes


window.addEventListener('scroll', moveImg);

function moveImg() {
    const triggerBottom = window.innerHeight / 5 * 4;
    imagenes.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        if(imgTop < triggerBottom) {
            img.classList.add('show');
        } else {
            img.classList.remove('show');
        }
    })
}

