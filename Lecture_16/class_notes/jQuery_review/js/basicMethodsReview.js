(function() { // protect the lemmings!

	// the goal of this pset is to familiarize yourself with basic
	// jquery methods (so stuff that you will use very often/is useful)

	// we will explore the properties of
	//		.css()
	//		.hasClass(), .addClass(), .removeClass()
	// 		.find() vs the $( selector, jQuery object )
	//		.offset() vs .position()
	// 		.width() and .height()
	// 		.html() vs .text()

	// ------------------------------------------------------------
	// please select all the .card HTML elements in the document
	// and save as cards
	const $cards = $('.card');

	// now, using the .css() method, please add a
	// border: 1px solid red to each item found in var cards
	// note how this applies to ALL the items in var cards
	$cards.css('border', '1px solid red')

	// we will now explore another way to easily add css to jQuery elements
	// choose three CSS rules (it can be anything you like)
	// add ALL three rules to the var cards in ONE .css() call
	// feel free to google around for this
	$cards.css({
		'backgroundColor': 'red'
	})

	// we can also use the .css() method to GET a css property of an element
	// select all the items in the document with class: profile
	var profile;
	// now, create a var called padding and store the padding CSS rule for the profile
	// var. what kind of variable is this? a number? string? boolean? array? object?
	var profilePaddingRule;


	// ------------------------------------------------------------
	// the .css() class is awesome and all - but from a performance perspective
	// it's not all the efficient. (The reason behind this is that adding inline styles
	// forces the browser to 'repaint' the browser viewport, which is very performance 
	// intensive). Instead, it is recommended that we write our styles in classes and 
	// simple add or remove them as necessary. This keeps code clean *and* efficient
	// using the var cards from earlier, add a class to each item called 'card-class-2'
	// with the .addClass() method
	$cards.addClass('card-class-2')

	// now, create a var called cardClass2 and select all the items with class: card-class-2
	// using the removeCLass method, remove the class: card-class-2
	const $cardClass2 = $('.card-class-2');
	$cardClass2.removeClass('card-class-2')

	// console.log the var cardClass2 now that you've removed the class: card-class-2
	// see anything interesting/worth noting?

	// please select all LIs that are the children of id: page-header
	var pageHeaderLIs;
	// using a for loop, loop through the items here and use the .hasClass method to find
	// the LI item that has the class: active
	// NOTE: what does the .hasClass() method return?

	// ------------------------------------------------------------
	// using the .find() method on var cards, please find elements with class: profile
	var profiles;
	// using the .find() method on var cards, please find elements with class: tags
	var tags;
	// using the .find() method on var tags, please find all anchor tags
	var anchors;
	// using the .find() method on var anchors, find all span tags
	var spans;
	// console.log out var spans - what do you see? can you think of a test we can do,
	// with an if statement, that could reliably tell us if any items with your selector was found?
	// (this is food for though - don't have to write an actual answer)

	// ------------------------------------------------------------
	// .offset() and .position() are ways to get the position of a jquery element 
	// here's a good article about this: http://stackoverflow.com/questions/3202008/jquery-difference-between-position-and-offset
	// basically, .position() is relative to the parent whereas .offset() is relative to the viewport

	// let's put this to the test - using jquery, grab the last item from var cards
	var lastItem;
	// call the .offset() and the .position() methods on var lastitem
	var lastItemPos;
	var lastItemOffs;
	// console.log both vars: lastItemPos and lastItemOffs
	// you will see that they are objects - create 4 vars that will each contain
	// one of the properties of each object
	var lastItemPosLeft, lastItemPosTop, lastItemOffsLeft, lastItemOffsTop;
	// are the property top of the .offset() and .position() the same? 
	// how about the property lefts? can you explain why or why not?
	// (again, food for though: no need to actually jot down any particular answer here)

	// ------------------------------------------------------------
	// for the var profiles, please use the .width() and .height() methods to
	// store width and height
	var profileWid, profileHeight;
	// does this valye reflect what you get if you try to find dimensions using Chrome Dev Tools?
	// if not, can you explain why not? (food for thought)
	// what kind of variable type is profileWid and profileHeight? 
	// use the .css() method to grab the height and width now
	var cssProfileWid, cssProfileHeight;
	// what type of variable is cssProfileWid and cssProfileHeight?

	// ------------------------------------------------------------
	// select the first LI item in var cards
	// using the .html() method, update the html code to
	// <strong>Hello Wrold</strong>

	// select the second LI item in var cards
	// do the same as above, but with the .text() method
	// whats the difference here?
})();

