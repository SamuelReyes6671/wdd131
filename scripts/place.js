// Función para calcular el factor de sensación térmica (windchill)
function calculateWindChill(temperature, windSpeed, unit) {
    if (unit === 'metric') {
        if (temperature <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        }
    } else if (unit === 'imperial') {
        if (temperature <= 50 && windSpeed > 3) {
            return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        }
    }
    return 'N/A';
}

// Función para obtener y mostrar la última modificación
function displayLastModified() {
    document.getElementById('lastModified').textContent += document.lastModified;
}

// Función para obtener y mostrar el año actual
function displayCurrentYear() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
}

// Función principal para configurar la página
function setupPage() {
    displayLastModified(); // Mostrar última modificación
    displayCurrentYear(); // Mostrar año actual

    // Obtener elementos relevantes del DOM
    const temperatureElement = document.querySelector('#weather-details li:nth-of-type(1)');
    const windSpeedElement = document.querySelector('#weather-details li:nth-of-type(3)');
    const windChillElement = document.getElementById('wind-chill');

    // Valores estáticos para temperatura y velocidad del viento
    const temperature = 10; // Cambiar según la temperatura actual
    const windSpeed = 5; // Cambiar según la velocidad del viento actual
    const unit = 'metric'; // Cambiar a 'imperial' si se usa el sistema imperial

    // Mostrar la temperatura y velocidad del viento en la sección de Weather
    temperatureElement.textContent = `Temperature: ${temperature} °C`;
    windSpeedElement.textContent = `Wind: ${windSpeed} km/h`;

    // Calcular y mostrar el factor de sensación térmica (windchill)
    const windChill = calculateWindChill(temperature, windSpeed, unit);
    windChillElement.textContent = `Wind Chill: ${windChill}`;
}

// Llamar a la función setupPage cuando se cargue completamente la página
window.addEventListener('load', setupPage);
