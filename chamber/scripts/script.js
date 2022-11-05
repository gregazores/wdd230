//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full",
    timeStyle: 'short'
}).format(d);
document.querySelector(".current-date p").innerHTML = fulldateUK

//Resposive Menu Scripts
function addActive(){
    document.querySelector("#responsive-nav").classList.toggle("active")
}

let theDay = d.getDay()
window.addEventListener('load', (event) => {
    if ( theDay == 1 || theDay == 2) {
        document.querySelector(".wednesday-prompt.marquee-w").style.display = "block"
        console.log("Mon or tue")
    } else {
        document.querySelector(".wednesday-prompt.marquee-w").style.display = "none"
        console.log("other days")
    }
});

//Lazy Loading Script
const images = document.querySelectorAll('[data-src]')

function preloadImage(img) {
    const src = img.getAttribute('data-src')
    if(!src) {
        return
    }

    img.src = src
    img.classList.add('animated')
}

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -500px 0px'
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target)
            imgObserver.unobserve(entry.target)
        }
    })

}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image)
})

//localStorage.clear()

if (localStorage.hasOwnProperty("firstVisit") == false) {
    localStorage.setItem("firstVisit", d.getTime());
}
localStorage.setItem("current-visit", d.getTime());

let difference = parseInt(localStorage.getItem("current-visit")) - parseInt(localStorage.getItem("firstVisit"))

if (difference < 30000) {
    alert('Welcome! This is your first visit')
} else {

if (43200000 < difference &&  difference < 86400000) {
    alert('Wow! Another visit for the same day? Welcome again.')
}

if (86400000 < difference) {
    days = Math.round(difference/86400000)
    alert(`It's been ${days} days since your last visit. Welcome Back`)
}
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



