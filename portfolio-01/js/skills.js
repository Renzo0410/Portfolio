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

        // Agrupar skills por categoría
        const categories = ['Front End', 'Back End', 'Otros'];

        categories.forEach(category => {
            // Crear un contenedor para cada categoría
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skills-category col-12 mb-4';

            // Título de categoría
            const title = document.createElement('h4');
            title.textContent = category;
            title.className = 'text-center fw-bold mb-3';
            categoryDiv.appendChild(title);

            // Contenedor de los skills
            const skillsRow = document.createElement('div');
            skillsRow.className = 'row justify-content-center';

            // Filtrar y agregar skills de esta categoría
            skillsData.skillsList
                .filter(skill => skill.category === category)
                .forEach(skill => {
                    const skillDiv = document.createElement('div');
                    skillDiv.className = 'm-1 col-3 col-md-2 skillAboutMe';

                    const img = document.createElement('img');
                    img.src = skill.src;
                    img.alt = skill.name;
                    img.title = skill.name;
                    img.className = 'imgSkillAboutMe m-auto';

                    skillDiv.appendChild(img);
                    skillsRow.appendChild(skillDiv);
                });

            categoryDiv.appendChild(skillsRow);
            listContainer.appendChild(categoryDiv);
        });

    } catch (error) {
        console.error('Error cargando skills:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadSkills);
