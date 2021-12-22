$(function () {

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true

    });

    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/arrow-left.svg" alt="arrow-left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/arrow-right.svg" alt="arrow-right">',
    });

})