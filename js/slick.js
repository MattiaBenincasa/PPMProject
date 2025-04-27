$(document).ready(function(){

    let $slider = $('.video-slider');

    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});