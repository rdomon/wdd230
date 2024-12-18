document.addEventListener('DOMContentLoaded', function() {
    // Create dark mode toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓 Mode';
    darkModeToggle.classList.add('dark-mode-toggle');
    
    // Style the button
    const buttonStyle = document.createElement('style');
    buttonStyle.textContent = `
        .dark-mode-toggle {
            background-color: #90a955;
            color: black;
            border: none;
            padding: 8px 12px;
            margin-left: 10px;
            cursor: pointer;
            border-radius: 4px;
        }
    `;
    document.head.appendChild(buttonStyle);

    // Create dark mode styles with improved contrast
    const darkModeStyle = document.createElement('style');
    darkModeStyle.id = 'dark-mode-styles';
    darkModeStyle.textContent = `
        body.dark-mode {
            background-color: #1f2d20;
            color: #e6e6e6;
        }
        
        body.dark-mode header {
            background-color: #15211a;
            color: #f0f0f0;
        }
        
        body.dark-mode nav {
            background-color: #2c4b32;
        }
        
        body.dark-mode nav a {
            color: #f0f0f0;
        }
        
        body.dark-mode section,
        body.dark-mode .card {
            background-color: #283028;
            border-color: #3c4e3c;
            color: #f0f0f0;
        }
        
        body.dark-mode .card h3 {
            background-color: #1f2d20;
            color: #f0f0f0;
        }
        
        body.dark-mode .card a {
            color: #7bc9f3; /* Bright blue for better readability */
            text-decoration: underline;
        }

        body.dark-mode #info,
        body.dark-mode #learning {
            background-color: #1f2d20;
            border-color: #3c4e3c;
            color: #f0f0f0;
        }
        
        body.dark-mode footer {
            background-color: #15211a;
            color: #f0f0f0;
        }

        /* Improve link hover state */
        body.dark-mode .card a:hover {
            color: #a0d8ef;
        }

        .dark-mode .hamburger-menu{
            color:white;
        }
    `;
    
    // Insert toggle button in header
    const header = document.querySelector('header');
    header.appendChild(darkModeToggle);
    
    // Function to apply or remove dark mode
    function toggleDarkMode() {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Add or remove dark mode styles
        if (document.body.classList.contains('dark-mode')) {
            // If dark mode is being turned on
            document.head.appendChild(darkModeStyle);
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // If dark mode is being turned off
            const existingDarkModeStyle = document.getElementById('dark-mode-styles');
            if (existingDarkModeStyle) {
                existingDarkModeStyle.remove();
            }
            localStorage.removeItem('darkMode');
        }
    }
    
    // Handle dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Check for saved dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        // Directly call the toggle function to apply dark mode
        toggleDarkMode();
    }
});