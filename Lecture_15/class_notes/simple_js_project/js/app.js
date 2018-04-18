const div = document.querySelector("div");
console.log("div=", div)
div.style.border = '1px solid black'

const divs = document.querySelectorAll('.js-test');
console.log("divs=", divs)
// ^ returns a NodeList object
// contains numerical indices and a length

for (let i = 0; i < divs.length; i++) {
	divs[i].style.height = "30px"
	divs[i].style.backgroundColor = "black"
	divs[i].style.color = 'white'
	divs[i].innerHTML = "HELLO!"
}

const cols = document.querySelectorAll('.js-col')
console.log("cols=", cols)

setTimeout(() => {
	for(let i = 0; i < cols.length; i++) {
		cols[i].classList.add('col-wide')
	}
}, 1000)

setInterval(() => {
	const rand = Math.floor(Math.random()*cols.length)
	if (cols[rand].classList.contains('col-wide')) {
		cols[rand].classList.remove('col-wide')
	}
	else {
		cols[rand].classList.add('col-wide')
	}
	
}, 300)