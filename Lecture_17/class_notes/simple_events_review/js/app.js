(function() { // protect the lemmings!
  /*
    write two event handlers: 
      one for mouseover and one for mouseenter
    on the class ".wrap"
    
    Each time one of the above events are triggered, 
    increment either `numMouseOver` or `numMouseEnter`
    
    Update `.data` class to reflect current state of both
    `numMouseOver` AND `numMouseEnter`
    
  */


  let numMouseover = 0;
  let numMouseEnter = 0;

  const render = () => {
    data.innerHTML = "<h1>mouseover: " + numMouseover + "</h1><h1>mouseenter: " + numMouseEnter + "</h1>";
  }

  const $wrap = $('.wrap');
  const data = document.querySelector('.data');
  $wrap.on('mouseenter', (e) => {
      console.log('in mouseenter')
      numMouseEnter++;
      render()
  });

  $wrap.on('mouseover', (e) => {
      console.log('in mouseover')
      numMouseover+=1
      render()
  });
  render()
  
})();
