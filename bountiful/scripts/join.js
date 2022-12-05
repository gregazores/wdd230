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

let date = new Date()
//format the date into a UK format date
let ukDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
    //timeStyle: 'long'
}).format(date);


//A hidden field that contains the current date and time that the form was loaded by the user.
document.getElementById("hidden-current-date").value = ukDate
var hours = date.getHours()
var mins = date.getMinutes()
var seconds = date.getSeconds()
if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
document.getElementById("hidden-current-time").value = hours + ":" + mins + ":" + seconds 