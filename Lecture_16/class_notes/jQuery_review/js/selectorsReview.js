(function() { // protect the lemmings!

	// the goal of this pset is to select different HTML elements with JQuery
	// it is meant to show you a little bit about the paradigm jQuery is built around
	// and demonstrate the power of the jQuery selector engine ( called sizzle )

	// please select the item with ID : page-header
	// save it to a variable and console.log it
	const pageHeaderEl = document.querySelector('#page-header');
	console.log('pageHeaderEl=', pageHeaderEl);

	const pageHeaderEl2 = document.querySelectorAll('#page-header');
	console.log('pageHeaderEl2=', pageHeaderEl2);

	const $pageHeaderEl = $('#page-header')
	console.log("$pageHeaderEl=", $pageHeaderEl)


	// please select the item or items with CLASS : card
	// save it to a variable and console.log it
	const cardEl = document.querySelectorAll('.card');
	console.log('cardEl=', cardEl);
	console.log('num cardEls=', cardEl.length)

	const $cardEl = $(".card");
	console.log("$cardEl=", $cardEl)
	console.log($cardEl.length)

	const thisFormDoesntExist = document.querySelectorAll('form');
	console.log(thisFormDoesntExist.length) // if length of querySelectorAll is 0
											// then that element does NOT exist on page

	const $thisFormDoesntExist = $('form')
	console.log('$thisFormDoesntExist.length=', $thisFormDoesntExist.length)
	// what kind of javascript variable is cardEl?
	var cardElType;
	// (interesting article that describes what the jQuery object actually returns:
	// http://www.learningjquery.com/2008/12/peeling-away-the-jquery-wrapper/ )

	// please select all the unorder lists in the document
	// save it as var and console log it
	const ulEls = document.querySelectorAll('ul');
	console.log('ul=', ulEls)

	const $ulEls = $('ul')
	console.log('$ulEls=', $ulEls)

	// I want to know how many anchor tags are present in the ENTIRE document
	// please construct a selector that will grab them all and console.log out
	// the number of anchor tags in this document
	const numAnchorTags = document.querySelectorAll('a').length;
	console.log("numAnchorTags=", numAnchorTags)

	// I would like to know how many ULs can be found inside the CLASS: card
	// please construct a selector that chooses them all and console.log out the number
	// of ULs that are children of the CLASS: card
	/*
	// find all the ULs inside EACH card
	const ulsInsideCard = document.querySelectorAll(".card ul");
	console.log("ulsInsideCard=", ulsInsideCard)
	var numberOfUlsChildrenOfLIs = ulsInsideCard.length / cardEl.length;
	*/
	// find all the ULs inside ONE card
	const ulsInsideCard = document.querySelector('.card').querySelectorAll('ul');
	console.log('uls=', ulsInsideCard);

	const $cards = $('.card').first();
	console.log('ulsInsideCard=', $cards.find('ul'))

	// please console.log out the text inside the FIRST list item in ID: page-header
	const textInsideFirstPageHeaderItem = pageHeaderEl.querySelector('li').innerText;
	console.log(pageHeaderEl, textInsideFirstPageHeaderItem)

	console.log(document.querySelector('.js-main-li').innerText)

	const textInside = $pageHeaderEl.find('li').first().text()
	console.log(textInside)


	// please construct a selector that returns ALL the ODD list items in
	// the HTML element with CLASS: cards
	// console.log out these results

	/*
	// the javascript way
	const oddChildrenOfCards = [];
	for (let i = 0; i < cardEl.length; i++) {
		if (i % 2 === 1) {
			oddChildrenOfCards.push(cardEl[i])
		}
	}
	console.log(cardEl, oddChildrenOfCards)
	*/

	const oddChildrenOfCards = document.querySelectorAll('.card:nth-child(odd)')
	console.log(oddChildrenOfCards)

	const $oddChildrenOfCards = $('.card:odd')
	console.log($oddChildrenOfCards)

	// REFERENCE: here's a list of jQuery selectors:
	// http://api.jquery.com/category/selectors/

})();




