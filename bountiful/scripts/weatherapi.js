

// weather API script



/*
In your "weatherapi.js" file, first select all of the HTML elements 
that will need to be modified/manipulated and assign them to const variables 
(These will not change during in the coding of this activity).

*/



/*
Now create an "url" variable using const that stores the 'https://api.openweathermap.org/...' 
URL as demonstrated in in the API documentation given.
*/

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=1c04d13839472f4456588c22392bbf46&cnt=4&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    const currentTemp = document.querySelector('#temperature');
    const currentHumid = document.querySelector('#humidity');
    const currentDay = document.querySelector('#day-today');
    const currentDate = document.querySelector('#current-day');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weatherIcon = document.querySelector('#weather-icon');
    
    //images
    const currentWeather = weatherData.list[0]
    const iconsrc = `images/weather_icons/${currentWeather.weather[0].icon}.png`;
    const desc = currentWeather.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //temperature
    currentTemp.innerHTML = `${currentWeather.main.temp.toFixed(0)}<span>°F</span>`;
    //humidity
    currentHumid.innerHTML = `💧 ${currentWeather.main.humidity.toFixed(0)}%`;
    //current date
    const dateToday = new Date(currentWeather.dt * 1000)
    currentDay.innerHTML = days[dateToday.getDay()]
    currentDate.innerHTML = `${months[dateToday.getMonth()]} ${dateToday.getDate()}`
    //currentDate.innerHTML = `${months[dateToday.getMonth()]} ${dateToday.getDate()}, ${dateToday.getFullYear()}` //alternative date
    //weather description
    document.querySelector("#weather-description").textContent = currentWeather.weather[0].description
    //wind speed
    const windSpeed = document.querySelector("#wind-speed")
    windSpeed.innerHTML = `🌬️${currentWeather.wind.speed} mi/hr`
    //windChill
    const windChill = document.querySelector("#wind-chill")
    windChill.innerHTML = `Feels Like ${computeWindChill(currentWeather.main.temp.toFixed(0), currentWeather.wind.speed)} °F`
    //windChill.innerHTML = `${computeWindChill(49, 6)}` //--> this is test wind chill

    //change background color of weather section
    const lastCharacter = currentWeather.weather[0].icon.charAt(currentWeather.weather[0].icon.length-1)
    if (lastCharacter == 'n') {
        document.querySelector(".weather-section.generic-section").style.backgroundColor = '#BFDBF7'

    }
    if (lastCharacter == 'd') {
        document.querySelector(".weather-section.generic-section").style.backgroundColor = '#F7F4EF'

    }

    forecastWeather(weatherData.list)
}


function computeWindChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        let chill = 35.74 + (0.6215*temp) - (35.75*(speed**.16)) + (.4275*temp*(speed**.16))
        return `${Math.round(chill)}`
    } else {
        return `N/A` 
    }
  
}

function forecastWeather(weatherList) {
    const forecastWeatherIcon = document.querySelectorAll('.forecast-weather-icon')
    const forecastWeatherTemp = document.querySelectorAll('.forecast-temp')
    console.log(weatherList)
    console.log(forecastWeatherTemp)
    let count = 0
    weatherList.forEach( () => {
        forecastWeatherIcon[count].setAttribute('src', `images/weather_icons/${weatherList[count + 1].weather[0].icon}.png`)
        forecastWeatherTemp[count].innerHTML = `${weatherList[count + 1].main.temp.toFixed(0)}°F`
        console.log(forecastWeatherTemp[count].innerHTML)
        count += 1
    })
    
}

console.log(d)








