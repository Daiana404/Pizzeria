const productos = [
    ///////////////////////////Pizzas
    {
        nombre: "Pizza 01",
        id: "pizza-01",
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
        nombre: "Pizza 02",
        id: "pizza-02",
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
        nombre: "Pizza 03",
        id: "pizza-03",
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
        nombre: "Pizza 04",
        id: "pizza-04",
        precio1: 1000,
        precio2: 3800,
        ingredientes: ['Muzza', 'Tomates', 'Ajo', 'Albahaca'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas',
            id: 'pizzas'
        }
    },
    ///////////////////////////Pizzas veganas

    {
        nombre: "Pizza vegana 01",
        id: "pizza-vegana-01",
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
        nombre: "Pizza vegana 02",
        id: "pizza-vegana-02",
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
        nombre: "Pizza vegana 03",
        id: "pizza-vegana-03",
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
        nombre: "Pizza vegana 04",
        id: "pizza-vegana-04",
        precio1: 1100,
        precio2: 4200,
        ingredientes: ['Queso vegano', 'Cebolla morada'],
        img: './scss/img/pizzas/pepperoni.png',
        categoria: {
            nombre: 'Pizzas veganas',
            id: 'veganas'
        }
    },

    ///////////////////////////Hamburguesas

    {
        nombre: "Hamburguesa 01",
        id: "hamburguesa-01",
        precio1: 1200,
        ingredientes: ['Bife', 'Ananá', 'Rúcula', 'Salsa Napoli golf'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Hamburguesa 02",
        id: "hamburguesa-02",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Ketchup casero', 'Cheddar', 'Cebolla caramelizada', 'Bacón'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Hamburguesa 03",
        id: "hamburguesa-03",
        precio1: 1100,
        ingredientes: ['Bife', 'Queso', 'Jamón', 'Huevo', 'Tomate', 'Lechuga'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },
    {
        nombre: "Hamburguesa 04",
        id: "hamburguesa-04",
        precio1: 1300,
        ingredientes: ['Bife x 2', 'Colchón de rúcula', 'Bacón', 'Queso parmesano/muzza/azul', 'Salsa Napoli golf', 'Lechuga'],
        img: './scss/img/hamburguesas/la-gourmet.png',
        categoria: {
            nombre: 'Hamburguesas',
            id: 'hamburguesas'
        }
    },

    ///////////////////////////Papas fritas
 
    {
        nombre: "Papas 01",
        id: "papas-01",
        precio1: 800,
        ingredientes: ['Las clásicas de siempre'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Papas 02",
        id: "papas-02",
        precio1: 1000,
        ingredientes: ['Queso'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Papas 03",
        id: "papas-03",
        precio1: 1000,
        ingredientes: ['Cheddar'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    {
        nombre: "Papas 04",
        id: "papas-04",
        precio1: 800,
        ingredientes: ['Cheddar', 'Panceta'],
        img: './scss/img/papas-fritas/al-verdeo.png',
        categoria: {
            nombre: 'Papas fritas',
            id: 'papas-fritas'
        }
    },
    ///////////////////////////Sandwiches
    
    {
        nombre: "Sandwich 01",
        id: "sandwich-01",
        precio1: 600,
        ingredientes: ['Mayonesa', 'Jamón', 'Queso'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Sandwich 02",
        id: "sandwich-02",
        precio1: 1600,
        ingredientes: ['Pechuga de pollo a la mostaza', 'Tomate asado', 'Rúcula', 'Parmesano'],
        img: './scss/img/sandwiches/sandwich.png',
        categoria: {
            nombre: 'Sandwiches',
            id: 'sandwiches'
        }
    },
    {
        nombre: "Sandwich 03",
        id: "sandwich-03",
        precio1: 1600,
        ingredientes: ['Lomito', 'Cheddar', 'Cebolla caramelizada', 'Rúcula', 'Tomate asado'],
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
            <img loading="lazy" id="img-${producto.id}" class="img-articulo" src="${producto.img}" alt="${producto.nombre}">
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
                <img loading="lazy" id="img-${producto.id}" class="img-articulo" src="${producto.img}" alt="${producto.nombre}">
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

