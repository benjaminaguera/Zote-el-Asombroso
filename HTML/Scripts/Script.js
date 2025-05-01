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
        const yOffset = -70; // altura de la barra sticky
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





