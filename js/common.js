$(function() {
    
    $("body").niceScroll({
        horizrailenabled: false
    });
    
    $(".btn-bottom").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    $(".services-item").equalHeights();
    
    $(".works").mixItUp({
        selectors: {
            target:'.mix',
            filter:'.tab'
        }, 
        animation: {
            enable: true,
            effects: 'scale fade',
            duration: 700
        }
    });
    
    $(".portfolio-item").magnificPopup({
        type : 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


