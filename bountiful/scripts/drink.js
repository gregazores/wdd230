const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fruitData = []

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

function createOrder() {
    
}

