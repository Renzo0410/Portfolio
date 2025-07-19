document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('modalContainer');

    const isProjectsPage = window.location.pathname.includes('projects.html');
    const jsonPath = isProjectsPage ? '../data/modals.json' : './data/modals.json';

    fetch(jsonPath)
        .then(res => res.json())
        .then(modals => {
            modals.forEach((modal, index) => {
                // Ajustar rutas de imágenes según ubicación
                const fixedImages = modal.images.map(img =>
                    isProjectsPage ? img.replace('./', '../') : img
                );

                // Crear las imágenes del carrusel
                const carouselItems = fixedImages
                    .map((src, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="${src}" class="carrouselModalImg d-block w-100 img-darken" alt="${modal.title} - Imagen ${i+1}">
                        </div>
                    `)
                    .join('');

                const carouselId = `carousel-${modal.id}`;

                const modalHTML = `
                    <div class="modal fade" id="${modal.id}" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title fw-bold">
                                        <i class="bi bi-bookmark-check-fill"></i> ${modal.title}
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="text-center mb-3">
                                        <p class="fw-medium text-muted">${modal.longDescription}</p>
                                    </div>

                                    <!-- Carrusel -->
                                    <div id="${carouselId}" class="carousel slide carousel-modal-projects" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            ${carouselItems}
                                        </div>
                                        <button class="btn-icon02 carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon carousel-control-prev-icon02"></span>
                                        </button>
                                        <button class="btn-icon02 carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                                            <span class="carousel-control-next-icon carousel-control-next-icon02"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                container.innerHTML += modalHTML;
            });
        })
        .catch(err => console.error('Error cargando modales:', err));
});
