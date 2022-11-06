console.log('hello world')

const goat = document.querySelector('form');


const faveColor = (event) => {
    event.preventDefault();
    const colorBtn = document.querySelector('#color')

    alert('White')
}

const favePlace = (event) => {
    event.preventDefault();
    const placeBtn = document.querySelector('#place')

    alert('The beach')
}

const faveRitual = (event) => {
    event.preventDefault();
    const ritualBtn = document.querySelector('#ritual')

    alert("Crying on Monday's")
}

const formSubmit = (event) => {
    event.preventDefault();

    alert('If you chose anything other than 8, we need to rethink your life choices')
}


color.addEventListener('click', faveColor)
place.addEventListener('click', favePlace)
ritual.addEventListener('click', faveRitual)
goat.addEventListener('submit', formSubmit)



/* <button id="color">My Favorite Color</button>
<button id="place">My Favorite Place</button>
<button id="ritual">My Favorite Ritual</button> */