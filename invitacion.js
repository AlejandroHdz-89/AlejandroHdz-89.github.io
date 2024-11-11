
    // Contador regresivo
    var cuentaRegresiva = new Date("2024-11-30T19:00:00").getTime();

    var x = setInterval(function() {
        var ahora = new Date().getTime();
        var distancia = cuentaRegresiva - ahora;

        var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Mostrar la cuenta regresiva en la página
        document.getElementById("contador").innerHTML = `
            <span class="tiempo">${dias}d</span> 
            <span class="tiempo">${horas}h</span> 
            <span class="tiempo">${minutos}m</span> 
            <span class="tiempo">${segundos}s</span>
        `;

        if (distancia < 0) {
            clearInterval(x);
            document.getElementById("contador").innerHTML = "¡La fiesta ya ha comenzado!";
        }
    }, 1000);
    
// Función para hacer que el título h1 brille con un efecto de parpadeo
function hacerBrillar() {
    const titulo = document.getElementById('titulo'); // Obtener el h1 por su id
    let opacity = 0.5; // Opacidad inicial
    let incremento = 0.05; // Incremento de opacidad en cada ciclo

    // Establecer un intervalo para cambiar la opacidad del brillo
    setInterval(function() {
        if (opacity >= 1 || opacity <= 0.5) {
            incremento = -incremento; // Cambiar dirección del brillo
        }
        opacity += incremento;

        // Cambiar la propiedad text-shadow para aplicar el brillo
        titulo.style.textShadow = `0 0 10px rgba(255, 255, 255, ${opacity}), 0 0 20px rgba(255, 255, 255, ${opacity})`;
    }, 100); // Cambiar el brillo cada 100ms
}

// Llamar a la función para hacer que el título brille cuando se carga la página
window.onload = function() {
    hacerBrillar();
};
