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
document.getElementById('product').addEventListener('submit', function (e) {
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
        nombreCompleto: function () {
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
    let productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.innerHTML = '';

    let subtotal = 0;

    productos.forEach((producto, index) => {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${producto.nombreCompleto()}</h2>
            <p>Categoría: ${producto.categoria}</p>
            <p class="price">$${producto.precio.toFixed(2)}</p>
            <p class="stock">Stock: ${producto.stock}</p>
        `;

        productCardsContainer.appendChild(card);

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

