$( document ).ready(function() {

// $( ".switch" ).click(function() {
// 	$(this).animate({

//   $(this).toggleClass('right')
// });

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){
        // Scroll Down
        $('.navbar').slideUp(200);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').slideDown(200);
        }
    }
    lastScrollTop = st;
}

})