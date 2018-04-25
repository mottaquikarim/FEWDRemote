/*
	GAME PLAN:
		* keydown event on js-list-input
			* when user hits enter key
			* read the value of the input field
			* append to js-list
			* clear the input field
*/

const $listInput = $('.js-list-input');
const $list = $('.js-list');

$listInput.on('keydown', (e) => {
	if (e.key === "Enter") {
		console.log('ENTER KEY HAS BEEN PRESSED')
		$list.append(`<li>${e.target.value}</li>`);
		e.target.value = '';
	}
});