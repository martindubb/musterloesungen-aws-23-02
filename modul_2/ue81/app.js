const axios = require('axios');

const apikey = 'f43e8b042b68a0a3d29a7f217c938e4f';

const city = process.argv[2]; 

if (!city) {
  console.error('Bitte gib den Namen einer Stadt als Argument ein!');
  process.exit(1);
}

// URL für den API-Aufruf mit der Stadt und dem API-Schlüssel
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

axios.get(url)
  .then(response => {
    const weatherData = response.data;

    // Ausgabe der strukturierten Wetterdaten
    console.log('Wetter in', weatherData.name);
    console.log('Beschreibung:', weatherData.weather[0].description);
    console.log('Temperatur:', weatherData.main.temp, '°C');
    console.log('Luftfeuchtigkeit:', weatherData.main.humidity, '%');
    console.log('Windgeschwindigkeit:', weatherData.wind.speed, 'm/s');
  })
  .catch(error => {
    console.error('Fehler beim Abrufen der Wetterdaten:', error.message);
  });
