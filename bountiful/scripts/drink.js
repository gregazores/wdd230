const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fruitData = []
let orderHTML = ''

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


  apiFetch();

  function displayResults(datas) {
    const selectElements = document.querySelectorAll('.select-fruits')
    //create fruit datas
    datas.forEach( (data) => {
        fruitData.push(data)
    })
      
    //create options for each select
    selectElements.forEach( (selectElement) => {
        datas.forEach( (data) => {
            let optionElement = document.createElement('option')
            optionElement.innerHTML = data.name
            optionElement.setAttribute('value', data.name)
            selectElement.appendChild(optionElement)
          })


    })

    //fillSelect(fruitData)
}

function fillSelect(datas) {
    const selectElement = document.querySelector('#select-fruits')
    datas.forEach( (data) => {
        let optionElement = document.createElement('option')
        optionElement.innerHTML = data.name
        optionElement.setAttribute('value', data.name)
        selectElement.appendChild(optionElement)
    })

}

function createOrder(event) {
    event.preventDefault()
    const fname = document.querySelector('#fname input').value
    const lname = document.querySelector('#lname input').value
    const email = document.querySelector('#email input').value
    const phone = document.querySelector('#phone-num input').value
    const fruit1 = document.querySelector('#fruit1 select').value
    const fruit2 = document.querySelector('#fruit2 select').value
    const fruit3 = document.querySelector('#fruit3 select').value
    let msg = document.querySelector('#msg textarea').value
    console.log(msg.length)
    if (msg.length == 0) {
        msg = 'No special message specified.'
    }
    
    let carb = 0
    let protein = 0
    let fat = 0
    let calories = 0
    let sugar = 0

    const fruitArray = fruitData.filter((fruit) => {
        console.log(fruit.name)
        if ([fruit1, fruit2, fruit3].includes(fruit.name)) {
            return fruit
        }
    })

    console.log(fruitArray)

    fruitArray.forEach((fruit) => {
        carb += fruit.nutritions.carbohydrates
        protein += fruit.nutritions.protein
        fat += fruit.nutritions.fat
        calories += fruit.nutritions.calories
        sugar += fruit.nutritions.sugar
    })


     orderHTML = `

        <div class="order-header">
        <h2>Hi, ${fname}</h2>
        <p><em>Thank you for your order</em></p>
        </div>
        <div class="customer-info">
        <h2>Customer Information</h2>
        <p class="full-name">${fname} ${lname}</p>
        <p>${email}</p>
        <p>${phone}</p>
        </div>
        <div class="order-details">
        <h2>Order Details</h2>
        <p class="date"><em>December 15, 2022</em></p>
        <div class="selected-fruits">
            <h3>Selected Fruits</h3>
            <ul>
                <li>${fruit1}</li>
                <li>${fruit2}</li>
                <li>${fruit3}</li>
            </ul>
        </div>

        <div class="nutrition-facts">
            <h3>Nutrition Facts</h3>
            <ul>
                <li>Carbohydrates: ${carb.toFixed(2)}g</li>
                <li>Protein: ${protein.toFixed(2)}g</li>
                <li>Fat: ${fat.toFixed(2)}g</li>
                <li>Sugar: ${sugar.toFixed(2)}g</li>
                <li>Calories: ${calories.toFixed(2)}g</li>
            </ul>
        </div>

        <h3>Special Instructions</h3>
        <p>${msg}</p>

        </div>

        `
        //testing()
        document.querySelector('.fresh-page .create-specialty-drink.hero-call-to-action .hero-call-left .order-confirmation').innerHTML = orderHTML
    
}





/*
let x = 1

window.onload = function() {testing()}

function testing() {

if (x == 1) {
    document.querySelector('.fresh-page .create-specialty-drink.hero-call-to-action .hero-call-left .order-confirmation').innerHTML = orderHTML

} 

if (x == 2) {
    
    document.querySelector('.fresh-page .create-specialty-drink.hero-call-to-action .hero-call-left .order-confirmation').innerHTML = `
    <div class="order-header">
        <h2>Hi, Greg</h2>
        <p><em>You have not placed a new order yet!</em></p>
    </div>
    
    `
}

}

*/


//document.querySelector('.fresh-page .create-specialty-drink.hero-call-to-action .hero-call-left .order-confirmation').innerHTML

