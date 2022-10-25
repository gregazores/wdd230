let temperature = 35
let windSpeed = 33
let windChill = 0
let tempHTML = document.querySelector("#temperature")
let windHTML = document.querySelector("#wind-speed")
let chillHTML = document.querySelector("#wind-chill")
tempHTML.innerHTML = `${temperature}&#8457`
windHTML.innerHTML = `${windSpeed}mi/h`
chillHTML.innerHTML = `N/A`

function computeWindChill() {
    if (temperature <= 50 && windSpeed > 30) {
        let chill = 35.74 + (0.6215*temperature) - (35.75*(windSpeed**.16)) + (.4275*temperature*(windSpeed**.16))
        windChill = chill
        chillHTML.innerHTML = `${Math.round(windChill)}&#8457`
    } else {
        chillHTML.innerHTML = `N/A` 
    }
  
}

computeWindChill()