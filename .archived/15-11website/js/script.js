$(document).ready(function() {
	$('.btn').click(function() {
    	alert('test');
        $('content').addClass('.backdrop');
    });

	function img_src(btn) {
		var img_src = btn.src.toString();
		var img_arr = [];
		var btn_arr = [];
		for(var i = 0; i < img_src.length; i++) {
			img_arr.push(img_src[i]);
			if (img_src[i] === "s") {
				if(img_src[i+1] === '/') {
					img_arr.push(img_src[i+1]);
					var j = i+2;
					break
				}
			}
		}
		for(j; j < img_src.length; j++) {
			btn_arr.push(img_src[j])
		}
		my_img = img_arr.join('');
		my_btn = btn_arr.join('');
		return my_img
	}

    $(".img-btn").mouseenter(function() {
    	my_img = img_src(this);
    	this.src = my_img + 'hover/' + my_btn;
    });

    $(".img-btn").mouseleave(function() {
    	this.src = my_img + my_btn;
    })

});

