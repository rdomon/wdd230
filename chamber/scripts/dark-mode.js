// scripts/dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});