

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
const days = [["Sunday", "SUN"], ["Monday", 'MON'], ["Tuesday", 'TUE'], ["Wednesday", 'WED'], ["Thursday", 'THUR'], ["Friday", 'FRI'], ["Saturday", 'SAT']];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=1c04d13839472f4456588c22392bbf46&units=imperial';

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
    const currentTemp = document.querySelector('#temperature');
    const currentHumid = document.querySelector('#humidity');
    const currentDay = document.querySelector('#day-today');
    const currentDate = document.querySelector('#current-day');
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
    currentDay.innerHTML = days[dateToday.getDay()][0]
    currentDate.innerHTML = `${months[dateToday.getMonth()]} ${dateToday.getDate()}`
    //currentDate.innerHTML = `${months[dateToday.getMonth()]} ${dateToday.getDate()}, ${dateToday.getFullYear()}` //alternative date
    //weather description
    document.querySelector("#weather-description").textContent = currentWeather.weather[0].description
    //wind speed
    const windSpeed = document.querySelector("#wind-speed")
    windSpeed.innerHTML = `🌬️${currentWeather.wind.speed} mi/hr`
    //windChill
    const windChill = document.querySelector("#wind-chill")
    let wndChll = computeWindChill(currentWeather.main.temp.toFixed(0), currentWeather.wind.speed)
    if (wndChll == 'N/A') {
        windChill.innerHTML = 'Wind Temperature'
    } else {
        windChill.innerHTML = `Feels Like ${computeWindChill(currentWeather.main.temp.toFixed(0), currentWeather.wind.speed)} °F`
    }
    
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
    const forecastWeatherHeader = document.querySelectorAll('.forecast-header') 
    const forecastDate = document.querySelectorAll('.forecast-date')
    const foreTimeStamp = document.querySelectorAll('.forecast-timestamp')
    
    for (let i=1; i < 4; i++) {

        forecastWeatherIcon[i-1].setAttribute('src', `images/weather_icons/${weatherList[i*8].weather[0].icon}.png`)
        forecastWeatherTemp[i-1].innerHTML = `${weatherList[i*8].main.temp.toFixed(0)}°F`
        forecastWeatherHeader[i-1].innerHTML =`${weatherList[i*8].weather[0].description}`
        const foreDt = new Date(weatherList[i*8].dt * 1000)
        forecastDate[i-1].innerHTML =`${days[foreDt.getDay()][1]}`
        foreTimeStamp[i-1].innerHTML =`${weatherList[i*8].dt_txt}`
        //console.log(weatherList[i*8])
    }   
    
}


/* Order History Script inserted here */
if (localStorage.length == 0) {
    document.querySelector('.order-history-section.generic-section .order-header').innerHTML = `
    <h2>Hi, There!</h2>
    <p><em>You have no orders yet! Visit our <a style="text-decoration: underline;" href="fresh.html">Fresh Page</a> to create one!</em></p>
    `
    document.getElementById("clear-orders").style.display = "none";
} else {
    let localKeys = Object.keys(localStorage)
    document.querySelector('.order-history-section.generic-section .order-header').innerHTML = `
    <h2>Hi, ${localStorage[localKeys[0]].split(',', 1)}!</h2>
    <p><em>Thank you for your order! Visit our <a style="text-decoration: underline;" href="fresh.html">Fresh Page</a> to order for more!</em></p>
    `
    
    localKeys.forEach((key) => {
        keyValues = localStorage[key].split(',')
        let customerOrd = document.createElement('div')
        customerOrd.classList.add('customer-orders')
        customerOrd.innerHTML = `
                <div class="order-details">
                    <h2>Order #${key}</h2>
                    <p class="date"><em>${keyValues[10]}</em></p>
                    <div class="selected-fruits">
                        <h3>Selected Fruits</h3>
                        <ul>
                            <li>${keyValues[1]}</li>
                            <li>${keyValues[2]}</li>
                            <li>${keyValues[3]}</li>
                        </ul>
                    </div>

                    <div class="nutrition-facts">
                        <h3>Nutrition Facts</h3>
                        <ul>
                            <li>Carbohydrates ${keyValues[4]}</li>
                            <li>Protein ${keyValues[5]}</li>
                            <li>Fat ${keyValues[6]}</li>
                            <li>Sugar ${keyValues[7]}</li>
                            <li>Calories ${keyValues[8]}</li>
                        </ul>
                    </div>
                </div>
        `

        document.querySelector('.order-history-section.generic-section .order-flex-container').append(customerOrd)
        document.getElementById("clear-orders").style.display = "block";
    })


}

document.querySelector('#clear-orders').addEventListener('click', (() => {
    location.reload();
    localStorage.clear()  
}))








