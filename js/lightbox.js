const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const tituloLight = document.querySelector('.titulo-light');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        imagenLight.src = imagen.src;
        tituloLight.textContent = imagen.dataset.title;
        contenedorLight.classList.add('show');
        imagenLight.classList.add('showImage');
    });
});

contenedorLight.addEventListener('click', () => {
    contenedorLight.classList.remove('show');
    imagenLight.classList.remove('showImage');
});

