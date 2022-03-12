// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta){
        return;}
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.qs').removeClass('menu-wrap');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.qs').addClass('menu-wrap');
			$('.autonomy').addClass('menu-show').removeClass('menu-container');
			$('.minusshow').show();
			$('.minusimg').hide();
        }

    }

    lastScrollTop = st;
	if($(window).scrollTop() === 0){
		$('.qs').addClass('menu-wrap');
		$('.autonomy').addClass('menu-container').removeClass('menu-show');
		$('.minusshow').hide();
		$('.minusimg').show();

	}


}
