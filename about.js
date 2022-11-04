console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form Submitted")
	// console.log('form submit');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);





let giveCompliment = (event) => {
	event.preventDefault();
	
	alert("I know it's cheesy, but I think you're grate!")
}

document.getElementById('img')

document.querySelector('img').addEventListener('mouseover', giveCompliment)





// giveComp.addEventListener('mouseover', giveCompliment)

// document.querySelector('img').addEventListener('mouseover', giveCompliment)

// // let giveComp = document.querySelector('img')

// // giveComp.addEventListener('mouseover', giveCompliment)

// function compliment(evt) {
// 	evt.preventDefault();
// 	alert("You rock")
// 	// console.log('form submit');
// }




// document.getElementById('img').src = "https://pet-happy.com/files/up/2014/09/scared-cat.jpg"

// let img = document.querySelector('mouseover', compliment)


// const compliment = (event) => {
//     event.preventDefault();
// 	img.getElementById('mouseover', () => {
// 	giveCompliment.alert = "You are great"
// })
  
//     alert("Crying on Monday's")
// }


// let giveCompliment = document.querySelector(image)

// giveCompliment.addEventListener('mouseover', () => {
// 	giveCompliment.alert = "You are great"
// })

// compliment.addEventListener('mouseover', giveCompliment)