const btn = document.querySelector('.js-btn');
btn.addEventListener('click', (event) => {
	if (btn.innerHTML === "Testing!") {
		btn.innerHTML = "I am clicked!"
	}
	else {
		btn.innerHTML = "Testing!"
	}
	
	console.log(btn.innerHTML)
});

const $btn = $('.js-btn-jq');
$btn.on('click', (event) => {
	if ($btn.html() === "Testing!") {
		$btn.html("I am clicked!")
	}
	else {
		$btn.html("Testing!")
	}
})

const $input = $('.js-input');

$input.on('keydown', (e) => {
	console.log('key pressed!')
	console.log('event=', e)
	console.log('key pressed...', e.key)

	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let i = 0; i < vowels.length; i++) {
		if (e.key.toLowerCase() === vowels[i]) {
			e.preventDefault();	
		}
	}
});


