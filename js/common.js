$(function() {

	$('.main-head, .testimonials').stellar();

    
    $(".toggle-menu").click(function() {
        $(this).toggleClass("on");
        $(".navbar-menu").slideToggle();
    });
    
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        items: 1,
        itemClass: "test",
		navText: "",
		autoplay: true,
        autoplayTimeout: 3000
    });

});
