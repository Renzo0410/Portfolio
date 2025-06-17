document.addEventListener('DOMContentLoaded', () => {
    const modalCount = 4; // Cambiar este número si se agregan más.
    const container = document.getElementById('modalContainer');

    // Detectar si estamos en /views/projects.html o no
    const isInViews = window.location.pathname.includes('/views/');

    // Ajustar ruta base para fetch()
    const basePath = isInViews ? '../modal/' : './modal/';

    for (let i = 1; i <= modalCount; i++) {
        fetch(`${basePath}modal-p0${i}.html`)
            .then(res => res.text())
            .then(html => {
                container.innerHTML += html;
            })
            .catch(err => console.error(`Error cargando modal ${i}:`, err));
    }
});
