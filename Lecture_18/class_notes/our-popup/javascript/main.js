/* CURRENTLY IN: javascript/main.js */

/*
	YOU ARE TO CREATE A SIMPLE POPUP

    If user clicks the 'popup' button, show popup
    If user clicks the 'x' button, hide popup
    If user clicks the 'Ok' button, hide popup

	PHASE 1:
		* w/partner: SIMPLY __COMMENT__ out all these lines of code 
		  so that you are clear as to what is happening. feel free to console.log
		  as you see fit
	
	PHASE 2:
        * If user clicks the 'popup' button, show popup
        * If user clicks the 'x' button, hide popup
        * If user clicks the 'Ok' button, hide popup

	PHASE 3:
        * create a concept of "isAck" which will not show the popup if the user
        * clicks the 'Ok' button

	PHASE 4:
        * imagine this is a 'cookie warning' popup. Display the popup as soon as page loads, if the user clicks 'ok' do not show the popup again
        * ...this means if the user reload the page, popup should not show up
        * if the user clicks 'x', hide the popup but if user reloads show the popup again
*/



/* 
    GAME PLAN
        * WHEN user clicks on button
        * FIND the .js-popup dom element
        * REMOVE class .hidden from dom element
*/

const closePopup = () => {
    $popupContainer.addClass('hidden');
}

const openPopup = () => {
    $popupContainer.removeClass('hidden');
}

// .js-popup-opener
// .js-popup
const $popupBtn = $('.js-popup-opener'); // we are selecting the button
const $popupContainer = $('.js-popup');

$popupBtn.on('click', (e) => {
    openPopup()
});

const $popupClose = $('.js-popup-close');
const $popupAck = $('.js-popup-ack');


$popupClose.on('click', e => {
    closePopup()
});

$popupAck.on('click', e => {
    closePopup()
});











