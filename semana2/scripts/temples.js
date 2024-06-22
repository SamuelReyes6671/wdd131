
document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent += document.lastModified;

// Obtener referencia al botón de hamburguesa y al menú de navegación
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

// Agregar evento click al botón de hamburguesa
hamburger.addEventListener('click', () => {
    // Alternar la clase 'show' en el menú de navegación para mostrar u ocultar los elementos
    navMenu.classList.toggle('show');
});

// Agregar evento click para cerrar el menú al hacer clic en cualquier lugar fuera de él
document.addEventListener('click', (event) => {
    if (!event.target.closest('nav') && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    }
});
