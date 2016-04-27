$( document ).ready(function() {

$(".navbar").hide(); // hide the fixed navbar initially

var headerHeight = $(".name").outerHeight();  // gets height of header
var whoHeight = $(".card:first").outerHeight();  // gets height of header
var lastScrollTop = 0;

$(window).scroll(function(){
	// show after scroll past header
	if($(window).scrollTop() > (headerHeight)){
	   $(".navbar").show();
	   $(".right").addClass('sticky');
	   
	   	// hide again after scroll past who am i
		if($(window).scrollTop() > (headerHeight + whoHeight)){
		   $(".navbar").hide();
		   alert(headerHeight + whoHeight)
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
		$(".right").removeClass('sticky');
	}

});
})