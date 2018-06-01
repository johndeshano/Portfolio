$(window).scroll(function(){
	updateHeader();
});

function updateHeader(){
	var margin = document.getElementById("header").scrollHeight;

	if(window.pageYOffset >= margin){
		$("body").addClass("sticky");
	}else{
		$("body").removeClass("sticky");
	}
}
updateHeader();

$(".inputText").each(function(){
	$(this).addClass('valid')
	if($(this).val() != ""){
		$(this).addClass('float')
	}else{
		$(this).removeClass('float')
	}

	$(this).on('input', function(){
		if($(this).prop('required') && $(this).val() == ""){
			$(this).addClass('invalid')
		}else{
			$(this).removeClass('invalid')
		}

		if($(this).val() != ""){
			$(this).addClass('float')
		}else{
			$(this).removeClass('float')
		}
	})
})

$('form').each(function(){
	$(this).on('reset', function(){
		$(this).find('.inputText').removeClass('float')
	})
});

$("#mobileNavToggle").click(function(event){
	event.preventDefault();

	$("body").toggleClass("showMobileNav");
});

$("nav.mobile").bind('touchmove', function(e){
	e.preventDefault();
})

$("#mobileNavToggle").bind('touchmove', function(e){
	e.preventDefault();
})

$('body,html').click(function(e){
	var menu = $("nav.mobile");
	var toggle = $("#mobileNavToggle");
	
	if (!menu.is(e.target) && !toggle.is(e.target) && menu.has(e.target).length === 0 && toggle.has(e.target).length === 0) {
		$("body").removeClass('showMobileNav');
	}
});

 $('body,html').bind("touchmove", function(e){
	var menu = $("nav.mobile");
	var toggle = $("#mobileNavToggle");
	
	if (!menu.is(e.target) && !toggle.is(e.target) && menu.has(e.target).length === 0 && toggle.has(e.target).length === 0) {
		$("body").removeClass('showMobileNav');
	}
});

$(".card").each(function(){
	if($(this).has(".footer")){
		var iHeight = 0;
		$(this).children().each(function(){
			if($(this).hasClass("footer")){
				iHeight += $(this).height();
			}
		})
		$(this).css("margin-bottom", iHeight);
	}	
})

$("#contactForm").submit(function(event){
	event.preventDefault();
	$.post("/api/site/contact/", $("#contactForm").serialize(), function(data){
		jsonData = JSON.parse(data);

		if (jsonData.Status == 0){
			$("#contactForm").trigger('reset');
		}
	})
})

$(".progress").each(function(){
	$(this).children().each(function(){
		if($(this).hasClass("bar")){
			$(this).css("width", $(this).attr("data-percent") + "%");
		}
	})
})