let d = new Date()
let footer_text = `&copy; ${d.getFullYear()}&nbsp;<span class="copy-tree">.:|:.</span>&nbsp; Jeevee Greg Azores <span class="copy-tree">.:|:.</span>&nbsp; Philippines`
document.getElementById("footer-copyright").innerHTML = footer_text

let last_mod = document.lastModified
let mod_date = `Last Updated: ${last_mod}`
document.getElementById("footer-updated").innerHTML = mod_date
