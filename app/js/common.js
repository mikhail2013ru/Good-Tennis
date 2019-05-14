$(function() {

		$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
		}).done(function() {
				alert("Заявка отправлена");
				setTimeout(function() {
						th.trigger("reset");
				}, 1000);
		});
		return false;
	});

	$(".popup").magnificPopup();

});

$(function () {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	
	link.on('click', function (event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
	close.on('click', function (event) {
		event.preventDefault();
		menu.toggleClass('m-menu__active');
	});
	
});

$("form").submit(function () { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function () {
		alert("Заявка отправлена");
		setTimeout(function () {
			th.hide();
			th.trigger("reset");
		}, 1000);
	});
	return false;
});

$(function () {
	$('.slider-sl').slick({
		dots: true
	});
});

$(".scrollThis").click(function (e) {
	e.preventDefault();
	var $this = $(this);
	$('html, body').animate({
		scrollTop: $($this.attr('href')).offset().top
	}, 500);
});