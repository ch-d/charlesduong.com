$( document ).ready(function() {

$(".navbar").hide(); // hide the fixed navbar initially

var headerHeight = $(".name").outerHeight();  // gets height of header
var whoHeight = $(".card:first").outerHeight();  // gets height of header
var lastScrollTop = 0;

$(window).scroll(function(){
	// stick after header
	if($(window).scrollTop() > (headerHeight-60)){
		$(".right").addClass('sticky');

		// show after scroll past header
		if($(window).scrollTop() > (headerHeight)){
		   $(".navbar").show();

		   	// hide again after scroll past who am i
			if($(window).scrollTop() > (headerHeight + whoHeight)){
			   $(".navbar").hide();
			}
			// animate back in if scrolling up
			var st = $(this).scrollTop();
			if (st < lastScrollTop){
			   $(".navbar").show();
			} 
			lastScrollTop = st;
		}
		else {
			$(".navbar").hide();
		}
	}

	else {
		$(".right").removeClass('sticky');
	}
});

})