async function loadProjects() {
    try {
        const currentPath = window.location.pathname;

        // Detectar si estamos en projects.html o en index
        const isProjectsPage = currentPath.includes('projects.html');
        const isIndexPage = currentPath.endsWith('/') || currentPath.endsWith('section-proyectos.html');

        const jsonPath = isProjectsPage
            ? '../data/projects.json'
            : './data/projects.json';

        const response = await fetch(jsonPath);
        const projects = await response.json();

        const container = document.getElementById('projects-container');
        const projectsToShow = isProjectsPage ? projects : projects.slice(0, 3);

        projectsToShow.forEach(project => {
            // Usar directamente las tecnologías del JSON (sin filtrar)
            const techRows = [];
            for (let i = 0; i < project.technologies.length; i += 2) {
                const row = project.technologies.slice(i, i + 2)
                    .map(tech => `<div class="tech-name">${tech.toUpperCase()}</div>`)
                    .join('');
                techRows.push(`<div class="tech-row">${row}</div>`);
            }

            const techList = techRows.join('');

            // Ajustar ruta de la imagen principal
            const imagePath = isProjectsPage
                ? project.image.replace('./', '../')
                : project.image;

            // Crear tarjeta del proyecto
            const card = document.createElement('div');
            card.className = 'container-card col-12 col-lg-6 col-xl-4 mb-3';
            card.innerHTML = `
                <div class="card h-100 mx-auto">
                    <img src="${imagePath}" class="card-img-top" alt="${project.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${project.title}</h5>
                        <p class="card-text">${project.descriptionCard}</p>

                        <!-- Tecnologías como texto -->
                        <div class="tech-container">
                            ${techList}
                        </div>

                        <div class="d-flex justify-content-between align-items-center gap-2 mt-auto">
                            <button type="button" class="btn btn-dark w-100"
                                data-bs-toggle="modal" data-bs-target="${project.modalTarget}">
                                Ver detalles
                            </button>
                            <a href="${project.github}" target="_blank"
                                class="btn btn-outline-dark d-flex align-items-center justify-content-center"
                                style="width: 45px; height: 38px;">
                                <i class="bi bi-github fs-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error cargando proyectos:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const interval = setInterval(() => {
        const container = document.getElementById('projects-container');
        if (container) {
            clearInterval(interval);
            loadProjects();
        }
    }, 100);
});
