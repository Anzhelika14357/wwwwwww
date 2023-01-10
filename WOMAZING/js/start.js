$(document).ready(function(){
    $(".oneblock__sliderleft").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 8000,
        asNavFor: ".oneblock__sliderritht"

    });
    $(".oneblock__sliderritht").slick({
        arrows:false,
        fade:true,
        autoplay:true,
        autoplaySpeed: 8000,
        asNavFor: ".oneblock__sliderleft"

    });

    let title = document.querySelector('.twoblock__dollars');
let arr = title.innerHTML.split(' ');
arr[0] = '<span>' + arr[0] + '</span>';
title.innerHTML = arr.join(' ');
$(".fourblock__slider").slick({
    arrows:true,
    dots:true,
    autoplay:true,
    autoplaySpeed: 8000,
    

});
$('.header__burger').click(function(event){
    $('.header__burger, .header__max').toggleClass('active');
    $('body').toggleClass('lock');
    
});

});

