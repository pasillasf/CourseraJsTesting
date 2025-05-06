function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'da62887b7614abf20176516fa9195211'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp} &#8451;</p>
                                        <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again. ${error}</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );