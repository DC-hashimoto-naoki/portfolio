$(function () {
    $('.fv-carousel').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    const fv_comments = document.querySelectorAll('.fv-comment')
    fv_comments[0].classList.add('active');

    $('.fv-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        fv_comments[nextSlide].classList.add('active');
    });
    $('.fv-carousel').on('afterChange', function (event, slick, currentSlide) {
        let prevSlide = currentSlide - 1;
        if( currentSlide == 0){ prevSlide = 2 }
        fv_comments[prevSlide].classList.remove('active');
    });
})
