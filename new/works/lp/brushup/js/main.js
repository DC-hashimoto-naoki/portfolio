$(function () {

    // slider

    $('.fv_slider').slick({
        autoplay: true,//自動再生する
        autoplaySpeed: 3000,//自動再生するスピード
        pauseOnHover: false,//再生時マウスオーバーで一時停止させない
        pauseOnFocus: false,//再生時フォーカスで一時停止させない
        pauseOnDotsHover: false,//マウスオーバーでドットを一時停止させない 
        arrows: false //矢印非表示
    })


    // On before slide change
    let count = 0;
    const comments = document.querySelectorAll('.fv_comment');
    $('.fv_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // logo motion
        let degree = nextSlide - currentSlide;
        if (degree == 2) { degree = -1 };
        if (degree == -2) { degree = 1 };
        count += degree;
        $('.fv_logo').css({
            'transform': `rotate(${count * 360}deg)`
        });

        comments[currentSlide].classList.remove('active');
    });

    // On after slide change
    $('.fv_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        comments[currentSlide].classList.add('active');
    });


    $('.plan_slider_content').slick({
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><img class="prevArrow_img exception" src="./images/plan/prevArrow.png" alt=""></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img class="nextArrow_img exception" src="./images/plan/nextArrow.png" alt=""></button>',
    });

    // floating banner

    var isClicked = false;

    window.addEventListener('scroll', function(){
        var diff = 200; //200px before
        var top = $('#point').offset().top - diff;
        var height = $('#point_top').height();
        var scroll = $(this.window).scrollTop();

        if(scroll > top && scroll < top + height) {
            if(isClicked){ return; }
            $('.float_banner__wrapper').addClass('active')
        } else {
            $('.float_banner__wrapper').removeClass('active')
        }

        // close btn
        $('.close_btn').on('click', function(){
            $('.float_banner__wrapper').removeClass('active');
            isClicked = true;
        })

        if(scroll > top + height) {
            $('.float__bottom').addClass('active');
        } else {
            $('.float__bottom').removeClass('active');
        }
    })


    // 一文字づつアニメーション
    // not use...
    const feature_bottom_strong = document.querySelectorAll('.feature_bottom_strong');

    function split_text_span(element){
        let text = element.textContent;
        let text_array = text.split('');
        let textBox = "";

        text_array.forEach((text, index) =>{
            textBox += `<span style="animation-delay: ${index / 10}s ;">${text}</span>`
        })
        // element.innerHTML = textBox; // 今回は見送り
    }

    feature_bottom_strong.forEach(elelment => {
        split_text_span(elelment);
    })
})