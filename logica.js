const images = [
    'imagenes/foto3.png',
    'imagenes/foto1.jpeg',
    'imagenes/foto2.jpg',
];

let currentIndex = 0;
const imagenElement = document.getElementById('imagen');

function cambiarImagen() {
    currentIndex = (currentIndex + 1) % images.length;
    imagenElement.src = images[currentIndex];
}

setInterval(cambiarImagen, 3000);