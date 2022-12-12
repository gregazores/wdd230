//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
    //timeStyle: 'long'
}).format(d);

//Resposive Menu Scripts
function addActive(){
    document.querySelector("#responsive-nav").classList.toggle("active")
}

//Footer Meta scripts
//Will change content depending on the size of the window
let last_mod = document.lastModified
let footer_text = `&copy; ${d.getFullYear()} Bountiful Foods | Last Modification: ${last_mod}`
let footer_text2 = `&copy; ${d.getFullYear()} Ozamiz Chamber<br><strong>Jeevee Greg Azores</strong><br>WDD 230 Project<br>Last Modification: ${last_mod}`
let footer_copyright = document.getElementById("footer-copyright")
footer_copyright.innerHTML = footer_text



