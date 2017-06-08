$( document ).ready(function() {

$(".navbar").hide(); // hide the fixed navbar initially

var headerHeight = $(".name").outerHeight(true);
var containerHeightOne = $(".container:first").outerHeight(true);
var rightHeight = $(".right-container").outerHeight(true);
var stickyHeight = containerHeightOne+headerHeight-rightHeight-110;

$( window ).resize(function() {
	var headerHeight = $(".name").outerHeight(true);
	var containerHeightOne = $(".container:first").outerHeight(true);
	var rightHeight = $(".right-container").outerHeight(true);
	return stickyHeight = containerHeightOne+headerHeight-rightHeight-110;
});


$(window).scroll(function(){
	// stick after header
	if($(window).scrollTop() > (headerHeight-45)){
		$(".right-container").addClass('sticky');
		$(".navbar").slideDown(200);
		
		if($(window).scrollTop() > (stickyHeight)){
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

$(".case-study-container").hover(function(){
    $(this).toggleClass('hover-effect');
});

})