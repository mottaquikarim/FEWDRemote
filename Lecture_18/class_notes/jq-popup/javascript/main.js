/* CURRENTLY IN: javascript/main.js */


const $modalOpen = $('.js-modal-open');

$modalOpen.on('click', e => {
	$modalOpen.modal({
		fadeDuration: 1000
	});
});