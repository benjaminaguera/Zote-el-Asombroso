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
        silver: "Seguidor de Zote",
        gold: "Discípulo de Zote",
        bronce: "Aprendiz de Zote",
        oniric: "Soñador de Zote"
    };

    const donadores = document.querySelectorAll('.donatorBox');

    donadores.forEach(donador => {
        const tipo = donador.getAttribute('data-attr');
        const rangoTexto = rangos[tipo];
        if (rangoTexto) {
            const rangoElemento = donador.querySelector('.donadorRango');
            if (rangoElemento) {
                rangoElemento.textContent = rangoTexto;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", actualizarRangosDonadores);






