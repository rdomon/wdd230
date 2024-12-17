// OpenWeatherMap API configuration
const API_KEY = '6c042bb37ef11722d91067ed402d0cdc'; // Replace with your actual OpenWeatherMap API key
const CITY = 'Tokyo'; // City for weather information
const COUNTRY_CODE = 'JP'; // Country code for Japan

// Weather API URL
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=metric`;

// Function to fetch and display weather
async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    // Get weather elements from the DOM
    const weatherPlaceholder = document.getElementById('weatherPlaceholder');
    
    // Extract relevant weather information
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // Create weather display string
    const weatherString = `${temperature}°C, ${description}`;

    // Update weather placeholder
    weatherPlaceholder.textContent = weatherString;

    // Optional: Display weather icon
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.alt = description;
    weatherPlaceholder.appendChild(weatherIcon);

  } catch (error) {
    console.error('Error fetching weather:', error);
    const weatherPlaceholder = document.getElementById('weatherPlaceholder');
    weatherPlaceholder.textContent = 'Weather data unavailable';
  }
}

// Call the function to get and display weather
getWeather();
