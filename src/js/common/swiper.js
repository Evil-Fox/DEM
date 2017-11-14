$(document).ready(function () {
    var baners  = new Swiper('.container-banner', {
        pagination: {
            el: '.pagination-banner',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 6000,
        },
    });
    var about_us  = new Swiper('.container-about', {
         pagination: {
             el: '.pagination-about',
             type: 'bullets',
             clickable: true,
         },
         autoplay: {
             delay: 6000,
         },
    });
});
