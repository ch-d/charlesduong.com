$( document ).ready(function() {

$(".navbar").hide(); // hide the fixed navbar initially

var headerHeight = $(".name").outerHeight();  // gets height of header

$(window).scroll(function(){
	// stick after header
	if($(window).scrollTop() > (headerHeight-45)){
		$(".right-container").addClass('sticky');
		$(".navbar").slideDown(200);

		if($(window).scrollTop() > (1200)){
			$(".right-container").addClass('stay');
		}
		else {
			$(".right-container").removeClass('stay');
		}
	}

	else {
		$(".navbar").slideUp(200);
		$(".right-container").removeClass('sticky');
	}
});

})