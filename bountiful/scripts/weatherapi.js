

// weather API script

/*
In your "weatherapi.js" file, first select all of the HTML elements 
that will need to be modified/manipulated and assign them to const variables 
(These will not change during in the coding of this activity).

*/
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');


/*
Now create an "url" variable using const that stores the 'https://api.openweathermap.org/...' 
URL as demonstrated in in the API documentation given.
*/

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Ozamiz&appid=1c04d13839472f4456588c22392bbf46&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
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
    //images
    const iconsrc = `images/weather_icons/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //temperature
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}&#8457;`;
    //weather description
    document.querySelector("#weather-description").textContent = weatherData.weather[0].description
    //wind speed
    const windSpeed = document.querySelector("#wind-speed")
    windSpeed.innerHTML = `${weatherData.wind.speed} mi/hr`
    //windChill
    const windChill = document.querySelector("#wind-chill")
    windChill.innerHTML = `${computeWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed)}`
    //windChill.innerHTML = `${computeWindChill(49, 6)}` //--> this is test wind chill

    //change background color of weather section
    const lastCharacter = weatherData.weather[0].icon.charAt(weatherData.weather[0].icon.length-1)
    if (lastCharacter == 'n') {
        document.querySelector(".page-sections.common-card.page-section-seven.left-sidebar-weather").style.backgroundColor = '#BFDBF7'

    }
    if (lastCharacter == 'd') {
        document.querySelector(".page-sections.common-card.page-section-seven.left-sidebar-weather").style.backgroundColor = '#E1E5F2'

    }
}


function computeWindChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        let chill = 35.74 + (0.6215*temp) - (35.75*(speed**.16)) + (.4275*temp*(speed**.16))
        return `${Math.round(chill)} &#8457;`
    } else {
        return `N/A` 
    }
  
}







