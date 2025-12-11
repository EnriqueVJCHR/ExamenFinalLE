// Esperamos a que todo el contenido HTML cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    
    // Buscamos el formulario en el documento
    const formulario = document.querySelector('form');
    
    // Verificamos si el formulario existe (para evitar errores en páginas que no lo tienen)
    if(formulario) {
        
        formulario.addEventListener('submit', function(evento) {
            // 1. Evitamos que el formulario recargue la página (comportamiento por defecto)
            evento.preventDefault();

            // 2. Obtenemos los valores para usarlos en el mensaje
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            
            // Validación extra simple (HTML ya valida "required", pero esto es un ejemplo de JS)
            if(nombre.trim() === "") {
                alert("Por favor, escribe tu nombre correctamente.");
                return;
            }

            // 3. Simulación de envío exitoso
            // Aquí podrías agregar código para enviar a un servidor real en el futuro
            alert("¡Hola " + nombre + "! Hemos recibido tus datos de contacto (" + correo + "). Esto es una simulación de envío exitosa.");
            
            // 4. Limpiamos los campos del formulario
            formulario.reset();
        });
    }
});
// --- FUNCIONALIDAD PARA CARRUSEL DE HOBBIES ---

let indiceSlide = 0;

function siguienteSlide() {
    const slides = document.querySelectorAll('.carrusel-img');
    const totalSlides = slides.length;

    // Quita la clase 'activa' de la diapositiva actual
    slides[indiceSlide].classList.remove('activa');

    // Calcula el nuevo índice (vuelve a 0 si llega al final)
    indiceSlide = (indiceSlide + 1) % totalSlides;

    // Agrega la clase 'activa' a la siguiente diapositiva
    slides[indiceSlide].classList.add('activa');
}

// Para asegurar que la primera imagen se muestre al cargar:
document.addEventListener('DOMContentLoaded', function() {
    const primerSlide = document.querySelector('.carrusel-img');
    if (primerSlide) {
        primerSlide.classList.add('activa');
    }
    // (Asegúrate de que el código de validación del formulario también esté aquí dentro del DOMContentLoaded si lo tenías fuera)
});