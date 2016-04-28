$( document ).ready(function() {

$(".navbar").hide(); // hide the fixed navbar initially

var headerHeight = $(".name").outerHeight();  // gets height of header
// var whoHeight = $(".card:first").outerHeight();  // gets height of header
// var lastScrollTop = 0;

$(window).scroll(function(){
	// stick after header
	if($(window).scrollTop() > (headerHeight-45)){
		$(".right-container").addClass('sticky');
		$(".navbar").slideDown(200);
		// if($(window).scrollTop() > (headerHeight)){
		//    	// hide again after scroll past who am i
		// 	if($(window).scrollTop() > (headerHeight + whoHeight)){
		// 	   $(".navbar").hide();
		// 	}
		// 	// animate back in if scrolling up
		// 	var st = $(this).scrollTop();
		// 	if (st < lastScrollTop){
		// 	   $(".navbar").show();
		// 	} 
		// 	lastScrollTop = st;
		// }
		// else {
		// }
	}

	else {
		   $(".navbar").slideUp(200);
		$(".right-container").removeClass('sticky');
	}
});

})