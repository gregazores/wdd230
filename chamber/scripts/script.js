let d = new Date()
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




let burgerMenu = document.querySelector("#burger-icon")
let closerIcon = document.querySelector("#close-icon")
burgerMenu.addEventListener("click", addActive)
closerIcon.addEventListener("click", addActive)
function addActive(){
    document.querySelector("#responsive-nav").classList.toggle("active")
}



/*


let footer_text2 = `&copy; ${d.getFullYear()} Ozamiz Chamber<br><strong>Jeevee Greg Azores</strong><br>WDD 230 Project<br>Last Modification: ${last_mod}`
let footer_copyright = document.getElementById("footer-copyright")

let size = 1080

window.addEventListener("resize", checkSize)
function checkSize() {
    size = footer_copyright.offsetWidth 
    if (size < 500)  {
        alert("less 500")
    } 
}

window.addEventListener("resize", checkSize)
function checkSize() {
    if (footer_copyright.offsetWidth < 500) {
        footer_copyright.innerHTML = footer_text2    
}

document.querySelector(".footer-meta-info").addEventListener("resize", checkSize)
function checkSize() {
    if (footer_copyright.offsetWidth < 500) {
        footer_copyright.innerHTML = footer_text2
    } else {
        
    }
    
}

*/

