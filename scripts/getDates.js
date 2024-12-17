// footer

const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

if(yearElement){
   const currentYear = new Date().getFullYear();
   yearElement.textContent = currentYear;
}

if (modifiedElement){
   const lastModifiedDate = document.lastModified;
   modifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
}


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