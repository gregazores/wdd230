//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(d);

/*
In your "weatherapi.js" file, first select all of the HTML elements 
that will need to be modified/manipulated and assign them to const variables 
(These will not change during in the coding of this activity).

*/

//call get weather function to display the default location which is fairbanks 
window.addEventListener("load", (event) => {
    getWeather(64.8378, -147.7164);
  });


const submitButton = document.querySelector('#submit-button');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const searchContainer = document.querySelector('.search-main-container');
const searchInput = document.querySelector('.search-input-container');
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=1c04d13839472f4456588c22392bbf46&units=imperial';

/*
Now create an "url" variable using const that stores the 'https://api.openweathermap.org/...' 
URL as demonstrated in in the API documentation given.
*/

submitButton.addEventListener('click', () => {
    const inputValue = document.querySelector('#input-value');
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue.value.toLowerCase()}&limit=5&appid=1c04d13839472f4456588c22392bbf46`
    apiFetch(url)
})

//fetch API weather

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        createCities(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function createCities(cityData) {
    let ul = document.createElement('ul');
    ul.classList.add('search-dropdown-menu')
    cityData.forEach((city) => {
        let li = document.createElement('li');
        li.addEventListener('click', () => {
            getWeather(city.lat, city.lon)

            //remove or delete all the list items created
            ulList = document.querySelectorAll('.search-main-container ul')
            ulList.forEach((ul) => {
                ul.remove()
            })
        })
        li.innerHTML = `
        <span class="search-city-country">${city.name}, ${city.country} <img src="https://openweathermap.org/images/flags/${city.country.toLowerCase()}.png" class="flag">
        </span>
        <span class="sub" >${city.lat.toFixed(3)}, ${city.lon.toFixed(3)}</span>
        `
        ul.append(li)
    })
    searchContainer.append(ul);
}

async function getWeather(lat, lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c04d13839472f4456588c22392bbf46&units=imperial`
    try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          //console.log(`this is the specific city data ${data}`); // this is for testing the call
          displayResults(data)
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}



function displayResults(weatherData) {
    
    const city = document.querySelector('#city')
    const tempBanner = document.querySelector('.temp-banner')
    const iconsrc = `images/weather_icons/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    tempBanner.innerHTML = `The current temperature in ${weatherData.name}, ${weatherData.sys.country} is ${weatherData.main.temp.toFixed(0)} &deg;F`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


//Footer Meta scripts
//Will change content depending on the size of the window
let last_mod = document.lastModified
let footer_text = `&copy; ${d.getFullYear()} Ozamiz Chamber | <strong>Jeevee Greg Azores</strong> | WDD 230 Project | Last Modification: ${last_mod}`
let footer_text2 = `&copy; ${d.getFullYear()} Ozamiz Chamber<br><strong>Jeevee Greg Azores</strong><br>WDD 230 Project<br>Last Modification: ${last_mod}`
let footer_copyright = document.getElementById("footer-copyright")
footer_copyright.innerHTML = footer_text
let size = 1080

window.addEventListener("resize", checkSize)
function checkSize() {
    size = footer_copyright.offsetWidth 
    if (size < 500)  {
        footer_copyright.innerHTML = footer_text2
    } else {
        footer_copyright.innerHTML = footer_text
    }
}



