const requestURL = '../json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
    console.log(1)
    let card = document.createElement('div'); 
    card.classList.add('directory-card')
    card.classList.add('common-card')

    card.innerHTML = `
    <div class="image-container">
        <div class="absolute-overlay"></div>
        <div class="views">
            <p>${company.views} views <span>&#9825;</span></p>
        </div>
        <img loading="lazy" src="${company.image_url}" alt="business profile picture">
        <a target="${company.website}" href="discover.html" class="generic-button-blue">Visit Site</a>
    </div>

    <div class="bottom-content">
        <h3 class="common-header-three">${company.name}</h3>
        <p class="business-categories">${company.category}</p>
        <p class="business-address">📍 ${company.address}</p>
        <p class="business-phone">&#128222; ${company.phone}</p>
    </div>
    
    `
    document.querySelector('.business-directory-container').append(card);
}