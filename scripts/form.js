 // Array de productos (simulado)
 const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        "avg-rating": 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

// Función para llenar las opciones del select con los productos
function populateProductOptions() {
    const select = document.getElementById('product');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// Llamar a la función para llenar las opciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
});

// Incrementar el contador de revisiones completadas en localStorage
const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', () => {
    let count = localStorage.getItem('reviewCounter');
    if (!count) {
        count = 0;
    }
    count++;
    localStorage.setItem('reviewCounter', count);
});
