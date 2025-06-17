document.addEventListener('DOMContentLoaded', () => {
    const modalCount = 3; // Cambiar este número si se agregan más.
    const container = document.getElementById('modalContainer');

    for (let i = 1; i <= modalCount; i++) {
        fetch(`./modal/modal-p0${i}.html`)
            .then(res => res.text())
            .then(html => {
                container.innerHTML += html;
            });
    }
});
