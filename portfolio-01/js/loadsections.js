document.addEventListener('DOMContentLoaded', () => {
    const isInViews = window.location.pathname.includes('/views/');
    const basePath = isInViews ? '../sections/' : 'sections/';

    const sections = [
        { id: 'navContainer', file: 'nav.html' },
        { id: 'inicioContainer', file: 'section-inicio.html' },
        { id: 'sobremiContainer', file: 'section-sobremi.html' },
        { id: 'proyectosContainer', file: 'section-proyectos.html' },
        { id: 'contactoContainer', file: 'section-contacto.html' },
    ];

    sections.forEach(section => {
        fetch(basePath + section.file)
            .then(res => res.text())
            .then(html => {
                const container = document.getElementById(section.id);
                if (container) container.innerHTML = html;
            })
            .catch(err => console.error('Error cargando sección:', section.file, err));
    });
});

