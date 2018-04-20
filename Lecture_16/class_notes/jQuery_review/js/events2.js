// ------------------------------------------------------------
var cards = $('.card');
// the .css() class is awesome and all - but from a performance perspective
// it's not all the efficient. Instead, it is recommended that we write our styles in classes and 
// simple add or remove them as necessary. This keeps code clean *and* efficient
// using the var cards from earlier, add a class to each item called 'card-class-2'
// with the .addClass() method

// now, create a var called cardClass2 and select all the items with class: card-class-2
// using the removeCLass method, remove the class: card-class-2
var cardClass2;
// console.log the var cardClass2 now that you've removed the class: card-class-2
// see anything interesting/worth noting?

// please select all LIs that are the children of id: page-header
var pageHeaderLIs;
// using a for, loop through the items here and use the .hasClass method to find
// the LI item that has the class: active
// NOTE: what does the .hasClass() method return?
