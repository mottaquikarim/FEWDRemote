/* CURRENTLY IN: javascript/main.js */

$('.js-slideshow').slick({
	infinite: true,
  	// slidesToShow: 2,
  	// slidesToScroll: 1,
  	arrows: false,
});

$('.js-slick-next').on('click', e => {
	console.log('clicked')
	$('.js-slideshow').slick('slickPrev')
})

function getGif(searchQuery) {
	const $giphContainer = $('.js-giphy')
	const gifSearchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + searchQuery + '&api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC';
	$.get(gifSearchUrl, response => {
		console.log('response is=', response)

		const giphs = response.data;
		console.log('giphs=', giphs)
		for (let i = 0; i < giphs.length; i++) {
			console.log('giph url is=', giphs[i].images.downsized_medium.url)
			const url = giphs[i].images.downsized_medium.url;
			$giphContainer.append(`<img src="${url}">`)
		}
	});
}

const $search = $('.js-search');
$search.on('keydown', e => {
	if (e.key === "Enter") {
		getGif($search.val())
	}
})


