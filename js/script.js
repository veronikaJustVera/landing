window.onload = function() {
    // FIXED HEADER
    var header = document.querySelector('#header');
    var header_plug = document.querySelector('#header-plug');
    var initialPosition = header.offsetTop;
    addEventListener('scroll', function (event) {
        if (window.scrollY > initialPosition) {
            header.classList.add('fixed');
            header_plug.style.display="block";
        } else if (header.classList.contains('fixed')) {
            header.classList.remove('fixed');
            header_plug.style.display="none";
        }
    });

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
    // DONUTS
    generate_donuts();
}
function generate_donuts() {
    var donutField = document.querySelector("#donuts");

    var donutMinSize = 10;
    var donutMaxSize = 60;

    var screenWidth  = $(document).width()  - 60;    
    var screenHeight = $(document).height() - 60;  
	var count = 6;
	let donutLoop = 1;
  
	while (donutLoop < count) {
		var size = (Math.floor( (Math.random() * (donutMaxSize - donutMinSize)) )) + (donutMinSize + 1);
    
        var left = Math.floor(Math.random() * screenWidth);
        var top = Math.floor(Math.random() * screenHeight);
        var blur = Math.floor(Math.random() * 5);

		donutField.innerHTML +=
			'<div class="donut" ' +
            'style="width:'+size+'px;'+'height:' + size + 'px;top:'+top+'px;left:'+left+'px;filter:blur('+blur+'px);"></div>';

		donutLoop++;
    }
}
