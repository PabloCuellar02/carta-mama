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
let musicaIniciada = false;

// Función para iniciar música
const iniciarMusica = () => {
    if (!musicaIniciada) {
        musica.play()
            .then(() => {
                musicaIniciada = true;
                document.getElementById('aviso').remove();
            })
            .catch(error => {
                console.log('Error al reproducir:', error);
            });
    }
};

// Eventos para móviles y desktop
document.addEventListener('click', iniciarMusica);
document.addEventListener('touchstart', iniciarMusica);

// Control del botón de mute
btnSonido.addEventListener('click', (e) => {
    e.stopPropagation();
    musica.muted = !musica.muted;
    btnSonido.textContent = musica.muted ? '🔇' : '🔊';
});

// Configuración inicial
musica.muted = false;
musica.loop = true;