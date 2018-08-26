document.addEventListener("DOMContentLoaded", function() {
  
  let search = document.getElementsByClassName('header-search');

  for ( let s of search ) {
    s.addEventListener("click", function() {
      s.classList.toggle('toggle')
    });
  };

  let animate = new Animate({        
    target: '[data-animate]',
    animatedClass: 'js-animated',
    offset: [0.5, 0.5],
    delay: 0,
    remove: true,
    scrolled: false,
    reverse: false,
    onLoad: true,
    onScroll: true,
    onResize: false,
    disableFilter: false,
    callbackOnInit: function() {},
    callbackOnInView: function(el) {},
    callbackOnAnimate: function(el) {},
  });

});

