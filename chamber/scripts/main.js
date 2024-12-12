// Dynamic Last Modified Date
document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('modification-date');
    lastModifiedElement.textContent = document.lastModified;
});

// Hamburger Menu Toggle

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Last Modified Date
    const lastModifiedElement = document.getElementById('modification-date');
    lastModifiedElement.textContent = document.lastModified;

    // Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
});