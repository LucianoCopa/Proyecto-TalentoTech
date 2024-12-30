const grid = document.querySelector(".grid");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contadorCarrito = document.getElementById("contador-carrito");

function actualizarContadorCarrito() {
  contadorCarrito.textContent = carrito.length; // Muestra la cantidad de productos distintos en el carrito
}

function mostrarModal(mensaje) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.backgroundColor = "#fff";
  modal.style.padding = "20px";
  modal.style.borderRadius = "5px";
  modal.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
  modal.style.textAlign = "center";
  modal.style.zIndex = "1000";

  const text = document.createElement("p");
  text.innerText = mensaje;
  modal.appendChild(text);

  const closeButton = document.createElement("button");
  closeButton.innerText = "Cerrar";
  closeButton.style.marginTop = "10px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
  document.body.appendChild(modal);
}

// Actualizar el contador al cargar la página
actualizarContadorCarrito();

if (!grid) {
  console.log("No se encontró el contenedor");
} else {
  fetch('https://apiprueba-production-4527.up.railway.app/productosApi/getAllProductos')
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        const listProductos = document.createElement("div");
        listProductos.className = "lista-productos";
        listProductos.style.border = "1px solid #ddd";
        listProductos.style.borderRadius = "5px";
        listProductos.style.padding = "15px";
        listProductos.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        listProductos.style.textAlign = "center";
        listProductos.style.overflow = "hidden";
        listProductos.style.maxWidth = "300px";
        listProductos.style.margin = "5px";
        listProductos.style.display = "flex";
        listProductos.style.flexDirection = "column";
        listProductos.style.justifyContent = "space-evenly";
        listProductos.style.alignItems = "center";
        listProductos.style.color = "white";

        const liTitulo = document.createElement("h3");
        liTitulo.innerText = element.titulo;
        liTitulo.style.fontWeight = "bold";

        const li = document.createElement("p");
        li.innerText = element.descripcion;

        const img = document.createElement("img");
        img.src = element.imagen;
        img.alt = element.imagen;
        img.style.width = "200px";
        img.style.height = "180px";

        const liPrecio = document.createElement("p");
        liPrecio.innerText = "$" + element.precio;
        liPrecio.style.fontWeight = "bold";

        const boton = document.createElement("button");
        boton.innerText = "Agregar al carrito";
        boton.style.backgroundColor = "#4CAF50";
        boton.style.color = "white";
        boton.style.border = "none";
        boton.style.padding = "10px";
        boton.style.cursor = "pointer";
        boton.style.marginTop = "10px";

        // Evento para agregar producto al carrito
        boton.addEventListener("click", () => {
          // Verificar si el producto ya existe en el carrito
          const existe = carrito.find(producto => producto.id === element.id);
          if (existe) {
            mostrarModal(`El producto "${element.titulo}" ya está en el carrito`);
          } else {
            carrito.push({
              id: element.id,
              titulo: element.titulo,
              precio: element.precio,
              imagen: element.imagen,
              cantidad: 1, // Agregar con cantidad inicial de 1
            });

            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarContadorCarrito();

            alert(`Producto "${element.titulo}" agregado al carrito`);
            console.log("Carrito actualizado:", carrito);
          }
        });

        listProductos.append(img);
        listProductos.append(liTitulo);
        listProductos.append(li);
        listProductos.append(liPrecio);
        listProductos.append(boton);

        grid.appendChild(listProductos);
      });
    })
    .catch(error => console.error("Error al cargar los productos:", error));
}