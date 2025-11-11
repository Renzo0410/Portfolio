async function loadSkills() {
    try {
        const response = await fetch('./data/skills.json');
        const skillsData = await response.json();

        const cloudContainer = document.getElementById('cloud-skills');
        const listContainer = document.getElementById('skills-list');

        // Generar imágenes flotantes
        skillsData.cloudSkills.forEach(skill => {
            const img = document.createElement('img');
            img.src = skill.src;
            img.alt = skill.name;
            img.className = `${skill.class} tech-cloud`;
            cloudContainer.appendChild(img);
        });

        // Contenedor principal como fila (3 columnas)
        const row = document.createElement('div');
        row.className = 'row g-4 text-center justify-content-center';

        const categories = ['Front End', 'Back End', 'Tecnologías'];

        categories.forEach(category => {
            // Columna por categoría
            const col = document.createElement('div');
            col.className = 'col-12 col-md-4 mb-4 div-skills-about-me';

            // Título de la categoría
            const title = document.createElement('h4');
            title.textContent = category;
            title.className = 'fw-bold mb-3';
            col.appendChild(title);

            // Contenedor de skills
            const skillsWrapper = document.createElement('div');
            skillsWrapper.className = 'd-flex flex-wrap justify-content-center gap-3';

            // Agregar skills de esta categoría
            skillsData.skillsList
                .filter(skill => skill.category === category)
                .forEach(skill => {
                    const skillDiv = document.createElement('div');
                    skillDiv.className = 'skillAboutMe';

                    const img = document.createElement('img');
                    img.src = skill.src;
                    img.alt = skill.name;
                    img.title = skill.name;
                    img.className = 'imgSkillAboutMe';

                    skillDiv.appendChild(img);
                    skillsWrapper.appendChild(skillDiv);
                });

            col.appendChild(skillsWrapper);
            row.appendChild(col);
        });

        listContainer.appendChild(row);
    } catch (error) {
        console.error('Error cargando skills:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadSkills);
