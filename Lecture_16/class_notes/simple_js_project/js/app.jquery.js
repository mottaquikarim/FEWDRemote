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

const $divs = $('.js-test-jq');
console.log('divs2=', $divs)

// if one runs jquery's .css() method
// with TWO arguments, jquery will try to
// set a CSS rule: value
$divs.css('height', '30px')
$divs.css('backgroundColor', 'black')
$divs.css('color', 'white')
$divs.css('border', '3px solid green')
$divs.html('Hello from jQ!')

// if one runs jquery's .css() method
// with ONE argument, jquery will
// READ the css rule
console.log('width=', $divs.css('width'))

// if one runs jquery's .css() method
// with ONE argument that is an OBJECT LITERAL,
// then jquery will set all those values in bulk
$divs.css({
	'height': '100px',
	'backgroundColor': 'yellow',
	'color': 'black',
	'border': '3px solid red',
})



