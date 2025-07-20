async function loadSkills() {
    try {
        const response = await fetch('./data/skills.json'); // Ajusta la ruta si está en otra carpeta
        const skillsData = await response.json();

        // Contenedores donde se insertarán los elementos
        const cloudContainer = document.getElementById('cloud-skills');
        const listContainer = document.getElementById('skills-list');

        // Generar imágenes flotantes (nubes)
        skillsData.cloudSkills.forEach(skill => {
            const img = document.createElement('img');
            img.src = skill.src;
            img.alt = skill.name;
            img.className = `${skill.class} tech-cloud`; // Aplica clase personalizada + animación
            cloudContainer.appendChild(img);
        });

        // Generar listado de habilidades
        skillsData.skillsList.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'm-1 col-2 skillAboutMe';

            const img = document.createElement('img');
            img.src = skill.src;
            img.alt = skill.name;
            img.title = skill.name;
            img.className = 'imgSkillAboutMe m-auto';

            skillDiv.appendChild(img);
            listContainer.appendChild(skillDiv);
        });

    } catch (error) {
        console.error('Error cargando skills:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadSkills);
