/* Acceder en tiempo de ejecución al botón hamburguesa */
var menuToggle = document.querySelector(".menu-toggle");

/* Acceder a la barra de menú en tiempo de ejecución */
var navMenu = document.querySelector(".nav-menu");

/* Programa el evento "onclick" del botón hamburguesa 
    para alternar la visibilidad de la barra de menú */
menuToggle.onclick = () => {
    // Alterna la clase "nav-menu.active" para presentar la barra de menú
    navMenu.classList.toggle("active");
};