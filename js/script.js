$( document ).ready(function() {

$(".navbar").hide(); // hide the fixed navbar initially

var headerHeight = $(".name").outerHeight();  // gets height of header

$(window).scroll(function(){
	// stick after header
	if($(window).scrollTop() > (headerHeight-45)){
		$(".right-container").addClass('sticky');
		$(".navbar").slideDown(200);

		
	}

	else {
		$(".navbar").slideUp(200);
		$(".right-container").removeClass('sticky');
	}
});

})