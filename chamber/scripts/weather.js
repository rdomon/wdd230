//  OpenWeatherMap API configuration
const API_KEY = '6c042bb37ef11722d91067ed402d0cdc';
const CITY = 'Tokyo';
const COUNTRY_CODE = 'JP';

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
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;

    // Create detailed weather display
    weatherPlaceholder.innerHTML = `
      <div class="weather-info">
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Feels Like:</strong> ${feelsLike}°C</p>
        <p><strong>Conditions:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" 
             alt="${description} weather icon" 
             class="weather-icon">
      </div>
    `;

  } catch (error) {
    console.error('Error fetching weather:', error);
    const weatherPlaceholder = document.getElementById('weatherPlaceholder');
    weatherPlaceholder.innerHTML = '<p>Weather data unavailable</p>';
  }
}

// Call the function to get and display weather
getWeather();