window.onload = function() {
    // SLIDER
    if (window.matchMedia("(max-width: 1078px)").matches) {
        $('.benefit-block').slick(
        {
            infinite: false,
            dots: true,
            variableWidth: true,
            speed: 300,
            slidesToShow: 1,
            customPaging: function(slider, i) {
              return '<span class="custom-dot"></span>';
            },
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="slickArrow slickArrow--prev"></span>',
            nextArrow: '<span class="slickArrow slickArrow--next"></span>',
          });
    }
};
// scroll top
(function() {
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('top-button-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('top-button-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.top-button');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();