let productos = [
    {
        "id": "abrigo-02",
        "titulo": "#01 AF",
        "imagen": "./flor1.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1850
    },
    {
        "id": "abrigo-03",
        "titulo": "#2 AB",
        "imagen": "./flor4.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 100
    },
    {
        "id": "abrigo-04",
        "titulo": "#03 AF",
        "imagen": "./flor5.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1680
    },
    {
        "id": "abrigo-05",
        "titulo": "#3 AB",
        "imagen": "./flor6.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1180
    },
    {
        "id": "abrigo-05",
        "titulo": "#04 AF",
        "imagen": "./flor7.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1190
    },
    {
        "id": "abrigo-05",
        "titulo": "#05 AF",
        "imagen": "./flor8.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1499
    },
    {
        "id": "abrigo-06",
        "titulo": "#05 AQ",
        "imagen": "./flor9.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 510
    },
    {
        "id": "abrigo-07",
        "titulo": "#06 AF",
        "imagen": "./flor10.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 2000
    },
    {
        "id": "abrigo-08",
        "titulo": "#13 AR",
        "imagen": "./flor14.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 210
    },
    {
        "id": "abrigo-09",
        "titulo": "#14 AR",
        "imagen": "./flor15.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 568
    },
    {
        "id": "abrigo-10",
        "titulo": "ARP05",
        "imagen": "./flor16.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 263
    },
    {
        "id": "abrigo-11",
        "titulo": "IR02",
        "imagen": "./flor17.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 45
    },
    {
        "id": "abrigo-12",
        "titulo": "IR03",
        "imagen": "./flor18.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 35
    },
 












    
    {
        "id": "camiseta-02",
        "titulo": "S02",
        "imagen": "./semilla2.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 36
    },
    {
        "id": "camiseta-03",
        "titulo": "S04",
        "imagen": "./semilla3.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 21
    },
    {
        "id": "camiseta-04",
        "titulo": "S03",
        "imagen": "./semilla4.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 22
    },
    {
        "id": "camiseta-05",
        "titulo": "S06",
        "imagen": "./semilla5.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 18
    },
    {
        "id": "camiseta-06",
        "titulo": "S05",
        "imagen": "./semilla6.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 16
    },
    {
        "id": "camiseta-07",
        "titulo": "S01",
        "imagen": "./semilla7.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 26
    },
    


















    {
        "id": "pantalon-01",
        "titulo": "H01",
        "imagen": "./art1.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 89
    },
    {
        "id": "pantalon-02",
        "titulo": "H02",
        "imagen": "./art2.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 56
    },
    {
        "id": "pantalon-03",
        "titulo": "H03",
        "imagen": "./art3.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 15
    },
    {
        "id": "pantalon-04",
        "titulo": "M01",
        "imagen": "./art4.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 155
    },
   
];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">Q.${producto.precio}</p>
                
                
                
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}