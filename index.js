
//const listProductos = document.querySelector("#lista-productos");
const grid = document.querySelector(".grid");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
if (!grid) {
  console.log("No se encontro contenedor");
}
else{
  fetch('http://localhost:8080/productosApi/getAllProductos')
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



 /* const crearHTML = (item) => {
    const html = `
              <article data-id="${item.id}">
                  <h3>${item.titulo}</h3>
                  <img src="${item.imagen}" width="200" alt="${item.titulo}">
                  <p>${item.descripcion}</p>
                  <p>$ ${item.precio}</p>
                  <button type="button">Agregar</button>
              </article>
          `;
  
    return html;
  };

  const mostrarProductos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      console.log(response);
      const array = await response.json();
  
      console.log(array);
      const listaProductos = document.querySelector("#lista-productos");
      listaProductos.innerHTML = "";
      array.forEach((item) => {
        const elementos = crearHTML(item);
        //   console.log(elementos);
        listaProductos.innerHTML += elementos;
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  mostrarProductos();
*/

/*
fetch('https://example.com/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  console.log("Ok");

  const crearHTML = (item) => {
    const html = `
              <article data-id="${item.id}">
                  <h3>${item.categoria}</h3>
                  <img src="${item.imagen}" width="200" alt="${item.titulo}">
                  <p>${item.descripcion}</p>
                  <p>$ ${item.precio}</p>
                  <button type="button">Agregar</button>
              </article>
          `;
  
    return html;
  };

  const mostrarProductos = async () => {
    try {
      const response = await fetch("http://localhost:8080/prodcutosApi/getAllProductos");
      console.log(response);
      const array = await response.json();
  
      console.log(array);
      const listaProductos = document.querySelector("#lista-productos");
      listaProductos.innerHTML = "";
      array.forEach((item) => {
        const elementos = crearHTML(item);
        //   console.log(elementos);
        listaProductos.innerHTML += elementos;
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  mostrarProductos();*/
   