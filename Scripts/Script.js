const headers = document.querySelectorAll('section');
const navbar = document.getElementById('buttonBar');

document.querySelectorAll('.infoBox').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('expanded');
    });
});

function scrollToHeader(headerId) {
    const target = document.getElementById(headerId);
    if (target) {
        const yOffset = -90; // altura de la barra sticky
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

headers.forEach(header => {
    const button = document.createElement('button');
    button.textContent = header.id;
    button.addEventListener('click', () => scrollToHeader(header.id));
    navbar.appendChild(button);
});

function actualizarRangosDonadores() {
    const rangos = {
        silver: { texto: "Discípulo de Zote", min: 10, max: 19 },
        gold: { texto: "Maestro de Zote", min: 20, max: 49 },
        bronce: { texto: "Aprendiz de Zote", min: 1, max: 9 },
        oniric: { texto: "Soñador de Zote", min: 50, max: 100 }
    };

    const donadores = document.querySelectorAll('.donatorBox');

    donadores.forEach(donador => {
        const tipo = donador.getAttribute('data-attr');
        const datos = rangos[tipo];

        if (datos) {
            // Cambiar el texto del rango
            const rangoElemento = donador.querySelector('.donadorRango');
            if (rangoElemento) {
                rangoElemento.textContent = datos.texto;
            }

            // Generar número aleatorio dentro del rango
            const cantidad = Math.floor(Math.random() * (datos.max - datos.min + 1)) + datos.min;

            // Cambiar la cantidad de dinero
            const dineroElementos = donador.querySelectorAll('.textoDonador');
            dineroElementos.forEach(elemento => {
                if (elemento.textContent.includes("€")) {
                    elemento.textContent = `${cantidad}€`;
                }
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", actualizarRangosDonadores);

function playMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicButtom");

    if (music.paused) {
        music.play().then(() => {
            button.classList.add("playing");
        }).catch(err => {
            console.warn("El navegador bloqueó la reproducción automática:", err);
        });
    } else {
        music.pause();
        button.classList.remove("playing");
    }
    music.volume = 0.2;

}






