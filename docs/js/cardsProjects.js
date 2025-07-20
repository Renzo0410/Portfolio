async function loadProjects() {
    try {
        const currentPath = window.location.pathname;

        // Detectar en qué página estamos
        const isProjectsPage = currentPath.includes('projects.html');
        const isIndexPage = currentPath.endsWith('/') || currentPath.endsWith('section-proyectos.html');

        // Ajustar ruta del JSON dependiendo de dónde estamos
        const jsonPath = isProjectsPage ? '/data/projects.json' : '/data/projects.json';

        const response = await fetch(jsonPath);
        const projects = await response.json();

        const container = document.getElementById('projects-container');

        // Mostrar 3 proyectos en el index, todos en projects.html
        const projectsToShow = isProjectsPage ? projects : projects.slice(0, 3);

        // Mapa de iconos de tecnologías (sin VITE ni AJAX)
        const techIcons = {
            "HTML": "./img/Skills/html-96-n.png",
            "CSS": "./img/Skills/css-96-n.png",
            "JavaScript": "./img/Skills/js-100-n.png",
            "React": "./img/Skills/react-96-n.png",
            "Bootstrap": "./img/Skills/bootstrap-100-n.png",
            "Tailwind": "./img/Skills/tailwind-96-n.png",
            "TypeScript": "./img/Skills/typescript-100-n.png",
            "Python": "./img/Skills/python-100-n.png",
            "Java": "./img/Skills/java-100-n.png",
            "PHP": "./img/Skills/php-100-n.png",
            "MySQL": "./img/Skills/mysql-100-n.png",
            "SQL": "./img/Skills/sql-100-n.png",
            "JSON": "./img/Skills/json-100-n.png",
            "Git": "./img/Skills/git-100-n.png",
            "GitHub": "./img/Skills/github-96-n.png",
            "phpMyAdmin": "./img/Skills/mysql-100-n.png"
        };

        projectsToShow.forEach(project => {
            // Filtrar tecnologías (quitamos VITE y AJAX si están en el JSON)
            const validTechnologies = project.technologies.filter(
                tech => tech !== "VITE" && tech !== "Ajax"
            );

            // Crear lista de íconos con estilo de "Sobre mí"
            const techList = validTechnologies
                .map(tech => {
                    const iconPath = techIcons[tech] || "./img/Skills/default.png";
                    const finalPath = isProjectsPage ? iconPath.replace('./', '../') : iconPath;
                    return `
                        <div class="m-1 col-2 skillAboutMe">
                            <img class="imgSkillAboutMe m-auto" src="${finalPath}" alt="${tech}" title="${tech}">
                        </div>
                    `;
                })
                .join('');

            // Ajustar ruta de imagen principal del proyecto
            const imagePath = isProjectsPage
                ? project.image.replace('./', '../')
                : project.image;

            // Crear card
            const card = document.createElement('div');
            card.className = 'container-card col-12 col-lg-6 col-xl-4 mb-3';
            card.innerHTML = `
                <div class="card h-100 mx-auto">
                    <img src="${imagePath}" class="card-img-top" alt="${project.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        
                        <!-- Contenedor de tecnologías -->
                        <div class="containerSkills container row text-center justify-content-center align-content-center m-auto mb-3 img-fluid">
                            ${techList}
                        </div>

                        <div class="d-flex justify-content-between align-items-center gap-2">
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
