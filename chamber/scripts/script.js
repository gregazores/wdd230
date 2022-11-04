//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
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

//Last Visit Script

if (localStorage.hasOwnProperty("firstVisit") == false) {
    localStorage.setItem("firstVisit", fulldateUK);
}
localStorage.setItem("current-visit", fulldateUK);

if (localStorage.getItem("firstVisit") == localStorage.getItem("current-visit")) {
    alert('Welcome! This is your first visit')
} else {
    alert('Welcome Back! Good to see you again.')
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



