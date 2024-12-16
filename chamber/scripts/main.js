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







// for discover page
document.addEventListener('DOMContentLoaded', () => {
    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });

    // Visit Tracking with LocalStorage
    const visitMessage = document.getElementById('visit-message');
    const visitNumberSpan = document.getElementById('visit-number');

    // Get current and last visit dates
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem('last-visit');
    let visitCount = parseInt(localStorage.getItem('visit-count') || '0');

    // Update visit count
    visitCount++;
    visitNumberSpan.textContent = visitCount;
    localStorage.setItem('visit-count', visitCount.toString());

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentVisit - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit !== 1 ? 's' : ''} ago.`;
        }
    }

    // Store current visit date
    localStorage.setItem('last-visit', currentVisit.toString());
});