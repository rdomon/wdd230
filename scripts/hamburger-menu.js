document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger button
    const hamburgerButton = document.createElement('button');
    hamburgerButton.classList.add('hamburger-menu');
    hamburgerButton.innerHTML = '&#9776;'; // Hamburger menu icon
    hamburgerButton.setAttribute('aria-label', 'Toggle Menu');

    // Select the navigation
    const nav = document.querySelector('nav');
    const navList = nav.querySelector('ul');

    // Insert hamburger button before the nav list
    nav.insertBefore(hamburgerButton, navList);

    // Add initial mobile-specific styles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .hamburger-menu {
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                z-index: 1000;
            }

            nav ul {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #415D43;
                padding-top: 60px;
            }

            nav ul.show {
                display: flex;
            }

            nav a {
                width: 100%;
                text-align: center;
                padding: 15px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }

            .hamburger-menu.active {
                content: '✕';
            }
        }

        @media (min-width: 769px) {
            .hamburger-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Toggle menu functionality
    hamburgerButton.addEventListener('click', function() {
        navList.classList.toggle('show');
        hamburgerButton.classList.toggle('active');
        
        // Toggle button text
        if (hamburgerButton.classList.contains('active')) {
            hamburgerButton.innerHTML = '✕';
        } else {
            hamburgerButton.innerHTML = '&#9776;';
        }
    });
});