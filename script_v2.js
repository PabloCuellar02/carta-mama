const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})


const musica = document.getElementById('musicaFondo');
const btnSonido = document.getElementById('btnSonido');

// Truco para navegadores que permiten autoplay con muted
document.addEventListener('DOMContentLoaded', () => {
    musica.muted = true; // Iniciar muted
    musica.play().then(() => {
        // Desmutear después de 1 segundo (bypass parcial de políticas)
        setTimeout(() => {
            musica.muted = false;
            btnSonido.textContent = '🔊';
        }, 1000);
    }).catch(error => {
        console.error('Error de autoplay:', error);
    });
});

// Control del botón
btnSonido.addEventListener('click', () => {
    musica.muted = !musica.muted;
    btnSonido.textContent = musica.muted ? '🔇' : '🔊';
});
