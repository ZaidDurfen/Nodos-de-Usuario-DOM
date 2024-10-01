// Función para crear un artículo
function crearArticulo(texto, srcImagen, altImagen) {
    let articulo = document.createElement("article");

    // Crear y agregar el párrafo
    let parrafo = document.createElement("p");
    parrafo.className = "texto";
    parrafo.innerText = texto;
    articulo.appendChild(parrafo);

    // Crear y agregar la imagen
    let imagen = document.createElement("img");
    imagen.setAttribute("src", srcImagen);
    imagen.setAttribute("alt", altImagen);
    articulo.appendChild(imagen);

    return articulo;
}

// Agregar artículos a la primera sección
let seccionArticulos = document.getElementById("seccion-articulos");
seccionArticulos.appendChild(crearArticulo("Saber mas", "./imagen/m.png", "Mi Foto"));

// Agregar artículos a la segunda sección
let seccionArticulos2 = document.getElementById("seccion-articulos2");
seccionArticulos2.appendChild(crearArticulo("Saber mas (otra sección)", "./imagen/m.png", "Mi Foto"));
