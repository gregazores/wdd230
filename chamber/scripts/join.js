//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
    //timeStyle: 'long'
}).format(d);
document.querySelector(".current-date p").innerHTML = fulldateUK

//Resposive Menu Scripts
function addActive(){
    document.querySelector("#responsive-nav").classList.toggle("active")
}

//se JavaScript to display a banner on Mondays or Tuesdays only at the very top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." Make sure your design matches your schema for the site.

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

//input validation Business Position Title
function validate() {
    var exp = /^[A-Za-z0-9\s-]+$/
    var business_post = document.getElementById('business_position').value
    var result = exp.test(business_post)

    if (result == false || business_post.length < 7) {
        document.getElementById('business-pos-error').style.display = 'block'
        return false
    } else {
        document.getElementById('business-pos-error').style.display = 'none'
    }
}


//A hidden field that contains the current date and time that the form was loaded by the user.
document.getElementById("hidden-current-date").value = fulldateUK
console.log("working")
var hours = d.getHours()
var mins = d.getMinutes()
var seconds = d.getSeconds()
if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
document.getElementById("hidden-current-time").value = hours + ":" + mins + ":" + seconds 