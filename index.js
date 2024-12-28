
//const listProductos = document.querySelector("#lista-productos");
const grid = document.querySelector(".grid");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
if (!grid) {
  console.log("No se encontro contenedor");
}
else{
  fetch('https://apiprueba-production-4527.up.railway.app/productosApi/getAllProductos')
  .then(response => response.json())
  .then(data => {
data.forEach(element => {
  
  const listProductos = document.createElement("div")
  listProductos.className = "lista-productos";
  listProductos.style.border = "1px solid #ddd";
  listProductos.style.borderRadius = "5px";
  listProductos.style.padding = "15px";
  listProductos.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  listProductos.style.textAlign = "center";
  listProductos.style.overflow = "hidden";
  listProductos.style.maxWidth = "3000px";
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
    liPrecio.innerText ="$" + element.precio;
    liPrecio.style.fontWeight = "bold";
    
    const boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.style.backgroundColor = "#4CAF50";
    boton.style.color = "white";
    boton.style.border = "none";
    boton.style.padding = "10px";
    boton.style.cursor = "pointer";
    boton.style.marginTop = "10px";


    boton.addEventListener("click", () => {
      carrito.push({
        id: element.id,
        titulo: element.titulo,
        precio: element.precio,
        imagen: element.imagen,
      });
      
      localStorage.setItem("carrito", JSON.stringify(carrito));
      
      alert(`Producto "${element.titulo}" agregado al carrito`);
      console.log("Carrito actualizado:", carrito);
    });
    
    listProductos.append(img);
    listProductos.append(liTitulo);
    listProductos.append(li);
    listProductos.append(liPrecio);
    listProductos.append(boton);

    grid.appendChild(listProductos);
    console.log(data);

    //saveLocal()
    //console.log(carrito[i]); 
});

  }); 

}

