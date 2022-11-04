console.log('hello world')



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



color.addEventListener('click', faveColor)
place.addEventListener('click', favePlace)
ritual.addEventListener('click', faveRitual)




/* <button id="color">My Favorite Color</button>
<button id="place">My Favorite Place</button>
<button id="ritual">My Favorite Ritual</button> */