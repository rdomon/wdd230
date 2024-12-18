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

    // Create dark mode styles
    // const darkModeStyle = document.createElement('style');
    // darkModeStyle.id = 'dark-mode-styles';
    // darkModeStyle.textContent = `
    //     body.dark-mode {
    //         background-color: #344e41;
    //         color: #e0e0e0;
    //     }
        
    //     body.dark-mode header {
    //         background-color: #1d2e28;
    //         color: #e0e0e0;
    //     }
        
    //     body.dark-mode nav {
    //         background-color: #a3b18a;

    //     }
        
    //     body.dark-mode nav a {
    //         color: black;
    //     }
        
    //     body.dark-mode section,
    //     body.dark-mode .card {
    //         background-color: #2C2C2C;
    //         border-color: #3C3C3C;
    //         color: #e0e0e0;
    //     }
        
    //     body.dark-mode .card a {
    //         color: #e0e0e0;
    //     }

    //     body.dark-mode #info,
    //     body.dark-mode #learning {
    //         background-color: #2C2C2C;
    //         border-color: #3C3C3C;
    //         color: white;
    //     }

    //     body.dark-mode #learning,
    //     body.dark-mode #info {
    //         background-color: #1d2e28;
    //     }
        
    //     body.dark-mode footer {
    //         background-color: #1d2e28;
    //         color: #e0e0e0;
    //     }
    // `;
    
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