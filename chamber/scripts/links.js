// Base URL for your GitHub Pages site
const baseURL = "https://rdomon.github.io/wdd230/";

// URL for the links JSON file
const linksURL = `${baseURL}data/links.json`;

// Async function to fetch links
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

// Function to display links dynamically
function displayLinks(weeks) {
  const activitiesContainer = document.getElementById('activities');
  
  // Clear existing content
  activitiesContainer.innerHTML = '';

  // Create a new unordered list
  const ul = document.createElement('ul');

  // Process each week's links
  weeks.forEach(week => {
    const li = document.createElement('li');
    const weekText = document.createTextNode(`${week.week}: `);
    li.appendChild(weekText);

    // Create links for this week
    const linksSpan = document.createElement('span');
    week.links.forEach((link, index) => {
      const a = document.createElement('a');
      a.href = baseURL + link.url;
      a.textContent = link.title;
      
      // Add separator between links
      if (index > 0) {
        linksSpan.appendChild(document.createTextNode(' | '));
      }
      
      linksSpan.appendChild(a);
    });

    li.appendChild(linksSpan);
    ul.appendChild(li);
  });

  // Add the list to the container
  activitiesContainer.appendChild(ul);
}

// Call the function to get and display links
getLinks();