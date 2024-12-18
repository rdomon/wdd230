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
    const darkModeStyle = document.createElement('style');
    darkModeStyle.id = 'dark-mode-styles';
    darkModeStyle.textContent = `
        body.dark-mode {
            background-color: #2c2c2c;
            color: #e0e0e0;
        }
        
        body.dark-mode header {
            background-color: #1d2e28;
            color: #e0e0e0;
        }
        
        body.dark-mode nav {
            background-color: #3c5b3e;
        }
        
        body.dark-mode nav a {
            color: white;
        }
        
        body.dark-mode section,
        body.dark-mode .card {
            background-color: #3c3c3c;
            border-color: #4c4c4c;
            color: #e0e0e0;
        }
        
        body.dark-mode .card h3 {
            background-color: #2c2c2c;
            color: #e0e0e0;
        }
        
        body.dark-mode .card a {
            color: #a0d8ef;
        }

        body.dark-mode #info,
        body.dark-mode #learning {
            background-color: #2c2c2c;
            border-color: #3c3c3c;
            color: #e0e0e0;
        }
        
        body.dark-mode footer {
            background-color: #1d2e28;
            color: #e0e0e0;
        }
    `;
    
    // Insert toggle button in header
    const header = document.querySelector('header');
    header.appendChild(darkModeToggle);
    
    // Handle dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.head.appendChild(darkModeStyle);
        
        // Persist dark mode preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
            // Remove the dark mode styles when toggling off
            const existingDarkModeStyle = document.getElementById('dark-mode-styles');
            if (existingDarkModeStyle) {
                existingDarkModeStyle.remove();
            }
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.head.appendChild(darkModeStyle);
    }
});