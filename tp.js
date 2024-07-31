/*document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let marca = document.getElementById('marca').value;
    let categoria = document.getElementById('categoria').value;
    let precio = parseFloat(document.getElementById('precio').value);
    let stock = parseInt(document.getElementById('stock').value);

    let producto = {
        nombre: nombre,
        marca: marca,
        categoria: categoria,
        precio: precio,
        stock: stock,
        nombreCompleto: function() {
            return this.nombre + ' ' + this.marca;
        }
    };

    agregarProducto(producto);
});

let productos = [];

function agregarProducto(producto) {
    productos.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';

    let subtotal = 0;

    productos.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = producto.nombreCompleto() + ' - $' + producto.precio.toFixed(2);
        productList.appendChild(li);

        subtotal += producto.precio;
    });

    let subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = subtotal.toFixed(2);

    let totalElement = document.getElementById('total');
    let total = calcularTotal(subtotal);
    totalElement.textContent = total.toFixed(2);
}

function calcularTotal(subtotal) {
    let iva = 0.21; // 21% de IVA
    let recargoTarjeta = 0.05; // 5% de recargo por pago con tarjeta

    let total = subtotal + (subtotal * iva) + (subtotal * recargoTarjeta);
    return total;
}
*/
/*
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let marca = document.getElementById('marca').value;
    let categoria = document.getElementById('categoria').value;
    let precio = parseFloat(document.getElementById('precio').value);
    let stock = parseInt(document.getElementById('stock').value);
    let usaTarjeta = document.getElementById('tarjeta').checked;

    let producto = {
        nombre: nombre,
        marca: marca,
        categoria: categoria,
        precio: precio,
        stock: stock,
        usaTarjeta: usaTarjeta,
        nombreCompleto: function() {
            return this.nombre + ' ' + this.marca;
        }
    };

    agregarProducto(producto);
});

let productos = [];

function agregarProducto(producto) {
    productos.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';

    let subtotal = 0;

    productos.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = producto.nombreCompleto() + ' - $' + producto.precio.toFixed(2);
        productList.appendChild(li);

        subtotal += producto.precio;
    });

    let subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = subtotal.toFixed(2);

    let totalElement = document.getElementById('total');
    let total = calcularTotal(subtotal);
    totalElement.textContent = total.toFixed(2);
}

function calcularTotal(subtotal) {
    let iva = 0.21; // 21% de IVA
    let recargoTarjeta = 0.05; // 5% de recargo por pago con tarjeta

    let total = subtotal + (subtotal * iva);

    // Verificar si se usa tarjeta de crédito
    let usaTarjeta = document.getElementById('tarjeta').checked;
    if (usaTarjeta) {
        total += subtotal * recargoTarjeta;
    }

    return total;
}
*/







//llamamos al elemento por el ID al formulario a travez del "getElementById"

/*"addEventListener" es para maenjar eventos. el evento se activará siempre que ocurra el 
evento especificado. Esto significa que el manejador de eventos se llamará siempre que ocurra el evento*/

//"submit" envia el formulario

//"preventDeFault()" es para la cancelacion del evento

document.getElementById('product').addEventListener('submit', function (e) {
    e.preventDefault();
//por el "getElementById" llame a los inputs y les designe una variable
    let nombre = document.getElementById('nombre').value;
    let marca = document.getElementById('marca').value;
    let categoria = document.getElementById('categoria').value;
    let precio = parseFloat(document.getElementById('precio').value);
    let stock = parseInt(document.getElementById('stock').value);
    let usaTarjeta = document.getElementById('tarjeta').checked;
// creamos la variable producto con la informacion guardada de los campos
    let producto = {
        nombre: nombre,
        marca: marca,
        categoria: categoria,
        precio: precio,
        stock: stock,
        usaTarjeta: usaTarjeta,
        //"nombreCompleto" almacena una funcion que devuelve el nombre y la marca
        //"return" devuelve el valor de la funcion
        nombreCompleto: function () {
            return this.nombre + ' ' + this.marca;
        }
    };
    //dentro de la funcion del formulario
    //agregamos otra funcion "agregarProducto" que llama a la variable producto 
    agregarProducto(producto);
});
//que es un array? es una lista ordenada de valores que pueden tener cualquier elemento
//creamos un array vacio que se llama "productos"
let productos = [];
//llamamos a la funcion que almecena la informacion
function agregarProducto(producto) {
   //al array vacio se le sube la informacion de "producto"
   //cuando se llama a "agregarProducto" con un nuevo produtcot, esto se agrega a la lista de productos
    productos.push(producto);
//actualiza la interfaz de usuario del carrito de compras para subir los cambios a "productos"
    actualizarCarrito();
}
//declaramos la funcion "actualizarCarrito()"
function actualizarCarrito() {
    //llamamos por el getElementById a el div vacio del html y le declaramos una variable
    let productCardsContainer = document.getElementById('product-cards');
    //para asegurar que el elemento del html este vacio, se le crea la propiedad "innerHTML='';" vacio
    productCardsContainer.innerHTML = '';
//se declara la variable afuera de la funcion y se inicializa en 0 (cero)

    let subtotal = 0;
/*"forEach" Es un método de los arrays en JavaScript que ejecuta la función 
proporcionada una vez por cada elemento del array.*/
//creacion de una funcion con flecha de dos parametros (el elemento actual) y (el indice actual)
    productos.forEach((producto, index) => {
        //creamos un "div" usando el "createElement" y le declaramos una variable 
        let card = document.createElement('div');
        //"classlist" agrega la clase del CSS "card" al "div" 
        card.classList.add('card');
        //el contenido del html incluye:
        /* 
        - un titulo con el nombre completo y marca
        -un parrafo con la cateforia del producto
        -un parrafo con el precio del producto formateado a dos decimales
        -un parrafo con el stock del producto
        */
        card.innerHTML = `
            <h2>${producto.nombreCompleto()}</h2> 
            <p>Categoría: ${producto.categoria}</p>
            <p class="price">$${producto.precio.toFixed(2)}</p>
            <p class="stock">Stock: ${producto.stock}</p>
        `;
//en el "productCardsContainer" es el contenedor donde se guardan las referencias
//se le agrega el elemento "card" como hijo del del contenedor "productCardsContainer"
        productCardsContainer.appendChild(card);
//subtotal es una variable que acumula el precio total de los productos del array
//despues suma el precio del producto actual al subtotal
        subtotal += producto.precio;
    });
//llamamos al atraves del ID al "subtotal" creandole una variable
    let subtotalElement = document.getElementById('subtotal');
    //el textContent establece el contenido de texto del elemento
    //el tofixed convierte el valor del subtotal a una cadena que en este caso es de dos decimales
    subtotalElement.textContent = subtotal.toFixed(2);

    //se llama a la funcion a traves del ID
    //a total se le designa la funcion calcularTotal teniendo como parametro el subtotal
    let totalElement = document.getElementById('total');
    let total = calcularTotal(subtotal);
    totalElement.textContent = total.toFixed(2);
}
//creamos la funcion calcularTotal teniendo como parametro el subtotal
function calcularTotal(subtotal) {
    //creamos la variable IVA con el valor de 0.21
    let iva = 0.21; // 21% de IVA
    let recargoTarjeta = 0.05; // 5% de recargo por pago con tarjeta
// ña variable total se le suma el subtotal por iva
    let total = subtotal + (subtotal * iva);

    // Verificar si se usa tarjeta de crédito

    let usaTarjeta = document.getElementById('tarjeta').checked;
    if (usaTarjeta) {
        //al total le sume el subtotal por el 0.5 del recargo por pagar con tarjeta
        total += subtotal * recargoTarjeta;
    }
    //devuelve el valor total
    return total;
}
 
//llamamos al boton final
//cuando haga click aparezca un alert de que quiso finalizar el pedido
document.getElementById("pedidoBtn").addEventListener("click", function() {
        alert("Finalizó pedido")
});


