const listaCarrito = document.querySelector("#lista-carrito");
const totalContainer = document.querySelector("#total"); // Un contenedor para mostrar el total

// Recupera los productos almacenados en LocalStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para renderizar el carrito
function renderizarCarrito() {
  listaCarrito.innerHTML = ""; // Limpia el contenido actual

  // Verifica si el carrito tiene productos
  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>El carrito está vacío</p>";
    totalContainer.innerText = "Total: $0"; // Muestra total vacío
    return;
  }

  carrito.forEach((producto, index) => {
    const divProducCarrito = document.createElement("div");
    divProducCarrito.className = "listadd-carrito";
    divProducCarrito.style.display = "flex";
    divProducCarrito.style.flexDirection = "row";
    divProducCarrito.style.alignItems = "center";
    divProducCarrito.style.gap = "10px";
    divProducCarrito.style.width = "100%";
    divProducCarrito.style.marginBottom = "15px";
    divProducCarrito.style.color = "white";

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.titulo;
    img.style.width = "80px";
    img.style.height = "80px";

    const textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.gap = "5px";
    textContainer.style.flexGrow = "1";

    const li = document.createElement("li");
    li.innerText = producto.titulo;
    li.style.margin = "0";
    li.style.listStyle = "none";

    const p = document.createElement("p");
    p.innerText = "$" + producto.precio;
    p.style.margin = "0";

    const button = document.createElement("button");
    button.innerText = "Eliminar";
    button.style.marginLeft = "auto";

    // Evento para eliminar el producto
    button.addEventListener("click", () => {
      eliminarProducto(index);
    });

    textContainer.appendChild(li);
    textContainer.appendChild(p);

    divProducCarrito.appendChild(img);
    divProducCarrito.appendChild(textContainer);
    divProducCarrito.appendChild(button);

    listaCarrito.appendChild(divProducCarrito);
  });

  // Calcula y muestra el total
  calcularTotal();
}

// Función para eliminar un producto
function eliminarProducto(index) {
  carrito.splice(index, 1); // Elimina el producto del array
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualiza el LocalStorage
  renderizarCarrito(); // Vuelve a renderizar el carrito
}

// Función para calcular el precio total
function calcularTotal() {
  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0); // Suma los precios
  totalContainer.innerText = "Total: $" + total; // Muestra el total
}

// Renderiza el carrito al cargar la página
renderizarCarrito();