// Dynamic Last Modified Date
document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('modification-date');
    lastModifiedElement.textContent = document.lastModified;
});

// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
});