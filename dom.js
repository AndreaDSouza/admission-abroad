$(document).ready(function(){
    $('.slider').slider();
    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 200
    });
    
    $(".jumper").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top-170
    }, 600);
    
});
});

