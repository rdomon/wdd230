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
            background-color: #344e41;
            color: #e0e0e0;
        }
        
        body.dark-mode header {
            background-color: #1d2e28;
            color: #e0e0e0;
        }
        
        body.dark-mode nav {
            background-color: #a3b18a;
        }
        
        body.dark-mode nav a {
            color: black;
        }
        
        body.dark-mode section {
            background-color: #2C2C2C;
            border-color: #3C3C3C;
        }
        
        body.dark-mode .card a {
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
        
        // Persist dark mode preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.head.appendChild(darkModeStyle);
    }
});