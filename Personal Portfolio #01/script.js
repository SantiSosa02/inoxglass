function scrollToElement(elementSelector, instance = 0) {
    // Selecciona todos los elementos que coincidan con el selector dado
    const elements = document.querySelectorAll(elementSelector);
    // Verifica si hay elementos que coincidan con el selector y si existe la instancia solicitada
    if (elements.length > instance) {
        // Desplaza hasta la instancia especificada del elemento
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Obtiene los elementos de enlace
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

// Agrega eventos de clic a los elementos de enlace
link1.addEventListener('click', () => {
    // Desplaza hasta el primer elemento con la clase "header"
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Desplaza hasta el segundo elemento con la clase "header"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    // Desplaza hasta el primer elemento con la clase "column"
    scrollToElement('.column');
});
