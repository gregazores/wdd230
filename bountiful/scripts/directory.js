const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
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
    </div>

    <div class="bottom-content">
        <div>
          <h3 class="common-header-three">${company.name}</h3>
          <p class="business-categories">${company.category}</p>
        </div>
        <div>
          <p class="business-address">📍 ${company.address}</p>
          <p class="business-phone">&#128222; ${company.phone}</p>
        </div>
        <a target="${company.website}" href="discover.html" class="generic-button-blue">Visit Site</a>
    </div>
    
    `
    document.querySelector('.business-directory-container').append(card);
}

//event listener to convert 
const gridButton = document.querySelector('#grid')
const listButton = document.querySelector('#list')
gridButton.addEventListener('click', () => {
  document.querySelector('.business-directory-container').classList.remove('grid-list')
  gridButton.style.borderColor = '#303030'
  listButton.style.borderColor = '#BFDBF7'
})

listButton.addEventListener('click', () => {
  document.querySelector('.business-directory-container').classList.add('grid-list')
  listButton.style.borderColor = '#303030'
  gridButton.style.borderColor = '#BFDBF7'
})